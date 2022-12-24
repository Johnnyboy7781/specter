<script>
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    export let data;
</script>

<header>
    <img src="./arrow-back.svg" alt="Back arrow">
    <img src="./skull.svg" alt="Skull icon">
    <img src="./settings.svg" alt="Settings icon">
</header>

<body>
    {#each alphabet as letter}
        {#each data.data as drink}
            {#if drink.name[0] === letter}
                <div>{drink.name}</div>
            {/if}
        {/each}
    {/each}
</body>

<style>
    header {
        background-color: #303134;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
    }
    header img {
        width: 2.5rem;
        filter: invert(97%) sepia(0%) saturate(7487%) hue-rotate(77deg) brightness(110%) contrast(100%);
    }
</style>