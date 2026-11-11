# Wedding Invitation

A mobile-first, single-page wedding website built with **React 19 + TypeScript + Vite + Tailwind CSS v4**.
No router, no SSR, no UI-kit dependency — just React.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

## Make it yours

| What                                                        | Where                              |
| ----------------------------------------------------------- | ---------------------------------- |
| Names, date, times, venue, contact, nav links, social links | `src/config/site.ts`               |
| Story, gifts, wishes, photos, videos, meal options          | `src/data/content.ts`              |
| Photos                                                      | `src/assets/images/` (+ `index.ts`) |
| Amharic translations                                        | `src/i18n/translations.ts`         |
| Colours & fonts                                             | `src/index.css`, `index.html`      |
| Page title / social-share meta / JSON-LD                    | `index.html`                       |

## Project structure

```
src/
├── main.tsx              entry point
├── App.tsx               invitation screen → full site
├── index.css             Tailwind + design tokens + animations
├── config/               site-wide settings (couple, venue, section ids)
├── data/                 page copy and media lists
├── i18n/                 translation dictionary
├── context/              PrefsContext (language + theme)
├── hooks/                usePrefs, useInView, useCountdown, useScrolled, useBackgroundMusic
├── utils/                calendar links, map links, scrolling, storage, cn()
├── components/
│   ├── layout/           Navbar, Footer, FloatingMusic
│   └── ui/               Button, Section, SectionHeading, Reveal, Modal, Lightbox, icons
└── sections/             Hero, Countdown, EventDetails, About, Story, Films, Gallery, …
```

## Notes

- **RSVP** is validated client-side only. Add your endpoint at the `TODO` in `src/sections/Rsvp.tsx`.
- **Guest photos** are kept in the visitor's browser session only; they are not uploaded anywhere.
- **Background music** is synthesised with the Web Audio API (no audio file) and starts when the invitation is opened.
- Language and theme choices are remembered in `localStorage`.
