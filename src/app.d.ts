// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      locale: import("intlayer").Locale;
    }
    interface LayoutData {
      locale: import("intlayer").Locale;
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
