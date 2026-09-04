export type Locale = "ca" | "es";

export const locales: Locale[] = ["ca", "es"];

type MenuItem = { name: string; desc: string };
type MenuCategory = { id: string; label: string; note: string; items: MenuItem[] };
type GalleryItem = { tag: string; alt: string };
type AmenityItem = { title: string; desc: string };
type Testimonial = { quote: string; author: string };

export type Translations = {
  nav: {
    inicio: string;
    carta: string;
    nosotros: string;
    galeria: string;
    resenas: string;
    ubicacion: string;
    contacto: string;
  };
  header: {
    cta: string;
    openMenu: string;
    closeMenu: string;
    goHome: string;
    mainNav: string;
    mobileNav: string;
    langLabel: string;
  };
  hero: {
    eyebrow: string;
    description: string;
    ctaMenu: string;
    ctaDirections: string;
    ratingSr: (rating: string, reviews: string) => string;
    reviewsLabel: string;
    scrollDown: string;
    scroll: string;
  };
  story: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    imageAlt: string;
    p1: string;
    p2: string;
  };
  amenities: {
    eyebrow: string;
    title: string;
    intro: string;
    items: AmenityItem[];
    takeaway: { title: string; desc: string };
  };
  menu: {
    eyebrow: string;
    title: string;
    intro: string;
    ctaMobile: string;
    categoriesNote: (n: number) => string;
    tabsAriaLabel: string;
    featured: string;
    footNote: string;
    sheetAriaLabel: string;
    closeSheet: string;
    categories: MenuCategory[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    intro: string;
    swipeHint: string;
    closeImage: string;
    enlarge: (alt: string) => string;
    items: GalleryItem[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    reviewsLabel: string;
    prev: string;
    next: string;
    goTo: (n: number) => string;
    meta: string;
    testimonials: Testimonial[];
  };
  instagram: {
    eyebrow: string;
    description: string;
    cta: string;
    viewOn: (tag: string) => string;
  };
  location: {
    eyebrow: string;
    title: string;
    intro: string;
    address: string;
    hours: string;
    phone: string;
    email: string;
    hoursValue: string;
    note: string;
    cta: string;
    mapTitle: string;
  };
  footer: {
    description: string;
    instagramAria: string;
    callAria: (phone: string) => string;
    emailAria: (email: string) => string;
    navTitle: string;
    hoursTitle: string;
    openDaily: string;
    hoursRange: string;
    rights: (year: number) => string;
    tagline: string;
  };
};

const translations = {
  ca: {
    nav: {
      inicio: "Inici",
      carta: "Carta",
      nosotros: "Nosaltres",
      galeria: "Galeria",
      resenas: "Ressenyes",
      ubicacion: "Ubicació",
      contacto: "Contacte",
    },
    header: {
      cta: "Com arribar-hi",
      openMenu: "Obrir menú",
      closeMenu: "Tancar menú",
      goHome: "La Rutlla Cafè, anar a l'inici",
      mainNav: "Navegació principal",
      mobileNav: "Navegació mòbil",
      langLabel: "Canviar idioma",
    },
    hero: {
      eyebrow: "Plaça de la Rutlla · Anglès · Girona",
      description:
        "Un segle de converses, cafès ben tirats i música a la plaça. Terrassa al sol, piano centenari a dins, i la porta oberta cada dia de l'any.",
      ctaMenu: "Veure la carta",
      ctaDirections: "Com arribar-hi",
      ratingSr: (rating: string, reviews: string) =>
        `Valoració ${rating} sobre 5 a Google amb ${reviews} ressenyes`,
      reviewsLabel: "ressenyes a Google",
      scrollDown: "Baixar a la següent secció",
      scroll: "Desplaça't",
    },
    story: {
      eyebrow: "La nostra història",
      titlePrefix: "Un negoci centenari al",
      titleHighlight: "cor d'Anglès",
      imageAlt: "Interior de La Rutlla amb el seu piano centenari i una guitarra acústica",
      p1: "La Rutlla porta més de cent anys servint a l'emblemàtica Plaça de la Rutlla. Aquí s'esmorza d'hora, es fa el vermut al sol i es tanca el dia amb una copa de vi i música.",
      p2: "A dins, un interior decorat amb encant: un piano de més de cent anys, una guitarra acústica penjada a la paret i les taules de fusta de sempre. A fora, una terrassa assolellada a la plaça on el poble es troba.",
    },
    amenities: {
      eyebrow: "A la casa",
      title: "El que hi trobaràs",
      intro: "Petits detalls que fan que la gent hi torni cada dia.",
      items: [
        { title: "Terrassa assolellada", desc: "En plena Plaça de la Rutlla." },
        { title: "Wifi i endolls", desc: "Gratuït, per quedar-t'hi a gust." },
        { title: "Apte per a famílies", desc: "Els nens sempre són benvinguts." },
        { title: "Aparcament de bicis", desc: "Aparca i entra a fer un mos." },
        { title: "Futbol en pantalla", desc: "Els partits, en directe." },
        { title: "Concerts d'estiu", desc: "Música en directe al vespre." },
        { title: "Sense gluten", desc: "Menú apte i llet sense lactosa." },
      ],
      takeaway: {
        title: "Menjar allà o per emportar",
        desc: "Com et vagi millor, cada dia de l'any.",
      },
    },
    menu: {
      eyebrow: "La carta",
      title: "De la primera tassa a l'última copa",
      intro: "Cuina senzilla i honesta, servida sense presses. Consulta els preus a la casa o per telèfon.",
      ctaMobile: "Veure la carta",
      categoriesNote: (n: number) => `${n} categories · sense gluten · sense lactosa`,
      tabsAriaLabel: "Categories de la carta",
      featured: "Destacat",
      footNote: "Menú apte sense gluten · Llet sense lactosa disponible",
      sheetAriaLabel: "La carta de La Rutlla Cafè",
      closeSheet: "Tancar la carta",
      categories: [
        {
          id: "cafes",
          label: "Cafès",
          note: "Mòlt cada matí, servit en tassa calenta.",
          items: [
            { name: "Cafè", desc: "Espresso curt, intens i aromàtic." },
            { name: "Cafè amb Llet", desc: "El clàssic de cada matí a la plaça." },
            { name: "Capuchino", desc: "Escuma sedosa i cacau espolsat." },
            { name: "Llet sense lactosa", desc: "Disponible en qualsevol cafè de la carta." },
          ],
        },
        {
          id: "desayunos",
          label: "Esmorzars",
          note: "Brioixeria feta al moment des de bon matí.",
          items: [
            { name: "Croissant", desc: "Full mantegós, daurat al forn." },
            { name: "Xuixo", desc: "Brioixeria tradicional de la casa." },
            { name: "Banyeta", desc: "Dolç clàssic per acompanyar el cafè." },
            { name: "Torrades", desc: "Pa torrat amb oli, tomàquet o mantega." },
          ],
        },
        {
          id: "bocadillos",
          label: "Entrepans",
          note: "Pa cruixent, ingredients de sempre.",
          items: [
            { name: "Baguette", desc: "Barra cruixent amb farciments a triar." },
            { name: "Sandvitxos variats", desc: "Freds o calents, com els demanis." },
            { name: "Paninis", desc: "Premsats i fosos al moment." },
          ],
        },
        {
          id: "platos",
          label: "Tapes i plats",
          note: "Per compartir a la terrassa o a dins.",
          items: [
            { name: "Patates Braves", desc: "El nostre plat més demanat." },
            { name: "Torrada", desc: "Entrant senzill i ben servit." },
            { name: "Pizza", desc: "Varietat de pizzes al moment." },
            { name: "Hamburguesa", desc: "Plat combinat amb guarnició." },
            { name: "Patates Fregides", desc: "Cruixents, per acompanyar." },
            { name: "Llobarro", desc: "Peix fresc a la planxa." },
          ],
        },
        {
          id: "bebidas",
          label: "Begudes",
          note: "De la canya del migdia al vi de la nit.",
          items: [
            { name: "Vi", desc: "Selecció de la casa per copa." },
            { name: "Cervesa", desc: "De barril, ben tirada i freda." },
            { name: "Suc de Taronja", desc: "Natural, exprimit al moment." },
            { name: "Refrescos", desc: "Tota la varietat habitual." },
          ],
        },
      ],
    },
    gallery: {
      eyebrow: "Galeria",
      title: "Així es veu un dia qualsevol",
      intro: "Cafè, cuina, plaça i sobretaula. Sense filtres de més.",
      swipeHint: "Llisca per veure'n més",
      closeImage: "Tancar imatge",
      enlarge: (alt: string) => `Ampliar foto: ${alt}`,
      items: [
        { tag: "Cafè", alt: "Cafè espresso servit a la barra de La Rutlla" },
        { tag: "Ambient", alt: "Terrassa assolellada a la Plaça de la Rutlla" },
        { tag: "Pizza", alt: "Pizza acabada de fer sobre una post de fusta" },
        { tag: "Capuchino", alt: "Capuchino preparat pel barista" },
        { tag: "Baguette", alt: "Baguette farcida sobre paper d'estrassa" },
        { tag: "Croissant", alt: "Croissant amb cafè en un plat de ceràmica" },
        { tag: "Menjar i beguda", alt: "Patates braves amb vi i cervesa" },
      ],
    },
    reviews: {
      eyebrow: "Ressenyes",
      title: "El que diu la gent del poble",
      reviewsLabel: "ressenyes a Google",
      prev: "Testimoni anterior",
      next: "Testimoni següent",
      goTo: (n: number) => `Anar al testimoni ${n}`,
      meta: "Ressenya de Google",
      testimonials: [
        {
          quote:
            "Parada obligatòria a Anglès. El cafè amb llet i el croissant a la terrassa, amb el sol del matí, no tenen preu.",
          author: "Marta C.",
        },
        {
          quote:
            "Les braves són de les millors de la comarca i l'ambient de dins, amb el piano antic, és pura història.",
          author: "Jordi P.",
        },
        {
          quote:
            "Vam venir a veure el partit i ens vam quedar a sopar. Tracte familiar, preus honestos i una terrassa immillorable.",
          author: "Núria B.",
        },
        {
          quote:
            "Els concerts d'estiu a la plaça són una meravella. Un clàssic del poble que segueix igual de viu.",
          author: "Albert R.",
        },
      ],
    },
    instagram: {
      eyebrow: "Segueix-nos",
      description: "Novetats, concerts d'estiu i el plat del dia, cada setmana al nostre Instagram.",
      cta: "Seguir-nos a Instagram",
      viewOn: (tag: string) => `Veure ${tag} a Instagram`,
    },
    location: {
      eyebrow: "Ubicació i horari",
      title: "Ens trobaràs a la plaça",
      intro: "Obert els set dies de la setmana, de la primera tassa a l'última copa.",
      address: "Adreça",
      hours: "Horari",
      phone: "Telèfon",
      email: "Email",
      hoursValue: "Obert cada dia · 07:00–23:00",
      note: "L'horari pot variar; truca'ns abans de venir.",
      cta: "Com arribar-hi",
      mapTitle: "Mapa de La Rutlla Cafè a la Plaça de la Rutlla 11, Anglès",
    },
    footer: {
      description:
        "Cafeteria La Rutlla · Since 1999 · Original. Un clàssic de la Plaça de la Rutlla, a Anglès, amb més de cent anys d'història.",
      instagramAria: "Instagram de La Rutlla Cafè",
      callAria: (phone: string) => `Trucar al ${phone}`,
      emailAria: (email: string) => `Escriure a ${email}`,
      navTitle: "Navegació",
      hoursTitle: "Horari",
      openDaily: "Obert cada dia",
      hoursRange: "07:00 – 23:00 · l'horari pot variar",
      rights: (year: number) => `© ${year} La Rutlla Cafè · Anglès, Girona`,
      tagline: "Menjar allà · Per emportar",
    },
  },
  es: {
    nav: {
      inicio: "Inicio",
      carta: "Carta",
      nosotros: "Nosotros",
      galeria: "Galería",
      resenas: "Reseñas",
      ubicacion: "Ubicación",
      contacto: "Contacto",
    },
    header: {
      cta: "Cómo llegar",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      goHome: "La Rutlla Cafè, ir al inicio",
      mainNav: "Navegación principal",
      mobileNav: "Navegación móvil",
      langLabel: "Cambiar idioma",
    },
    hero: {
      eyebrow: "Plaça de la Rutlla · Anglès · Girona",
      description:
        "Un siglo de conversaciones, cafés bien tirados y música en la plaza. Terraza al sol, piano centenario dentro, y la puerta abierta cada día del año.",
      ctaMenu: "Ver la carta",
      ctaDirections: "Cómo llegar",
      ratingSr: (rating: string, reviews: string) =>
        `Valoración ${rating} sobre 5 en Google con ${reviews} reseñas`,
      reviewsLabel: "reseñas en Google",
      scrollDown: "Bajar a la siguiente sección",
      scroll: "Scroll",
    },
    story: {
      eyebrow: "Nuestra historia",
      titlePrefix: "Un negocio centenario en el",
      titleHighlight: "corazón de Anglès",
      imageAlt: "Interior de La Rutlla con su piano centenario y una guitarra acústica",
      p1: "La Rutlla lleva más de cien años sirviendo en la emblemática Plaça de la Rutlla. Aquí se desayuna temprano, se hace el vermut al sol y se cierra el día con una copa de vino y música.",
      p2: "Dentro, un interior decorado con encanto: un piano de más de cien años, una guitarra acústica colgada de la pared y las mesas de madera de siempre. Fuera, una terraza soleada en la plaza donde el pueblo se encuentra.",
    },
    amenities: {
      eyebrow: "En la casa",
      title: "Lo que encontrarás",
      intro: "Detalles pequeños que hacen que la gente vuelva cada día.",
      items: [
        { title: "Terraza soleada", desc: "En plena Plaça de la Rutlla." },
        { title: "Wifi y enchufes", desc: "Gratis, para quedarte a gusto." },
        { title: "Apto para familias", desc: "Niños siempre bienvenidos." },
        { title: "Parking bici", desc: "Aparca y entra a tomar algo." },
        { title: "Fútbol en pantalla", desc: "Los partidos, en directo." },
        { title: "Conciertos de verano", desc: "Música en vivo por la noche." },
        { title: "Sin gluten", desc: "Menú apto y leche sin lactosa." },
      ],
      takeaway: {
        title: "Comer allí o para llevar",
        desc: "Como te vaya mejor, cada día del año.",
      },
    },
    menu: {
      eyebrow: "La carta",
      title: "De la primera taza a la última copa",
      intro: "Cocina sencilla y honesta, servida sin prisa. Consulta precios en la casa o por teléfono.",
      ctaMobile: "Ver la carta",
      categoriesNote: (n: number) => `${n} categorías · sin gluten · sin lactosa`,
      tabsAriaLabel: "Categorías de la carta",
      featured: "Destacado",
      footNote: "Menú apto sin gluten · Leche sin lactosa disponible",
      sheetAriaLabel: "La carta de La Rutlla Cafè",
      closeSheet: "Cerrar la carta",
      categories: [
        {
          id: "cafes",
          label: "Cafés",
          note: "Molido cada mañana, servido en taza caliente.",
          items: [
            { name: "Café", desc: "Espresso corto, intenso y aromático." },
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
            { name: "Cruasán", desc: "Hojaldre mantecoso, dorado al horno." },
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
            { name: "Baguette", desc: "Barra crujiente con rellenos a elegir." },
            { name: "Sandwiches variados", desc: "Fríos o calientes, como los pidas." },
            { name: "Paninis", desc: "Prensados y fundidos al momento." },
          ],
        },
        {
          id: "platos",
          label: "Tapas y platos",
          note: "Para compartir en la terraza o dentro.",
          items: [
            { name: "Patatas Bravas", desc: "Nuestro plato más pedido." },
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
            { name: "Vino", desc: "Selección de la casa por copa." },
            { name: "Cerveza", desc: "De barril, bien tirada y fría." },
            { name: "Zumo de Naranja", desc: "Natural, exprimido al momento." },
            { name: "Refrescos", desc: "Toda la variedad habitual." },
          ],
        },
      ],
    },
    gallery: {
      eyebrow: "Galería",
      title: "Así se ve un día cualquiera",
      intro: "Café, cocina, plaza y sobremesa. Sin filtros de más.",
      swipeHint: "Desliza para ver más",
      closeImage: "Cerrar imagen",
      enlarge: (alt: string) => `Ampliar foto: ${alt}`,
      items: [
        { tag: "Café", alt: "Café espresso servido en la barra de La Rutlla" },
        { tag: "Ambiente", alt: "Terraza soleada en la Plaça de la Rutlla" },
        { tag: "Pizza", alt: "Pizza recién hecha sobre tabla de madera" },
        { tag: "Capuchino", alt: "Capuchino preparado por el barista" },
        { tag: "Baguette", alt: "Baguette rellena sobre papel de estraza" },
        { tag: "Cruasán", alt: "Cruasán con café en plato de cerámica" },
        { tag: "Comida y bebida", alt: "Patatas bravas con vino y cerveza" },
      ],
    },
    reviews: {
      eyebrow: "Reseñas",
      title: "Lo que dice la gente del pueblo",
      reviewsLabel: "reseñas en Google",
      prev: "Testimonio anterior",
      next: "Siguiente testimonio",
      goTo: (n: number) => `Ir al testimonio ${n}`,
      meta: "Reseña de Google",
      testimonials: [
        {
          quote:
            "Parada obligatoria en Anglès. El café con leche y el cruasán en la terraza, con el sol de la mañana, no tienen precio.",
          author: "Marta C.",
        },
        {
          quote:
            "Las bravas son de las mejores de la comarca y el ambiente de dentro, con el piano antiguo, es pura historia.",
          author: "Jordi P.",
        },
        {
          quote:
            "Vinimos a ver el partido y nos quedamos a cenar. Trato familiar, precios honestos y una terraza inmejorable.",
          author: "Núria B.",
        },
        {
          quote:
            "Los conciertos de verano en la plaza son una maravilla. Un clásico del pueblo que sigue igual de vivo.",
          author: "Albert R.",
        },
      ],
    },
    instagram: {
      eyebrow: "Síguenos",
      description: "Novedades, conciertos de verano y el plato del día, cada semana en nuestro Instagram.",
      cta: "Seguir en Instagram",
      viewOn: (tag: string) => `Ver ${tag} en Instagram`,
    },
    location: {
      eyebrow: "Ubicación y horario",
      title: "Nos encuentras en la plaza",
      intro: "Abierto los siete días de la semana, de la primera taza a la última copa.",
      address: "Dirección",
      hours: "Horario",
      phone: "Teléfono",
      email: "Email",
      hoursValue: "Abierto cada día · 07:00–23:00",
      note: "El horario puede variar; consúltanos por teléfono antes de venir.",
      cta: "Cómo llegar",
      mapTitle: "Mapa de La Rutlla Cafè en Plaça de la Rutlla 11, Anglès",
    },
    footer: {
      description:
        "Cafeteria La Rutlla · Since 1999 · Original. Un clásico de la Plaça de la Rutlla, en Anglès, con más de cien años de historia.",
      instagramAria: "Instagram de La Rutlla Cafè",
      callAria: (phone: string) => `Llamar al ${phone}`,
      emailAria: (email: string) => `Escribir a ${email}`,
      navTitle: "Navegación",
      hoursTitle: "Horario",
      openDaily: "Abierto cada día",
      hoursRange: "07:00 – 23:00 · el horario puede variar",
      rights: (year: number) => `© ${year} La Rutlla Cafè · Anglès, Girona`,
      tagline: "Comer allí · Para llevar",
    },
  },
} satisfies Record<Locale, Translations>;

export default translations;
