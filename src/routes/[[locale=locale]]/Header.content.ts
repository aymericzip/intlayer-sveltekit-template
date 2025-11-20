import { t, type Dictionary } from "intlayer";

const headerContent = {
  key: "header",
  content: {
    docsLinkLabel: t({
      en: "Open the SvelteKit docs",
      fr: "Ouvrir la documentation SvelteKit",
      es: "Abrir la documentación de SvelteKit",
    }),
    logoAlt: t({
      en: "SvelteKit logo",
      fr: "Logo de SvelteKit",
      es: "Logotipo de SvelteKit",
    }),
    nav: {
      home: t({
        en: "Home",
        fr: "Accueil",
        es: "Inicio",
      }),
      about: t({
        en: "About",
        fr: "À propos",
        es: "Acerca de",
      }),
      sverdle: t({
        en: "Sverdle",
        fr: "Sverdle",
        es: "Sverdle",
      }),
    },
    githubLinkLabel: t({
      en: "Visit the template on GitHub",
      fr: "Voir le modèle sur GitHub",
      es: "Ver la plantilla en GitHub",
    }),
    githubAlt: t({
      en: "GitHub logo",
      fr: "Logo GitHub",
      es: "Logotipo de GitHub",
    }),
  },
} satisfies Dictionary;

export default headerContent;
