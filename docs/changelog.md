# Histórico de Mudanças e Revisões (Changelog)

## Versão 3.1.0 (13/11/2026) — Reorganização Integral e Categorização 100% de Todos os Ícones

### 1. Resumo da Atualização

Estruturação e reorganização taxonômica completa dos **5.233 ícones** da biblioteca Tabler Icons Outline, garantindo que nenhum ícone fique sem categoria ou alocado em agrupamentos genéricos:

1. **Taxonomia Hierárquica em Dois Níveis (100% de Cobertura):**
   * **8 Macro-Grupos Corporativos WETH:**
     * **TI & Sistemas (1.359 ícones):** Infraestrutura, hardware, servidores, bancos de dados, desenvolvimento, elétrico e lógica.
     * **Design & Mídia (1.137 ícones):** Ferramentas gráficas, áudio/vídeo, fotografia, formas geométricas e plataformas.
     * **Setas & Símbolos (785 ícones):** Navegação direcional, tipografia, numerais e sinalização universal.
     * **ERP & Documentos (567 ícones):** Gestão empresarial, relatórios, faturas, métricas, crachás e extensões.
     * **Operações Setoriais & Serviços (489 ícones):** Saúde, alimentação, esportes, clima, vestuário, entretenimento e agro.
     * **Logística & Locais (455 ícones):** Veículos, transporte, edifícios, sedes, mapeamento e rastreamento.
     * **Finanças & Vendas (231 ícones):** Moedas internacionais, câmbio, pagamentos e e-commerce.
     * **Comunicação & CRM (210 ícones):** Atendimento, chat, perfis de usuários, reações e gestos.
     * **Total Categorizado:** 5.233 ícones (0 ícones sem categoria).

2. **Seletor Especializado com as 41 Subcategorias Tabler Oficiais:**
   * Dropdown reativo contendo todas as 41 subcategorias em português com contagens exatas (ex.: *Documentos & Relatórios [211]*, *E-Commerce & Vendas [155]*, *Dispositivos & Hardware [363]*, *Veículos & Transporte [90]*, *Bancos de Dados & Storage [42]*, etc.).
   * Integração bidirecional com os chips de macro-categorias.

3. **Rotulagem Visual na Grade de Ícones:**
   * Cada card da grade agora exibe o pictograma, o nome do arquivo original e um subtítulo descritivo com a categoria em português (`.icon-choice-cat`).

---

## Versão 3.0.0 (13/11/2026) — Substituição Integral por Tabler Icons Outline (5.233 Ícones Nativos)

### 1. Resumo da Atualização

Substituição completa e definitiva da biblioteca Google Material Symbols pela biblioteca open source **Tabler Icons — Outline** (licença MIT), tornando o WETH Icon Studio 100% autônomo, local e sem dependências externas de CDN:

1. **Catálogo Completo Tabler Icons Outline (5.233 Ícones Locais):**
   * Incorporação de todos os 5.233 arquivos SVGs individuais oficiais em `icons/outline/*.svg`.
   * Preservação da licença oficial MIT de Paweł Kuna em `icons/LICENSE`.
   * Geração de catálogo local estruturado `js/tabler_catalog.js` (1.61 MB) contendo nomes, categorias, tags e paths vetoriais puros para busca e renderização instantânea sem I/O síncrono bloqueante.

2. **Mecanismo de Pesquisa Inteligente & Filtros:**
   * Pesquisa em tempo real insensível a maiúsculas/minúsculas cobrindo nome do ícone, categoria oficial e tags/palavras-chave.
   * Dicionário local de sinônimos em português integrado (`estoque` -> `box`, `fatura` -> `receipt`, `entrega` -> `truck`, `usuario` -> `user`, etc.).
   * Filtros temáticos WETH: **ERP Core (338)**, **Financeiro & Fiscal (231)**, **Estoque & Logística (230)**, **Vendas & Clientes (447)**, **TI, Infra & Segurança (1.282)** e **Todos (5.233)**.
   * Renderização em lotes (*chunked pagination*) para navegação fluida a 60 FPS.

3. **Renderização Geométrica WETH & Controle de Traço:**
   * Alinhamento estrito ao grid métrico WETH de 50×50 (`viewBox="0 0 50 50"`), área útil de 26×26 centralizada em (25, 25).
   * Controle de espessura de traço (*Stroke Width*) calibrável entre 1px e 3.5px (padrão oficial 2px).
   * Controles de escala (18px a 34px) e ajuste vertical ótico Y (-4px a +4px).
   * Cartela Flat Slate Blue Suporte (`#64748B`) com contorno de luminosidade (*Rim Light*) a 22% de opacidade.

4. **Exportação & Fidelidade:**
   * Exportação vetorial pura `icon.svg` (50×50).
   * Exportação rasterizada HiDPI `icon.png` (128×128 padrão oficial), `icon_256.png` e `icon_512.png`.
   * Cópia com 1 clique de XML SVG e Data URI.
   * Atualização de todos os artefatos de referência em `assets/reference/`.

5. **Limpeza e Independência Absoluta de CDN:**
   * Removidas todas as chamadas a `fonts.googleapis.com` e folhas de estilo do Google Material Symbols.
   * Ícones da própria interface do estúdio migrados para SVGs nativos Tabler Outline.
   * Funcionamento 100% garantido tanto via servidor HTTP local quanto via protocolo `file://`.

---

## Versão 2.5.0 (13/11/2026) — Padronização Monocromática Slate Blue & icon.png 128×128

### 1. Resumo da Atualização

Ajustes canônicos implementados conforme orientação direta do usuário:
1. **Resolução Oficial do `icon.png` (128×128):**
   * Esclarecida a diferenciação de formatos: **`icon.svg` é nativamente 50×50** (`viewBox="0 0 50 50"`), enquanto o **`icon.png` padrão oficial do sistema passa a ser 128×128 pixels**.
   * Todos os botões e funções de exportação PNG foram atualizados para entregar `128×128` por padrão.
2. **Padrão Monocromático Unificado (Slate Blue Suporte `#64748B`):**
   * Definido que **todos os ícones de aplicativos utilizam a mesma cor única da cartela: Slate Blue Suporte (`#64748B`)**.
   * Eliminada a fragmentação multicolorida: o reconhecimento dos aplicativos é dado unicamente pelo pictograma branco vazado, conferindo coesão absoluta e estética enterprise de alto nível.
   * **Contraste Perfeito com o Menu Azul:** Como o fundo do menu principal (*App Switcher*) do WETH é azul institucional profundo (`#031B3E` / `#05285B`), a cartela em Slate Blue `#64748B` com o contorno perimétrico branco translúcido (*Rim Light*) projeta-se com sobreposição nítida, elegância e sem conflito de matizes.
3. **Atualização dos Artefatos de Referência:**
   * [`assets/reference/icon.svg`](../assets/reference/icon.svg) atualizado com cartela `#64748B` (50×50).
   * [`assets/reference/icon.png`](../assets/reference/icon.png) regenerado na resolução oficial de **128×128 pixels**.

---

## Versão 2.4.0 (13/11/2026) — Modo High: Consolidação e Validação do Ícone de Referência WETH
* Refinamento das proporções métricas (área útil de 52%, raio de 8px e margem de 24%).
* Publicação dos artefatos de referência vetoriais e HiDPI.

---

## Versão 2.3.0 (13/11/2026) — Expansão da Biblioteca (165 Ícones)
* Incorporação de 165 caminhos vetoriais puros organizados em 9 categorias empresariais.

---

## Versão 2.2.0 (13/11/2026) — Unificação do Padrão Flat com Rim Light
* Adoção da cartela Flat com contorno perimétrico branco translúcido.
