import { type IntlayerConfig, Locales } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.FRENCH, Locales.SPANISH],
    defaultLocale: Locales.ENGLISH,
  },
  editor: {
    enabled: true,
    applicationURL: "http://localhost:5173",
    editorURL: "http://localhost:8000",
    clientId: process.env.INTLAYER_CLIENT_ID,
    clientSecret: process.env.INTLAYER_CLIENT_SECRET,
  },
  log: {
    mode: "verbose",
  },
  ai: {
    model: "gpt-5-mini",
    apiKey: process.env.OPENAI_API_KEY,
  },
  routing: {
    storage: ["cookie", "localStorage", "header"],
  },
};

export default config;
