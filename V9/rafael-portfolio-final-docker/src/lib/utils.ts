import { clsx } from "clsx";

export function cn(...classes: Array<string | undefined | null | false>) {
  return clsx(classes);
}

export function formatPhoneBRFromE164(e164: string) {
  // +55DDDNXXXXXXXX
  const digits = e164.replace(/\D/g, "");
  if (!digits.startsWith("55") || digits.length < 12) return e164;
  const ddd = digits.slice(2, 4);
  const rest = digits.slice(4);
  const part1 = rest.length === 9 ? rest.slice(0, 5) : rest.slice(0, 4);
  const part2 = rest.length === 9 ? rest.slice(5) : rest.slice(4);
  return `+55 (${ddd}) ${part1}-${part2}`;
}
