<template>
  <v-layout :pageTitle="$store.state.project.deals[$store.state.route.params.projectId-1].name" pageSubTitle="Informations">
    <v-sidebar slot="sidebar"></v-sidebar>
    <template slot="content">
      <!-- Contact Filter options -->
      <div class="navbar navbar-default navbar-xs navbar-component">
        <ul class="nav navbar-nav no-border visible-xs-block">
          <li><a class="text-center collapsed" data-toggle="collapse" data-target="#navbar-filter"><i
            class="icon-menu7"></i></a></li>
        </ul>

        <div class="navbar-collapse collapse" id="navbar-filter">
          <p class="navbar-text">Filter:</p>
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i
                class="icon-sort-time-asc position-left"></i> By date <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Show all</a></li>
                <li class="divider"></li>
                <li><a href="#">Today</a></li>
                <li><a href="#">Yesterday</a></li>
                <li><a href="#">This week</a></li>
                <li><a href="#">This month</a></li>
                <li><a href="#">This year</a></li>
              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i
                class="icon-sort-amount-desc position-left"></i> By status <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Show all</a></li>
                <li class="divider"></li>
                <li><a href="#">Open</a></li>
                <li><a href="#">On hold</a></li>
                <li><a href="#">Resolved</a></li>
                <li><a href="#">Closed</a></li>
                <li><a href="#">Dublicate</a></li>
                <li><a href="#">Invalid</a></li>
                <li><a href="#">Wontfix</a></li>
              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i
                class="icon-sort-numeric-asc position-left"></i> By priority <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Show all</a></li>
                <li class="divider"></li>
                <li><a href="#">Highest</a></li>
                <li><a href="#">High</a></li>
                <li><a href="#">Normal</a></li>
                <li><a href="#">Low</a></li>
              </ul>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">

          </ul>
        </div>
      </div>
      <!-- /Contact Filter options -->
      <template>
        <div class="text-center content-group text-muted content-divider">
          <span class="pt-10 pb-10">
            <button type="button" class="btn btn-success btn-float btn-float-lg"><i class="icon-file-excel"></i> <span>Upload Excel List</span></button>
          </span>
        </div>
        <div class="row">
          <div class="col-md-12">
            <el-table
              :data="tableData2"
              style="width: 100%"
              :row-class-name="tableRowClassName">
              <el-table-column
                prop="date"
                label="Date"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="Name"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="Address">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </template>
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
