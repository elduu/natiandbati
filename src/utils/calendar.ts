import { wedding } from "@/config/site";

const EVENT_DURATION_MS = 6 * 60 * 60 * 1000;

/** `2026-09-12T16:00:00.000Z` → `20260912T160000Z` */
function toCalendarStamp(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

/** Links for adding the wedding to Google, Outlook and Apple/ICS calendars. */
export function getCalendarLinks() {
  const start = wedding.date;
  const end = new Date(start.getTime() + EVENT_DURATION_MS);
  const title = `${wedding.bride} & ${wedding.groom}'s Wedding`;
  const details = `Join us to celebrate the wedding of ${wedding.bride} & ${wedding.groom}.`;
  const location = `${wedding.venue.name}, ${wedding.venue.address}`;

  const google =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    `&text=${encodeURIComponent(title)}` +
    `&dates=${toCalendarStamp(start)}/${toCalendarStamp(end)}` +
    `&details=${encodeURIComponent(details)}` +
    `&location=${encodeURIComponent(location)}`;

  const outlook =
    "https://outlook.live.com/calendar/0/deeplink/compose" +
    `?subject=${encodeURIComponent(title)}` +
    `&startdt=${start.toISOString()}&enddt=${end.toISOString()}` +
    `&body=${encodeURIComponent(details)}` +
    `&location=${encodeURIComponent(location)}` +
    "&path=/calendar/action/compose&rru=addevent";

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `DTSTART:${toCalendarStamp(start)}`,
    `DTEND:${toCalendarStamp(end)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${details}`,
    `LOCATION:${location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const apple = `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;

  return { google, outlook, apple };
}
