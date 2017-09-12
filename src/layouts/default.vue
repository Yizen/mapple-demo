<template>
  <div>
    <topnavbar></topnavbar>
    <secondarynavbar></secondarynavbar>

    <!-- Page header -->
    <div class="page-header">
      <div class="page-header-content">
        <div class="page-title">
          <h4><router-link :to="{name: 'home.index'}"><i class="icon-arrow-left52 position-left"></i></router-link> <span class="text-semibold">{{pageTitle}}</span> - {{pageSubTitle}}</h4>

          <ul class="breadcrumb position-right">
            <li>
              <router-link :to="{ name: 'home.index' }">Home</router-link>
            </li>
            <li class="active">Projects List</li>
          </ul>
        </div>

        <div class="heading-elements">
          <slot name="heading-elements"></slot>
        </div>
      </div>
    </div>
    <!-- /page header -->
    <!-- Page container -->
    <div class="page-container">


      <!-- Page content -->
      <div class="page-content">
        <slot name="sidebar"></slot>
        <slot name="sidebar-secondary"></slot>
        <!-- Main content -->
        <div class="content-wrapper">

          <!-- Page content here -->
          <slot name="content"></slot>

        </div>
        <!-- /main content -->

      </div>
      <!-- /page content -->

    </div>
    <!-- /page container -->


    <!-- Footer -->
    <div class="footer text-muted">
      &copy; 2017. <a href="#"> Mapple</a> by <a href="#" target="_blank">Mapple inc.</a>
    </div>
    <!-- /footer -->
  </div>
</template>

<script>
  /* ============
   * Default Layout
   * ============
   *
   * Used for the home and account pages.
   *
   * Layouts are used to store a lot of shared code.
   * This way the app stays clean.
   */

  const affix = require('@/assets/js/affix.js');

  export default {
    props: {
      pageTitle: {
        type: String,
        required: true,
      },
      pageSubTitle: {
        type: String,
        required: true,
      },
    },
    mounted() {
      this.$nextTick(() => {
        affix.startAffix();
      });
    },
    components: {
      topnavbar: require('@/components/topnavbar.vue'),
      secondarynavbar: require('@/components/secondarynavbar.vue'),
    },
  };
</script>
