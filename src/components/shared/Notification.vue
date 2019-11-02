<template>
    <div class="container">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <div class="notification" :class="color">
                    <slot name="body">
                        Algo anduvo mal
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'color'
    ]
}
</script>

<style scoped>
    .notification {
        margin: 10px;
    }
</style>