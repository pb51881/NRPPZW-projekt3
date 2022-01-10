<template>
    <h2> Lifecycle Hooks</h2>
    <input type="text" v-model="text"/>
  
</template>

<script>
export default {
    name: "Lifecycle Hooks",
    data(){
        return{
            text: null,
        }
    },
    
    updated() {
       alert("updated");
    },
  
}
</script>
