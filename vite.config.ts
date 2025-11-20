import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { intlayer, intlayerProxy } from "vite-intlayer";

export default defineConfig({
  plugins: [intlayer(), sveltekit(), intlayerProxy()],
  server: {
    fs: {
      allow: [".svelte-kit", ".intlayer"],
    },
  },
});
