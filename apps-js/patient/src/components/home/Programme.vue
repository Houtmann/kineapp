<template>
  <div>
    <row>{{ prog.name }}</row>
    <row>Description: {{ prog.description }}</row>

    <div v-for="item in prog.exercices" :key="item.id">

      <Exercice v-bind:exercice="item"></Exercice>
      <!--            <li>{{ item.name }} {{item.description}}</li>-->
    </div>

  </div>
</template>

<script>
import {mapGetters} from "vuex";

import Exercice from "@/components/home/Exercice";

export default {
  name: "Programme",
  components: {Exercice},
  props: {

    prog: {
      type: Object,
      required: true,
    },
  },
  methods: {},


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