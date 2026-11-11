import { wedding } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

// TODO: the name of the church where the ceremony is held. While this is empty, that sentence is left out.
const CHURCH_NAME = "";

const CEREMONY_TIME = "3:00 PM";

// Always show the date as it is in Addis Ababa, whatever time zone the guest is in.
const dateText = wedding.date
  .toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "Africa/Addis_Ababa",
  })
  .toUpperCase();

export function FamilyInvitation() {
  return (
    <Section id="invitation" width="3xl">
      <Reveal className="text-center">
        <h2 className="text-3xl text-primary sm:text-5xl">Dear Family and Friends</h2>

        <blockquote className="mt-6 text-sm italic leading-7 text-muted-foreground sm:mt-8 sm:text-base">
          “A cord of three strands is not quickly broken.”
        </blockquote>
        <p className="mt-4 font-display text-lg text-foreground sm:mt-6 sm:text-xl">Ecclesiastes 4:12</p>

        <p className="mt-8 text-sm leading-7 text-muted-foreground sm:mt-10 sm:text-base sm:leading-8">
          Together with our families, we joyfully invite you to celebrate our marriage on{" "}
          <strong className="font-semibold text-foreground">{dateText}</strong>.
          {CHURCH_NAME && (
            <>
              {" "}
              The ceremony will be held at{" "}
              <strong className="font-semibold text-foreground">{CHURCH_NAME}</strong>, Addis Ababa.
            </>
          )}
        </p>
        <p className="mt-5 text-sm leading-7 text-muted-foreground sm:mt-7 sm:text-base sm:leading-8">
          The ceremony begins at{" "}
          <strong className="font-semibold text-foreground">{CEREMONY_TIME}</strong>.
        </p>
        <p className="mt-5 text-sm leading-7 text-muted-foreground sm:mt-7 sm:text-base sm:leading-8">
          We would be honored to have you share this special day with us.
        </p>

        {/* Two interlocking rings, drawn with CSS (no icons) */}
        <div className="mx-auto mt-8 flex w-fit items-center sm:mt-10" aria-hidden="true">
          <span className="h-8 w-8 rounded-full border-[3px] border-accent" />
          <span className="-ml-3 h-8 w-8 rounded-full border-[3px] border-tan" />
        </div>
      </Reveal>
    </Section>
  );
}