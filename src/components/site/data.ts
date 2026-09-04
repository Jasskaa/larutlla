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
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Pla%C3%A7a%20de%20la%20Rutlla%2011%2C%2017160%20Angl%C3%A8s%2C%20Girona",
  mapEmbed:
    "https://www.google.com/maps?q=Pla%C3%A7a%20de%20la%20Rutlla%2011%2C%2017160%20Angl%C3%A8s%2C%20Girona&output=embed",
};

// Navigation hrefs, keyed to translation keys in src/i18n/translations.ts (nav.*)
export type NavKey = "inicio" | "carta" | "nosotros" | "galeria" | "resenas" | "ubicacion" | "contacto";

export const nav: { key: NavKey; href: string; primary?: boolean }[] = [
  { key: "inicio", href: "#inicio" },
  { key: "carta", href: "#carta", primary: true },
  { key: "nosotros", href: "#nosotros", primary: true },
  { key: "galeria", href: "#galeria", primary: true },
  { key: "resenas", href: "#resenas" },
  { key: "ubicacion", href: "#ubicacion", primary: true },
  { key: "contacto", href: "#contacto" },
];

// Icon keys, in display order — matched by index to translations.amenities.items
export const amenityIcons = ["sun", "wifi", "baby", "bike", "tv", "music", "wheat"] as const;

// Star (featured) flags per menu category, matched by index to
// translations.menu.categories[i].items
export const menuFeaturedFlags: boolean[][] = [
  [true, false, false, false],
  [true, false, false, false],
  [true, false, false],
  [true, false, false, false, false, false],
  [true, false, false, false],
];

// Gallery images + layout span, matched by index to translations.gallery.items
export const gallery = [
  { src: galCoffee, span: "tall" },
  { src: galTerrace, span: "wide" },
  { src: galPizza, span: "" },
  { src: galCappuccino, span: "tall" },
  { src: galBaguette, span: "" },
  { src: galCroissant, span: "" },
  { src: galTapas, span: "wide" },
] as const;
