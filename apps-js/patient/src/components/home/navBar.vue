<template>

    <v-app-bar floating flat class="justify-center">
      <v-toolbar-items>
      <div class="my-2">
        <router-link :to="{ name: 'Home'}">
          <v-btn text>Accueil</v-btn>
        </router-link>
      </div>
      </v-toolbar-items>
      <v-toolbar-items>
      <div class="my-2">
        <router-link :to="{ name: 'Programmes'}">
          <v-btn text>Programmes</v-btn>
        </router-link>
      </div>
      </v-toolbar-items>
      <v-toolbar-items>
      <div class="my-2">
        <router-link :to="{ name: 'About'}">
          <v-btn text>About</v-btn>
        </router-link>
      </div>
      </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
name: "navBar"
}
</script>

<style scoped>
.toto{
  width: 100%;
}

</style>