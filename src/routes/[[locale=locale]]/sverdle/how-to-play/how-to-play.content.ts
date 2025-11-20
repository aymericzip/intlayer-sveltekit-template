import { t, type Dictionary } from "intlayer";

const sverdleHowToContent = {
  key: "sverdle-how-to",
  content: {
    meta: {
      title: t({
        en: "How to play Sverdle",
        fr: "Comment jouer à Sverdle",
        es: "Cómo jugar a Sverdle",
      }),
      description: t({
        en: "How to play Sverdle",
        fr: "Comment jouer à Sverdle",
        es: "Cómo jugar a Sverdle",
      }),
    },
    heading: t({
      en: "How to play Sverdle",
      fr: "Comment jouer à Sverdle",
      es: "Cómo jugar a Sverdle",
    }),
    intro: {
      prefix: t({
        en: "Sverdle is a clone of",
        fr: "Sverdle est un clone de",
        es: "Sverdle es un clon de",
      }),
      linkLabel: t({
        en: "Wordle",
        fr: "Wordle",
        es: "Wordle",
      }),
      suffix: t({
        en: ", the word guessing game. To play, enter a five-letter English word. For example:",
        fr: ", le jeu de devinettes de mots. Pour jouer, saisissez un mot anglais de cinq lettres. Par exemple :",
        es: ", el juego de adivinar palabras. Para jugar, introduce una palabra en inglés de cinco letras. Por ejemplo:",
      }),
    },
    explanation: {
      line1Part1: t({
        en: "The ",
        fr: "La lettre ",
        es: "La letra ",
      }),
      line1Part2: t({
        en: " is in the right place. ",
        fr: " est bien placée. ",
        es: " está en el lugar correcto. ",
      }),
      line2Part1: t({
        en: " and ",
        fr: " et la lettre ",
        es: " y la letra ",
      }),
      line2Part2: t({
        en: " are the right letters, but in the wrong place. ",
        fr: " sont correctes, mais pas au bon endroit. ",
        es: " son correctas, pero están en la posición incorrecta. ",
      }),
      line3: t({
        en: "The other letters are wrong, and can be discarded. ",
        fr: "Les autres lettres sont incorrectes et peuvent être ignorées. ",
        es: "Las otras letras son incorrectas y pueden descartarse. ",
      }),
      line4: t({
        en: "Let's make another guess:",
        fr: "Faisons une autre tentative :",
        es: "Hagamos otro intento:",
      }),
    },
    success: {
      prefix: t({
        en: "This time we guessed right! You have ",
        fr: "Cette fois nous avons trouvé ! Vous avez ",
        es: "¡Esta vez acertamos! Tienes ",
      }),
      count: t({
        en: "six",
        fr: "six",
        es: "seis",
      }),
      suffix: t({
        en: " guesses to get the word.",
        fr: " tentatives pour trouver le mot.",
        es: " intentos para acertar la palabra.",
      }),
    },
    server: {
      part1: t({
        en: "Unlike the original Wordle, Sverdle runs on the server instead of in the browser, making it impossible to cheat. It uses ",
        fr: "Contrairement au Wordle original, Sverdle s'exécute sur le serveur plutôt que dans le navigateur, ce qui rend la triche impossible. Il utilise ",
        es: "A diferencia del Wordle original, Sverdle se ejecuta en el servidor en lugar de en el navegador, lo que hace imposible hacer trampas. Utiliza ",
      }),
      part2: t({
        en: " and cookies to submit data, meaning you can even play with JavaScript disabled!",
        fr: " et des cookies pour envoyer les données, ce qui signifie que vous pouvez même y jouer avec JavaScript désactivé !",
        es: " y cookies para enviar los datos, lo que significa que incluso puedes jugar con JavaScript desactivado.",
      }),
    },
  },
} satisfies Dictionary;

export default sverdleHowToContent;
