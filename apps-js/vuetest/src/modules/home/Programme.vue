<template>
    <div>
        Programme: {{prog.name}}
        Description: {{prog.description}}
        {{getToken}}
        <div v-for="item in prog.exercices" :key="item.id">
            <li>{{ item.name }} {{item.description}}</li>
        </div>
        <input v-on:input="toto" placeholder="modifiez-moi">
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Programme",
        props: {

                prog: {
                    type: Object,
                    required: true,
                },
            },
        methods: {
            ...mapActions([
                'saveToken',
            ]),
            toto(e) {

                this.saveToken(e.target.value)
            }

        },


        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters([
                'getToken',
            ]),

        }


    }
</script>

<style scoped>

</style>