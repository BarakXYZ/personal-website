"use client";

import { clsx } from "clsx";

// Color mapping object for better maintainability
const colorMap = {
  purple: {
    hover: "hover:bg-purple-800",
    text: "text-purple-200",
  },
  blue: {
    hover: "hover:bg-blue-800",
    text: "text-blue-200",
  },
  red: {
    hover: "hover:bg-red-800",
    text: "text-red-200",
  },
  // You can add more colors as needed
};

function SocialButton({
  link,
  color,
  children,
  className,
}: {
  link: string;
  color: keyof typeof colorMap;
  children: React.ReactNode;
  className?: string;
}) {
  // Get color classes or fallback to default
  const colorClasses = colorMap[color] || {
    hover: "hover:bg-gray-800",
    text: "text-white",
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "text-sm px-4 py-2 rounded-full bg-black transition-colors w-24 text-center border border-white/30",
        colorClasses.hover,
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Socials() {
  return (
    <div className="flex flex-row gap-4 mt-4 justify-center w-full">
      <SocialButton link="https://github.com/BarakXYZ" color="purple">
        Github
      </SocialButton>
      <SocialButton link="https://www.linkedin.com/in/barak-xyz/" color="blue">
        LinkedIn
      </SocialButton>
      <SocialButton
        link="https://www.youtube.com/playlist?list=PLpRAv_kFAitTmkBGVkdrU_nXHuhYDcvEj"
        color="red"
      >
        YouTube
      </SocialButton>
    </div>
  );
}
