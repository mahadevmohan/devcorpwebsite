// lib/utils.ts
export function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}
