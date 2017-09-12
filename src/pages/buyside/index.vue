<template>
  <v-layout pageTitle="Buy Side" pageSubTitle="find a target">
    <div slot="heading-elements">
      <!--<el-button>New Project</el-button>-->
    </div>

    <template slot="content">
      <!-- Info alert -->
      <div class="alert alpha-slate alert-styled-left alert-arrow-left alert-component">
        <button type="button" class="close" data-dismiss="alert"><span>&times;</span><span class="sr-only">Close</span>
        </button>
        <h6 class="alert-heading text-semibold">Buy Side</h6>
        <ul>
          <li>Search new opportunities</li>
          <li>Publish search criteria</li>
          <li>Internally share and discuss opportunities via the platform</li>
          <li>Gets personalized recommendations based on history / behaviour via deep learning </li>
          <li>Collaborative process inside Mapple</li>
          <li>Feedback on target selection, further improving selection criteria</li>
        </ul>
      </div>
      <!-- /info alert -->
      <!-- Search field -->
      <div class="panel panel-flat">
        <div class="panel-heading">
          <h5 class="panel-title">Search for</h5>
          <div class="heading-elements">
            <ul class="icons-list">
              <li><a data-action="collapse"></a></li>
              <li><a data-action="close"></a></li>
            </ul>
          </div>
        </div>

        <div class="panel-body">
          <form action="#" class="main-search">
            <div class="input-group content-group">
              <div class="has-feedback has-feedback-left">
                <input type="text" class="form-control input-xlg" value="Biotech Crispr">
                <div class="form-control-feedback">
                  <i class="icon-search4 text-muted text-size-base"></i>
                </div>
              </div>

              <div class="input-group-btn">
                <button type="submit" class="btn btn-primary btn-xlg">Search</button>
              </div>
            </div>

            <div class="row search-option-buttons">
              <div class="col-sm-6">
                <ul class="list-inline list-inline-condensed no-margin-bottom">
                  <li class="dropdown">
                    <a href="#" class="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown">
                      <i class="icon-stack2 position-left"></i> All industries <span class="caret"></span>
                    </a>

                    <ul class="dropdown-menu">
                      <li><a href="#"><i class="icon-question7"></i> Industry 1</a></li>
                      <li><a href="#"><i class="icon-accessibility"></i> Industry 2</a></li>
                      <li><a href="#"><i class="icon-reading"></i> Industry 3</a></li>
                      <li><a href="#"><i class="icon-gear"></i> Industry 4</a></li>
                      <li><a href="#"><i class="icon-graduation"></i> Industry 5</a></li>
                      <li class="divider"></li>
                      <li><a href="#"><i class="icon-infinite"></i> All Industries</a></li>
                    </ul>
                  </li>
                  <li><a href="#" class="btn btn-link btn-sm"><i class="icon-reload-alt position-left"></i>
                    Refine your search</a></li>
                </ul>
              </div>

              <div class="col-sm-6 text-right">
                <ul class="list-inline no-margin-bottom">
                  <li><a href="#" class="btn btn-link btn-sm"><i class="icon-make-group position-left"></i>
                    Browse Mapple</a></li>
                  <li><a href="#" class="btn btn-link btn-sm"><i class="icon-menu7 position-left"></i>
                    Advanced search</a></li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- /search field -->
      <div class="row" v-for="i in Math.ceil($store.state.project.targets.length / 4)">
        <div class="col-lg-3" v-for="target in $store.state.project.targets.slice((i - 1) * 4, i * 4)">
          <div class="panel">
            <div class="panel-body">
              <h5 class="content-group">
									<span class="label label-flat label-rounded label-icon border-grey text-grey mr-10">
										<i class="icon-statistics"></i>
									</span>

                <a href="#" class="text-default">
                  {{target.revenues}} revenues
                </a>
              </h5>

              <p class="content-group">
                {{target.tagline}}</p>

              <ul class="list list-icons">
                <li v-if="target.recommended">
                  <i class="icon-heart5 text-pink-400 position-left"></i>
                  Recommended by Mapple
                </li>
                <li v-for="info in target.keyInfos">
                  <i class="icon-checkmark-circle text-success position-left"></i>
                  {{info.line}}
                </li>

              </ul>
            </div>

            <hr class="no-margin">
            <div class="panel-body text-center">
              <el-rate
                v-model="target.rating"
                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
              </el-rate>
            </div>
            <hr class="no-margin">

            <div class="panel-body alpha-grey">
              <div class="row">
                <div class="col-xs-6  text-left">
                  <a href="#" class="btn bg-blue btn-xs">
                    <i class="icon-share2 position-left"></i>
                    Share
                  </a>
                </div>
                <div class="col-xs-6 text-right">
                  <a href="#" class="btn bg-blue-300 btn-xs">
                    <i class="icon-arrow-right14 position-right"></i>
                    Request Teaser
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
