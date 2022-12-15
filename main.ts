import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const resp = await fetch(
  `https://fr.wikipedia.org/wiki/Liste_des_communes_du_Val-de-Marne`
);
// if (resp.status === 404) {
//    "";
// }
const html = await resp.text();
const document = new DOMParser().parseFromString(html, "text/html");
const trs = document.querySelectorAll(".wikitable tr");
trs.forEach((tr) => console.log(tr.textContent));

// https://www.open-collectivites.fr/commune/toussus-le-noble-78620/
