<template>
<h2>Methods</h2>
<input type="number" v-model="number" placeholder="Enter any number" />
<p>Square: {{square(number)}}</p>
</template>

<script>
export default {
    name: "Methods",
    data(){
        return{
            number:0
        }
    },
    methods:{
        square(number){
            return number * number;
        } 
    }
}

</script>

<style scoped>
p {
    color: red
}
</style>