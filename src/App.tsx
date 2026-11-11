import { useState } from "react";
import { PrefsProvider } from "@/context/PrefsContext";
import { useBackgroundMusic } from "@/hooks/useBackgroundMusic";
import { Footer } from "@/components/layout/Footer";
import { FloatingMusic } from "@/components/layout/FloatingMusic";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/sections/About";
import { Countdown } from "@/sections/Countdown";
import { EventDetails } from "@/sections/EventDetails";
import { Films } from "@/sections/Films";
import { Gallery } from "@/sections/Gallery";
import { GalleryMarquee } from "@/sections/GalleryMarquee";
import { Gifts } from "@/sections/Gifts";
import { GuestGallery } from "@/sections/GuestGallery";
import { Hero } from "@/sections/Hero";
import { Invitation } from "@/sections/Invitation";
import { Location } from "@/sections/Location";
import { Rsvp } from "@/sections/Rsvp";
import { Story } from "@/sections/Story";
import { Wishes } from "@/sections/Wishes";

function WeddingExperience() {
  const [opened, setOpened] = useState(false);
  const music = useBackgroundMusic();

  const openInvitation = () => {
    // Starting audio must happen inside this click handler to satisfy browser autoplay rules.
    try {
      music.start();
    } catch {
      /* keep the invitation usable when audio is unavailable */
    }
    setOpened(true);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  if (!opened) return <Invitation onOpen={openInvitation} />;

  return (
    <div className="overflow-x-clip bg-background">
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <EventDetails />
        <About />
        <Story />
        <Films />
        <Gallery />
        <GalleryMarquee />
        <GuestGallery />
        <Rsvp />
        <Gifts />
        <Wishes />
        <Location />
      </main>
      <Footer />
      <FloatingMusic music={music} />
    </div>
  );
}

export default function App() {
  return (
    <PrefsProvider>
      <WeddingExperience />
    </PrefsProvider>
  );
}
