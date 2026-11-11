import { wedding } from "@/config/site";

/** Embed + deep links for the venue, built from `wedding.venue.mapsQuery`. */
export function getMapLinks() {
  const q = encodeURIComponent(wedding.venue.mapsQuery);
  return {
    embed: `https://maps.google.com/maps?q=${q}&output=embed`,
    directions: [
      { label: "Google Maps", icon: "🧭", href: `https://www.google.com/maps/dir/?api=1&destination=${q}` },
      { label: "Apple Maps", icon: "🗺️", href: `https://maps.apple.com/?daddr=${q}` },
      { label: "Waze", icon: "🚗", href: `https://waze.com/ul?q=${q}&navigate=yes` },
      { label: "View on Map", icon: "📍", href: `https://www.google.com/maps/search/?api=1&query=${q}` },
    ],
  };
}
