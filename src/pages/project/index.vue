<template>
  <v-layout :pageTitle="$store.state.project.deals[$store.state.route.params.projectId-1].name" pageSubTitle="Informations">
    <v-sidebar slot="sidebar"></v-sidebar>
    <template slot="content">
      <!-- Info alert -->
      <div class="alert alert-styled-custom alpha-slate alert-styled-left alert-arrow-left alert-component">
        <button type="button" class="close" data-dismiss="alert"><span>&times;</span><span class="sr-only">Close</span>
        </button>
        <h6 class="alert-heading text-semibold">New contacts suggested</h6>
        Based on our deep learning analysis, Mapple suggest to add <span class="label bg-pink-300">4</span>
        new contacts to the process
      </div>
      <!-- /info alert -->
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
            <li>
              <a href="#">
                <i class="icon-inbox"></i>
                <span class="visible-xs-inline-block position-right">Inbox</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon-task"></i>
                <span class="visible-xs-inline-block position-right">Tasks</span>
                <span class="badge bg-info">4</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- /Contact Filter options -->
      <template>
        <!--
        <div class="text-center content-group text-muted content-divider mt-20">
          <span class="pt-10 pb-10">Phase 2</span>
        </div>
        -->
        <el-table
          :data="$store.state.project.deals[$store.state.route.params.projectId-1].buyers"
          style="width: 100%">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column type="expand">
            <template scope="props">
              <div class="row">
                <div class="col-md-5">
                  <p>Valuation: <strong>{{ props.row.valuation }}</strong></p>
                  <p>Position in process: <span class="label label-flat border-blue text-blue-600">{{ props.row.positionInProcess }}</span></p>
                  <p><i class="icon-bell-check text-muted"></i> Next meeting: {{ props.row.nextMeetingDate }} with <strong>{{ props.row.nextMeetingWith }}</strong> </p>
                </div>

                <div class="col-md-4">

                      DataRoom Visits
                      <div class="text-muted text-size-small">42 avg doc/day</div>

                    <div id="line_chart_simple"><svg width="333" height="50"><g transform="translate(0,0)" width="333"><defs><clipPath id="clip-line-small"><rect class="clip" width="333" height="50"></rect></clipPath></defs><path d="M20,8.46153846153846L68.83333333333333,25.76923076923077L117.66666666666666,5L166.5,15.384615384615383L215.33333333333331,5L264.1666666666667,36.15384615384615L313,8.46153846153846" clip-path="url(#clip-line-small)" class="d3-line d3-line-medium" style="stroke: rgb(33, 150, 243);"></path><g><line class="d3-line-guides" x1="20" y1="50" x2="20" y2="8.46153846153846" style="stroke: rgba(33, 150, 243, 0.5); stroke-dasharray: 4, 2; shape-rendering: crispEdges;"></line><line class="d3-line-guides" x1="68.83333333333333" y1="50" x2="68.83333333333333" y2="25.76923076923077" style="stroke: rgba(33, 150, 243, 0.5); stroke-dasharray: 4, 2; shape-rendering: crispEdges;"></line><line class="d3-line-guides" x1="117.66666666666666" y1="50" x2="117.66666666666666" y2="5" style="stroke: rgba(33, 150, 243, 0.5); stroke-dasharray: 4, 2; shape-rendering: crispEdges;"></line><line class="d3-line-guides" x1="166.5" y1="50" x2="166.5" y2="15.384615384615383" style="stroke: rgba(33, 150, 243, 0.5); stroke-dasharray: 4, 2; shape-rendering: crispEdges;"></line><line class="d3-line-guides" x1="215.33333333333331" y1="50" x2="215.33333333333331" y2="5" style="stroke: rgba(33, 150, 243, 0.5); stroke-dasharray: 4, 2; shape-rendering: crispEdges;"></line><line class="d3-line-guides" x1="264.1666666666667" y1="50" x2="264.1666666666667" y2="36.15384615384615" style="stroke: rgba(33, 150, 243, 0.5); stroke-dasharray: 4, 2; shape-rendering: crispEdges;"></line><line class="d3-line-guides" x1="313" y1="50" x2="313" y2="8.46153846153846" style="stroke: rgba(33, 150, 243, 0.5); stroke-dasharray: 4, 2; shape-rendering: crispEdges;"></line></g><g><circle class="d3-line-circle d3-line-circle-medium" cx="20" cy="8.46153846153846" r="3" style="stroke: rgb(33, 150, 243); fill: rgb(255, 255, 255); opacity: 1;"></circle><circle class="d3-line-circle d3-line-circle-medium" cx="68.83333333333333" cy="25.76923076923077" r="3" style="stroke: rgb(33, 150, 243); fill: rgb(255, 255, 255); opacity: 1;"></circle><circle class="d3-line-circle d3-line-circle-medium" cx="117.66666666666666" cy="5" r="3" style="stroke: rgb(33, 150, 243); fill: rgb(255, 255, 255); opacity: 1;"></circle><circle class="d3-line-circle d3-line-circle-medium" cx="166.5" cy="15.384615384615383" r="3" style="stroke: rgb(33, 150, 243); fill: rgb(255, 255, 255); opacity: 1;"></circle><circle class="d3-line-circle d3-line-circle-medium" cx="215.33333333333331" cy="5" r="3" style="stroke: rgb(33, 150, 243); fill: rgb(255, 255, 255); opacity: 1;"></circle><circle class="d3-line-circle d3-line-circle-medium" cx="264.1666666666667" cy="36.15384615384615" r="3" style="stroke: rgb(33, 150, 243); fill: rgb(255, 255, 255); opacity: 1;"></circle><circle class="d3-line-circle d3-line-circle-medium" cx="313" cy="8.46153846153846" r="3" style="stroke: rgb(33, 150, 243); fill: rgb(255, 255, 255); opacity: 1;"></circle></g></g></svg></div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="Company Name"
            prop="name">
            <template scope="scope">
              <strong class="text-capitalize"><router-link :to="'/project/' + $store.state.route.params.projectId + '/' + scope.row.id">{{ scope.row.name }}</router-link></strong>
            </template>
          </el-table-column>
          <el-table-column
            label="Lead Contact"
            prop="contact">
            <template scope="scope">
              {{ scope.row.contact }}
            </template>
          </el-table-column>

          <el-table-column
            label="Status"
            prop="status">
            <template scope="scope">
              <span :class="`label ${scope.row.statusColor}`">{{ scope.row.status }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="Offer Price"
            prop="offerPrice">
          </el-table-column>
        </el-table>
      </template>
    </template>
    <template slot="heading-elements">
      <div class="heading-btn-group">
        <router-link :to="'/project/' + $store.state.route.params.projectId + '/access'" class="btn btn-link btn-float has-text">
          <i class="icon-user-lock text-blue"></i>
          <span>User access</span>
        </router-link>
        <a href="#" class="btn btn-link btn-float has-text">
          <i class="icon-vcard text-blue"></i>
          <span>New from Outlook</span>
        </a>
        <a href="#" class="btn btn-link btn-float has-text">
          <i class="icon-file-excel text-blue"></i>
          <span>Upload Excel List</span>
        </a>
      </div>
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
