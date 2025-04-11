"use client";
import React from "react";
import { Carousel, Card } from "./components/apple-cards-carousel";
import { DummyContent } from "./components/VideoContent";

import letamidImage from "../assets/letamid.jpg";
import vanGoghImage from "../assets/van-gogh.jpg";
import livingTheDreamImage from "../assets/living-the-dream.jpg";
import hyperpleasureImage from "../assets/hyperpleasure.jpg";
import ayefImage from "../assets/ayef.jpg";
import levadImage from "../assets/levad.jpg";
import selfHelpImage from "../assets/self-help.jpg";
import alufImage from "../assets/aluf.jpg";
import alakazamImage from "../assets/alakazam.jpg";
import ninaImage from "../assets/nina-spray.jpg";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={`card-${index}`} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Videos I made:
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Unreal Engine x MetaHumans | Dir. & Prod.",
    title: "When Tal Gets Tired",
    src: ayefImage,
    content: (
      <DummyContent
        videoData={{
          videoId: "lPx_E50Ykhg",
          title: "Music by: Tal Tirangle, Roy Kafri & Ori Shochat",
          description:
            "Using my favorite technologies; Unreal Engine & MetaHumans to create fun, experimental and bizzare music video <3",
        }}
      />
    ),
  },

  {
    category: "Unreal Engine x Green Screen | Dir. & Prod.",
    title: "🥄Alakazam🥄",
    src: alakazamImage,
    content: (
      <DummyContent
        videoData={{
          videoId: "skwCvWCw8rc",
          title: "Music by: Shemer & Perky",
          description:
            "I fell in love with Unreal Engine so bad and all I wanted to do was design environments and try new techniques. I pushed myself with Green Screen and 3D environment integration on this one.",
        }}
      />
    ),
  },
  {
    category: "Unreal Engine x Green Screen | Dir. & Prod.",
    title: "♾️LETAMID (4ever)♾️",
    src: letamidImage,
    content: (
      <DummyContent
        videoData={{
          videoId: "8KJJWDZYnAg",
          title: "Music by: Noam Doron",
          description:
            "That was the first music video I made with Unreal Engine. I remember being blown away by the graphic capabilities of this engine. The Real-Time design and iteration Unreal Engine allows is just next level.",
        }}
      />
    ),
  },
  {
    category: "Hardcore Glitching, VFX & 3D | Dir. & Prod.",
    title: "🎨Van Gogh",
    src: vanGoghImage,
    content: (
      <DummyContent
        videoData={{
          videoId: "_JFShtzxOO4",
          title: "Music by: Gido & Alon Renser",
          description:
            "A friend told me it's a love song for glitching techniques. Sure! I remember I was super obsessed with trying to make all shots cut seamlessly to one another. That took time.",
        }}
      />
    ),
  },
  {
    category: "Hardcore Glitching, VFX & 3D | Dir. & Prod.",
    title: "Hyperpleasure Let's.",
    src: hyperpleasureImage,
    content: (
      <DummyContent
        videoData={{
          videoId: "Ksvh9CUqpho",
          title: "Music by: Ilai Ashdot",
          description:
            "I discovered Data Moshing and was kind of obsessed with it. Filmed way too much footage that never went anywhere (lol) but it was a lot of fun.",
        }}
      />
    ),
  },
  {
    category: "Experimental iPhone | Dir. & Prod.",
    title: "WORLD CHAMP👽",
    src: alufImage,
    content: (
      <DummyContent
        videoData={{
          videoId: "0ufsKRR7RAQ",
          title: "Music by: Ilai Ashdot",
          description: "-----------------------------------------------Yes",
        }}
      />
    ),
  },
  {
    category: "Grlick. VFX & 3D | Dir. & Prod.",
    title: "Self-Help-Song 🫶",
    src: selfHelpImage,
    content: (
      <DummyContent
        videoData={{
          videoId: "X4VpRSjuT78",
          title: "Music by: The Kims (Yuval Geva)",
          description: "One (if not the) first music video I made. So cute!",
        }}
      />
    ),
  },
  {
    category: "VFX, Color, Green Screen | Co-Dir. & Prod.",
    title: "Living the Dream🌟",
    src: livingTheDreamImage,
    content: (
      <DummyContent
        videoData={{
          videoId: "yeRbmgX9evc",
          title: "Music by: Nunu (prod. by Ilai Ashdot)",
          description: "---------------------------------------------hi boy",
        }}
      />
    ),
  },
  {
    category: "Don't even... | Dir. & Prod. (ft. IlaiA)",
    title: "Nina's Spray🐀🔫",
    src: ninaImage,
    content: (
      <DummyContent
        videoData={{
          videoId: "teBs9Opsu8k",
          title: '"Music" by: Iali & I',
          description:
            "So... Ilai and I like to make fake jingles. That's a thing. I hope we'll get the chance to make more videos in the future. Not sure if that's a good idea (or legal in general)",
        }}
      />
    ),
  },
  {
    category: "Y2K, Unreal Engine | Dir. & Prod.",
    title: "Levad B'rchava",
    src: levadImage,
    content: (
      <DummyContent
        videoData={{
          videoId: "R76bLycvIs8",
          title: "Music by: Eden Derso & Maor Cohen",
          description: "----------------------------Y2K Purim vibes yeah",
        }}
      />
    ),
  },
];
