import heroLatte from "@/assets/hero-latte.jpg";
import interiorPiano from "@/assets/interior-piano.jpg";
import galTerrace from "@/assets/gal-terrace.jpg";
import galPizza from "@/assets/gal-pizza.jpg";
import galBaguette from "@/assets/gal-baguette.jpg";
import galCroissant from "@/assets/gal-croissant.jpg";
import galCoffee from "@/assets/gal-coffee.jpg";
import galTapas from "@/assets/gal-tapas.jpg";
import galCappuccino from "@/assets/gal-cappuccino.jpg";

export const images = {
  heroLatte,
  interiorPiano,
  galTerrace,
  galPizza,
  galBaguette,
  galCroissant,
  galCoffee,
  galTapas,
  galCappuccino,
};

export const business = {
  name: "La Rutlla Cafè",
  address: "Plaça de la Rutlla, 11, 17160 Anglès (Girona), Catalunya",
  phone: "972 42 09 55",
  phoneHref: "tel:+34972420955",
  email: "info@larutlla.cat",
  web: "larutlla.cat",
  instagram: "https://www.instagram.com/cafeterialarutlla/",
  rating: 4.1,
  reviews: 755,
  hours: "Abierto cada día · 07:00–23:00",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Pla%C3%A7a%20de%20la%20Rutlla%2011%2C%2017160%20Angl%C3%A8s%2C%20Girona",
  mapEmbed:
    "https://www.google.com/maps?q=Pla%C3%A7a%20de%20la%20Rutlla%2011%2C%2017160%20Angl%C3%A8s%2C%20Girona&output=embed",
};

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Carta", href: "#carta", primary: true },
  { label: "Nosotros", href: "#nosotros", primary: true },
  { label: "Galería", href: "#galeria", primary: true },
  { label: "Reseñas", href: "#resenas" },
  { label: "Ubicación", href: "#ubicacion", primary: true },
  { label: "Contacto", href: "#contacto" },
];

export const navPrimary = nav.filter((n) => n.primary);

export type MenuCategory = {
  id: string;
  label: string;
  note: string;
  items: { name: string; desc: string; star?: boolean }[];
};

export const menu: MenuCategory[] = [
  {
    id: "cafes",
    label: "Cafés",
    note: "Molido cada mañana, servido en taza caliente.",
    items: [
      { name: "Café", desc: "Espresso corto, intenso y aromático.", star: true },
      { name: "Café con Leche", desc: "El clásico de cada mañana en la plaza." },
      { name: "Capuchino", desc: "Espuma sedosa y cacao espolvoreado." },
      { name: "Leche sin lactosa", desc: "Disponible en cualquier café de la carta." },
    ],
  },
  {
    id: "desayunos",
    label: "Desayunos",
    note: "Bollería recién hecha desde primera hora.",
    items: [
      { name: "Cruasán", desc: "Hojaldre mantecoso, dorado al horno.", star: true },
      { name: "Junquillo", desc: "Bollería tradicional de la casa." },
      { name: "Cuerno", desc: "Dulce clásico para acompañar el café." },
      { name: "Tostadas", desc: "Pan tostado con aceite, tomate o mantequilla." },
    ],
  },
  {
    id: "bocadillos",
    label: "Bocadillos",
    note: "Pan crujiente, ingredientes de siempre.",
    items: [
      { name: "Baguette", desc: "Barra crujiente con rellenos a elegir.", star: true },
      { name: "Sandwiches variados", desc: "Fríos o calientes, como los pidas." },
      { name: "Paninis", desc: "Prensados y fundidos al momento." },
    ],
  },
  {
    id: "platos",
    label: "Tapas y platos",
    note: "Para compartir en la terraza o dentro.",
    items: [
      { name: "Patatas Bravas", desc: "Nuestro plato más pedido.", star: true },
      { name: "Tostada", desc: "Entrante sencillo y bien servido." },
      { name: "Pizza", desc: "Variedad de pizzas al momento." },
      { name: "Hamburguesa", desc: "Plato combinado con guarnición." },
      { name: "Papas Fritas", desc: "Crujientes, para acompañar." },
      { name: "Lubina", desc: "Pescado fresco a la plancha." },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    note: "De la caña de mediodía al vino de la noche.",
    items: [
      { name: "Vino", desc: "Selección de la casa por copa.", star: true },
      { name: "Cerveza", desc: "De barril, bien tirada y fría." },
      { name: "Zumo de Naranja", desc: "Natural, exprimido al momento." },
      { name: "Refrescos", desc: "Toda la variedad habitual." },
    ],
  },
];

export const amenities = [
  { icon: "sun", title: "Terraza soleada", desc: "En plena Plaça de la Rutlla." },
  { icon: "wifi", title: "Wifi y enchufes", desc: "Gratis, para quedarte a gusto." },
  { icon: "baby", title: "Apto para familias", desc: "Niños siempre bienvenidos." },
  { icon: "bike", title: "Parking bici", desc: "Aparca y entra a tomar algo." },
  { icon: "tv", title: "Fútbol en pantalla", desc: "Los partidos, en directo." },
  { icon: "music", title: "Conciertos de verano", desc: "Música en vivo por la noche." },
  { icon: "wheat", title: "Sin gluten", desc: "Menú apto y leche sin lactosa." },
];

export const testimonials = [
  {
    quote:
      "Parada obligatoria en Anglès. El café con leche y el cruasán en la terraza, con el sol de la mañana, no tienen precio.",
    author: "Marta C.",
    meta: "Reseña de Google",
  },
  {
    quote:
      "Las bravas son de las mejores de la comarca y el ambiente de dentro, con el piano antiguo, es pura historia.",
    author: "Jordi P.",
    meta: "Reseña de Google",
  },
  {
    quote:
      "Vinimos a ver el partido y nos quedamos a cenar. Trato familiar, precios honestos y una terraza inmejorable.",
    author: "Núria B.",
    meta: "Reseña de Google",
  },
  {
    quote:
      "Los conciertos de verano en la plaza son una maravilla. Un clásico del pueblo que sigue igual de vivo.",
    author: "Albert R.",
    meta: "Reseña de Google",
  },
];

export const gallery = [
  { src: galCoffee, alt: "Café espresso servido en la barra de La Rutlla", tag: "Café", span: "tall" },
  { src: galTerrace, alt: "Terraza soleada en la Plaça de la Rutlla", tag: "Ambiente", span: "wide" },
  { src: galPizza, alt: "Pizza recién hecha sobre tabla de madera", tag: "Pizza", span: "" },
  { src: galCappuccino, alt: "Capuchino preparado por el barista", tag: "Capuchino", span: "tall" },
  { src: galBaguette, alt: "Baguette rellena sobre papel de estraza", tag: "Baguette", span: "" },
  { src: galCroissant, alt: "Cruasán con café en plato de cerámica", tag: "Cruasán", span: "" },
  { src: galTapas, alt: "Patatas bravas con vino y cerveza", tag: "Comida y bebida", span: "wide" },
];
