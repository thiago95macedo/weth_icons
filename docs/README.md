# Documentação do WETH Icon Studio

Bem-vindo à documentação oficial do **WETH Icon Studio**, a ferramenta padronizada de criação e exportação de ícones para o ecossistema de módulos e aplicativos da plataforma **WETH** (versões 17, 18 e 20).

A ferramenta utiliza integralmente e com exclusividade a biblioteca **Tabler Icons — Outline** (5.233 ícones vetoriais locais), combinada com a cartela Flat WETH (viewBox 50×50, cantos suaves raio 8px, contorno perimétrico de luminosidade *Rim Light* 22% e cor padrão Slate Blue `#64748B`).

---

## 📚 Estrutura da Documentação

* [**1. Diretrizes de Design System WETH**](design_system.md):
  * Anatomia geométrica do padrão unificado (viewBox 50x50, raio 8px, margens de respiro 12px, área útil centralizada 26x26).
  * Biblioteca oficial de pictogramas: **Tabler Icons Outline** (traço 2px, cantos arredondados, sem preenchimento).
  * Paleta de cores oficial: Identidade Institucional, 12 Cores Categóricas, Cores Semânticas e Escala Neutra.
  * Estrutura de arquivos nos módulos WETH (`static/description/icon.svg` e `icon.png` 128×128).

* [**2. Histórico de Mudanças e Revisões**](changelog.md):
  * Registro completo da substituição do Google Material Symbols pelo Tabler Icons Outline (v3.0.0).
  * Mecanismo de busca local por nome, categoria, tags e sinônimos em português.
  * Detalhes da vetorização nativa sem dependências externas ou CDN.

---

## 🚀 Como Executar a Ferramenta

A ferramenta funciona de forma 100% estática no navegador (sem necessidade de compilação ou build):

```bash
# Opção 1: Abrir diretamente no navegador padrão
xdg-open index.html

# Opção 2: Servidor HTTP local (recomendado para desenvolvimento)
python3 -m http.server 8080
```
Acesse em: `http://localhost:8080`
