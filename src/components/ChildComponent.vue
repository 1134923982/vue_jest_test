<template>
    <div>
      <button @click="click"></button>
    </div>
</template>

<script>
    export default {
        name: "ChildComponent",
        methods: {
            click() {
                this.emit('custom', 'hello')
            }
        }
    }
</script>

<style scoped>

</style>
