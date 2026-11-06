/* ==========================================================
   js/picoles-data.js — SOMENTE os picolés (não entram no data.js)
   Ordem da lista = ordem na tela. Uma linha por picolé.

   Como editar:
   • Em falta:   acrescente  falta: true
                 ex.: { nome: "Kit Kat", preco: 30, falta: true },
                 (para voltar ao normal, apague  falta: true)
   • Descrição:  acrescente  descricao: { pt: "...", es: "..." }
                 (se não existir, nada aparece na tela)
   • Preço:      valor final, já com a taxa de serviço.
   ========================================================== */

const picolesData = [
  { nome: "Mega Clássico", preco: 30 },
  { nome: "Mega Amêndoas", preco: 30 },
  { nome: "Mega Pistache", preco: 30 },
  { nome: "Mega Trufa Branca", preco: 30 },
  { nome: "Kit Kat", preco: 30 },
  { nome: "Kit Kat Gold", preco: 20 },
  { nome: "Oreo Picolé", preco: 29 },
  { nome: "Oreo Sandwich", preco: 29 },
  { nome: "Oreo Bites", preco: 32 },
  { nome: "Diamante Negro", preco: 30 },
  { nome: "Laka", preco: 30 },
  { nome: "Prestígio", preco: 25 },
  { nome: "Crocante", preco: 25 },
  { nome: "BiscoLé", preco: 20 },
  { nome: "Bombomzim", preco: 22 },
  { nome: "Bombom", preco: 22 },
  { nome: "Brigadeiro", preco: 22 },
  { nome: "Choco-Maltado", preco: 22 },
  { nome: "ChocoTrio", preco: 22 },
  { nome: "Chambinho", preco: 18 },
  { nome: "Dentaduras", preco: 18 },
  { nome: "LaFrutta Morango ao Leite", preco: 15 },
  { nome: "LaFrutta Uva", preco: 15 },
  { nome: "LaFrutta Coco", preco: 15 },
  { nome: "LaFrutta Limão", preco: 15 },
  { nome: "Fini Tubes Morango", preco: 13 },
  { nome: "Fini Tubes Tutti-Frutti", preco: 13 },
  { nome: "Fini Minhocas", preco: 13 },
  { nome: "Baton", preco: 13 }
];

/* Textos fixos desta página (pt/es). Se um dia quiser, migramos para o i18n.js. */
const picolesText = {
  pt: {
    title: "Picolés",
    sub: "Pra fechar o dia com um sorriso",
    back: "Voltar ao cardápio",
    out: "Em falta",
    note: "Valores finais, já com serviço incluso."
  },
  es: {
    title: "Picolés",
    sub: "Para cerrar el día con una sonrisa",
    back: "Volver al cardápio",
    out: "Agotado",
    note: "Valores finales, servicio ya incluido."
  }
};
