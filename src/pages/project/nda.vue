<template>
  <v-layout :pageTitle="$store.state.project.deals[$store.state.route.params.projectId-1].name" pageSubTitle="NDA">
    <v-sidebar slot="sidebar"></v-sidebar>
    <template slot="content">
      <!-- Info alert -->
      <div class="alert alert-info alert-styled-left alert-arrow-left alert-component">
        <button type="button" class="close" data-dismiss="alert"><span>&times;</span><span class="sr-only">Close</span></button>
        <h6 class="alert-heading text-semibold">Coming soon</h6>
        This content has not been developed yet, please come back soon.
      </div>
      <!-- /info alert -->
    </template>
  </v-layout>
</template>
<script>
  export default {
    components: {
      VLayout: require('@/layouts/default.vue'),
      VPanel: require('@/components/panel.vue'),
      VSidebar: require('@/components/sidebar.vue'),
    },
  };
</script>
