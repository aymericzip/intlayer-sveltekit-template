import type { Handle } from "@sveltejs/kit";
import { getLocalizedUrl } from "intlayer"; // Or wherever your config is
import { getLocale } from "$lib/getLocale"; // The helper you adapted for Svelte

export const handle: Handle = async ({ event, resolve }) => {
  const detectedLocale = getLocale(event); // Use your detection logic

  // 2. Check if the current path already starts with a locale (e.g. /fr, /en)
  const pathname = event.url.pathname;
  const targetPathname = getLocalizedUrl(pathname, detectedLocale);

  // 3. If NO locale is present in the URL (e.g. user visits "/"), redirect them
  if (targetPathname !== pathname) {
    return new Response(undefined, {
      headers: { Location: targetPathname },
      status: 307, // Temporary redirect
    });
  }

  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%lang%", detectedLocale),
  });
};
