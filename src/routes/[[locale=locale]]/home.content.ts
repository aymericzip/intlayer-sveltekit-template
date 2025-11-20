import { t, type Dictionary } from "intlayer";

const homeContent = {
  key: "home",
  content: {
    meta: {
      title: t({
        en: "Home",
        fr: "Accueil",
        es: "Inicio",
      }),
      description: t({
        en: "Svelte demo app",
        fr: "Application de démonstration Svelte",
        es: "Aplicación de demostración Svelte",
      }),
    },
    hero: {
      imageAlt: t({
        en: "Welcome illustration",
        fr: "Illustration de bienvenue",
        es: "Ilustración de bienvenida",
      }),
      kicker: t({
        en: "to your new",
        fr: "dans votre nouvelle",
        es: "a tu nueva",
      }),
      highlight: t({
        en: "SvelteKit app",
        fr: "application SvelteKit",
        es: "aplicación SvelteKit",
      }),
    },
    instructions: {
      prefix: t({
        en: "try editing",
        fr: "essayez de modifier",
        es: "prueba a editar",
      }),
      filePath: t({
        en: "src/routes/+page.svelte",
        fr: "src/routes/+page.svelte",
        es: "src/routes/+page.svelte",
      }),
    },
  },
} satisfies Dictionary;

export default homeContent;
