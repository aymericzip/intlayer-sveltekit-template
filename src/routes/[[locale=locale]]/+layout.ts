import type { Load } from "@sveltejs/kit";
import { configuration, type Locale } from "intlayer";

export const prerender = true;

// Use the generic Load type
export const load: Load = ({ params }) => {
  const locale: Locale =
    (params.locale as Locale) ??
    configuration.internationalization.defaultLocale;

  return {
    locale,
  };
};
