#!/usr/bin/env python3
"""
Sincronizador do Catálogo Oficial de Ícones (Material Symbols & Icons)
para o WETH Icon Studio.

Obtém metadados diretamente da API oficial do Google Fonts e do repositório
de fontes variáveis do Material Design, catalogando todos os ícones disponíveis,
suas categorias e tags de busca em inglês e português.
"""

import json
import re
import unicodedata
import urllib.request
from collections import Counter
from pathlib import Path

# URLs oficiais do Google
METADATA_URL = "https://fonts.google.com/metadata/icons?key=material_symbols&incomplete=true"
CODEPOINTS_URL = "https://raw.githubusercontent.com/google/material-design-icons/master/variablefont/MaterialSymbolsOutlined%5BFILL%2CGRAD%2Copsz%2Cwght%5D.codepoints"

# Categorias oficiais em português (palavra única, padrão WETH)
CATEGORIES = {
    "actions": "Ações",
    "activities": "Atividades",
    "android": "Android",
    "av": "Mídia",
    "business": "Negócios",
    "communication": "Comunicação",
    "hardware": "Hardware",
    "home": "Ambientes",
    "household": "Doméstico",
    "image": "Imagens",
    "maps": "Mapas",
    "privacy": "Segurança",
    "social": "Social",
    "text": "Edição",
    "transit": "Transporte",
    "travel": "Viagem",
    "ui": "Interface"
}

# Mapeamento de categorias brutas (Google Fonts / legadas) para o padrão WETH
RAW_CATEGORY_MAP = {
    "Actions": "actions",
    "Activities": "activities",
    "Android": "android",
    "Audio&Video": "av",
    "Business": "business",
    "Communicate": "communication",
    "Hardware": "hardware",
    "Home": "home",
    "Household": "household",
    "Images": "image",
    "Maps": "maps",
    "Privacy": "privacy",
    "Social": "social",
    "Text": "text",
    "Transit": "transit",
    "Travel": "travel",
    "UI actions": "ui",
    # Categorias legadas de Material Icons
    "action": "actions",
    "alert": "ui",
    "av": "av",
    "communication": "communication",
    "content": "text",
    "device": "hardware",
    "editor": "text",
    "file": "text",
    "hardware": "hardware",
    "home": "home",
    "image": "image",
    "maps": "maps",
    "navigation": "maps",
    "notification": "ui",
    "places": "maps",
    "search": "ui",
    "social": "social",
    "toggle": "ui"
}

# Sinônimos e termos frequentes em português para busca intuitiva
PT_SYNONYMS = {
    "database": ["banco", "dados", "bd", "sql"],
    "folder": ["pasta", "diretorio"],
    "delete": ["lixeira", "excluir", "remover", "apagar"],
    "add": ["adicionar", "novo", "criar", "mais"],
    "edit": ["editar", "alterar", "lapis", "modificar"],
    "settings": ["configuracoes", "ajustes", "engrenagem", "opcoes"],
    "person": ["usuario", "perfil", "pessoa", "cliente", "conta"],
    "home": ["inicio", "casa", "principal"],
    "search": ["busca", "pesquisa", "lupa", "procurar"],
    "shopping_cart": ["carrinho", "compras", "loja", "venda"],
    "mail": ["email", "mensagem", "correio", "carta"],
    "chat": ["conversa", "bate-papo", "dialogo", "mensagem"],
    "lock": ["cadeado", "senha", "trancar", "bloquear", "seguranca"],
    "key": ["chave", "acesso", "seguranca"],
    "star": ["estrela", "favorito", "destaque"],
    "heart": ["coracao", "curtir", "favorito", "amor"],
    "check": ["confirmar", "sucesso", "marcar", "ok", "correto"],
    "close": ["fechar", "cancelar", "sair", "bloquear"],
    "help": ["ajuda", "duvida", "suporte", "faq"],
    "notifications": ["sino", "notificacao", "alerta", "aviso"],
    "calendar_today": ["calendario", "agenda", "data"],
    "schedule": ["relogio", "hora", "tempo", "horario"],
    "download": ["baixar", "descarregar", "salvar"],
    "upload": ["enviar", "subir", "carregar"],
    "share": ["compartilhar", "dividir"],
    "print": ["imprimir", "impressora"],
    "image": ["foto", "imagem", "figura"],
    "videocam": ["video", "camera", "gravacao", "filme"],
    "music_note": ["musica", "som", "audio"],
    "shield": ["escudo", "protecao", "seguranca"],
    "warning": ["aviso", "alerta", "atencao", "perigo"],
    "info": ["informacao", "detalhes", "ajuda"],
    "filter_alt": ["filtro", "filtrar"],
    "refresh": ["atualizar", "recarregar", "sincronizar"],
    "flag": ["bandeira", "marcador", "sinal"],
    "sell": ["etiqueta", "tag", "preco", "venda"],
    "location_on": ["mapa", "localizacao", "local", "endereco", "pino", "onde"],
    "directions_car": ["carro", "veiculo", "transporte", "auto"],
    "cloud": ["nuvem", "armazenamento", "remoto"],
    "wifi": ["rede", "conexao", "sinal", "internet"],
    "battery_full": ["bateria", "energia", "carga"],
    "call": ["telefone", "celular", "ligar", "chamada"],
    "code": ["codigo", "programacao", "desenvolvimento", "dev"],
    "bug_report": ["erro", "defeito", "problema", "bug"],
    "bar_chart": ["grafico", "relatorio", "estatistica", "analise"],
    "account_balance_wallet": ["carteira", "dinheiro", "saldo"],
    "credit_card": ["cartao", "credito", "debito", "pagamento"],
    "contract": ["contrato", "acordo", "documento", "termo"],
    "receipt_long": ["fatura", "nota", "recibo", "comprovante"],
    "calculate": ["calculadora", "calculo", "conta"],
    "table_chart": ["tabela", "planilha", "dados"],
    "build": ["ferramenta", "manutencao", "conserto"],
    "history": ["historico", "passado", "registro"],
    "logout": ["sair", "desconectar", "encerrar"],
    "login": ["entrar", "conectar", "autenticar"]
}


def remove_accents(input_str: str) -> str:
    """Remove acentuações mantendo texto limpo."""
    nfkd_form = unicodedata.normalize("NFKD", input_str)
    return "".join([c for c in nfkd_form if not unicodedata.combining(c)])


def clean_tags(name: str, raw_tags: list) -> str:
    """Compila e normaliza tags para pesquisa rápida."""
    words = set()

    # Partes do próprio nome do ícone
    clean_name = remove_accents(name.lower())
    words.add(clean_name)
    for part in clean_name.split("_"):
        if part:
            words.add(part)

    # Processa tags oficiais
    for t in raw_tags:
        clean_t = remove_accents(str(t).lower())
        for sub in re.split(r"[\s\-_,./]+", clean_t):
            sub = sub.strip()
            if sub and len(sub) > 1:
                words.add(sub)

    # Adiciona sinônimos em português se houver correspondência
    for ref_name, synonyms in PT_SYNONYMS.items():
        if ref_name == name or ref_name in name:
            for s in synonyms:
                words.add(remove_accents(s.lower()))

    return " ".join(sorted(words))


def fetch_url(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    with urllib.request.urlopen(req) as resp:
        return resp.read().decode("utf-8")


def main():
    workspace_root = Path(__file__).resolve().parent.parent
    target_catalog_file = workspace_root / "js" / "material_icons_catalog.js"

    print("============================================================")
    print(" Sincronizador de Ícones WETH — Google Fonts Material Symbols")
    print("============================================================")

    print("1/3 Baixando metadados completos do Google Fonts...")
    raw_meta = fetch_url(METADATA_URL)
    json_start = raw_meta.find("{")
    meta_json = json.loads(raw_meta[json_start:])
    all_meta_icons = meta_json.get("icons", [])
    print(f"    -> {len(all_meta_icons)} registros recebidos da API do Google Fonts.")

    print("2/3 Baixando mapa de codepoints oficial da fonte variável...")
    raw_codes = fetch_url(CODEPOINTS_URL)
    code_icons = [line.split()[0] for line in raw_codes.splitlines() if line.strip()]
    print(f"    -> {len(code_icons)} glifos na fonte MaterialSymbolsOutlined.")

    meta_symbols = {}
    meta_legacy = {}
    for i in all_meta_icons:
        name = i["name"]
        if "Material Symbols Outlined" not in i.get("unsupported_families", []):
            meta_symbols[name] = i
        else:
            meta_legacy[name] = i

    processed = {}
    cat_distribution = Counter()

    # 1. Ícones principais do Material Symbols (metadados oficiais)
    for name, item in meta_symbols.items():
        raw_cat = item.get("categories", ["UI actions"])[0]
        cat_code = RAW_CATEGORY_MAP.get(raw_cat, "ui")
        tags = clean_tags(name, item.get("tags", []))
        processed[name] = {
            "n": name,
            "c": cat_code,
            "t": tags
        }
        cat_distribution[cat_code] += 1

    # 2. Ícones presentes no conjunto de codepoints (garante auto_awesome, access_time, etc)
    for name in code_icons:
        if name not in processed:
            if name in meta_legacy:
                item = meta_legacy[name]
                raw_cat = item.get("categories", ["ui"])[0]
                cat_code = RAW_CATEGORY_MAP.get(raw_cat, "ui")
                tags = clean_tags(name, item.get("tags", []))
            else:
                cat_code = "ui"
                tags = clean_tags(name, [])
            processed[name] = {
                "n": name,
                "c": cat_code,
                "t": tags
            }
            cat_distribution[cat_code] += 1

    sorted_icons = [processed[k] for k in sorted(processed.keys())]

    catalog_data = {
        "categories": CATEGORIES,
        "icons": sorted_icons
    }

    print("3/3 Gravando catálogo em js/material_icons_catalog.js...")
    js_content = "const MATERIAL_ICONS_CATALOG = " + json.dumps(catalog_data, ensure_ascii=False, separators=(",", ":")) + ";\n"
    target_catalog_file.write_text(js_content, encoding="utf-8")

    file_size_kb = target_catalog_file.stat().st_size / 1024
    print("------------------------------------------------------------")
    print(f"Sucesso! Catálogo atualizado com {len(sorted_icons)} ícones!")
    print(f"Tamanho do arquivo: {file_size_kb:.1f} KB")
    print("Distribuição por categoria:")
    for cat_code, count in cat_distribution.most_common():
        cat_label = CATEGORIES.get(cat_code, cat_code)
        print(f"  - {cat_label.ljust(12)} ({cat_code}): {count} ícones")
    print("============================================================")


if __name__ == "__main__":
    main()

