import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function decodeUrl(url: string): string {
  return decodeURI(url).replaceAll("-", " ").replaceAll("%2C", ",");
}
export function encodeUrl(url: string): string {
  return decodeURI(url).replaceAll(" ", "-").replaceAll("%2C", ",");
}

// export function functionKeysArrayToObject(functionKeys: string[]): object {
//   if(functionKeys)
//   return {};
// }
