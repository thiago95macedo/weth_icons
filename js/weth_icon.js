class WETH_ICON {
    constructor(settings) {
        // Valores padrão
        this.font_color = "#ffffff";
        this.font_family = "Material Symbols Outlined";
        this.font_weight = "300"; // Light por padrão
        this.icon_background = "#05285B";
        this.icon_class = "person";
        this.icon_width = "200"; // Tamanho fixo do ícone
        this.font_size = "140";  // Tamanho calibrado e aumentado suavemente em relação à moldura (70%)
        this.weth_version = "25.0";

        // Aplica configurações personalizadas, exceto tamanhos
        if (settings != null) {
            // Copia todas as configurações, exceto tamanho do ícone e fonte
            const settingsCopy = { ...settings };
            delete settingsCopy.icon_width;
            delete settingsCopy.font_size;

            // Aplica as configurações, mantendo os tamanhos fixos
            Object.assign(this, settingsCopy);
        }

        if (settings != null && !("icon_text" in settings)) {
            this.icon_class = this._normalizeIconClass(this.icon_class);
            let ufw = this._getUnicodeAndFontWeight(this.icon_class);
            this.icon_text = ufw[0];
        }

        this._canvas = false;
        this._ctx = false;
        this._isFontLoaded = false;
    }

    _normalizeIconClass(iconClass) {
        if (!iconClass) return "person";

        // Para Material Icons, apenas retorna o nome do ícone
        return iconClass.trim();
    }

    draw(element) {
        document.fonts.ready.then(() => this._draw(element));
    }

    _draw(element) {
        this._setUp();
        this._drawScene(this._ctx);
        document.getElementById(element).appendChild(this.canvas);
    }

    _drawScene(ctx) {
        this._setBackground(ctx);
        this._setText(ctx);
        this._setInlineShadow(ctx);
        this._setGradient(ctx);
    }

    _setUp() {
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("class", "weth-icon-canvas");
        this.canvas.height = this.icon_width;
        this.canvas.width = this.icon_width;
        this._ctx = this.canvas.getContext("2d");

        // Limpar canvas e garantir transparência
        this._ctx.clearRect(0, 0, this.icon_width, this.icon_width);
        this._ctx.globalAlpha = 1.0; // Garantir opacidade total

        this._ctx.font = `${this.font_weight} ${this.font_size}px "${this.font_family}"`;
    }

    _setBackground(ctx = this._ctx) {
        let radius = this.icon_width * 0.047;
        ctx.beginPath();
        switch (this.weth_version) {
            case "25.0":
                ctx.moveTo(radius, 0);
                ctx.lineTo(this.icon_width - radius, 0);
                ctx.arcTo(this.icon_width, 0, this.icon_width, radius, radius);
                ctx.lineTo(this.icon_width, this.icon_width - radius);
                ctx.arcTo(this.icon_width, this.icon_width, this.icon_width - radius, this.icon_width, radius);
                ctx.lineTo(radius, this.icon_width);
                ctx.arcTo(0, this.icon_width, 0, this.icon_width - radius, radius);
                ctx.lineTo(0, radius);
                ctx.arcTo(0, 0, this.icon_width - radius, 0, radius);
                break;
            default:
                console.log("Not supported version selected.");
                break;
        }
        ctx.clip();
        ctx.fillStyle = this.icon_background;
        ctx.fill();
    }

    _setText(ctx = this._ctx) {
        // Centralização vertical óptica calibrada para em-square de Material Symbols
        let centerX = parseInt(this.icon_width) / 2;
        let centerY = (parseInt(this.icon_width) / 2) + Math.round(parseInt(this.font_size) * 0.093);
        this._drawText(ctx, this.icon_text, this.font_color, centerX, centerY, this.font_size);
    }

    _drawText(ctx, text, color, centerX, centerY, font_size) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.font = `${this.font_weight} ${font_size}px "${this.font_family}"`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${text}`, centerX, centerY);
        ctx.restore();
    }

    _pSBC(p, c0, c1, l) {
        let r, g, b, P, f, t, h, i = parseInt, m = Math.round, a = typeof c1 == "string";
        if (typeof p != "number" || p < -1 || p > 1 || typeof c0 != "string" || (c0[0] != "r" && c0[0] != "#") || (c1 && !a)) return null;
        if (!this.pSBCr) this.pSBCr = d => {
            let n = d.length, x = {};
            if (n > 9) {
                ([r, g, b, a] = d = d.split(",")), (n = d.length);
                if (n < 3 || n > 4) return null;
                (x.r = i(r[3] == "a" ? r.slice(5) : r.slice(4))), (x.g = i(g)), (x.b = i(b)), (x.a = a ? parseFloat(a) : -1);
            } else {
                if (n == 8 || n == 6 || n < 4) return null;
                if (n < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (n > 4 ? d[4] + d[4] : "");
                d = i(d.slice(1), 16);
                if (n == 9 || n == 5) (x.r = (d >> 24) & 255), (x.g = (d >> 16) & 255), (x.b = (d >> 8) & 255), (x.a = m((d & 255) / 0.255) / 1000);
                else (x.r = d >> 16), (x.g = (d >> 8) & 255), (x.b = d & 255), (x.a = -1);
            }
            return x;
        };
        (h = c0.length > 9), (h = a ? (c1.length > 9 ? true : c1 == "c" ? !h : false) : h), (f = this.pSBCr(c0)), (P = p < 0),
            (t = c1 && c1 != "c" ? this.pSBCr(c1) : P ? { r: 0, g: 0, b: 0, a: -1 } : { r: 255, g: 255, b: 255, a: -1 }), (p = P ? p * -1 : p), (P = 1 - p);
        if (!f || !t) return null;
        if (l) (r = m(P * f.r + p * t.r)), (g = m(P * f.g + p * t.g)), (b = m(P * f.b + p * t.b));
        else (r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5)), (g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5)), (b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5));
        (a = f.a), (t = t.a), (f = a >= 0 || t >= 0), (a = f ? (a < 0 ? t : t < 0 ? a : a * P + t * p) : 0);
        if (h) return "rgb" + (f ? "a(" : "(") + r + "," + g + "," + b + (f ? "," + m(a * 1000) / 1000 : "") + ")";
        else return "#" + (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0)).toString(16).slice(1, f ? undefined : -2);
    }


    _setInlineShadow(ctx = this._ctx) {
        switch (this.weth_version) {
            case "25.0":
                let is_radius = this.icon_width * 0.047;
                let is_height = this.icon_width * 0.015;
                ctx.save();
                ctx.globalAlpha = 0.4;
                ctx.fillStyle = "#282F33";
                ctx.beginPath();
                ctx.moveTo(is_radius - is_height, this.icon_width);
                ctx.lineTo(this.icon_width - is_radius, this.icon_width);
                ctx.arcTo(this.icon_width, this.icon_width, this.icon_width, this.icon_width - is_radius, is_radius);
                ctx.lineTo(this.icon_width, this.icon_width - (is_radius + is_height));
                ctx.arcTo(this.icon_width, this.icon_width - is_height, this.icon_width - is_radius, this.icon_width - is_height, is_radius);
                ctx.lineTo(is_radius, this.icon_width - is_height);
                ctx.arcTo(0, this.icon_width - is_height, 0, this.icon_width - (is_radius + is_height), is_radius);
                ctx.lineTo(0, this.icon_width - is_height);
                ctx.arcTo(0, this.icon_width, is_radius - is_height, this.icon_width, is_radius);
                ctx.fill();
                ctx.fillStyle = "#FFFFFF";
                ctx.beginPath();
                ctx.moveTo(is_radius - is_height, 0);
                ctx.lineTo(this.icon_width - is_radius, 0);
                ctx.arcTo(this.icon_width, 0, this.icon_width, is_radius - is_height, is_radius);
                ctx.lineTo(this.icon_width, is_radius + 2);
                ctx.arcTo(this.icon_width, is_height, this.icon_width - is_radius, is_height, is_radius);
                ctx.lineTo(is_radius, is_height);
                ctx.arcTo(0, is_height, 0, is_radius + is_height, is_radius);
                ctx.lineTo(0, is_radius);
                ctx.arcTo(0, 0, is_radius - is_height, 0, is_radius);
                ctx.fill();
                ctx.restore();
                break;
            default:
                console.log("Not supported version selected.");
                break;
        }
    }

    _setGradient(ctx = this._ctx) {
        switch (this.weth_version) {
            case "25.0":
                ctx.save();
                ctx.globalAlpha = 0.2;
                var gradient = ctx.createLinearGradient(0, this.icon_width, this.icon_width, 0);
                gradient.addColorStop(0, "rgba(0,0,0,0)");
                gradient.addColorStop(1, "#FFFFFF");
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, this.icon_width, this.icon_width);
                ctx.restore();
                break;
            default:
                console.log("Not supported version selected.");
                break;
        }
    }

    _getUnicodeAndFontWeight(iconName) {
        // Para Material Icons, criamos um elemento span com a classe material-symbols-outlined
        let tempSpan = document.createElement('span');
        tempSpan.className = 'material-symbols-outlined';
        tempSpan.textContent = iconName;
        tempSpan.style.fontFamily = 'Material Symbols Outlined';
        tempSpan.style.fontSize = '1px';
        tempSpan.style.visibility = 'hidden';
        tempSpan.style.position = 'absolute';
        tempSpan.style.left = '-9999px';

        document.body.appendChild(tempSpan);

        // Para Material Icons, o texto é o próprio nome do ícone
        let char = iconName;
        let font_weight = window.getComputedStyle(tempSpan).getPropertyValue("font-weight");

        document.body.removeChild(tempSpan);

        console.log("Ícone:", iconName, "Texto:", char, "Peso:", font_weight);

        if (!char || char.length === 0) {
            console.warn("Nome de ícone inválido:", iconName);
            char = 'person';
        }

        return [char, font_weight];
    }

    exportPNG(resolution = 128) {
        const offCanvas = document.createElement("canvas");
        offCanvas.width = resolution;
        offCanvas.height = resolution;
        const offCtx = offCanvas.getContext("2d");

        offCtx.clearRect(0, 0, resolution, resolution);
        offCtx.save();
        const scale = resolution / parseInt(this.icon_width);
        offCtx.scale(scale, scale);

        this._drawScene(offCtx);
        offCtx.restore();

        return offCanvas.toDataURL("image/png");
    }

    static async fetchVectorPath(iconName, weight = '300') {
        if (!iconName) iconName = 'person';
        iconName = iconName.trim().toLowerCase();
        const weightTag = weight ? `wght${weight}` : 'wght300';
        const cacheKey = `${iconName}_${weightTag}`;

        if (!WETH_ICON._vectorCache) {
            WETH_ICON._vectorCache = {};
        }
        if (WETH_ICON._vectorCache[cacheKey]) {
            return WETH_ICON._vectorCache[cacheKey];
        }

        // Tenta primeiro carregar a variante com a espessura exata (ex.: wght300), com fallback para default
        const urls = [
            `https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/${iconName}/${weightTag}/24px.svg`,
            `https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/${iconName}/default/24px.svg`
        ];

        for (const url of urls) {
            try {
                const resp = await fetch(url);
                if (resp.ok) {
                    const text = await resp.text();
                    const vbMatch = text.match(/viewBox=["']([^"']+)["']/i);
                    const pathMatch = text.match(/<path[^>]*\bd=["']([^"']+)["']/i);
                    if (pathMatch) {
                        const data = {
                            viewBox: vbMatch ? vbMatch[1] : '0 -960 960 960',
                            d: pathMatch[1]
                        };
                        WETH_ICON._vectorCache[cacheKey] = data;
                        return data;
                    }
                }
            } catch (err) {
                // Tenta próxima URL
            }
        }

        console.warn(`[WETH_ICON] Não foi possível carregar vetor do ícone '${iconName}' (peso: ${weightTag})`);
        return null;
    }

    async generateSVG(size = 50) {
        const scale = size / parseInt(this.icon_width);
        const radius = (parseInt(this.icon_width) * 0.047 * scale).toFixed(2);
        const is_height = (parseInt(this.icon_width) * 0.015 * scale).toFixed(2);
        const shadowBottomY = (size - parseFloat(is_height)).toFixed(2);

        // Tamanho do ícone calibrado em 70% da moldura (ex: 35px para 50x50)
        const iconSize = (size * 0.70).toFixed(2);
        const offset = ((size - parseFloat(iconSize)) / 2).toFixed(2);

        // Obtém o path vetorial real do ícone oficial com a espessura calibrada (Light 300)
        const iconVector = await WETH_ICON.fetchVectorPath(this.icon_class, this.font_weight || '300');

        let iconSvgContent = '';
        if (iconVector && iconVector.d) {
            iconSvgContent = `
        <svg x="${offset}" y="${offset}" width="${iconSize}" height="${iconSize}" viewBox="${iconVector.viewBox}">
            <path d="${iconVector.d}" fill="${this.font_color}"/>
        </svg>`;
        } else {
            // Fallback caso ocorra falha de rede
            const fontSize = (parseInt(this.font_size) * scale).toFixed(1);
            const centerX = (size / 2).toFixed(1);
            const centerY = (size / 2).toFixed(1);
            iconSvgContent = `
        <text x="${centerX}" y="${centerY}" text-anchor="middle" dominant-baseline="central"
              font-family="'Material Symbols Outlined'" font-size="${fontSize}"
              font-weight="${this.font_weight}" fill="${this.font_color}">${this.icon_text}</text>`;
        }

        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <defs>
        <linearGradient id="overlayGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#000000" stop-opacity="0"/>
            <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.2"/>
        </linearGradient>
        <clipPath id="wethClip">
            <rect width="${size}" height="${size}" rx="${radius}"/>
        </clipPath>
    </defs>
    <g clip-path="url(#wethClip)">
        <rect width="${size}" height="${size}" fill="${this.icon_background}"/>
        <rect width="${size}" height="${size}" fill="url(#overlayGrad)"/>
        <path d="M0 0h${size}v${is_height}h-${size}z" fill="#FFFFFF" fill-opacity="0.4"/>
        <path d="M0 ${shadowBottomY}h${size}v${is_height}h-${size}z" fill="#282F33" fill-opacity="0.4"/>${iconSvgContent}
    </g>
</svg>`;
    }
}