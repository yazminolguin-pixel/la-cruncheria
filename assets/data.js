/* =========================================================
   LA CRUNCHERIA · Datos del sitio
   ---------------------------------------------------------
   Aquí se edita todo el contenido: contacto, productos,
   presentaciones y precios. No hace falta tocar el diseño.

   PRECIOS: en cada producto, dentro de "presentaciones",
   cambia  precio: null  por el número, p. ej.  precio: 65
   (precio al público, con el 10% ya incluido).
   Mientras diga null, el sitio muestra "Precio por confirmar".
   ========================================================= */

var CONFIG = {
  negocio: "La Cruncheria",
  ciudad: "Cancún",
  // Solo números, con lada de país. Ejemplo: "529981234567"
  whatsapp: "",
  // Usuario sin @. Ejemplo: "lacruncheria"
  instagram: "",
  horario: "Lunes a sábado, de 9:00 am a 8:00 pm",
  envioGratisDesde: 300
};

/* Tabla nutrimental: "Etiqueta|valor". Un "-" al inicio = subrenglón. */
/* Sellos: C = exceso calorías, A = exceso azúcares,
           G = exceso grasas saturadas, S = exceso sodio */
/* Alérgenos: gluten, cacahuate, soya, leche, ajonjoli */
/* Avisos: azucar, colorantes, edulcorante, glutamato, saborizante */

var BASE_FRUTA = function (sodio, extra) {
  return ["Calorías|" + extra[0], "Grasa total|0 g", "Sodio|" + sodio,
    "Carbohidratos totales|" + extra[1], "-Fibra dietética|" + extra[2],
    "-Azúcares|" + extra[3], "-Azúcar añadida|0 g", "Proteína|" + extra[4],
    "Calcio|" + extra[5], "Hierro|" + extra[6], "Potasio|" + extra[7]];
};

var CHIP = function (v) { // calorías, proteína, grasas, saturadas, HC, azúcares, añadida, fibra, sodio
  return ["Calorías|" + v[0], "Proteína|" + v[1], "Grasas totales|" + v[2],
    "-Grasas saturadas|" + v[3], "-Grasas trans|0 mg", "Hidratos de carbono|" + v[4],
    "-Azúcares|" + v[5], "-" + (v[9] || "Azúcar añadida") + "|" + v[6],
    "Fibra dietética|" + v[7], "Sodio|" + v[8]];
};

var CATEGORIAS = [
  {
    slug: "obleas", archivo: "obleas.html", nombre: "Obleas y choco obleas",
    tono: "#D99A2B", icono: "oblea",
    intro: "Obleas ligeras de amaranto en muchos sabores, y una versión cubierta de chocolate para cuando se antoja algo más especial.",
    productos: [
      {
        nombre: "Obleas de amaranto",
        sabores: ["Mora azul", "Arándano", "Capuchino", "Nuez", "Cajeta", "Cherry", "Coco", "Café de olla", "Chocolate", "Frutos rojos", "Taro", "Cacao mexicano", "Matcha", "Brownie", "Arcoíris"],
        presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Amaranto, linaza, canela, stevia, colorante y saborizante natural, harina de trigo.",
        alergenos: ["gluten"], avisos: ["edulcorante"], sellos: [],
        leyenda: "Contiene edulcorantes, no recomendable en niños.",
        nutricion: CHIP(["260 kcal", "9 g", "2.5 g", "0 g", "49 g", "menos de 1 g", "0 g", "4 g", "15 mg"]),
        destacado: true
      },
      {
        nombre: "Choco obleas",
        sabores: [],
        presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Agua, amaranto, chocolate semiamargo Turín, harina de trigo, harina de linaza, saborizante natural, aceite de coco, vainilla, stevia, canela y aceite vegetal.",
        alergenos: ["gluten"], avisos: ["azucar", "edulcorante"], sellos: ["C", "A", "G"],
        nutricion: CHIP(["530 kcal", "12 g", "22 g", "11 g", "70 g", "22 g", "22 g", "10 g", "27 mg"])
      }
    ]
  },
  {
    slug: "fruta", archivo: "fruta-deshidratada.html", nombre: "Fruta deshidratada",
    tono: "#E58A1F", icono: "fruta",
    intro: "Mango orgánico y piña deshidratados, al natural o enchilados. Su dulzor es el de la propia fruta: sin azúcar añadida.",
    productos: [
      {
        nombre: "Mango natural", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Mango orgánico deshidratado.",
        alergenos: [], avisos: [], sellos: [],
        nutricion: BASE_FRUTA("0 mg", ["350 kcal", "85 g", "5 g", "60 g", "2.5 g", "37.5 g", "0 mg", "875 mg"])
      },
      {
        nombre: "Mango enchilado", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Mango orgánico deshidratado, sal yodada, ácido cítrico, chiles secos y especias.",
        alergenos: [], avisos: [], sellos: ["C", "S"],
        nutricion: BASE_FRUTA("406 mg", ["350 kcal", "85 g", "5 g", "60 g", "2.5 g", "37.5 g", "0 mg", "875 mg"]),
        destacado: true
      },
      {
        nombre: "Piña natural", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Piña deshidratada.",
        alergenos: [], avisos: [], sellos: [],
        nutricion: BASE_FRUTA("0 mg", ["350 kcal", "85 g", "12.5 g", "40 g", "2.5 g", "77.5 g", "2.5 mg", "750 mg"])
      },
      {
        nombre: "Piña enchilada", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Piña deshidratada, sal yodada, ácido cítrico, chiles secos y especias.",
        alergenos: [], avisos: [], sellos: ["C", "S"],
        nutricion: BASE_FRUTA("338 mg", ["350 kcal", "85 g", "12.5 g", "40 g", "2.5 g", "77.5 g", "2.5 mg", "750 mg"])
      },
      {
        nombre: "Mix natural", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Piña deshidratada y mango orgánico deshidratado.",
        alergenos: [], avisos: [], sellos: [],
        nutricion: BASE_FRUTA("0 mg", ["355 kcal", "84 g", "7 g", "56 g", "5 g", "61 g", "1.48 mg", "990 mg"])
      },
      {
        nombre: "Mix enchilado", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Mango orgánico deshidratado, piña deshidratada, sal yodada, ácido cítrico, chiles secos y especias.",
        alergenos: [], avisos: [], sellos: ["C", "S"],
        nutricion: BASE_FRUTA("367 mg", ["355 kcal", "84 g", "7 g", "56 g", "5 g", "61 g", "1.48 mg", "990 mg"])
      }
    ]
  },
  {
    slug: "maicitos", archivo: "maicitos.html", nombre: "Maicitos",
    tono: "#C9631C", icono: "maiz",
    intro: "Maíz blanco nixtamalizado e inflado, con sazón intenso. Te contamos con claridad qué lleva, porque no es de nuestras opciones más naturales.",
    productos: [
      {
        nombre: "Maíz inflado",
        sabores: ["Fuego", "Jalapeño", "Ranchero", "Queso chile", "Salsas negras"],
        presentaciones: [{ tam: "50 g", precio: null }, { tam: "500 g", precio: null }],
        ingredientes: "Maíz blanco nixtamalizado, manteca vegetal (hidrolizada), saborizante artificial (sal, maltodextrina de maíz, chile poblano, ácido cítrico, suero de leche en polvo, glutamato monosódico, proteína vegetal hidrolizada (PVH), chile, azúcar, aceite de canola, ácido málico, cebolla en polvo, especias y hierbas, saborizantes naturales, rojo 40 laca FD&C, amarillo laca FD&C, amarillo 5 (tartrazina) laca FD&C, inosinato disódico).",
        alergenos: ["leche"], avisos: ["colorantes", "azucar", "glutamato", "saborizante"], sellos: ["C", "S"],
        glutenDuda: true, // la PVH no especifica su origen (puede ser trigo o soya)
        leyenda: "Lleva colorantes artificiales (rojo 40, amarillo 5) y azúcar entre sus ingredientes. La tabla reporta 0 g de azúcares por cada 100 g.",
        nutricion: ["Calorías|376 kcal", "Proteína|12.44 g", "Grasa total|5.44 g", "-Grasa saturada|0.912 g",
          "-Grasa poliinsaturada|2.784 g", "-Grasa monoinsaturada|1.728 g", "Carbohidratos totales|84.16 g",
          "Azúcares|0 g", "Fibra dietética|11.2 g", "Sodio|840 mg", "Potasio|1004 mg"]
      }
    ]
  },
  {
    slug: "churritos", archivo: "churritos-amaranto.html", nombre: "Churritos de amaranto",
    tono: "#A8481F", icono: "churro",
    intro: "Crujientes, con amaranto integral, nopal y linaza, en once sabores para todos los gustos. Llevan harina de trigo.",
    productos: [
      {
        nombre: "Churritos de amaranto",
        sabores: ["Piquín", "Fuego", "Búfalo", "Adobado", "Valentina", "Limón y sal", "Natural", "Chipotle", "Caribeño", "Queso picante", "Chile especial"],
        presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Harina de amaranto integral precocida, concentrado proteico de amaranto, grano de amaranto reventado, maíz nixtamalizado 20%, harina de trigo 10%, nopal fresco, linaza, sal de mar, condimento. No contiene conservadores químicos.",
        alergenos: ["gluten"], avisos: [], sellos: ["C"],
        nutricion: ["Calorías|389 kcal", "Proteína|15.3 g", "Grasa total|6.2 g", "-Grasa poliinsaturada|2.9 g",
          "-Grasa monoinsaturada|2.25 mg", "-Grasa saturada|1.02 g", "Carbohidratos totales|68 g",
          "Azúcares|1.95 g", "Fibra dietética|4.7 g", "Sodio|245 mg"],
        destacado: true
      }
    ]
  },
  {
    slug: "cacahuates", archivo: "cacahuates-japoneses.html", nombre: "Cacahuates japoneses",
    tono: "#B5702A", icono: "cacahuate",
    intro: "El clásico cacahuate japonés, con cubierta de harina de amaranto y maíz.",
    productos: [
      {
        nombre: "Cacahuate japonés de amaranto · Natural", sabores: [],
        presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Harina de amaranto, harina de maíz, cacahuate y sal.",
        alergenos: ["cacahuate"], avisos: [], sellos: ["C"],
        nutricion: ["Calorías|503 kcal", "Proteína|16.7 g", "Grasa total|31.4 g", "-Grasa saturada|4.9 g", "-Grasa trans|0 g",
          "Carbohidratos totales|38.5 g", "-Azúcares|12.3 g", "-Azúcares añadidos|0 g", "Fibra dietética|8.5 mg", "Sodio|0 mg"]
      },
      {
        nombre: "Cacahuate japonés de amaranto · Con sabor", sabores: ["Habanero", "Queso", "Hot nuts"],
        presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Harina de amaranto, harina de maíz, cacahuate, sal y sazonadores.",
        alergenos: ["cacahuate"], avisos: [], sellos: ["C", "S"],
        nutricion: ["Calorías|503 kcal", "Proteína|16.7 g", "Grasa total|31.4 g", "-Grasa saturada|4.9 g", "-Grasa trans|0 g",
          "Carbohidratos totales|38.5 g", "-Azúcares|12.3 g", "-Azúcares añadidos|0 g", "Fibra dietética|8.5 mg", "Sodio|457 mg"]
      }
    ]
  },
  {
    slug: "nopal", archivo: "nopal.html", nombre: "Nopal",
    tono: "#5E8A3A", icono: "nopal",
    intro: "Botanas de maíz nixtamalizado con nopal orgánico, linaza, ajonjolí y chía. Mucha fibra y nada de azúcar.",
    productos: [
      {
        nombre: "Tiritas de nopal", sabores: ["Natural", "Adobadas (con chile)"],
        presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Natural: harina de maíz nixtamalizado, nopal orgánico deshidratado, aceite vegetal, sal de mar, linaza, ajonjolí, chía y agua. Con chile: los mismos ingredientes más saborizante a base de mezcla de chiles.",
        alergenos: ["ajonjoli"], avisos: [], sellos: ["C", "S"],
        nutricion: ["Calorías|466 kcal", "Proteína|10 g", "Grasa total|15 g", "Minerales|0.93 g", "Carbohidratos totales|43.3 g",
          "Azúcares|0 g", "Fibra dietética|13.3 g", "Sodio|766 mg"],
        destacado: true
      },
      {
        nombre: "Churritos de nopal", sabores: [],
        presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Harina de maíz nixtamalizado, nopal orgánico deshidratado, aceite vegetal, sal de mar, linaza, ajonjolí, chía, agua y saborizante a base de mezcla de chiles.",
        alergenos: ["ajonjoli"], avisos: [], sellos: ["C", "S"],
        nutricion: ["Calorías|466 kcal", "Proteína|10 g", "Grasa total|15 g", "Minerales|0.93 g", "Carbohidratos totales|43.3 g",
          "Azúcares|0 g", "Fibra dietética|13.3 g", "Sodio|766 mg"]
      }
    ]
  },
  {
    slug: "chips", archivo: "chips-vegetales.html", nombre: "Chips de vegetales",
    tono: "#9C2F4E", icono: "chip",
    intro: "Plátano, camote, betabel y jícama en chips, con pocos ingredientes y sin azúcar añadida.",
    productos: [
      { nombre: "Chips de plátano natural", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Plátano y aceite de soya.", alergenos: ["soya"], avisos: [], sellos: ["C", "A"],
        nutricion: CHIP(["340 kcal", "4 g", "2 g", "0 g", "75 g", "41 g", "0 g", "8 g", "50 mg"]) },
      { nombre: "Chips de plátano canela-stevia", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Plátano, aceite de soya, stevia y canela.", alergenos: ["soya"], avisos: ["edulcorante"], sellos: ["C", "A"],
        nutricion: CHIP(["366 kcal", "4 g", "4 g", "0 g", "76 g", "42 g", "12 g", "0 g", "166 mg", "Stevia"]) },
      { nombre: "Chips de camote natural", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Camote y aceite de soya.", alergenos: ["soya"], avisos: [], sellos: ["C", "A"],
        nutricion: CHIP(["310 kcal", "6 g", "0 g", "0 g", "70 g", "14 g", "0 g", "9 g", "100 mg"]) },
      { nombre: "Chips de camote enchilado", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Camote, aceite de soya, mezcla de chiles secos y especias.", alergenos: ["soya"], avisos: [], sellos: ["C", "A", "S"],
        nutricion: CHIP(["352 kcal", "6 g", "0 g", "0 g", "72 g", "16 g", "0 g", "12 g", "758 mg"]) },
      { nombre: "Chips de betabel natural", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Betabel y aceite de soya.", alergenos: ["soya"], avisos: [], sellos: ["C", "A"],
        nutricion: CHIP(["290 kcal", "7 g", "1 g", "0 g", "62 g", "46 g", "0 g", "15 g", "100 mg"]) },
      { nombre: "Chips de betabel enchilado", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Betabel, aceite de soya, mezcla de chiles secos y especias.", alergenos: ["soya"], avisos: [], sellos: ["C", "A"],
        nutricion: CHIP(["300 kcal", "6 g", "2 g", "0 g", "64 g", "42 g", "0 g", "8 g", "100 mg"]) },
      { nombre: "Chips de jícama natural", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Jícama y aceite de soya.", alergenos: ["soya"], avisos: [], sellos: ["A"],
        nutricion: CHIP(["200 kcal", "7 g", "1 g", "0 g", "40 g", "18 g", "0 g", "39 g", "40 mg"]) },
      { nombre: "Chips de jícama enchilada", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Jícama, aceite de soya, mezcla de chiles secos y especias.", alergenos: ["soya"], avisos: [], sellos: ["A"],
        nutricion: CHIP(["200 kcal", "7 g", "1 g", "0 g", "40 g", "18 g", "0 g", "39 g", "190 mg"]) },
      { nombre: "Chips de jícama limón y sal", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Jícama, aceite de soya, sal yodada, ácido cítrico y limón en polvo.", alergenos: ["soya"], avisos: [], sellos: ["A", "S"],
        nutricion: CHIP(["236 kcal", "7 g", "1 g", "0 g", "40 g", "18 g", "0 g", "39 g", "425 mg"]), destacado: true },
      { nombre: "Chips de jícama chipotle", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Pendiente de confirmar.", alergenos: [], avisos: [], sellos: ["S"],
        nutricion: CHIP(["232 kcal", "6 g", "0 g", "0 g", "40 g", "6 g", "0 g", "20 g", "356 mg"]) },
      { nombre: "Chips de jícama flamin hot", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Jícama, aceite de soya, mezcla de chiles secos y especias.", alergenos: ["soya"], avisos: [], sellos: ["A", "S"],
        nutricion: CHIP(["242 kcal", "7 g", "1 g", "0 g", "40 g", "18 g", "0 g", "39 g", "549 mg"]) },
      { nombre: "Chips de jícama jalapeño", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Jícama, aceite de soya, mezcla de chiles secos y especias.", alergenos: ["soya"], avisos: [], sellos: ["S"],
        nutricion: CHIP(["232 kcal", "6 g", "0 g", "0 g", "40 g", "6 g", "0 g", "20 g", "342 mg"]) }
    ]
  },
  {
    slug: "coliflor-kale", archivo: "coliflor-kale.html", nombre: "Coliflor y kale",
    tono: "#3F6B4F", icono: "hoja",
    intro: "Botanas hechas con harina de coliflor y de kale. Sin azúcares y con mucha fibra.",
    productos: [
      { nombre: "Coliflor", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Harina de coliflor, harina de maíz, chile y agua.", alergenos: [], avisos: [], sellos: ["S"],
        nutricion: CHIP(["242 kcal", "6 g", "6.1 g", "2 g", "40 g", "0 g", "0 g", "19.8 g", "842 mg"]) },
      { nombre: "Kale", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Harina de col rizada (kale), harina de coliflor, harina de maíz, chile y agua.", alergenos: [], avisos: [], sellos: ["S"],
        nutricion: CHIP(["189 kcal", "4 g", "6 g", "6 g", "29 g", "0 g", "0 g", "16 g", "524 mg", "Stevia"]) },
      { nombre: "Rollitos de coliflor", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Pendiente de confirmar.", alergenos: [], avisos: [], sellos: ["S"],
        nutricion: CHIP(["178 kcal", "7 g", "8 g", "3 g", "64 g", "0 g", "0 g", "16 g", "884 mg"]) }
    ]
  },
  {
    slug: "soya", archivo: "chicharron-soya.html", nombre: "Chicharrón de soya",
    tono: "#7A4A2A", icono: "soya",
    intro: "Para quien busca un chicharrón crujiente de origen vegetal, sin azúcares.",
    productos: [
      { nombre: "Chicharrón de soya enchilado", sabores: [], presentaciones: [{ tam: "Por confirmar", precio: null }],
        ingredientes: "Harina de soya, aceite de soya y mezcla de chiles secos y especias.", alergenos: ["soya"], avisos: [], sellos: ["S"],
        nutricion: CHIP(["220 kcal", "5.33 g", "8 g", "0 g", "32 g", "0 g", "0 g", "0 g", "835 mg", "Stevia"]) }
    ]
  }
];
