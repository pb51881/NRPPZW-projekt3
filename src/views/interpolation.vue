<template>
<p>Opis zadatka: {{description}}</p>
</template>

<script>
export default {
    name: "interpolation",
    data(){
        return{
            description: "interpolation/one-way binding"
        }
    }
}
</script>

<style scoped>
p {
    color: red
}
</style>