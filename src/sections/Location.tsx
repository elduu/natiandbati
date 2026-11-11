import { SECTION_IDS } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Place {
  id: string;
  label: string;
  /** Exact coordinates like "9.0054,38.7636" (best), or a place name. Used when no share link is set. */
  query: string;
  /** Optional: the Google Maps share link (https://maps.app.goo.gl/...). If set, the card opens exactly this link. */
  url?: string;
}

// TODO: fill in the three places below.
const PLACES: Place[] = [
  {
    id: "church",
    label: "Church",
    query: "9.0054,38.7636",
    url: "https://maps.app.goo.gl/PASTE_CHURCH_LINK",
  },
  {
    id: "bride",
    label: "Bride’s Home",
    query: "9.0054,38.7636",
    url: "https://maps.app.goo.gl/PASTE_BRIDE_LINK",
  },
  {
    id: "groom",
    label: "Groom’s Home",
    query: "9.0054,38.7636",
    url: "https://maps.app.goo.gl/PASTE_GROOM_LINK",
  },
];

const mapLink = ({ url, query }: Place) =>
  url ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export function Location() {
  return (
    <Section id={SECTION_IDS.location} width="5xl">
      <SectionHeading
        eyebrow="Find your way"
        title="Locations"
        subtitle="Tap a place to open it in Maps."
      />

      <Reveal className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-3 sm:gap-5">
        {PLACES.map((place) => (
          <a
            key={place.id}
            href={mapLink(place)}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col items-center rounded-2xl border border-accent/40 bg-card px-5 py-5 text-center shadow-soft transition-all hover:-translate-y-1 hover:border-accent hover:shadow-elegant sm:py-7"
          >
            <h3 className="text-lg font-medium text-primary sm:text-xl">{place.label}</h3>
            <span className="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-accent sm:text-xs">
              View on map
            </span>
          </a>
        ))}
      </Reveal>
    </Section>
  );
}