<template>

    <v-toolbar floating flat>

      <div class="my-2">
        <router-link :to="{ name: 'Home'}">
          <v-btn text>Accueil</v-btn>
        </router-link>
      </div>
      <div class="my-2">
        <router-link :to="{ name: 'Programmes'}">
          <v-btn text>Programmes</v-btn>
        </router-link>
      </div>
      <div class="my-2">
        <router-link :to="{ name: 'About'}">
          <v-btn text>About</v-btn>
        </router-link>
      </div>
    </v-toolbar>
</template>

<script>
export default {
name: "navBar"
}
</script>

<style scoped>

</style>