<template>
<p>scoped style</p>
</template>

<script>
export default {
    name: "scoped style",
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
p {
    color: rgb(223, 94, 94);
    font-family: "Trebuchet MS", Verdana, sans-serif;
    font-size: 40px;
    text-shadow: 7px 7px 10px rgb(211, 154, 154);
}
</style>