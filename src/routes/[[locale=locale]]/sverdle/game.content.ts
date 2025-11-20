import { t, type Dictionary } from "intlayer";

const sverdleGameContent = {
  key: "sverdle-game",
  content: {
    meta: {
      title: t({
        en: "Sverdle",
        fr: "Sverdle",
        es: "Sverdle",
      }),
      description: t({
        en: "A Wordle clone written in SvelteKit",
        fr: "Un clone de Wordle écrit avec SvelteKit",
        es: "Un clon de Wordle escrito con SvelteKit",
      }),
    },
    headings: {
      visuallyHidden: t({
        en: "Sverdle",
        fr: "Sverdle",
        es: "Sverdle",
      }),
      rowLabel: t({
        en: "Row",
        fr: "Ligne",
        es: "Fila",
      }),
    },
    links: {
      howToPlay: t({
        en: "How to play",
        fr: "Comment jouer",
        es: "Cómo jugar",
      }),
    },
    statuses: {
      exact: t({
        en: "correct",
        fr: "correct",
        es: "correcto",
      }),
      close: t({
        en: "present",
        fr: "présent",
        es: "presente",
      }),
      missing: t({
        en: "absent",
        fr: "absent",
        es: "ausente",
      }),
      empty: t({
        en: "empty",
        fr: "vide",
        es: "vacío",
      }),
    },
    results: {
      answerPrefix: t({
        en: "the answer was",
        fr: "la réponse était",
        es: "la respuesta era",
      }),
      win: t({
        en: "you won :)",
        fr: "vous avez gagné :)",
        es: "ganaste :)",
      }),
      lose: t({
        en: "game over :(",
        fr: "partie terminée :(",
        es: "fin de la partida :(",
      }),
      replay: t({
        en: "play again?",
        fr: "rejouer ?",
        es: "¿jugar otra vez?",
      }),
    },
    buttons: {
      enter: t({
        en: "enter",
        fr: "valider",
        es: "enviar",
      }),
      back: t({
        en: "back",
        fr: "retour",
        es: "borrar",
      }),
    },
  },
} satisfies Dictionary;

export default sverdleGameContent;
