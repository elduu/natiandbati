import { useState, type FormEvent, type ReactNode } from "react";
import { SECTION_IDS } from "@/config/site";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const API_BASE = "https://apibase.inviteyours.com/api";
const WEDDING_SLUG = "natiandbati";
const RSVP_API = `${API_BASE}/${WEDDING_SLUG}/rsvp`;

type Errors = Partial<Record<"name" | "wish" | "submit", string>>;
type Attendance = "yes" | "no";

const inputClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40 aria-[invalid=true]:border-destructive";

const attendanceOptions: ReadonlyArray<{ value: Attendance; label: string }> = [
  { value: "yes", label: "Joyfully accepts" },
  { value: "no", label: "Regretfully declines" },
];

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!String(data.get("name") ?? "").trim()) errors.name = "Please enter your name.";
  if (!String(data.get("wish") ?? "").trim()) errors.wish = "Please write a short wish for the couple.";
  return errors;
}

export function Rsvp() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [attending, setAttending] = useState<Attendance>("yes");
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const data = new FormData(e.currentTarget);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    try {
      const response = await fetch(RSVP_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          attending,
          wish: String(data.get("wish") ?? "").trim(),
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section id={SECTION_IDS.rsvp} tone="muted" width="3xl">
      <SectionHeading
        eyebrow="Will you join us?"
        title="RSVP"
        subtitle="We can't wait to celebrate with you."
      />

      {submitted ? (
        <div className="rounded-3xl bg-card p-8 text-center shadow-elegant sm:p-12" role="status">
          <div
            className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full bg-linear-to-br from-accent to-tan text-4xl text-accent-foreground"
            aria-hidden="true"
          >
            ✓
          </div>
          <h3 className="font-script text-4xl text-accent">Thank you!</h3>
          <p className="mt-2 text-2xl font-medium text-primary">Your response has been received</p>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            {attending === "yes"
              ? "We're overjoyed that you'll be part of our special day."
              : "You will be missed, and we're grateful you let us know."}
          </p>
          <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-7">
            Submit another response
          </Button>
        </div>
      ) : (
        <Reveal as="form" onSubmit={handleSubmit} noValidate className="grid gap-5 rounded-3xl bg-card p-6 shadow-elegant sm:p-10">
          <Field id="name" label="Full Name" error={errors.name}>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className={inputClass}
              placeholder="Your full name"
              maxLength={100}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
          </Field>

          <fieldset>
            <legend className="mb-2 block text-sm font-medium text-foreground">Will you attend?</legend>
            <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
              {attendanceOptions.map((option) => (
                <label
                  key={option.value}
                  className={cn(
                    "cursor-pointer rounded-xl border px-4 py-3 text-center text-sm font-medium transition-colors has-focus-visible:ring-2 has-focus-visible:ring-ring",
                    attending === option.value
                      ? "border-accent bg-accent/15 text-primary"
                      : "border-input bg-card text-muted-foreground",
                  )}
                >
                  <input
                    type="radio"
                    name="attending"
                    value={option.value}
                    checked={attending === option.value}
                    onChange={() => setAttending(option.value)}
                    className="sr-only"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>

          <Field id="wish" label="Your Wish for the Couple" error={errors.wish}>
            <textarea
              id="wish"
              name="wish"
              rows={4}
              className={inputClass}
              maxLength={500}
              placeholder="Share your well wishes..."
              aria-invalid={!!errors.wish}
              aria-describedby={errors.wish ? "wish-error" : undefined}
            />
          </Field>

          {errors.submit && (
            <p className="text-sm text-destructive" role="alert">
              {errors.submit}
            </p>
          )}

          <Button type="submit" size="lg" disabled={submitting} className="mt-2 w-full py-4 uppercase tracking-wider">
            {submitting ? "Sending..." : "Send RSVP"}
          </Button>
        </Reveal>
      )}
    </Section>
  );
}