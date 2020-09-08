<template>
    <div>
      <v-card
          class="mx-auto"
          max-width="400"
      >
        <v-card-subtitle class="pb-0">{{exercice.exercice.name}}</v-card-subtitle>
        <v-icon>video-box</v-icon>
        <v-card-text class="text--primary">
          <div>{{exercice.exercice.description}}</div>

          <div>{{exercice.ris}} {{exercice.serie}} {{exercice.rep}}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn
              color="orange"
              text
              @click="this.setShowVideo"
          >
            Voir la video
          </v-btn>

        </v-card-actions>
      </v-card>
    <VideoPlayer v-if="showVideo" v-on:listenerChild="setShowVideo"></VideoPlayer>
    </div>
</template>

<script>
    import VideoPlayer from "@/components/home/VideoPlayer";
    export default {
        name: "Exercice",
      components: {VideoPlayer},
      data() {
        return {showVideo: false}
      },
        props: {

        exercice: {
          type: Object,
          required: true,
        },
      },
      methods:{
        setShowVideo: function () {
          this.showVideo = !this.showVideo

        }
      }
    }
</script>

<style scoped>

</style>