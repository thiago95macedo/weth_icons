/**
 * WETH Icon Studio — Gerador Oficial de Ícones WETH
 * Biblioteca de Pictogramas: Tabler Icons — Outline (SVGs Oficiais)
 * Padrão Oficial: Cartela Flat WETH (viewBox 50x50, raio 8px),
 * Contorno Branco Translúcido de Luminosidade (Rim Light 22%) e Glifos Vetoriais Tabler Outline.
 * Licença: Tabler Icons (MIT License - Paweł Kuna) / WETH Tecnologia.
 */

class WETH_ICON {
    // 1. Identidade Institucional (Brand & UI Core)
    static BRAND_PALETTES = {
        weth_official: {
            id: 'weth_official',
            name: 'Azul WETH Oficial',
            tag: '$o-brand-primary',
            primary: '#05285b',
            text: '#FFFFFF'
        },
        weth_action: {
            id: 'weth_action',
            name: 'Azul de Ação',
            tag: '$o-action',
            primary: '#1b4f9b',
            text: '#FFFFFF'
        },
        weth_enterprise: {
            id: 'weth_enterprise',
            name: 'Azul Profundo Enterprise',
            tag: '$o-enterprise-color',
            primary: '#031b3e',
            text: '#FFFFFF'
        },
        weth_link: {
            id: 'weth_link',
            name: 'Azul Links',
            tag: '$o-main-link-color',
            primary: '#13448a',
            text: '#FFFFFF'
        },
        weth_secondary: {
            id: 'weth_secondary',
            name: 'Slate Blue Suporte',
            tag: '$o-brand-secondary',
            primary: '#64748b',
            text: '#FFFFFF'
        },
        weth_light: {
            id: 'weth_light',
            name: 'Cinza Off-White',
            tag: '$o-brand-lightsecondary',
            primary: '#f8f9fa',
            text: '#05285b'
        }
    };

    // 2. Cores Categóricas Oficiais WETH (12 cores calibradas)
    static CATEGORICAL_PALETTES = {
        cat_1_gray: { id: 'cat_1_gray', num: 1, name: 'Cinza Neutro', primary: '#a2a2a2', subtle: '#d7d7d7', text_emphasis: '#3d3d3d', text: '#FFFFFF' },
        cat_2_red: { id: 'cat_2_red', num: 2, name: 'Vermelho', primary: '#ee2d2d', subtle: '#fedbd5', text_emphasis: '#6b1f15', text: '#FFFFFF' },
        cat_3_orange: { id: 'cat_3_orange', num: 3, name: 'Laranja', primary: '#dc8534', subtle: '#fedec5', text_emphasis: '#5c3003', text: '#FFFFFF' },
        cat_4_yellow: { id: 'cat_4_yellow', num: 4, name: 'Amarelo Ouro', primary: '#e8bb1d', subtle: '#f4dc9d', text_emphasis: '#4c3b04', text: '#212529' },
        cat_5_lightblue: { id: 'cat_5_lightblue', num: 5, name: 'Azul Claro', primary: '#5794dd', subtle: '#c2ecfe', text_emphasis: '#044457', text: '#FFFFFF' },
        cat_6_purple: { id: 'cat_6_purple', num: 6, name: 'Roxo / Magenta', primary: '#9f628f', subtle: '#ebcaf6', text_emphasis: '#542662', text: '#FFFFFF' },
        cat_7_coral: { id: 'cat_7_coral', num: 7, name: 'Coral / Terracota', primary: '#db8865', subtle: '#f2e1d4', text_emphasis: '#4d3827', text: '#FFFFFF' },
        cat_8_teal: { id: 'cat_8_teal', num: 8, name: 'Ciano / Verde-Água', primary: '#41a9a2', subtle: '#aef4ee', text_emphasis: '#034744', text: '#FFFFFF' },
        cat_9_royal: { id: 'cat_9_royal', num: 9, name: 'Azul Royal', primary: '#304be0', subtle: '#c3d9fe', text_emphasis: '#193a76', text: '#FFFFFF' },
        cat_10_pink: { id: 'cat_10_pink', num: 10, name: 'Rosa', primary: '#ee2f8a', subtle: '#fec5d9', text_emphasis: '#671d3f', text: '#FFFFFF' },
        cat_11_green: { id: 'cat_11_green', num: 11, name: 'Verde Folha', primary: '#61c36e', subtle: '#bae5bd', text_emphasis: '#044b18', text: '#FFFFFF' },
        cat_12_violet: { id: 'cat_12_violet', num: 12, name: 'Violeta / Lilás', primary: '#9872e6', subtle: '#e4e1fe', text_emphasis: '#3e2f72', text: '#FFFFFF' }
    };

    // 3. Cores Semânticas e Feedback (Status)
    static SEMANTIC_PALETTES = {
        sem_success: { id: 'sem_success', name: 'Success', tag: '$o-success', primary: '#28a745', text: '#FFFFFF' },
        sem_info: { id: 'sem_info', name: 'Info', tag: '$o-info', primary: '#17a2b8', text: '#FFFFFF' },
        sem_warning: { id: 'sem_warning', name: 'Warning', tag: '$o-warning', primary: '#ffac00', text: '#212529' },
        sem_danger: { id: 'sem_danger', name: 'Danger', tag: '$o-danger', primary: '#dc3545', text: '#FFFFFF' },
        sem_favorite: { id: 'sem_favorite', name: 'Favorite (Dourado)', tag: '$o-main-favorite-color', primary: '#f3cc00', text: '#212529' },
        sem_code: { id: 'sem_code', name: 'Code (Magenta)', tag: '$o-main-code-color', primary: '#d2317b', text: '#FFFFFF' }
    };

    // Cache local em memória para caminhos carregados dinamicamente
    static LOCAL_CACHE = {};

    constructor(settings = {}) {
        this.icon_class = (settings.icon_class || 'box').trim();
        this.primary_color = settings.primary_color || '#64748b';
        this.font_color = settings.font_color || '#FFFFFF';
        this.glyph_size = parseInt(settings.glyph_size || '26', 10);
        this.glyph_offset_y = parseFloat(settings.glyph_offset_y || 0);
        this.stroke_width = parseFloat(settings.stroke_width || 2);
        this.border_opacity = settings.border_opacity !== undefined ? parseFloat(settings.border_opacity) : 0.22;
        this.border_width = settings.border_width !== undefined ? parseFloat(settings.border_width) : 1;
        this.render_size = parseInt(settings.render_size || '180', 10);
    }

    /**
     * Normaliza e resolve o nome do ícone Tabler no catálogo
     */
    static normalizeIconName(name) {
        if (!name) return 'box';
        let n = name.trim().toLowerCase().replace(/_/g, '-');
        
        // Mapeamentos comuns de compatibilidade para conveniência
        const legacyMap = {
            'inventory-2': 'box',
            'inventory': 'box',
            'receipt-long': 'receipt',
            'point-of-sale': 'cash-register',
            'payments': 'credit-card',
            'account-balance': 'building-bank',
            'groups': 'users-group',
            'person': 'user',
            'precision-manufacturing': 'robot',
            'storefront': 'building-store',
            'shopping-cart': 'shopping-cart',
            'local-shipping': 'truck',
            'assignment': 'clipboard-list',
            'support-agent': 'headset',
            'analytics': 'chart-dots-2',
            'bar-chart': 'chart-bar',
            'settings': 'settings',
            'security': 'shield-lock',
            'verified-user': 'shield-check',
            'mail': 'mail',
            'campaign': 'speakerphone',
            'calendar-today': 'calendar',
            'folder-open': 'folder',
            'engineering': 'tool',
            'construction': 'cone-2'
        };

        if (legacyMap[n]) return legacyMap[n];
        return n;
    }

    /**
     * Retorna a lista de nós/paths do ícone Tabler a partir do catálogo local ou cache
     */
    static getIconPaths(iconName, onLoaded) {
        const normName = WETH_ICON.normalizeIconName(iconName);

        // 1. Checa cache local
        if (WETH_ICON.LOCAL_CACHE[normName]) {
            return WETH_ICON.LOCAL_CACHE[normName];
        }

        // 2. Checa catálogo local compilado (window.TABLER_CATALOG)
        if (typeof window !== 'undefined' && window.TABLER_CATALOG && window.TABLER_CATALOG[normName]) {
            const entry = window.TABLER_CATALOG[normName];
            WETH_ICON.LOCAL_CACHE[normName] = entry.p;
            return entry.p;
        }

        // 3. Fallback assíncrono para arquivo local em icons/outline/${normName}.svg (quando em HTTP server)
        if (typeof fetch !== 'undefined') {
            const localUrl = `icons/outline/${normName}.svg`;
            fetch(localUrl)
                .then(res => {
                    if (!res.ok) throw new Error('Não encontrado localmente');
                    return res.text();
                })
                .then(svgText => {
                    const paths = [];
                    // Extrai todos os paths com exceção do bounding box M0 0h24v24H0z
                    const pathRegex = /<path\b([^>]*)\/?>/gi;
                    let match;
                    while ((match = pathRegex.exec(svgText)) !== null) {
                        const attrsStr = match[1];
                        const dMatch = attrsStr.match(/d="([^"]+)"/);
                        if (dMatch && dMatch[1] && dMatch[1] !== 'M0 0h24v24H0z') {
                            const opacityMatch = attrsStr.match(/opacity="([^"]+)"/);
                            if (opacityMatch) {
                                paths.push({ d: dMatch[1], opacity: opacityMatch[1] });
                            } else {
                                paths.push(dMatch[1]);
                            }
                        }
                    }
                    if (paths.length > 0) {
                        WETH_ICON.LOCAL_CACHE[normName] = paths;
                        if (onLoaded) onLoaded(paths);
                    }
                })
                .catch(() => {
                    // Fallback silencioso
                });
        }

        return null;
    }

    /**
     * Gera a string SVG vetorial pura nativa WETH (50x50, viewBox 0 0 50 50)
     */
    getSVGString() {
        const normName = WETH_ICON.normalizeIconName(this.icon_class);
        const paths = WETH_ICON.getIconPaths(normName);
        const S = this.glyph_size;
        const scale = (S / 24).toFixed(6);
        const transX = ((50 - S) / 2).toFixed(2);
        const transY = ((50 - S) / 2 + this.glyph_offset_y).toFixed(2);

        let layers = [];

        // 1. Cartela Flat WETH com Contorno Branco Translúcido de Luminosidade
        const strokeAttr = this.border_opacity > 0 
            ? ` stroke="#FFFFFF" stroke-width="${this.border_width}" stroke-opacity="${this.border_opacity}" stroke-linejoin="round"`
            : '';
        layers.push(`<path d="M12 4h26a8 8 0 0 1 8 8v26a8 8 0 0 1-8 8H12a8 8 0 0 1-8-8V12a8 8 0 0 1 8-8Z" fill="${this.primary_color}"${strokeAttr}/>`);

        // 2. Glifo Vetorial Tabler Outline
        if (paths && paths.length > 0) {
            let pathElements = paths.map(p => {
                if (typeof p === 'string') {
                    return `<path d="${p}" />`;
                } else if (p && p.d) {
                    const op = p.opacity ? ` opacity="${p.opacity}"` : '';
                    return `<path d="${p.d}"${op} />`;
                }
                return '';
            }).filter(Boolean).join('\n    ');

            layers.push(
`<g transform="translate(${transX}, ${transY}) scale(${scale})" fill="none" stroke="${this.font_color}" stroke-width="${this.stroke_width}" stroke-linecap="round" stroke-linejoin="round">
    ${pathElements}
  </g>`
            );
        } else {
            // Fallback de texto caso o glifo não seja encontrado
            layers.push(`<text x="25" y="${25 + this.glyph_offset_y}" font-family="sans-serif" font-size="12" font-weight="600" fill="${this.font_color}" text-anchor="middle" dominant-baseline="central">?</text>`);
        }

        return `<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">\n  ${layers.join('\n  ')}\n</svg>`;
    }

    /**
     * Renderiza o ícone no DOM com elemento SVG e Canvas HiDPI sincronizados
     */
    draw(containerId, onUpdated) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';

        const normName = WETH_ICON.normalizeIconName(this.icon_class);
        if (!WETH_ICON.LOCAL_CACHE[normName] && (!window.TABLER_CATALOG || !window.TABLER_CATALOG[normName])) {
            WETH_ICON.getIconPaths(normName, () => {
                this.draw(containerId, onUpdated);
            });
        }

        // 1. Elemento SVG
        const svgWrapper = document.createElement('div');
        svgWrapper.className = 'weth-svg-preview';
        svgWrapper.style.width = `${this.render_size}px`;
        svgWrapper.style.height = `${this.render_size}px`;
        svgWrapper.innerHTML = this.getSVGString();

        const svgEl = svgWrapper.querySelector('svg');
        if (svgEl) {
            svgEl.removeAttribute('width');
            svgEl.removeAttribute('height');
            svgEl.style.width = '100%';
            svgEl.style.height = '100%';
            svgEl.style.display = 'block';
        }

        // 2. Canvas para exportação PNG
        const canvas = document.createElement('canvas');
        canvas.className = 'weth-icon-canvas';
        canvas.width = this.render_size;
        canvas.height = this.render_size;
        canvas.style.display = 'none';

        this._renderToCanvas(canvas);

        container.appendChild(svgWrapper);
        container.appendChild(canvas);

        if (onUpdated) onUpdated(this);
    }

    /**
     * Renderiza a cena vetorial diretamente no contexto 2D do Canvas
     */
    _renderToCanvas(canvas) {
        const ctx = canvas.getContext('2d');
        const size = canvas.width;
        const scale = size / 50;

        ctx.clearRect(0, 0, size, size);
        ctx.save();
        ctx.scale(scale, scale);

        // 1. Cartela Flat WETH
        const pBase = new Path2D('M12 4h26a8 8 0 0 1 8 8v26a8 8 0 0 1-8 8H12a8 8 0 0 1-8-8V12a8 8 0 0 1 8-8Z');
        ctx.fillStyle = this.primary_color;
        ctx.fill(pBase);

        // Contorno Translúcido de Luminosidade (Rim Light)
        if (this.border_opacity > 0) {
            ctx.save();
            ctx.strokeStyle = `rgba(255, 255, 255, ${this.border_opacity})`;
            ctx.lineWidth = this.border_width;
            ctx.lineJoin = 'round';
            ctx.stroke(pBase);
            ctx.restore();
        }

        // 2. Glifo Tabler Outline
        const normName = WETH_ICON.normalizeIconName(this.icon_class);
        const paths = WETH_ICON.getIconPaths(normName);
        if (paths && paths.length > 0 && typeof Path2D !== 'undefined') {
            const S = this.glyph_size;
            const gScale = S / 24;
            const tx = (50 - S) / 2;
            const ty = (50 - S) / 2 + this.glyph_offset_y;

            ctx.save();
            ctx.translate(tx, ty);
            ctx.scale(gScale, gScale);
            ctx.strokeStyle = this.font_color;
            ctx.lineWidth = this.stroke_width;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            for (const p of paths) {
                const d = typeof p === 'string' ? p : p.d;
                const opacity = (typeof p === 'object' && p.opacity) ? parseFloat(p.opacity) : 1;
                ctx.save();
                if (opacity < 1) ctx.globalAlpha *= opacity;
                ctx.stroke(new Path2D(d));
                ctx.restore();
            }

            ctx.restore();
        } else {
            ctx.fillStyle = this.font_color;
            ctx.font = `600 12px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('?', 25, 25 + this.glyph_offset_y);
        }

        ctx.restore();
    }

    /**
     * Exporta o ícone renderizado como imagem PNG (padrão oficial 128x128 ou HiDPI)
     */
    exportPNG(resolution = 128) {
        const offCanvas = document.createElement('canvas');
        offCanvas.width = resolution;
        offCanvas.height = resolution;
        this._renderToCanvas(offCanvas);
        return offCanvas.toDataURL('image/png');
    }

    /**
     * Retorna o SVG codificado como Data URI
     */
    getDataURI() {
        const svg = this.getSVGString();
        return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    }

    /**
     * Helper para renderizar ícones Tabler Outline na interface do estúdio
     */
    static getTablerSvgIcon(iconName, size = 18, strokeWidth = 2) {
        const normName = WETH_ICON.normalizeIconName(iconName);
        const paths = WETH_ICON.getIconPaths(normName);
        if (!paths || paths.length === 0) {
            return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"></svg>`;
        }
        const inner = paths.map(p => {
            if (typeof p === 'string') return `<path d="${p}" />`;
            if (p && p.d) return `<path d="${p.d}"${p.opacity ? ` opacity="${p.opacity}"` : ''} />`;
            return '';
        }).join('');
        return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="tabler-ui-icon">${inner}</svg>`;
    }
}
