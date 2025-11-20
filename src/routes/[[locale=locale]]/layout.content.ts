import { t, type Dictionary } from "intlayer";

const layoutContent = {
  key: "layout",
  content: {
    footer: {
      prefix: t({
        en: "Visit",
        fr: "Visitez",
        es: "Visita",
      }),
      linkLabel: t({
        en: "svelte.dev/docs/kit",
        fr: "svelte.dev/docs/kit",
        es: "svelte.dev/docs/kit",
      }),
      suffix: t({
        en: "to learn about SvelteKit",
        fr: "pour en savoir plus sur SvelteKit",
        es: "para aprender más sobre SvelteKit",
      }),
    },
  },
} satisfies Dictionary;

export default layoutContent;
