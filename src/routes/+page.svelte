<script>
	import { fly, slide } from 'svelte/transition';
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	export let data;
</script>

<header>
	<a href="/">
		<img src="/header/arrow-back.svg" alt="Back arrow" />
	</a>
	<img
		in:slide={{ x: -50, duration: 250, delay: 250 }}
		out:slide={{ x: -50, duration: 250 }}
		src="/header/skull.svg"
		alt="Skull icon"
	/>
	<img src="/header/settings.svg" alt="Settings icon" />
</header>

<body in:fly={{ x: -50, duration: 250, delay: 300 }} out:fly={{ x: -50, duration: 250 }}>
	{#each alphabet as letter}
		{#if data.data.find((drink) => {
			return drink.name[0] === letter;
		})}
			<h2 class="section-letter">{letter}</h2>
		{/if}
		{#each data.data as drink}
			{#if drink.name[0] === letter}
				<a class="drink" href="/drink/{drink.id}">
					<img src="./drink-placeholder.svg" alt="drink icon" />
					<div class="drink-info">
						<p class="drink-name">
							{drink.name}
						</p>
						<p class="drink-spirit">
							{drink.ingredients[0].split(' ')[1]}
						</p>
					</div>
				</a>
			{/if}
		{/each}
	{/each}

	<div class="add-drink-btn">+</div>
</body>

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
	header a {
		display: flex;
		opacity: 0;
		pointer-events: none;
	}
	.drink img {
		width: 2.2rem;
		filter: invert(97%) saturate(7487%) hue-rotate(77deg) brightness(85%) contrast(100%);
	}
	.section-letter {
		margin: 0.5rem;
		padding-bottom: 0.2rem;
		padding-left: 0.5rem;
		border-bottom: 2px solid #686868;
	}
	.drink {
		margin: 0.5rem;
		padding: 0.5rem;
		border-radius: 8px;
		display: flex;
		background-color: #3c3d40;
		text-decoration: none;
	}
	.drink img {
		width: 2.5rem;
	}
	.drink-info {
		margin-left: 1rem;
	}
	.drink-name {
		color: white;
		font-size: 1.2em;
	}
	.drink-spirit {
		color: rgb(170, 170, 170);
	}
	.add-drink-btn {
		background-color: #586b8e;
		position: sticky;
		bottom: 1rem;
		left: calc(100% - 5rem);
		width: 4rem;
		padding: 0.25rem;
		border-radius: 25%;
		aspect-ratio: 1;
		font-size: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.5);
	}
</style>
