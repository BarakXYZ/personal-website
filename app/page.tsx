"use client";
import { AppleCardsCarouselDemo } from "./apple-cards-demo";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import { Socials } from "./components/Socials";
import meImage from "./../assets/me.jpg";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="relative flex flex-col self-center items-center w-full">
          <div className="flex justify-center w-full">
            <AnimatedTooltip
              items={[
                {
                  id: 1,
                  name: "Barak",
                  designation:
                    "I like to build stuff. Mainly software these days. Also video & music sometimes <3",
                  image: meImage,
                },
              ]}
            />
          </div>
          <Socials />
        </div>
        <AppleCardsCarouselDemo />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
