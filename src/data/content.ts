/**
 * Static page content. Keeping copy out of the components makes it easy to edit
 * without touching any markup.
 */
import { wedding } from "@/config/site";
import * as img from "@/assets/images";

export interface Photo {
  src: string;
  alt: string;
}

/* ───────── Calendar / event details ───────── */
export const events = [
  { icon: "💍", title: "The Ceremony", time: wedding.ceremonyTime, desc: "Exchange of vows in the garden pavilion." },
  { icon: "🥂", title: "The Reception", time: wedding.receptionTime, desc: "Dinner, dancing & celebration in the grand hall." },
] as const;

/* ───────── About the couple ───────── */
export const people = [
  {
    name: wedding.bride,
    role: "The Bride",
    img: img.bride,
    bio: "An architect with a love for old books, slow mornings, and wildflowers. Amara fills every room with warmth and finds beauty in the smallest details — qualities Julian fell for the moment they met.",
  },
  {
    name: wedding.groom,
    role: "The Groom",
    img: img.groom,
    bio: "A film composer who collects vinyl and bad jokes in equal measure. Julian is the steady, gentle heart of every gathering, and he has loved Amara since their very first cup of coffee together.",
  },
] as const;

/* ───────── Love story timeline ───────── */
export const milestones = [
  {
    year: "Six years ago",
    title: "First Meeting",
    text: "Six years ago, our paths first crossed at a recording studio, where Bati had come to record songs. It was the start of a friendship we never expected would become so much more.",
    img: img.hero,
  },
  {
    year: "Through the years",
    title: "Meeting at Church",
    text: "After that, we met most of the time at church. Week after week, our friendship grew in faith and in the quiet moments we shared.",
    img: img.g2,
  },
  {
    year: "July 12, 2025 · Hamle 5, 2017 E.C.",
    title: "The Proposal",
    text: "A beautiful new chapter began on this day, turning years of friendship and love into a promise of a lifetime.",
    img: img.g4,
  },
  {
    year: "July 19, 2025 · Hamle 12, 2017 E.C.",
    title: "Shemgelna",
    text: "A week later, our families came together for the Shemgelna, honoring our culture and the traditions passed down to us, and blessing our journey.",
    img: img.g5,
  },
  {
    year: "November 21, 2026 · Hidar 12, 2019 E.C.",
    title: "Our Wedding",
    text: "And now, surrounded by everyone we love, we begin our greatest adventure yet: a lifetime, hand in hand.",
    img: img.hero,
  },
] as const;

/* ───────── Films ───────── */
export const videos = [
  { title: "Engagement Film", poster: img.g5, youtubeId: "ScMzIvxBSi4", label: "Watch our engagement story" },
  { title: "Pre-Wedding Shoot", poster: img.g2, youtubeId: "ysz5S6PUM-U", label: "Behind the scenes" },
] as const;

/* ───────── Galleries ───────── */
export const galleryPhotos: Photo[] = [
  { src: img.g1, alt: "Navy and tan rose bouquet" },
  { src: img.g2, alt: "Couple walking through a golden field at sunset" },
  { src: img.bride, alt: "Bride holding her bouquet" },
  { src: img.g3, alt: "Elegant reception table setting" },
  { src: img.g4, alt: "Couple holding hands with wedding rings" },
  { src: img.hero, alt: "Couple embracing at golden hour" },
  { src: img.g5, alt: "First dance under string lights" },
];

export const marqueePhotos: Photo[] = [
  { src: img.hero, alt: "Couple at golden hour" },
  { src: img.g2, alt: "Couple in a field" },
  { src: img.g3, alt: "Reception table" },
  { src: img.g4, alt: "Holding hands" },
  { src: img.g5, alt: "First dance" },
  { src: img.g1, alt: "Bouquet" },
];

/* ───────── RSVP ───────── */
export const mealOptions = ["Beef Tenderloin", "Herb Chicken", "Pan-Seared Salmon", "Vegetarian", "Vegan"] as const;

/* ───────── Gift registry ───────── */
export const gifts = [
  { icon: "🏡", title: "Our First Home", desc: "Help us furnish the cozy little place we'll call home.", raised: 68, kind: "Cash Fund" },
  { icon: "✈️", title: "Honeymoon in Santorini", desc: "Send us off to the Greek isles for a dream getaway.", raised: 45, kind: "Honeymoon Fund" },
  { icon: "🍽️", title: "Kitchen & Dining Set", desc: "Hand-crafted ceramics and cookware for memorable meals.", raised: 82, kind: "Traditional" },
  { icon: "🌿", title: "Garden of Our Own", desc: "Plants, tools, and a little patch of green to grow together.", raised: 30, kind: "Traditional" },
] as const;

/* ───────── Guest wishes ───────── */
export const wishes = [
  { name: "Sophia & Mark", text: "Wishing you a lifetime of love and laughter. So happy for you both!" },
  { name: "Grandma Rose", text: "My heart is full. May your marriage be as beautiful as your love." },
  { name: "The Carters", text: "Two wonderful people, one perfect match. Congratulations!" },
  { name: "Daniel", text: "Cheers to the happy couple — here's to forever and always." },
  { name: "Aunt Mei", text: "May every day together be brighter than the last. Love you both." },
  { name: "Liam & Ava", text: "Can't wait to dance the night away celebrating your love!" },
  { name: "Priya", text: "Sending you all the love in the world on your special day." },
  { name: "The Office Crew", text: "From colleagues to your biggest fans — congratulations!" },
] as const;
