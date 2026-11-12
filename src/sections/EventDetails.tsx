import { useState } from "react";
import hero from "@/assets/image_14.webp";
import { SECTION_IDS, wedding } from "@/config/site";
import { getCalendarLinks } from "@/utils/calendar";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Always show the date as it is in Addis Ababa, whatever time zone the guest is in.
const TZ = "Africa/Addis_Ababa";
const weekday = wedding.date.toLocaleDateString("en-US", { weekday: "long", timeZone: TZ });
const dayOfMonth = wedding.date.toLocaleDateString("en-US", { day: "numeric", timeZone: TZ });
const monthYear = wedding.date.toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
  timeZone: TZ,
});

const events = [
  {
    title: "Photo Program",
    time: "8:00 – 9:30 AM",
    desc: "The event starts with the photo program.",
  },
  {
    title: "Lunch",
    time: "11:00 AM",
    desc: "Lunch at both the bride’s and the groom’s homes.",
  },
  {
    title: "Going to the Bride’s House",
    time: "12:00 PM",
    desc: "Everyone moves to the bride’s house.",
  },
  {
    title: "Going to the Church",
    time: "3:00 PM",
    desc: "We head to the church for the wedding ceremony.",
  },
  {
    title: "Cake Ceremony",
    time: "5:30 PM",
    desc: "Cutting the cake and celebrating together.",
  },
];

function AddToCalendar() {
  const [open, setOpen] = useState(false);
  const links = getCalendarLinks();

  const options = [
    { label: "Google Calendar", href: links.google, download: false },
    { label: "Apple Calendar", href: links.apple, download: true },
    { label: "Outlook", href: links.outlook, download: false },
  ];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-center rounded-xl border border-accent bg-accent/10 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent/20 sm:rounded-2xl sm:py-4 sm:text-base"
        aria-expanded={open}
        aria-haspopup="true"
      >
        Add to Calendar
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-border bg-popover shadow-elegant sm:rounded-2xl">
          {options.map((opt) => (
            <a
              key={opt.label}
              href={opt.href}
              onClick={() => setOpen(false)}
              {...(opt.download ? { download: "wedding.ics" } : { target: "_blank", rel: "noreferrer" })}
              className="block border-b border-border/50 px-4 py-3 text-sm text-foreground transition-colors last:border-0 hover:bg-secondary sm:px-5 sm:text-base"
            >
              {opt.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function EventDetails() {
  return (
    <Section id={SECTION_IDS.calendar} tone="muted" width="5xl">
      <SectionHeading
        eyebrow="Save the date"
        title="Event Schedule"
        subtitle="Add it to your calendar so you don't miss a moment."
      />

      <Reveal className="grid items-stretch gap-4 md:grid-cols-[1fr_1.1fr] md:gap-6">
        {/* Date card with a blurred photo behind it, tinted blue */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-primary px-6 py-8 text-center text-cream shadow-elegant sm:rounded-3xl sm:p-10">
          <img
            src={hero}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full scale-110 object-cover blur-md"
          />
          {/* Blue shade: lighter at the top, deeper at the bottom */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(179, 175, 175, 0.55)))",
            }}
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.25em] text-sky-200 sm:text-sm sm:tracking-[0.3em]">{weekday}</p>
            <p className="my-2 font-display text-7xl font-semibold leading-none text-white sm:my-3 sm:text-8xl">
              {dayOfMonth}
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-sky-200 sm:text-sm sm:tracking-[0.3em]">{monthYear}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-5">
          {events.map((event, index) => (
            <div key={event.title} className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-soft sm:gap-4 sm:rounded-2xl sm:p-6">
              {/* Number badge instead of an icon */}
              <span
                className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-cream sm:size-9 sm:text-sm"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 sm:gap-x-3">
                  <h3 className="text-base font-medium text-primary sm:text-2xl">{event.title}</h3>
                  <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-semibold text-accent-foreground sm:px-3 sm:text-sm">
                    {event.time}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground sm:text-base">{event.desc}</p>
              </div>
            </div>
          ))}
         
        </div>
      </Reveal>
    </Section>
  );
}