<script lang="ts">
	import { useIntlayer } from 'svelte-intlayer';

	const howToPlayContent = useIntlayer('sverdle-how-to');
</script>

<svelte:head>
	<title>{$howToPlayContent.meta.title.value}</title>
	<meta name="description" content={$howToPlayContent.meta.description.value} />
</svelte:head>

<div class="text-column">
	<h1>{$howToPlayContent.heading.value}</h1>

	<p>
		{$howToPlayContent.intro.prefix.value}{' '}
		<a href="https://www.nytimes.com/games/wordle/index.html">
			{$howToPlayContent.intro.linkLabel.value}
		</a>
		{$howToPlayContent.intro.suffix.value}
	</p>

	<div class="example">
		<span class="close">r</span>
		<span class="missing">i</span>
		<span class="close">t</span>
		<span class="missing">z</span>
		<span class="exact">y</span>
	</div>

	<p>
		{$howToPlayContent.explanation.line1Part1.value}
		<span class="exact">y</span>
		{$howToPlayContent.explanation.line1Part2.value}
		<span class="close">r</span>
		{$howToPlayContent.explanation.line2Part1.value}
		<span class="close">t</span>
		{$howToPlayContent.explanation.line2Part2.value}
		{$howToPlayContent.explanation.line3.value}
		{$howToPlayContent.explanation.line4.value}
	</p>

	<div class="example">
		<span class="exact">p</span>
		<span class="exact">a</span>
		<span class="exact">r</span>
		<span class="exact">t</span>
		<span class="exact">y</span>
	</div>

	<p>
		{$howToPlayContent.success.prefix.value}
		<strong>{$howToPlayContent.success.count.value}</strong>
		{$howToPlayContent.success.suffix.value}
	</p>

	<p>
		{$howToPlayContent.server.part1.value}
		<code>&lt;form&gt;</code>
		{$howToPlayContent.server.part2.value}
	</p>
</div>

<style>
	span {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		font-size: 0.8em;
		width: 2.4em;
		height: 2.4em;
		background-color: white;
		box-sizing: border-box;
		border-radius: 2px;
		border-width: 2px;
		color: rgba(0, 0, 0, 0.7);
	}

	.missing {
		background: rgba(255, 255, 255, 0.5);
		color: rgba(0, 0, 0, 0.5);
	}

	.close {
		border-style: solid;
		border-color: var(--color-theme-2);
	}

	.exact {
		background: var(--color-theme-2);
		color: white;
	}

	.example {
		display: flex;
		justify-content: flex-start;
		margin: 1rem 0;
		gap: 0.2rem;
	}

	.example span {
		font-size: 1.4rem;
	}

	p span {
		position: relative;
		border-width: 1px;
		border-radius: 1px;
		font-size: 0.4em;
		transform: scale(2) translate(0, -10%);
		margin: 0 1em;
	}
</style>
