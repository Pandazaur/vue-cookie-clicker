<template>
    <div class="game">
        <CookieSection />
        <StoreSection />
    </div>
</template>

<script>
    import CookieSection from '@/components/CookieSection'
    import StoreSection from '@/components/StoreSection'

    export default {
        components: {
            CookieSection,
            StoreSection
        }
    }
</script>

<style scoped>
    .game {
        height: 100%;
        background: white;
        display: flex;
    }    
</style>
