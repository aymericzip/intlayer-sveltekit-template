<script lang="ts">
  import { getLocalizedUrl, getLocaleName } from 'intlayer';
  import { useLocale } from 'svelte-intlayer';
  import { page } from '$app/state'; // Svelte 5 Runes mode
  import { goto } from '$app/navigation';

  const { locale, setLocale, availableLocales } = useLocale({
    onLocaleChange: (locale) => {
        const localizedPath = getLocalizedUrl(page.url.pathname, locale);
        goto(localizedPath);
    },
  });

</script>

<ul class="locale-list">
  {#each availableLocales as localeEl}
    <li>
      <a 
        href={getLocalizedUrl(page.url.pathname, localeEl)} 
        onclick={(e) => {
          e.preventDefault();

          setLocale(localeEl); // Will set the locale in the store
        }}
        class:active={$locale === localeEl}
      >
        {getLocaleName(localeEl)}
      </a>
    </li>
  {/each}
</ul>

<style>
  /* Basic styling to make the list look like a menu */
  .locale-list {
    list-style: none;
    padding: 0;
    margin: 0.5rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    
    /* color-mix takes your variable and mixes it with transparent.
      20% of the color = 0.2 opacity 
    */
    background: color-mix(in srgb, var(--color-theme-1, #888888) 20%, transparent);
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .locale-list li {
    display: inline-block;
    padding: 3px;
    border-radius: 0.5rem;
    /* smooth transition for the hover effect */
    transition: background-color 0.2s ease; 
    cursor: pointer; /* Indicates it's clickable */
  }

  .locale-list li a {
    display: block;
    padding: 1rem;
  }

  /* Hover effect on the list item */
  .locale-list li:hover {
    /* 30% of the color = 0.3 opacity */
    background: color-mix(in srgb, var(--color-theme-1, #888888) 30%, transparent);
  }

  .active {
    font-weight: bold;
    text-decoration: underline;
  }
</style>