import { t, type Dictionary } from "intlayer";

const counterContent = {
  key: "counter",
  content: {
    decrementAria: t({
      en: "Decrease the counter by one",
      fr: "Diminuer le compteur d'une unité",
      es: "Disminuir el contador en uno",
    }),
    incrementAria: t({
      en: "Increase the counter by one",
      fr: "Augmenter le compteur d'une unité",
      es: "Aumentar el contador en uno",
    }),
  },
} satisfies Dictionary;

export default counterContent;
