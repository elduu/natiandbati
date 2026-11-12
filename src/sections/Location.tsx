import { SECTION_IDS } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Place {
  id: string;
  label: string;
  /** Exact coordinates like "9.0054,38.7636" (best), or a place name. Used for the map and as a fallback for the link. */
  query: string;
  /** Optional: the Google Maps share link (https://maps.app.goo.gl/...). If set, the button opens exactly this link. */
  url?: string;
}

// TODO: fill in the three places below.
const PLACES: Place[] = [
  {
    id: "church",
    label: "Church",
    query: "9.0054,38.7636",
    url: "https://maps.app.goo.gl/5aApw7pS5Avqtb7H8",
  },
 
  {
    id: "groom",
    label: "Groom’s Home",
    query: "9.0054,38.7636",
    url: "https://maps.app.goo.gl/hjCajvbMrgYPzZCE7",
  },
];

/** The place shown in the embedded map. */
const MAP_PLACE = PLACES[0];

const embedUrl = ({ query }: Place) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;

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

      {/* Map preview only: the top strip with Google's "Open in Maps" card is cropped out and the map is not clickable. */}
      <Reveal className="relative mx-auto h-56 max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-elegant sm:h-96 sm:rounded-3xl">
        <iframe
          title={`Map: ${MAP_PLACE.label}`}
          src={embedUrl(MAP_PLACE)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          tabIndex={-1}
          className="pointer-events-none absolute inset-x-0 -top-[4.5rem] block h-[calc(100%+4.5rem)] w-full border-0"
        />
      </Reveal>

      {/* Phones: three slim rows, stacked. From `sm` up: three cards side by side. */}
      <Reveal className="mx-auto mt-4 grid max-w-3xl gap-2 sm:mt-6 sm:grid-cols-3 sm:gap-5">
        {PLACES.map((place) => (
          <a
            key={place.id}
            href={mapLink(place)}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center justify-between rounded-xl border border-accent/40 bg-card px-4 py-2.5 shadow-soft transition-all hover:border-accent sm:flex-col sm:justify-center sm:rounded-2xl sm:px-5 sm:py-6 sm:hover:-translate-y-1 sm:hover:shadow-elegant"
          >
            <h3 className="text-sm font-medium text-primary sm:text-xl">{place.label}</h3>
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-accent sm:mt-1.5 sm:text-xs sm:tracking-[0.15em]">
              View on map
            </span>
          </a>
        ))}
      </Reveal>
    </Section>
  );
}