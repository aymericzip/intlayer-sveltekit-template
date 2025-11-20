import { type Dictionary, t } from "intlayer";

const aboutContent = {
  key: "about",
  content: {
    meta: {
      title: t({
        en: "About",
        fr: "À propos",
        es: "Acerca de",
      }),
      description: t({
        en: "About this app",
        fr: "À propos de cette application",
        es: "Acerca de esta aplicación",
      }),
    },
    heading: t({
      en: "About this app",
      fr: "À propos de cette application",
      es: "Acerca de esta aplicación",
    }),
    intro: {
      prefix: t({
        en: "This is a",
        fr: "Ceci est une",
        es: "Esta es una",
      }),
      linkLabel: t({
        en: "SvelteKit",
        fr: "SvelteKit",
        es: "SvelteKit",
      }),
      suffix: t({
        en: "app.",
        fr: "application.",
        es: "aplicación.",
      }),
      instructions: t({
        en: "You can make your own by typing the following into your command line and following the prompts:",
        fr: "Vous pouvez créer la vôtre en tapant la commande suivante dans votre terminal et en suivant les instructions :",
        es: "Puedes crear la tuya escribiendo lo siguiente en tu terminal y siguiendo las indicaciones:",
      }),
    },
    staticHtml: t({
      en: "The page you're looking at is purely static HTML, with no client-side interactivity needed. Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening the devtools network panel and reloading.",
      fr: "La page que vous consultez est entièrement en HTML statique, sans interaction côté client nécessaire. Nous n'avons donc pas besoin de charger de JavaScript. Essayez d'afficher le code source de la page ou d'ouvrir l'onglet réseau des outils de développement avant de recharger.",
      es: "La página que estás viendo es HTML puramente estático, sin necesidad de interactividad en el lado del cliente. Por ello, no necesitamos cargar JavaScript. Prueba a ver el código fuente de la página o a abrir la pestaña de red de las devtools y vuelve a cargar.",
    }),
    sverdle: {
      prefix: t({
        en: "The",
        fr: "La",
        es: "La",
      }),
      linkLabel: t({
        en: "Sverdle",
        fr: "Sverdle",
        es: "Sverdle",
      }),
      suffix: t({
        en: "page illustrates SvelteKit's data loading and form handling.",
        fr: "page illustre le chargement de données et la gestion des formulaires dans SvelteKit.",
        es: "página ilustra la carga de datos y la gestión de formularios de SvelteKit.",
      }),
      cta: t({
        en: "Try using it with JavaScript disabled!",
        fr: "Essayez de l'utiliser avec JavaScript désactivé !",
        es: "¡Prueba a usarla con JavaScript desactivado!",
      }),
    },
  },
} satisfies Dictionary;

export default aboutContent;
