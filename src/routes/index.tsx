import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Story } from "@/components/site/Story";
import { Amenities } from "@/components/site/Amenities";
import { MenuSection } from "@/components/site/MenuSection";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { Instagram } from "@/components/site/Instagram";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";

const title = "La Rutlla Cafè · Cafetería y bar en Anglès, Girona";
const description =
  "Cafetería y bar centenario en la Plaça de la Rutlla, Anglès. Cafés, desayunos, bocadillos, tapas y terraza soleada. Abierto cada día 07:00–23:00.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CafeOrCoffeeShop",
            name: "La Rutlla Cafè",
            image: "https://larutlla.cat",
            telephone: "+34972420955",
            email: "info@larutlla.cat",
            url: "https://larutlla.cat",
            priceRange: "€",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Plaça de la Rutlla, 11",
              postalCode: "17160",
              addressLocality: "Anglès",
              addressRegion: "Girona",
              addressCountry: "ES",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.1",
              reviewCount: "755",
            },
            openingHours: "Mo-Su 07:00-23:00",
          }),
        }}
      />
      <Header />
      <main>
        <Hero />
        <Story />
        <Amenities />
        <MenuSection />
        <Gallery />
        <Reviews />
        <Instagram />
        <Location />
      </main>
      <Footer />
    </>
  );
}
