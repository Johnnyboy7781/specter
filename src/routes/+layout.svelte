<script>
    import '../style.css'
</script>

<header>
    <img src="/header/arrow-back.svg" alt="Back arrow">
    <img src="/header/skull.svg" alt="Skull icon">
    <img src="/header/settings.svg" alt="Settings icon">
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
        padding: 0.7rem;
    }
    header img {
        width: 2.2rem;
        filter: invert(97%) saturate(7487%) hue-rotate(77deg) brightness(85%) contrast(100%);
    }
</style>