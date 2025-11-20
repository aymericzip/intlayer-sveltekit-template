<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcomeFallback from '$lib/images/svelte-welcome.png';
	import { useIntlayer } from 'svelte-intlayer';

	const homeContent = useIntlayer('home');
</script>

<svelte:head>
	<title>{$homeContent.meta.title.value}</title>
	<meta name="description" content={$homeContent.meta.description.value} />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcomeFallback} alt={$homeContent.hero.imageAlt.value} />
			</picture>
		</span>

		<svelte:component this={$homeContent.hero.kicker}/><br /><svelte:component this={$homeContent.hero.highlight}/>
	</h1>

	<h2>
		{$homeContent.instructions.prefix.value}{' '}
		<strong>{$homeContent.instructions.filePath.value}</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
