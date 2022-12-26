<script>
    import { fly } from 'svelte/transition'
    export let data;
    const drink = data.drink;
</script>

<div class="drink">
    <h1 
    in:fly="{{ x: -50, duration: 250, delay: 250}}"
    out:fly="{{ x: -50, duration: 250 }}"
    class="drink-name">{drink.name}</h1>
    <h2
    in:fly="{{ x: -50, duration: 250, delay: 300}}"
    out:fly="{{ x: -50, duration: 250 }}"
    class="drink-title">Spec</h2>
    <div
    in:fly="{{ x: -50, duration: 250, delay: 350}}"
    out:fly="{{ x: -50, duration: 250 }}"
    class="drink-section">
        {#each drink.ingredients as ingredient}
            <div class="drink-section-info">
                <p>{ingredient.split(" ")[0]}</p>
                <p>{ingredient.split(" ")[1]}</p>
            </div>
        {/each}
    </div>
    <h2
    in:fly="{{ x: -50, duration: 250, delay: 400}}"
    out:fly="{{ x: -50, duration: 250 }}"
    class="drink-title">Presentation</h2>
    <div 
    in:fly="{{ x: -50, duration: 250, delay: 450}}"
    out:fly="{{ x: -50, duration: 250 }}"
    class="drink-section">
        <div class="drink-section-info">
            <p>Glassware</p>
            <p>{drink.glassware}</p>
        </div>
        <div class="drink-section-info">
            <p>Ice</p>
            <p>{drink.ice}</p>
        </div>
        <div class="drink-section-info">
            <p>Garnish</p>
            <p>{drink.garnish}</p>
        </div>
    </div>
    <h2 
    in:fly="{{ x: -50, duration: 250, delay: 500}}"
    out:fly="{{ x: -50, duration: 250 }}"
    class="drink-title">History</h2>
    <div 
    in:fly="{{ x: -50, duration: 250, delay: 550}}"
    out:fly="{{ x: -50, duration: 250 }}"
    class="drink-section">
        {drink.history}
    </div>
</div>

<style>
    .drink {
       margin: 0.5rem; 
       display: flex;
       flex-direction: column;
       align-items: center;
    }
    .drink-name, .drink-section {
        background-color: #3c3d40;
        margin: 0.5rem;
        padding: 0.5rem;
        border-radius: 8px;
    }
    .drink-name {
        display: inline-block;
        width: max-content;
    }
    .drink-title {
        width: 100%;
        margin: 0.5rem;
        padding-bottom: 0.2rem;
        padding-left: 0.5rem;
        border-bottom: 2px solid #686868;
    }
    .drink-section {
        width: 90%;
    }
    .drink-section-info {
        padding-inline: 1rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        font-size: 2em;
    }
</style>