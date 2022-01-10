<template>
<p > First word: {{first_word}}</p>
<p > Second word: {{second_word}}</p>
<p id="output"> Connect two words: {{words}}</p>
</template>

<script>

export default {
    name: "computed_properties",
    data(){
        return{
            first_word:'computed',
            second_word: 'properties',
        }
    },
    computed: {
        words() {
            return `${this.first_word} ${this.second_word}`
        }
    }
}
</script>

<style scoped>
#output {
    color: red
}
</style>