/**
 * Central wedding configuration.
 * Edit the values below to personalise the whole site.
 */

export const wedding = {
  bride: "Bethel",
  groom: "Natnael",

  hashtag: "#AmaraAndJulianForever",

  /** Local date & time of the ceremony — drives the countdown and calendar links. */
  date: new Date("2026-11-21T16:00:00"),

  dateLabel: "November 21, 2026",
  ceremonyTime: "3:00 PM",
  receptionTime: "6:30 PM",

  venue: {
    name: "Ashford Estate",
    address: "637 Province Line Road, Allentown, NJ 08501",
    short: "Allentown, New Jersey",
    mapsQuery: "Ashford Estate, 637 Province Line Road, Allentown, NJ 08501",
  },

  contact: {
    email: "inviteyours.com",
    phone: "090951370",
  },
} as const;

/** Anchor ids for every scroll target on the page. */
export const SECTION_IDS = {
  home: "home",
  countdown: "countdown",
  calendar: "calendar",
  about: "about",
  story: "story",
  films: "films",
  gallery: "gallery",
  guestGallery: "guest-gallery",
  rsvp: "rsvp",
  gifts: "gifts",
  wishes: "wishes",
  location: "location",

  invitation: "invitation",
  familyInvitation: "familyInvitation",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const navLinks: ReadonlyArray<{
  id: SectionId;
  label: string;
}> = [
  { id: SECTION_IDS.home, label: "Home" },
  { id: SECTION_IDS.story, label: "Our Story" },
  { id: SECTION_IDS.about, label: "About Us" },
  { id: SECTION_IDS.gallery, label: "Gallery" },
  { id: SECTION_IDS.guestGallery, label: "Guest Gallery" },
  { id: SECTION_IDS.rsvp, label: "RSVP" },
  { id: SECTION_IDS.gifts, label: "Gifts" },
  { id: SECTION_IDS.location, label: "Location" },
  { id: SECTION_IDS.wishes, label: "Wishes" },
  { id: SECTION_IDS.invitation, label: "Invitation" },
  { id: SECTION_IDS.familyInvitation, label: "Family Invitation" },
];

/** Social profiles shown in the footer. Replace `href` with real URLs. */
export const socials = [
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.2c3.2 0 3.6 0 4.9.07 3.3.15 4.8 1.7 4.95 4.95.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.15 3.2-1.65 4.8-4.95 4.95-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-3.3-.15-4.8-1.75-4.95-4.95C2.08 15.6 2.07 15.2 2.07 12s0-3.6.07-4.9C2.29 3.9 3.79 2.39 7.1 2.27 8.4 2.2 8.8 2.2 12 2.2Zm0 4.8a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5Zm5.2-9.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z",
  },
] as const;