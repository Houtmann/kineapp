<template>
    <div>
        <md-progress-spinner class="md-accent" :md-diameter="30" md-mode="indeterminate"></md-progress-spinner>

    </div>
</template>

<script>
    export default {
        name: 'Spinner'
    }
</script>

<style lang="scss">
    .md-progress-spinner {
        margin: 24px;
    }
</style>
