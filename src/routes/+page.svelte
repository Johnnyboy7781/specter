<script>
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    export let data;
</script>

<header>
    <img src="./header/arrow-back.svg" alt="Back arrow">
    <img src="./header/skull.svg" alt="Skull icon">
    <img src="./header/settings.svg" alt="Settings icon">
</header>

<body>
    <!-- TODO: Switch this, iterate over drinks and asign letter, alphabetize data IMPORTANT!!! -->
    {#each alphabet as letter}
        {#if data.data.find(drink => {
            return drink.name[0] === letter
        })}
            <h2 class="section-letter">{letter}</h2>
        {/if}
        {#each data.data as drink}
            {#if drink.name[0] === letter}
                <div class="drink">
                    <img src="./drink-placeholder.svg" alt="drink icon" >
                    <div class="drink-info">
                        <p class="drink-name">
                            {drink.name}
                        </p>
                        <p class="drink-spirit">    
                            {drink.ingredients[0].split(" ")[1]}
                        </p>
                    </div>
                </div>
            {/if}
        {/each}
    {/each}
</body>

<style>
    header {
        background-color: #303134;
        display: flex;
        justify-content: space-between;
        padding: 0.7rem;
    }
    header img, .drink img {
        width: 2.2rem;
        filter: invert(97%) sepia(0%) saturate(7487%) hue-rotate(77deg) brightness(85%) contrast(100%);
    }
    .section-letter {
        margin: 0.5rem;
        padding-bottom: 0.2rem;
        border-bottom: 2px solid black;
    }
    .drink {
        margin: 0.5rem;
        padding: 0.5rem;
        border-radius: 8px;
        display: flex;
        background-color: #3c3d40;
    }
    .drink img {
        width: 2.5rem;
    }
    .drink-info {
        margin-left: 1rem;
    }
    .drink-name {
        font-size: 1.2em;
    }
    .drink-spirit {
        color: rgb(170, 170, 170);
    }
</style>