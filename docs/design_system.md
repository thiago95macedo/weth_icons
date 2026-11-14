# WETH — Especificação e Design System de Ícones de Aplicativos

> **Status:** Padrão Consolidado (Modo High)  
> **Escopo:** Identidade Visual dos Aplicativos do WETH (base Odoo 20)  
> **Artefato de Referência:** [`assets/reference/icon.svg`](../assets/reference/icon.svg) (50×50) e [`assets/reference/icon.png`](../assets/reference/icon.png) (128×128)

---

## 1. Princípio Fundamental: Identidade Monocromática Unificada

O ecossistema WETH adota uma **identidade visual estritamente monocromática e consistente** para todos os seus aplicativos:

* **Cor Padrão Única:** Todos os ícones de aplicativos utilizam **Slate Blue Suporte (`#64748B`)** como cor padrão da cartela. Não são permitidas variações desordenadas de cores entre aplicativos.
* **Justificativa Ergonômica:** O fundo do menu principal (*App Switcher*) do sistema é azul institucional profundo (`#031B3E` / `#05285B`). A cartela em Slate Blue Suporte (`#64748B`) sobrepõe-se com contraste nítido, mantendo uma estética corporativa sóbria, elegante e sem poluição visual.
* **Contorno de Luminosidade (Rim Light):** Borda perimétrica translúcida branca (`stroke="#FFFFFF"`, opacidade de 22%, espessura 1px) ao redor da cartela, criando separação física e luminosidade sobre o fundo azul escuro do menu.
* **Pictograma Central:** Branco Puro (`#FFFFFF`), centrado e dimensionado com precisão métrica.

---

## 2. Dimensões Oficiais e Resoluções Padronizadas

| Arquivo | Formato | Dimensões Oficiais | ViewBox / Resolução | Finalidade no WETH / Odoo 20 |
| :--- | :--- | :--- | :--- | :--- |
| **`icon.svg`** | SVG Vetorial | `50px × 50px` | `viewBox="0 0 50 50"` | **Padrão Primário:** Renderizado nativamente pelo App Switcher e menus do Odoo 20. |
| **`icon.png`** | PNG Rasterizado | **`128px × 128px`** | 128×128 nativo | **Padrão Raster Oficial:** Fallback de compatibilidade para clientes móveis, e-mails e telas legadas. |
| **`icon_256.png`** | PNG HiDPI | `256px × 256px` | 256×256 nativo | Material institucional, documentações e portais web. |
| **`icon_512.png`** | PNG Ultra | `512px × 512px` | 512×512 nativo | Banners de apresentação e marketplaces de aplicativos. |

---

## 3. Anatomia Geométrica do Ícone

O ícone padronizado é construído sobre um grid métrico de **50 × 50 unidades**:

```
0       4            12                   38            46      50
┌───────┬────────────┬────────────────────┬────────────┬───────┐ 0
│       │            │                    │            │       │
├───────┼────────────┼────────────────────┼────────────┼───────┤ 4 (Topo da Cartela)
│       │  (Raio 8)  │                    │  (Raio 8)  │       │
│       │            │  MARGEM SUP. 12px  │            │       │
├───────┼────────────┼────────────────────┼────────────┼───────┤ 12
│       │            │                    │            │       │
│       │  MARGEM    │    ÁREA ÚTIL       │  MARGEM    │       │
│       │  ESQ. 12px │   DO SÍMBOLO       │  DIR. 12px │       │
│       │            │    26px × 26px     │            │       │
│       │            │  Centro: (25, 25)  │            │       │
├───────┼────────────┼────────────────────┼────────────┼───────┤ 38
│       │            │  MARGEM INF. 12px  │            │       │
│       │  (Raio 8)  │                    │  (Raio 8)  │       │
├───────┼────────────┼────────────────────┼────────────┼───────┤ 46 (Base da Cartela)
│       │            │                    │            │       │
└───────┴────────────┴────────────────────┴────────────┴───────┘ 50
```

### 3.1. Especificações Técnicas das Camadas:
1. **Cartela Base:**
   * Path: `M12 4h26a8 8 0 0 1 8 8v26a8 8 0 0 1-8 8H12a8 8 0 0 1-8-8V12a8 8 0 0 1 8-8Z`
   * Bounding box: de `(4, 4)` a `(46, 46)` (largura 42px, altura 42px).
   * Raio contínuo dos 4 cantos: `8px`.
   * Cor de Preenchimento: **`#64748B`** (Slate Blue Suporte).
2. **Contorno de Luminosidade (Rim Light):**
   * `stroke="#FFFFFF"`
   * `stroke-width="1"`
   * `stroke-opacity="0.22"` (22% de opacidade)
   * `stroke-linejoin="round"`
3. **Área Útil do Pictograma (Tabler Icons — Outline):**
   * Biblioteca Oficial: **Tabler Icons — Outline** (5.233 pictogramas vetoriais locais sob Licença MIT).
   * Caixa delimitadora padrão: **26px × 26px** (52% do canvas total, centralizado em `(25, 25)`).
   * Margens de respiro simétricas: **12px** em todos os 4 lados (24% do canvas).
   * Cor: Branco Puro (`#FFFFFF`).
   * Configuração de Traço: `fill="none"`, `stroke="#FFFFFF"`, `stroke-width="2"`, `stroke-linecap="round"`, `stroke-linejoin="round"`.
   * Formato: Caminhos vetoriais nativos locais (`<path d="..." />`), dispensando fontes web e requisições externas no SVG.

---

## 4. Paleta de Cores e Relações de Contraste

### 4.1. Cores Envolvidas no Menu Principal
* **Fundo do Main Menu (App Switcher):** `#031B3E` (Azul Profundo Enterprise) ou `#05285B` (Azul WETH Oficial).
* **Cartela Padronizada de Todos os Ícones:** `#64748B` (Slate Blue Suporte).
* **Luz de Borda:** `#FFFFFF` a 22% de opacidade.
* **Glifo:** `#FFFFFF` a 100% de opacidade.

### 4.2. Eficácia Visual da Combinação
* A cartela `#64748B` possui luminância média (~36%), destacando-se de forma suave e inequívoca sobre o fundo azul escuro (~2% de luminância).
* O glifo branco puro `#FFFFFF` possui luminância máxima (100%), gerando taxa de contraste superior a **5.5:1** contra o fundo Slate Blue, excedendo com folga os padrões de acessibilidade WCAG AA e AAA para elementos gráficos.

---

## 5. Diretrizes para Novos Aplicativos WETH

1. **Mesma Cor, Símbolos Únicos:** Todos os aplicativos devem adotar a cor `#64748B`. A distinção entre aplicativos é feita exclusivamente pelo pictograma representativo da sua finalidade essencial na biblioteca Tabler Icons Outline (ex.: Faturamento = `receipt`, Vendas = `shopping-cart`, Estoque = `box`, RH = `users-group`, TI = `server`, Frota = `truck`).
2. **Proibição de Ícones Multicoloridos:** Não utilizar paletas de arco-íris ou ícones com cartelas de cores divergentes.
3. **Sem Emojis ou Sombras Pesadas:** Manter a cartela Flat com o Rim Light e glifo branco outline de traço contínuo.

---

## 6. Estrutura de Arquivos nos Módulos

Todo módulo do WETH deve conter os dois artefatos estáticos na pasta de descrição:

```text
weth_modulo_customizado/
├── __init__.py
├── __manifest__.py
├── models/
├── views/
└── static/
    └── description/
        ├── icon.svg   <-- Vetorial 50×50 nativo com viewBox="0 0 50 50"
        └── icon.png   <-- Rasterizado oficial em 128×128 pixels nativos
```
