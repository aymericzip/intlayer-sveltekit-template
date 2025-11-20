<script lang="ts">
	import { resolve } from '$app/paths';
	import { useIntlayer } from 'svelte-intlayer';

	const aboutContent = useIntlayer('about');
</script>

<svelte:head>
	<title>{$aboutContent.meta.title.value}</title>
	<meta name="description" content={$aboutContent.meta.description.value} />
</svelte:head>

<div class="text-column">
	<h1>{$aboutContent.heading.value}</h1>

	<p>
		{$aboutContent.intro.prefix.value}{' '}
		<a href="https://svelte.dev/docs/kit">{$aboutContent.intro.linkLabel.value}</a>{' '}
		{$aboutContent.intro.suffix.value}{' '}
		{$aboutContent.intro.instructions.value}
	</p>

	<pre>npx sv create</pre>

	<p>{$aboutContent.staticHtml.value}</p>

	<p>
		{$aboutContent.sverdle.prefix.value}{' '}
		<a href={resolve('/sverdle')}>{$aboutContent.sverdle.linkLabel.value}</a>{' '}
		{$aboutContent.sverdle.suffix.value}
		{$aboutContent.sverdle.cta.value}
	</p>
</div>
