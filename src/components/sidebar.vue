<template>
  <!-- Main sidebar -->
  <div class="sidebar sidebar-main sidebar-default">
    <div class="sidebar-content">

      <!-- Main navigation -->
      <div class="sidebar-category sidebar-category-visible">
        <!--<div class="category-title h6">
          <span>Project navigation</span>
          <ul class="icons-list">
            <li><a href="#" data-action="collapse"></a></li>
          </ul>
        </div>-->

        <div class="category-content sidebar-user">
          <div class="media">
            <router-link :to="'/project/' + $store.state.route.params.projectId" class="media-left">
              <img src="/static/img/acme_logo.svg" class="img-lg" alt=""></router-link>
            <div class="media-body">
              <span
                class="media-heading text-semibold">{{$store.state.project.deals[$store.state.route.params.projectId - 1].name}}</span>
              <div class="text-size-mini text-muted">
                <i class="icon-pin text-size-small"></i> &nbsp;Santa Ana, CA

              </div>
            </div>

            <div class="media-right media-middle">
              <ul class="icons-list">
                <li>
                  <a href="#"><i class="icon-cog3"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="category-content no-padding">
          <ul class="navigation navigation-main navigation-accordion">

            <!-- Main -->
            <li class="navigation-header"><span>Main</span> <i class="icon-menu" title="Main pages"></i></li>
            <li class="active">
              <router-link :to="'/project/' + $store.state.route.params.projectId"><i class="icon-home4"></i><span> Dashboard</span>
              </router-link>
            </li>
            <li>
              <router-link :to="'/project/' + $store.state.route.params.projectId + '/information' "><i
                class="icon-office"></i><span> Company</span></router-link>
            </li>
            <li>
              <router-link :to="'/project/' + $store.state.route.params.projectId + '/valuation' "><i
                class="icon-stats-bars"></i><span> Valuation</span></router-link>
            </li>
            <li>
              <router-link :to="'/project/' + $store.state.route.params.projectId + '/todos' "><i
                class="icon-list-unordered"></i><span> Tasks</span></router-link>
            </li>
            <li>
              <router-link :to="'/project/' + $store.state.route.params.projectId + '/party' "><i
                class="icon-users4"></i> <span>List of parties</span>
              </router-link>
            </li>
            </li>

            <!-- /Buyers List -->
            <!-- Process -->
            <li class="navigation-header"><span>Process</span> <i class="icon-share4" title="Process"></i></li>
            <li>
              <a href="#"><i class=" icon-seven-segment-1"></i> <span>Phase 1</span></a>
              <ul>
                <li>
                  <router-link :to="'/project/' + $store.state.route.params.projectId + '/wizard' ">Teaser builder
                  </router-link>
                </li>
                <li>
                  <router-link :to="'/project/' + $store.state.route.params.projectId + '/distribution' ">
                    Teaser distribution
                  </router-link>
                </li>
                <li>
                  <router-link :to="'/project/' + $store.state.route.params.projectId + '/tracking' ">Teaser tracking
                  </router-link>
                </li>
                <li>
                  <router-link :to="'/project/' + $store.state.route.params.projectId + 'nda' ">NDAs</router-link>
                </li>
                <li>
                  <router-link :to="'/project/' + $store.state.route.params.projectId + '/offers' ">Offers</router-link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#"><i class=" icon-seven-segment-2"></i> <span>Phase 2</span></a>
              <ul>
                <li>
                  <a href="#">Dataroom</a>
                  <ul>
                    <li><a href="#">Grant access</a></li>
                    <li><a href="#">Analytics</a></li>
                  </ul>
                </li>
                <li><a href="#">VDD</a></li>
                <li><a href="#">Management meetings</a></li>
                <li>
                  <router-link :to="'/project/' + $store.state.route.params.projectId + '/questions' ">
                    <span>Dataroom Q&A<span class="label bg-primary-400">80 new</span></span></router-link>
                </li>
              </ul>
            </li>
            <!-- /Process -->
            <!-- Documents -->
            <li class="navigation-header"><span>Documents</span> <i class="icon-files-empty" title="Documents"></i></li>
            <li>
              <a href="#!"><i class="icon-file-check"></i> <span>Teaser</span></a>
              <ul>
                <li>
                  <router-link :to="'/project/' + $store.state.route.params.projectId + '/teaser' ">Teaser</router-link>
                </li>
                <li><a href="#">Teaser tasks <span class="label bg-warning-400">4</span></a></li>
                <li class="navigation-divider"></li>
                <li><a href="#">Teaser builder</a></li>
                <li>
                  <a href="#">Suggestions</a>
                  <ul>
                    <li><a href="#!#">One</a></li>
                    <li><a href="#!#">Two</a></li>
                    <li><a href="#!#">Three</a></li>
                    <li><a href="#!#">Four</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#"><i class="icon-file-locked"></i> <span>NDA</span>
              </a>
            </li>
            <li>
              <a href="#!"><i class="icon-files-empty"></i> <span>InfoMemo</span></a>
              <ul>
                <li><a href="#">InfoMemo versions</a></li>
                <li><a href="#">InfoMemo tasks <span class="label bg-warning-400">4</span></a></li>
                <li class="navigation-divider"></li>
                <li><a href="#">Good practices</a></li>
                <li>
                  <a href="#">Suggestions</a>
                  <ul>
                    <li><a href="#!#">One</a></li>
                    <li><a href="#!#">Two</a></li>
                    <li><a href="#!#">Three</a></li>
                    <li><a href="#!#">Four</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#"><i class="icon-file-presentation"></i> <span>Management Presentation</span></a></li>
            <li>
              <a href="#"><i class="icon-file-locked"></i> <span>DataRoom</span></a>
              <ul>
                <li><a href="#">Documents</a></li>
                <li><a href="#">Upload documents</a></li>
              </ul>
            </li>
            <!-- /Documents -->
          </ul>
        </div>
      </div>
      <!-- /main navigation -->
    </div>
  </div>
  <!-- /main sidebar -->
</template>

<script>
  /* ============
   * Sidebar Component
   * ============
   *
   * todo: add documentation here!
   */

  const jqueryInits = require('@/assets/js/jquery-inits.js');

  export default {
    mounted() {
      this.$nextTick(() => {
        jqueryInits.startInit();
      });
    },
  };
</script>
