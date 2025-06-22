export type ColorType =
  | "background"
  | "text"
  | "primary"
  | "detail"
  | "card"
  | "section"
  | "border"
  | "shadow";

/**
 * Converts a ColorType to a CSS variable string.
 * @param color - The ColorType to convert.
 * @returns A string representing the CSS variable for the given ColorType.
 */
export function ct2css(color: ColorType): string {
  return `var(--bc-${color})`;
}
