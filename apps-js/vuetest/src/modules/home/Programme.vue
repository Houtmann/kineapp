<template>
    <div>
      <row>{{prog.name}}</row>
      <row>Description: {{prog.description}}</row>
      {{prog.exercices}}
        <div v-for="item in prog.exercices" :key="item.id">
            <li>{{ item.name }} {{item.description}}</li>
        </div>
    </div>
</template>

<script>
    import { mapGetters} from "vuex";

    export default {
        name: "Programme",
        props: {

                prog: {
                    type: Object,
                    required: true,
                },
            },
        methods: {

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