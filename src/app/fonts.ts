import localFont from "next/font/local";

// BDO Grotesk — primary sans for UI and body copy
export const sans = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    { path: "../../public/fonts/BDOGrotesk-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/BDOGrotesk-Medium.ttf", weight: "500", style: "normal" },
  ],
});

// MFB Oldstyle — serif for display headlines
export const serif = localFont({
  variable: "--font-serif",
  display: "swap",
  src: [
    { path: "../../public/fonts/MFBOldstyle-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/MFBOldstyle-Italic.otf", weight: "400", style: "italic" },
  ],
});
