<template>
    <section class="shop-container">
        <div class="header">
            <h2 class="pad">Shop</h2>
        </div>
        <div class="store-list">
            <store v-for="producer in producers" :producer="producer" :key="producer.name" />
        </div>
    </section>
</template>

<script>
    import Store from '@/components/Store'

    export default {
        components: {
            Store
        },
        computed: {
            producers: function () {
                return this.$store ? this.$store.state.producers : null
            }
        }
    }
</script>


<style scoped>
    .shop-container {
        position: relative;
        background: #222;
        color: white;
        width: 300px;
        overflow-y: scroll;
    }

    .shop-container::before {
        position: absolute;
        content: "X";
        top: 0;
        left: 0;
        padding: 15px 30px;
        transform: translateX(-100%);
        z-index: 1000;
    }

    h2 {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        background: #111;
    }

    .pad {
        padding: 15px 30px;
    }

    .store-list {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
    }
</style>