<template>
    <div>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
          >
            Dropdown
          </v-btn>
        </template>
        <v-list>
       too
        </v-list>
      </v-menu>
        <md-menu md-size="small">
            <router-link :to="{ name: 'Home'}"><md-button md-menu-trigger>Accueil</md-button></router-link>
            <router-link :to="{ name: 'Programmes'}"><md-button md-menu-trigger>Programmes</md-button></router-link>

        </md-menu>

    </div>
</template>

<script>
    export default {
        name:"navBar",
        props: {
        },
    };
</script>


<style lang="scss" scoped>
    .md-menu {
        margin: 24px;
    }
</style>
