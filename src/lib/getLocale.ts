import {
  configuration,
  getLocaleFromStorage,
  localeDetector,
  type Locale,
} from "intlayer";
import type { RequestEvent } from "@sveltejs/kit";

/**
 * Get the user's locale from the request event.
 * This function is used in the `handle` hook in `src/hooks.server.ts`.
 *
 * It first tries to get the locale from the Intlayer storage (cookies or custom headers).
 * If the locale is not found, it falls back to the browser's "Accept-Language" negotiation.
 *
 * @param event - The request event from SvelteKit
 * @returns The user's locale
 */
export const getLocale = (event: RequestEvent): Locale => {
  const defaultLocale = configuration?.internationalization?.defaultLocale;

  // 1. Try to get locale from Intlayer storage (Cookies or custom headers)
  const storedLocale = getLocaleFromStorage({
    // SvelteKit cookies access
    getCookie: (name: string) => event.cookies.get(name) ?? null,
    // SvelteKit headers access
    getHeader: (name: string) => event.request.headers.get(name) ?? null,
  });

  if (storedLocale) {
    return storedLocale;
  }

  // 2. Fallback to Browser "Accept-Language" negotiation
  const negotiatorHeaders: Record<string, string> = {};

  // Convert SvelteKit Headers object to a plain Record<string, string>
  event.request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const userFallbackLocale = localeDetector(negotiatorHeaders);

  if (userFallbackLocale) {
    return userFallbackLocale;
  }

  // 3. Return Default
  return defaultLocale;
};
