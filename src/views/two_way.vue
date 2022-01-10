<template>
<p>Two-way binding</p>
<input type="text" v-model="data" />
<p id="output">{{data}}</p>
</template>

<script>

export default {
    name: "two_way",
    data(){
        return{
            data:0
        }
    }
}
</script>

<style scoped>
#output {
    color: red
}
</style>