/* LA CRUNCHERIA · Lógica del sitio (no requiere servidor) */
(function () {
  "use strict";

  /* ---------- Íconos ---------- */
  var I = {
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    flecha: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    cerrar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>'
  };

  /* Ilustraciones de línea para cada categoría (inspiradas en el logo) */
  var ARTE = {
    chip: '<path d="M22 58c-6-10 0-24 12-26 9-2 14 6 22 2s10-16 22-12c10 4 8 18 2 26-6 9-2 16-10 22-9 7-20 0-28 2-10 3-20-4-20-14z"/><path d="M40 52c4 2 8 2 12-1"/>',
    oblea: '<circle cx="50" cy="50" r="30"/><circle cx="50" cy="50" r="20"/><circle cx="38" cy="40" r="1.6"/><circle cx="60" cy="38" r="1.6"/><circle cx="62" cy="58" r="1.6"/><circle cx="42" cy="62" r="1.6"/>',
    fruta: '<path d="M30 70c-10-16-2-38 18-44 16-5 28 6 26 22-2 20-22 34-44 22z"/><path d="M50 26c2-6 8-10 14-10"/><path d="M40 56c6 4 14 4 20-2"/>',
    maiz: '<path d="M50 18c14 0 22 14 22 32S62 82 50 82 28 68 28 50s8-32 22-32z"/><path d="M40 34h20M37 46h26M37 58h26M40 70h20M50 22v56"/>',
    churro: '<path d="M24 76 64 22"/><path d="M34 80 76 30"/><path d="M20 62 52 20"/><path d="M58 82 82 50"/>',
    cacahuate: '<path d="M50 16c12 0 18 10 15 20-2 6-2 10 0 16 4 14-4 30-15 30S31 66 35 52c2-6 2-10 0-16-3-10 3-20 15-20z"/><path d="M44 30h12M42 64h16"/>',
    nopal: '<path d="M50 84c-14 0-20-14-18-30 2-18 10-34 18-34s16 16 18 34c2 16-4 30-18 30z"/><path d="M68 40c8-10 18-8 20 0 2 10-8 16-18 14"/><circle cx="44" cy="44" r="1.6"/><circle cx="56" cy="54" r="1.6"/><circle cx="46" cy="66" r="1.6"/><circle cx="54" cy="34" r="1.6"/>',
    hoja: '<path d="M22 78C20 44 44 20 80 20c2 36-22 60-58 58z"/><path d="M22 78 64 36M40 60h14M48 52V40"/>',
    soya: '<path d="M24 66c-6-8 0-20 10-22 8-2 12 4 18 0 8-6 10-18 22-16 10 2 10 16 2 24-10 10-18 6-26 14-8 8-20 8-26 0z"/><circle cx="36" cy="58" r="5"/><circle cx="52" cy="48" r="5"/><circle cx="68" cy="36" r="5"/>'
  };
  function arte(nombre) {
    return '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ARTE[nombre] || ARTE.chip) + "</svg>";
  }

  var ALERGENOS = { gluten: "Contiene gluten", cacahuate: "Cacahuate", soya: "Soya", leche: "Leche", ajonjoli: "Ajonjolí" };
  var AVISOS = { azucar: "Lleva azúcar", colorantes: "Colorantes artificiales", edulcorante: "Edulcorante (stevia)", glutamato: "Glutamato monosódico", saborizante: "Saborizante artificial" };
  var SELLOS = { C: "Exceso calorías", A: "Exceso azúcares", G: "Exceso grasas saturadas", S: "Exceso sodio" };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  /* Canal para pedir: WhatsApp si hay número; si no, mensaje directo de Instagram */
  var CANAL = CONFIG.whatsapp ? { nombre: "WhatsApp", icono: I.wa, clase: "" } : { nombre: "Instagram", icono: I.ig, clase: " wa-flotante--ig" };
  function igLink() { return CONFIG.instagram ? "https://www.instagram.com/" + CONFIG.instagram + "/" : "#"; }
  function waLink(msg) {
    if (!CONFIG.whatsapp) return CONFIG.instagram ? "https://ig.me/m/" + CONFIG.instagram : "#";
    return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg || "Hola, quiero hacer un pedido en " + CONFIG.negocio + ".");
  }
  function dinero(n) { return "$" + Number(n).toLocaleString("es-MX", { minimumFractionDigits: 0, maximumFractionDigits: 2 }); }
  function sinTrigo(p) { return p.alergenos.indexOf("gluten") < 0 && !p.glutenDuda && p.ingredientes.indexOf("Pendiente") < 0; }

  var pagina = document.body.getAttribute("data-pagina");
  var catActual = document.body.getAttribute("data-cat");

  /* ---------- Encabezado ---------- */
  function encabezado() {
    var actual = function (p) { return pagina === p ? ' aria-current="page"' : ""; };
    var subs = CATEGORIAS.map(function (c) {
      return '<a class="menu__sub" href="' + c.archivo + '"' + (catActual === c.slug ? ' aria-current="page"' : "") + ">" + esc(c.nombre) + "</a>";
    }).join("");
    return '<header class="encabezado"><div class="contenedor encabezado__fila">' +
      '<a class="marca" href="index.html" aria-label="' + esc(CONFIG.negocio) + ', inicio">' +
      '<span class="marca__logo"><img src="assets/logo.jpg" alt="" width="46" height="46"></span>' +
      '<span class="marca__nombre">' + esc(CONFIG.negocio) + "<small>HEALTHY SNACKS</small></span></a>" +
      '<button class="menu-boton" aria-label="Abrir menú" aria-expanded="false" aria-controls="menu">' + I.menu + "</button>" +
      '<nav class="menu" id="menu" aria-label="Principal">' +
      '<a href="index.html"' + actual("inicio") + ">Inicio</a>" +
      '<a href="index.html#catalogo"' + (pagina === "categoria" ? ' aria-current="page"' : "") + ">Catálogo</a>" + subs +
      '<a href="como-pedir.html"' + actual("pedir") + ">Cómo pedir</a>" +
      '<a href="ingredientes.html"' + actual("ingredientes") + ">Ingredientes y FAQ</a>" +
      '<a class="btn btn--principal btn--chico" href="' + waLink() + '" target="_blank" rel="noopener">' + CANAL.icono + "Pedir</a>" +
      "</nav></div></header>";
  }

  /* ---------- Pie ---------- */
  function pie() {
    var cats = CATEGORIAS.map(function (c) { return '<li><a href="' + c.archivo + '">' + esc(c.nombre) + "</a></li>"; }).join("");
    return '<footer class="pie"><div class="contenedor"><div class="pie__grid">' +
      '<div><span class="marca__logo"><img src="assets/logo.jpg" alt="Logo de ' + esc(CONFIG.negocio) + '"></span>' +
      '<p style="margin-top:16px;max-width:340px">Snacks para darte un gustito con una opción más consciente. Entregas en ' + esc(CONFIG.ciudad) + ".</p></div>" +
      "<div><h4>Catálogo</h4><ul>" + cats + "</ul></div>" +
      '<div><h4>Contacto</h4><ul>' +
      (CONFIG.whatsapp ? '<li><a href="' + waLink() + '" target="_blank" rel="noopener">WhatsApp</a></li>' : "") +
      '<li><a href="' + igLink() + '" target="_blank" rel="noopener">Instagram' + (CONFIG.instagram ? " @" + esc(CONFIG.instagram) : "") + "</a></li>" +
      "<li>" + esc(CONFIG.horario) + "</li>" +
      '<li><a href="como-pedir.html">Cómo pedir</a></li><li><a href="ingredientes.html">Ingredientes y alérgenos</a></li>' +
      "</ul></div></div>" +
      '<div class="pie__legal"><span>© ' + new Date().getFullYear() + " " + esc(CONFIG.negocio) + " · " + esc(CONFIG.ciudad) + ", Q. Roo</span><span>Información nutrimental por porción de 100 g.</span></div>" +
      "</div></footer>" +
      '<a class="wa-flotante' + CANAL.clase + '" href="' + waLink() + '" target="_blank" rel="noopener" aria-label="Escríbenos por ' + CANAL.nombre + '">' + CANAL.icono + "</a>";
  }

  /* ---------- Piezas reutilizables ---------- */
  function mosaico(cat, img) {
    return '<div class="mosaico" style="background:' + cat.tono + '">' + arte(cat.icono) +
      (img ? '<img src="' + esc(img) + '" alt="" loading="lazy">' : '<span class="mosaico__nota">Foto próximamente</span>') + "</div>";
  }

  function tarjetaCategoria(c) {
    var n = c.productos.length;
    return '<a class="categoria" href="' + c.archivo + '">' + mosaico(c, c.foto) +
      '<div class="categoria__cuerpo"><div><h3>' + esc(c.nombre) + "</h3><span>" + n + (n === 1 ? " producto" : " productos") + "</span></div>" +
      '<span class="flecha">' + I.flecha + "</span></div></a>";
  }

  function etiquetas(p) {
    var h = p.alergenos.map(function (a) { return '<span class="marca-tag marca-tag--alergeno">' + ALERGENOS[a] + "</span>"; }).join("");
    if (p.glutenDuda) h += '<span class="marca-tag marca-tag--aviso">Gluten: consúltanos</span>';
    h += p.avisos.map(function (a) { return '<span class="marca-tag marca-tag--aviso">' + AVISOS[a] + "</span>"; }).join("");
    if (p.avisos.indexOf("azucar") < 0 && p.ingredientes.indexOf("Pendiente") < 0) h += '<span class="marca-tag marca-tag--ok">Sin azúcar añadida</span>';
    if (sinTrigo(p)) h += '<span class="marca-tag marca-tag--ok">Sin trigo en sus ingredientes</span>';
    return '<div class="marcas">' + h + "</div>";
  }

  function tablaNutri(p) {
    var filas = p.nutricion.map(function (r) {
      var sub = r.charAt(0) === "-"; var partes = (sub ? r.slice(1) : r).split("|");
      return "<tr" + (sub ? ' class="sub"' : "") + "><td>" + esc(partes[0]) + "</td><td>" + esc(partes[1]) + "</td></tr>";
    }).join("");
    return '<details class="nutri"><summary>Información nutrimental</summary><table class="tabla-nutri"><caption>Por porción de 100 g</caption><tbody>' + filas + "</tbody></table></details>";
  }

  function tarjetaProducto(c, p, i) {
    var sabores = "";
    if (p.sabores.length) {
      var col = p.sabores.length > 6;
      sabores = '<div class="producto__bloque"><h4>' + p.sabores.length + (p.sabores.length === 1 ? " sabor" : " sabores") + "</h4>" +
        '<div class="chips' + (col ? " chips--colapsado" : "") + '" id="sab-' + i + '">' +
        p.sabores.map(function (s) { return '<span class="chip">' + esc(s) + "</span>"; }).join("") + "</div>" +
        (col ? '<button class="ver-mas" data-objetivo="sab-' + i + '" aria-expanded="false">Ver los ' + p.sabores.length + " sabores</button>" : "") + "</div>";
    }
    var precios = '<div class="producto__bloque"><h4>Presentaciones y precio</h4><ul class="precios">' +
      p.presentaciones.map(function (pr) {
        if (pr.tam === "Por confirmar" && pr.precio == null) return '<li><span class="precio precio--pendiente">Presentaciones y precios por confirmar</span></li>';
        return "<li><span>" + esc(pr.tam) + "</span>" + (pr.precio == null ? '<span class="precio precio--pendiente">Precio por confirmar</span>' : '<span class="precio">' + dinero(pr.precio) + "</span>") + "</li>";
      }).join("") + "</ul></div>";
    var sellos = p.sellos.length ? '<div class="sellos" aria-label="Sellos de advertencia">' + p.sellos.map(function (s) { return '<span class="sello">' + SELLOS[s] + "</span>"; }).join("") + "</div>" : "";
    var msg = "Hola, me interesa: " + p.nombre + (p.sabores.length ? " (sabor: ___)" : "") + ". ¿Me compartes precio y disponibilidad?";
    return '<article class="producto" id="p-' + i + '">' + mosaico(c, p.foto) +
      '<div class="producto__cuerpo"><h3>' + esc(p.nombre) + "</h3>" + etiquetas(p) + sabores + precios +
      (p.leyenda ? '<p class="leyenda">' + esc(p.leyenda) + "</p>" : "") +
      '<div class="producto__bloque"><h4>Ingredientes</h4><p class="ingredientes">' + esc(p.ingredientes) + "</p></div>" +
      sellos + tablaNutri(p) +
      '<div class="producto__acciones"><a class="btn btn--principal" href="' + waLink(msg) + '" target="_blank" rel="noopener">' + CANAL.icono + "Pedir por " + CANAL.nombre + "</a></div>" +
      "</div></article>";
  }

  /* ---------- Render por página ---------- */
  function render() {
    document.getElementById("encabezado").innerHTML = encabezado();
    document.getElementById("pie").innerHTML = pie();

    var cg = document.getElementById("grid-categorias");
    if (cg) cg.innerHTML = CATEGORIAS.map(tarjetaCategoria).join("");

    var fav = document.getElementById("grid-favoritos");
    if (fav) {
      var lista = [];
      CATEGORIAS.forEach(function (c) { c.productos.forEach(function (p) { if (p.destacado) lista.push({ c: c, p: p }); }); });
      fav.innerHTML = lista.slice(0, 3).map(function (x) {
        return '<a class="categoria" href="' + x.c.archivo + '">' + mosaico(x.c, x.p.foto) +
          '<div class="categoria__cuerpo"><div><h3>' + esc(x.p.nombre) + "</h3><span>" + esc(x.c.nombre) + "</span></div>" +
          '<span class="flecha">' + I.flecha + "</span></div></a>";
      }).join("");
    }

    if (pagina === "categoria") {
      var cat = CATEGORIAS.filter(function (c) { return c.slug === catActual; })[0];
      document.title = cat.nombre + " · " + CONFIG.negocio;
      document.getElementById("cat-titulo").textContent = cat.nombre;
      document.getElementById("cat-migas").textContent = cat.nombre;
      document.getElementById("cat-intro").textContent = cat.intro;
      document.getElementById("barra-cat").innerHTML = CATEGORIAS.map(function (c) {
        return '<a href="' + c.archivo + '"' + (c.slug === cat.slug ? ' aria-current="page"' : "") + ">" + esc(c.nombre) + "</a>";
      }).join("");
      document.getElementById("grid-productos").innerHTML = cat.productos.map(function (p, i) { return tarjetaProducto(cat, p, i); }).join("");
      var activa = document.querySelector('.barra-cat [aria-current="page"]');
      if (activa) { var barra = activa.parentNode; barra.scrollLeft = activa.offsetLeft - barra.clientWidth / 2 + activa.clientWidth / 2; }
    }

    var mz = document.getElementById("matriz");
    if (mz) {
      var cols = [
        ["Gluten", function (p) { return p.alergenos.indexOf("gluten") >= 0 ? "si" : p.glutenDuda ? "duda" : ""; }],
        ["Cacahuate", function (p) { return p.alergenos.indexOf("cacahuate") >= 0 ? "si" : ""; }],
        ["Soya", function (p) { return p.alergenos.indexOf("soya") >= 0 ? "si" : ""; }],
        ["Leche", function (p) { return p.alergenos.indexOf("leche") >= 0 ? "si" : ""; }],
        ["Ajonjolí", function (p) { return p.alergenos.indexOf("ajonjoli") >= 0 ? "si" : ""; }],
        ["Azúcar", function (p) { return p.avisos.indexOf("azucar") >= 0 ? "aviso" : ""; }],
        ["Colorantes artificiales", function (p) { return p.avisos.indexOf("colorantes") >= 0 ? "aviso" : ""; }],
        ["Edulcorante", function (p) { return p.avisos.indexOf("edulcorante") >= 0 ? "aviso" : ""; }]
      ];
      var head = "<thead><tr><th>Producto</th>" + cols.map(function (c) { return "<th>" + c[0] + "</th>"; }).join("") + "</tr></thead>";
      var body = CATEGORIAS.map(function (c) {
        return '<tr class="grupo"><td colspan="' + (cols.length + 1) + '">' + esc(c.nombre) + "</td></tr>" +
          c.productos.map(function (p) {
            var tags = [];
            var celdas = cols.map(function (col) {
              var v = col[1](p);
              if (v === "si") { tags.push('<span class="marca-tag marca-tag--alergeno">' + col[0] + "</span>"); return '<td><span class="si" aria-label="Sí">●</span></td>'; }
              if (v === "aviso") { tags.push('<span class="marca-tag marca-tag--aviso">' + col[0] + "</span>"); return '<td><span class="si si--aviso" aria-label="Sí">●</span></td>'; }
              if (v === "duda") { tags.push('<span class="marca-tag marca-tag--aviso">Gluten: consúltanos</span>'); return '<td><span class="si si--aviso" aria-label="Por confirmar">?</span></td>'; }
              return '<td><span class="no" aria-label="No">–</span></td>';
            }).join("");
            if (!tags.length) tags.push('<span class="marca-tag marca-tag--ok">Sin alérgenos ni avisos listados</span>');
            if (p.ingredientes.indexOf("Pendiente") >= 0) tags = ['<span class="marca-tag marca-tag--aviso">Ingredientes por confirmar</span>'];
            return "<tr><td>" + esc(p.nombre) + '<div class="matriz-tags">' + tags.join("") + "</div></td>" + celdas + "</tr>";
          }).join("");
      }).join("");
      mz.innerHTML = head + "<tbody>" + body + "</tbody>";
    }

    var li = document.getElementById("lista-ingredientes");
    if (li) {
      li.innerHTML = CATEGORIAS.map(function (c) {
        return "<details><summary>" + esc(c.nombre) + '</summary><div class="respuesta"><ul class="lista-ing">' +
          c.productos.map(function (p) { return "<li><strong>" + esc(p.nombre) + ":</strong> " + esc(p.ingredientes) + "</li>"; }).join("") +
          "</ul></div></details>";
      }).join("");
    }

    document.querySelectorAll("[data-solo-wa]").forEach(function (e) { if (!CONFIG.whatsapp) e.remove(); });
    document.querySelectorAll("[data-wa]").forEach(function (a) {
      a.href = waLink(a.getAttribute("data-wa") || ""); a.target = "_blank"; a.rel = "noopener";
      if (!CONFIG.whatsapp) {
        var svg = a.querySelector("svg"); if (svg) svg.outerHTML = I.ig;
        var w = document.createTreeWalker(a, NodeFilter.SHOW_TEXT), t;
        while ((t = w.nextNode())) t.nodeValue = t.nodeValue.replace("WhatsApp", "Instagram");
      }
    });
    document.querySelectorAll("[data-ig]").forEach(function (a) { a.href = igLink(); a.target = "_blank"; a.rel = "noopener"; });
    document.querySelectorAll("[data-horario]").forEach(function (e) { e.textContent = CONFIG.horario; });
    document.querySelectorAll("[data-ig-usuario]").forEach(function (e) { e.textContent = CONFIG.instagram ? "@" + CONFIG.instagram : "Síguenos y escríbenos por mensaje directo"; });
  }

  /* ---------- Interacciones ---------- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".menu-boton");
    if (b) {
      var m = document.getElementById("menu"); var abierto = m.classList.toggle("abierto");
      b.setAttribute("aria-expanded", abierto); b.innerHTML = abierto ? I.cerrar : I.menu;
      b.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
      return;
    }
    if (e.target.closest(".menu a")) {
      var mm = document.getElementById("menu"); if (mm) mm.classList.remove("abierto");
    }
    var v = e.target.closest(".ver-mas");
    if (v) {
      var cont = document.getElementById(v.getAttribute("data-objetivo"));
      var col = cont.classList.toggle("chips--colapsado");
      v.setAttribute("aria-expanded", !col);
      v.textContent = col ? "Ver los " + cont.children.length + " sabores" : "Ver menos";
    }
  });

  render();
  if (location.hash) {
    var destino = document.getElementById(location.hash.slice(1));
    if (destino) setTimeout(function () { destino.scrollIntoView(); }, 0);
  }
})();
