<template>

    <div class="md-layout">
        <div class="md-layout-item"></div>
        <div class="md-layout-item">
        <md-table>
            <md-table-row>
                <md-table-head>Nom du programme</md-table-head>
                <md-table-head>Type</md-table-head>
                <md-table-head>Description</md-table-head>

            </md-table-row>



            <md-table-row v-for="item in getUserProgrammes" :key="item.id">
                 <md-table-cell><router-link :to="{ name: 'Programme', params: { programmeId: item.id }}">{{ item.name }}</router-link></md-table-cell>
                    <md-table-cell>{{ item.type }}</md-table-cell>
                    <md-table-cell>{{ item.description }}</md-table-cell>
                </md-table-row>


        </md-table>

        </div>
        <div class="md-layout-item"></div>
    </div>


</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Programmes",
        computed: {

            ...mapGetters('user', [
                'getUserProgrammes',
            ])
        },
    }

</script>

<style lang="scss" scoped>
    .md-table-cell{
        text-align: center;
    }
    .md-table-head{
        text-align: center;
    }

</style>