import heroLatte from "@/assets/hero-latte.jpg";
import galTerrace from "@/assets/gal-terrace.jpg";
import galPizza from "@/assets/gal-pizza.jpg";
import galBaguette from "@/assets/gal-baguette.jpg";
import galCroissant from "@/assets/gal-croissant.jpg";
import galCoffee from "@/assets/gal-coffee.jpg";
import galTapas from "@/assets/gal-tapas.jpg";
import galCappuccino from "@/assets/gal-cappuccino.jpg";

export const images = {
  heroLatte,
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
  instagram: "https://www.instagram.com/cafeterialarutlla/",
  rating: 4.1,
  reviews: 755,
  /** Weekly schedule. index 0 = Monday … 6 = Sunday. Tuesday closed. */
  week: [
    { open: "07:00", close: "23:00" },
    null,
    { open: "07:00", close: "23:00" },
    { open: "07:00", close: "23:00" },
    { open: "07:00", close: "23:00" },
    { open: "07:00", close: "23:00" },
    { open: "07:00", close: "23:00" },
  ] as ({ open: string; close: string } | null)[],
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Pla%C3%A7a%20de%20la%20Rutlla%2011%2C%2017160%20Angl%C3%A8s%2C%20Girona",
  mapEmbed:
    "https://www.google.com/maps?q=Pla%C3%A7a%20de%20la%20Rutlla%2011%2C%2017160%20Angl%C3%A8s%2C%20Girona&output=embed",
};

/** Same order as content.gallery.items in src/i18n/content.ts */
export const gallery = [
  { src: galCoffee, span: "tall" },
  { src: galTerrace, span: "wide" },
  { src: galPizza, span: "" },
  { src: galCappuccino, span: "tall" },
  { src: galBaguette, span: "" },
  { src: galCroissant, span: "" },
  { src: galTapas, span: "wide" },
];
