/* js/picoles.js — renderizador da página de picolés.
   Reaproveita js/config.js (siteConfig): idiomas, logo, nome e localização. */
(function () {
  "use strict";

  // Idioma: o cardápio principal não guarda o idioma, então ele chega por
  // URL (picoles.html?lang=es). Sem parâmetro válido, usa o padrão do config.
  var params = new URLSearchParams(window.location.search);
  var lang = params.get("lang");
  if (!lang || siteConfig.enabledLangs.indexOf(lang) === -1) lang = siteConfig.defaultLang;
  if (!picolesText[lang]) lang = "pt";
  var T = picolesText[lang];

  document.documentElement.setAttribute("lang", lang);
  document.title = T.title + " · " + siteConfig.hotelName;

  function money(v) {
    return "R$ " + Number(v).toLocaleString("pt-BR", {
      minimumFractionDigits: 2, maximumFractionDigits: 2
    });
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  // Textos fixos
  document.querySelectorAll("[data-pico]").forEach(function (n) {
    var k = n.getAttribute("data-pico");
    if (T[k]) n.textContent = T[k];
  });

  // Dados institucionais (config.js)
  var logo = document.getElementById("siteLogo");
  if (logo) { logo.src = siteConfig.logoImage; logo.alt = siteConfig.hotelName; }
  document.querySelectorAll("[data-config='hotelName']").forEach(function (n) {
    n.textContent = siteConfig.hotelName;
  });
  document.querySelectorAll("[data-config='location']").forEach(function (n) {
    n.textContent = siteConfig.location[lang] || siteConfig.location.pt;
  });

  // Botões de voltar: levam ao cardápio principal mantendo o idioma
  document.querySelectorAll("[data-pico-back]").forEach(function (a) {
    a.setAttribute("href", "index.html?lang=" + lang);
  });

  // Lista
  var list = document.getElementById("picoList");
  picolesData.forEach(function (p) {
    var li = el("li", "pico-item" + (p.falta ? " is-out" : ""));
    li.appendChild(el("span", "pico-icon"));

    var body = el("div", "pico-body");
    body.appendChild(el("h3", "pico-name", p.nome));
    if (p.falta) body.appendChild(el("span", "pico-out", T.out));
    if (p.descricao) {
      var d = p.descricao[lang] || p.descricao.pt;
      if (d) body.appendChild(el("p", "pico-desc", d));
    }
    li.appendChild(body);

    li.appendChild(el("span", "pico-price", money(p.preco)));
    list.appendChild(li);
  });
})();
