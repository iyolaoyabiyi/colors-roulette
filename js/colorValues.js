// Color convertion and information api
const colorValues = (hex) => {
  const cssColors = [
    { name: "AliceBlue", hex: "#F0F8FF" },
    { name: "AntiqueWhite", hex: "#FAEBD7" },
    { name: "Aqua", hex: "#00FFFF" },
    { name: "Aquamarine", hex: "#7FFFD4" },
    { name: "Azure", hex: "#F0FFFF" },
    { name: "Beige", hex: "#F5F5DC" },
    { name: "Bisque", hex: "#FFC0CB" },
    { name: "Black", hex: "#000000" },
    { name: "BlanchedAlmond", hex: "#FFD7BE" },
    { name: "Blue", hex: "#0000FF" },
    { name: "BlueViolet", hex: "#8F00FF" },
    { name: "Brown", hex: "#964B00" },
    { name: "BurlyWood", hex: "#DEB887" },
    { name: "CadetBlue", hex: "#5F9EA0" },
    { name: "Chartreuse", hex: "#7FFF00" },
    { name: "Chocolate", hex: "#D2691E" },
    { name: "Coral", hex: "#FFC67D" },
    { name: "CornflowerBlue", hex: "#6495ED" },
    { name: "Cornsilk", hex: "#FFF8DC" },
    { name: "Crimson", hex: "#DC143C" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "DarkBlue", hex: "#00008B" },
    { name: "DarkCyan", hex: "#008B8B" },
    { name: "DarkGoldenRod", hex: "#B8860B" },
    { name: "DarkGray", hex: "#A9A9A9" },
    { name: "DarkGreen", hex: "#006400" },
    { name: "DarkKhaki", hex: "#BDB76B" },
    { name: "DarkMagenta", hex: "#8B0A1A" },
    { name: "DarkOliveGreen", hex: "#556B2F" },
    { name: "DarkOrange", hex: "#FF8C00" },
    { name: "DarkOrchid", hex: "#9932CC" },
    { name: "DarkRed", hex: "#8B0A1A" },
    { name: "DarkSalmon", hex: "#E9967A" },
    { name: "DarkSeaGreen", hex: "#8FBC8F" },
    { name: "DarkSlateBlue", hex: "#483D8B" },
    { name: "DarkSlateGray", hex: "#2F4F4F" },
    { name: "DarkTurquoise", hex: "#00CED1" },
    { name: "DarkViolet", hex: "#9400D7" },
    { name: "DeepPink", hex: "#FF1493" },
    { name: "DeepSkyBlue", hex: "#00BFFF" },
    { name: "DimGray", hex: "#696969" },
    { name: "DodgerBlue", hex: "#1E90FF" },
    { name: "FireBrick", hex: "#B22222" },
    { name: "FloralWhite", hex: "#FFFAF0" },
    { name: "ForestGreen", hex: "#228B22" },
    { name: "Fuchsia", hex: "#FF00FF" },
    { name: "Gainsboro", hex: "#DCDCDC" },
    { name: "GhostWhite", hex: "#F8F8FF" },
    { name: "Gold", hex: "#FFD700" },
    { name: "GoldenRod", hex: "#DAA520" },
    { name: "Gray", hex: "#808080" },
    { name: "Green", hex: "#008000" },
    { name: "GreenYellow", hex: "#ADFF2F" },
    { name: "HoneyDew", hex: "#F0FFF0" },
    { name: "HotPink", hex: "#FF69B4" },
    { name: "IndianRed", hex: "#CD5C5C" },
    { name: "Indigo", hex: "#4B0082" },
    { name: "Ivory", hex: "#FFFFF0" },
    { name: "Khaki", hex: "#F0E68C" },
    { name: "Lavender", hex: "#C71585" },
    { name: "LavenderBlush", hex: "#FFF0F5" },
    { name: "LawnGreen", hex: "#7CFC00" },
    { name: "LemonChiffon", hex: "#FFFACD" },
    { name: "LightBlue", hex: "#ADD8E6" },
    { name: "LightCoral", hex: "#F08080" },
    { name: "LightCyan", hex: "#E0FFFF" },
    { name: "LightGoldenRodYellow", hex: "#FAFAD2" },
    { name: "LightGray", hex: "#D3D3D3" },
    { name: "LightGreen", hex: "#C6E2B5" },
    { name: "LightPink", hex: "#FFB6C1" },
    { name: "LightSalmon", hex: "#FFA07A" },
    { name: "LightSeaGreen", hex: "#20B2AA" },
    { name: "LightSkyBlue", hex: "#87CEEB" },
    { name: "LightSlateGray", hex: "#B0C4DE" },
    { name: "LightSteelBlue", hex: "#B0E0E6" },
    { name: "LightYellow", hex: "#FFFFE0" },
    { name: "Lime", hex: "#00FF00" },
    { name: "LimeGreen", hex: "#32CD32" },
    { name: "Linen", hex: "#FAF0E6" },
    { name: "Magenta", hex: "#FF00FF" },
    { name: "Maroon", hex: "#800000" },
    { name: "MediumAquamarine", hex: "#66CDAA" },
    { name: "MediumBlue", hex: "#0000CD" },
    { name: "MediumOrchid", hex: "#BA55D3" },
    { name: "MediumSeaGreen", hex: "#3CB371" },
    { name: "MediumSlateBlue", hex: "#7B68EE" },
    { name: "MediumSpringGreen", hex: "#00FA9A" },
    { name: "MediumTurquoise", hex: "#48D1CC" },
    { name: "MediumVioletRed", hex: "#C71585" },
    { name: "MidnightBlue", hex: "#191970" },
    { name: "MintCream", hex: "#F5FFFA" },
    { name: "MistyRose", hex: "#FFE4E1" },
    { name: "Moccasin", hex: "#FFE4B5" },
    { name: "NavajoWhite", hex: "#FFDEAD" },
    { name: "Navy", hex: "#000080" },
    { name: "OldLace", hex: "#FDF5E6" },
    { name: "Olive", hex: "#808000" },
    { name: "OliveDrab", hex: "#6B8E23" },
    { name: "Orange", hex: "#FFA500" },
    { name: "OrangeRed", hex: "#FF4500" },
    { name: "Orchid", hex: "#DA70D6" },
    { name: "PaleGoldenRod", hex: "#EEE8AA" },
    { name: "PaleGreen", hex: "#C6E2B5" },
    { name: "PaleTurquoise", hex: "#AFEEEE" },
    { name: "PaleVioletRed", hex: "#DB7093" },
    { name: "PapayaWhip", hex: "#FFEFD5" },
    { name: "PeachPuff", hex: "#FFD7BE" },
    { name: "Peru", hex: "#CD853F" },
    { name: "Pink", hex: "#FFC0CB" },
    { name: "Plum", hex: "#DDA0DD" },
    { name: "PowderBlue", hex: "#B0E0E6" },
    { name: "Purple", hex: "#800080" },
    { name: "RebeccaPurple", hex: "#663399" },
    { name: "Red", hex: "#FF0000" },
    { name: "RosyBrown", hex: "#BC8F8F" },
    { name: "RoyalBlue", hex: "#4169E1" },
    { name: "SaddleBrown", hex: "#8B4513" },
    { name: "Salmon", hex: "#FA8072" },
    { name: "SandyBrown", hex: "#F5DEB3" },
    { name: "SeaGreen", hex: "#2E8B57" },
    { name: "SeaShell", hex: "#FFF5EE" },
    { name: "Sienna", hex: "#A0522D" },
    { name: "Silver", hex: "#C0C0C0" },
    { name: "SkyBlue", hex: "#87CEEB" },
    { name: "SlateBlue", hex: "#6A5ACD" },
    { name: "SlateGray", hex: "#708090" },
    { name: "Snow", hex: "#FFFAFA" },
    { name: "SpringGreen", hex: "#00FF7F" },
    { name: "SteelBlue", hex: "#4682B4" },
    { name: "Tan", hex: "#D2B48C" },
    { name: "Teal", hex: "#008080" },
    { name: "Thistle", hex: "#D8BFD8" },
    { name: "Tomato", hex: "#FF6347" },
    { name: "Turquoise", hex: "#40E0D0" },
    { name: "Violet", hex: "#EE82EE" },
    { name: "Wheat", hex: "#F5DEB3" },
    { name: "White", hex: "#FFFFFF" },
    { name: "WhiteSmoke", hex: "#F5F5F5" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "YellowGreen", hex: "#9ACD32" }
  ];

  const hexRegex = /^[a-f0-9]{6,8}$/i;
  hex = hex.replace(/^#/, '');
  if (!hexRegex.test(hex) || hex.length === 7) {
    console.log(`Invalid color hex!`);
    return;
  }
  let hexNoAlpha = hex.length === 8 ?
    `#${hex.slice(0, -2).toUpperCase()}` :
    `#${hex}`.toUpperCase();
  
  const hexPad = num => num.toString(16).padStart(2, '0');
  const toRgb = hex => {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const a = hex.substring(6, 8) ? parseInt(hex.substring(6, 8), 16) : 255;
    // const a = `${(tempA / 255).toFixed(2) * 100}%`;
    return [r, g, b, a];
  }
  const toHsl = ([r, g, b]) => {
    const normR = r / 255;
    const normG = g / 255;
    const normB = b / 255;

    const max = Math.max(normR, normG, normB);
    const min = Math.min(normR, normG, normB);
    const diff = max - min;
    
    let h, s;
    if (max === min) {
      h = 0;
      s = 0;
    } else {
      switch (max) {
        case normR:
          h = (normG - normB) / diff + (normG < normB ? 6 : 0)
          break;
        case normG:
          h = (normB - normR) / diff + 2;
          break;
        default:
          h = (normB - normG) / diff + 4;
          break;
      }
      s = diff / max;
    }
    let l = (max + min) / 2;

    h = Math.round(h * 60);
    s = Math.round(s * 100);
    l = Math.round(l * 100); 
    return [h, s, l]
  }
  const getComplementaryColor = ([r, g, b, a]) => {
    const cr = 255 - r;
    const cg = 255 - g;
    const cb = 255 - b;

    const hexNoAlpha = `#${hexPad(cr)}${hexPad(cg)}${hexPad(cb)}`.toUpperCase();
    let compName = `Unknown`;
    cssColors.forEach(color => {
      if (color.hex === hexNoAlpha) {
        compName = color.name;
      }
    });
    const compHex = `${hexNoAlpha}`.toUpperCase();
    const compRgb = `rgb(${cr}, ${cg}, ${cb})`;
    const [ch, cs, cl] = toHsl([cr, cg, cb]);
    const compHsl = `hsl(${ch}, ${cs}%, ${cl}%)`;

    return [compName, compHex, compRgb, compHsl];
  }
  const rgbArr = toRgb(hex)
  const [r, g, b, a] = rgbArr;
  const [h, s, l] = toHsl(rgbArr);

  let colorName = `Unknown`;
  cssColors.forEach(color => {
    if (color.hex === hexNoAlpha) {
      colorName = color.name;
    }
  });
  const colorHex = `#${hex}`.toUpperCase();
  const colorRgb = `rgb(${r}, ${g}, ${b})`;
  const colorHsl = `hsl(${h}, ${s}%, ${l}%)`;
  const [compName, compHex, compRgb, compHsl] = getComplementaryColor(rgbArr);
  const alpha = `${(a / 255).toFixed(2) * 100}%`;
  return {
    base: {
      name: colorName,
      hex: colorHex,
      rgb: colorRgb,
      hsl: colorHsl,
    },
    complementary: {
      name: compName,
      hex: compHex,
      rgb: compRgb,
      hsl: compHsl,
    },
    transparency: alpha
  }
}
export default colorValues;