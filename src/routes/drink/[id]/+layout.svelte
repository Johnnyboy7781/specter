<script>
	import { slide } from 'svelte/transition';
</script>

<header>
	<a
		in:slide={{ x: -50, duration: 250, delay: 250 }}
		out:slide={{ x: -50, duration: 250 }}
		href="/"
	>
		<img src="/header/arrow-back.svg" alt="Back arrow" />
	</a>
	<img
		in:slide={{ x: -50, duration: 250, delay: 250 }}
		out:slide={{ x: -50, duration: 250 }}
		src="/drink-placeholder.svg"
		alt="Skull icon"
	/>
	<img src="/header/settings.svg" alt="Settings icon" />
</header>

<slot />

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 1;
		background-color: #303134;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.7rem;
	}
	header img {
		width: 2.2rem;
		height: 2.2rem;
		filter: invert(97%) saturate(7487%) hue-rotate(77deg) brightness(85%) contrast(100%);
		aspect-ratio: 1;
	}
	a {
		display: flex;
	}
</style>
