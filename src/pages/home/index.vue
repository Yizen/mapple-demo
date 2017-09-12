<template>
  <v-layout pageTitle="Projects" pageSubTitle="List">
    <div slot="heading-elements">
      <el-button>New Project</el-button>
    </div>

    <template slot="content">
      <!-- Project Filter options -->
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

          <div class="navbar-right">
          </div>
        </div>
      </div>
      <!-- /Project Filter options -->
      <div class="row">
        <template v-for="project in $store.state.project.deals">
          <router-link :to="'/project/' + project.id">
            <div class="col-md-4">
              <v-panel :contextualStyle="project.status" :hasRefresh=false :hasBodyPadding=true>
                <span slot="panel-title">{{project.name}}</span>
                <span class="text-muted" slot="panel-subtitle">{{project.tagline}}</span>
                <li slot="heading-thumbnails">
                  <img :src="'/static/img/logos/logo-'+ project.id+ '.png'" alt="ACME Logo"
                       style="border-radius: 0"/></li>
                <div slot="panel-body" class="list-group no-border no-padding-top">
                  <div class="list-group-item">
                    <label style="display: block">Position in process: <span style="float:right">{{project.positionInProcess}}</span></label>
                    <div class="progress progress-xxs">
                      <div class="progress-bar progress-bar-info" :style="{width: project.percentInProcess}">
                        <span class="sr-only">{{project.positionInProcess}}</span>
                      </div>
                    </div>
                  </div>
                  <a href="#" class="list-group-item"><i class="icon-user"></i>
                    Deal Lead: <strong>{{project.dealLead}}</strong></a>
                  <a href="#" class="list-group-item"><i class="icon-cash3"></i>
                    Revenues: <strong>{{project.revenues}}</strong></a>
                  <div class="list-group-divider"></div>
                  <a href="#" class="list-group-item"><i class="icon-tree7"></i> <span
                    class="badge bg-danger pull-right">{{project.outstandingQuestions}}</span>
                    Outstanding questions</a>
                  <a href="#" class="list-group-item"><i class="icon-calendar3"></i> <span
                    class="badge bg-teal-400 pull-right">{{project.unscheduledMeetings}}</span>
                    Unscheduled Meetings</a>
                </div>
              </v-panel>
            </div>
          </router-link>
        </template>
      </div>
    </template>
  </v-layout>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */

  export default {
    components: {
      VLayout: require('@/layouts/default.vue'),
      VPanel: require('@/components/panel.vue'),
    },
  };
</script>
