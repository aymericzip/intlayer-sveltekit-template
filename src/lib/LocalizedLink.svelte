<script lang="ts">
  import { getLocalizedUrl } from "intlayer";
  import { useLocale } from 'svelte-intlayer';

  export let href = "";
  const { locale } = useLocale();

  // Helper to prefix URL
  $: localizedHref = getLocalizedUrl(href, $locale);
</script>

<a href={localizedHref}>
  <slot />
</a>