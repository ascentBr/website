import PixelCraft from "./pixelcraft";
// import Aurora from "./aurora";
// import Forge from "./forge";

export const projectRegistry = {
  pixelcraft: PixelCraft,
//   aurora: Aurora,
  // forge: Forge,
} as const;

export type ProjectSlug = keyof typeof projectRegistry;