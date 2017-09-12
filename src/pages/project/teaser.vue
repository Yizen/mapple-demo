<template>
  <v-layout :pageTitle="$store.state.project.deals[$store.state.route.params.projectId-1].name" pageSubTitle="Teaser">
    <v-sidebar slot="sidebar"></v-sidebar>
    <div slot="content">
      <div class="row">
        <div class="col-lg-9">
          <v-panel :hasRefresh="false">
            <template slot="panel-title">Teaser for ACME <span class="label label-flat border-success text-success-600">FINAL</span>
            </template>
            <template slot="panel-body">
              <el-carousel height="550px" indicator-position="none" :autoplay=false>
                <el-carousel-item v-for="page in teaserImages" :key="page">
                  <img :src="page" style="border: 1px solid #cdcdcd; max-height: 550px;"/>
                </el-carousel-item>
              </el-carousel>
            </template>
          </v-panel>
          <v-panel>
            <template slot="panel-title">Previous Versions</template>
            <table slot="panel-body" class="table table-framed">
              <thead>
              <tr>
                <th style="width: 20px;">#</th>
                <th class="col-xs-3">Changes</th>
                <th class="col-xs-2">Version date</th>
                <th>Change summary</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>4</td>
                <td><span class="text-semibold">Approved version <span
                  class="label bg-green-600 heading-text">FINAL</span></span></td>
                <td>
                  <div class="input-group input-group-transparent">
                    <div class="input-group-addon"><i class="icon-calendar22 position-left"></i></div>
                    <input type="text" class="form-control datepicker" value="21 January, 17">
                  </div>
                </td>
                <td>This version has client sign-off</td>
              </tr>
              <tr>
                <td>3</td>
                <td><span class="text-semibold">Competition research</span></td>
                <td>
                  <div class="input-group input-group-transparent">
                    <div class="input-group-addon"><i class="icon-calendar22 position-left"></i></div>
                    <input type="text" class="form-control datepicker" value="20 January, 17">
                  </div>
                </td>
                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              </tr>
              <tr>
                <td>2</td>
                <td><span class="text-semibold">Updated financials</span></td>
                <td>
                  <div class="input-group input-group-transparent">
                    <div class="input-group-addon"><i class="icon-calendar22 position-left"></i></div>
                    <input type="text" class="form-control datepicker" value="18 January, 17">
                  </div>
                </td>
                <td>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus
                varius blandit sit amet non magna.

                </td>
              </tr>
              <tr>
                <td>1</td>
                <td><span class="text-semibold">Initial document</span></td>
                <td>
                  <div class="input-group input-group-transparent">
                    <div class="input-group-addon"><i class="icon-calendar22 position-left"></i></div>
                    <input type="text" class="form-control datepicker" value="12 December, 17">
                  </div>
                </td>
                <td>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

                </td>
              </tr>
              </tbody>
            </table>
          </v-panel>
        </div>

        <div class="col-lg-3">
          <v-panel :hasRefresh=false>
            <div slot="panel-title">Teaser details <span class="label bg-green-600 heading-text">FINAL</span></div>
            <table class="table table-borderless table-xs content-group-sm" slot="panel-body">
              <tbody>
              <tr>
                <td><i class="icon-briefcase position-0left"></i> Target:</td>
                <td class="text-right"><span class="pull-right"><a href="#">ACME</a></span></td>
              </tr>
              <tr>
                <td><i class="icon-alarm-add position-left"></i> Updated:</td>
                <td class="text-right">12 May, 2017</td>
              </tr>
              <tr>
                <td><i class="icon-alarm-check position-left"></i> Created:</td>
                <td class="text-right">25 Feb, 2017</td>
              </tr>
              <tr>
                <td><i class="icon-circles2 position-left"></i> Priority:</td>
                <td class="text-right">
                  <div class="btn-group">
                    <a href="#" class="label label-danger dropdown-toggle" data-toggle="dropdown">Highest <span
                      class="caret"></span></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest
                      priority</a>
                      </li>
                      <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a>
                      </li>
                      <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal
                      priority</a>
                      </li>
                      <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td><i class="icon-history position-left"></i> Revisions:</td>
                <td class="text-right">4</td>
              </tr>
              <tr>
                <td><i class="icon-file-plus position-left"></i> Added by:</td>
                <td class="text-right"><a href="#">Olivier Grenet</a></td>
              </tr>
              <tr>
                <td><i class="icon-file-check position-left"></i> Status:</td>
                <td class="text-right">Published</td>
              </tr>
              </tbody>
            </table>
          </v-panel>

          <v-panel :hasRefresh="false">
            <div slot="panel-title">Participating users</div>
            <template slot="panel-body">
              <ul class="media-list">
                <li class="media">
                  <div class="media-left">
                    <a href="#">
                      <avatar username="Rebecca Jameson" :size="36" :rounded=true></avatar>
                      <span class="badge bg-warning-400 media-badge">6</span>
                    </a>
                  </div>

                  <div class="media-body media-middle text-semibold">
                    Rebecca Jameson

                    <div class="media-annotation">ACME</div>
                  </div>

                  <div class="media-right media-middle">
                    <ul class="icons-list text-nowrap">
                      <li>
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-more2"></i></a>
                        <ul class="dropdown-menu dropdown-menu-right">
                          <li><a href="#"><i class="icon-comment-discussion pull-right"></i> Start chat</a></li>
                          <li><a href="#"><i class="icon-phone2 pull-right"></i> Make a call</a></li>
                          <li><a href="#"><i class="icon-mail5 pull-right"></i> Send mail</a></li>
                          <li class="divider"></li>
                          <li><a href="#"><i class="icon-statistics pull-right"></i> Statistics</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="media">
                  <div class="media-left">
                    <a href="#">
                      <avatar username="Walter Sommers" :size="36" :rounded=true></avatar>
                      <span class="badge bg-warning-400 media-badge">9</span>
                    </a>
                  </div>

                  <div class="media-body media-middle text-semibold">
                    Walter Sommers

                    <div class="media-annotation">Advisor</div>
                  </div>

                  <div class="media-right media-middle">
                    <ul class="icons-list text-nowrap">
                      <li>
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-more2"></i></a>
                        <ul class="dropdown-menu dropdown-menu-right">
                          <li><a href="#"><i class="icon-comment-discussion pull-right"></i> Start chat</a></li>
                          <li><a href="#"><i class="icon-phone2 pull-right"></i> Make a call</a></li>
                          <li><a href="#"><i class="icon-mail5 pull-right"></i> Send mail</a></li>
                          <li class="divider"></li>
                          <li><a href="#"><i class="icon-statistics pull-right"></i> Statistics</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="media">
                  <div class="media-left">
                    <a href="#">
                      <avatar username="Otto Gerwald" :size="36" :rounded=true></avatar>
                    </a>
                  </div>

                  <div class="media-body media-middle text-semibold">
                    Otto Gerwald

                    <div class="media-annotation">Financial developer</div>
                  </div>

                  <div class="media-right media-middle">
                    <ul class="icons-list text-nowrap">
                      <li>
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-more2"></i></a>
                        <ul class="dropdown-menu dropdown-menu-right">
                          <li><a href="#"><i class="icon-comment-discussion pull-right"></i> Start chat</a></li>
                          <li><a href="#"><i class="icon-phone2 pull-right"></i> Make a call</a></li>
                          <li><a href="#"><i class="icon-mail5 pull-right"></i> Send mail</a></li>
                          <li class="divider"></li>
                          <li><a href="#"><i class="icon-statistics pull-right"></i> Statistics</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="media">
                  <div class="media-left">
                    <a href="#">
                      <avatar username="Vince Satmann" :size="36" :rounded=true></avatar>
                    </a>
                  </div>

                  <div class="media-body media-middle text-semibold">
                    Vince Satmann

                    <div class="media-annotation">Expert</div>
                  </div>

                  <div class="media-right media-middle">
                    <ul class="icons-list text-nowrap">
                      <li>
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-more2"></i></a>
                        <ul class="dropdown-menu dropdown-menu-right">
                          <li><a href="#"><i class="icon-comment-discussion pull-right"></i> Start chat</a></li>
                          <li><a href="#"><i class="icon-phone2 pull-right"></i> Make a call</a></li>
                          <li><a href="#"><i class="icon-mail5 pull-right"></i> Send mail</a></li>
                          <li class="divider"></li>
                          <li><a href="#"><i class="icon-statistics pull-right"></i> Statistics</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="media">
                  <div class="media-left">
                    <a href="#">
                      <avatar username="Jason Leroy" :size="36" :rounded=true></avatar>
                    </a>
                  </div>

                  <div class="media-body media-middle text-semibold">
                    Jason Leroy

                    <div class="media-annotation">Specialist</div>
                  </div>

                  <div class="media-right media-middle">
                    <ul class="icons-list text-nowrap">
                      <li>
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-more2"></i></a>
                        <ul class="dropdown-menu dropdown-menu-right">
                          <li><a href="#"><i class="icon-comment-discussion pull-right"></i> Start chat</a></li>
                          <li><a href="#"><i class="icon-phone2 pull-right"></i> Make a call</a></li>
                          <li><a href="#"><i class="icon-mail5 pull-right"></i> Send mail</a></li>
                          <li class="divider"></li>
                          <li><a href="#"><i class="icon-statistics pull-right"></i> Statistics</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </template>
          </v-panel>
        </div>
      </div>
    </div>
  </v-layout>
</template>
<script>
  export default {
    data() {
      const teaserImages = [];

      for (let i = 0; i < 49; i += 1) {
        teaserImages.push(`static/img/teaser/teaser-${i}.png`);
      }

      return {
        teaserImages,
      };
    },
    components: {
      VLayout: require('@/layouts/default.vue'),
      VPanel: require('@/components/panel.vue'),
      VSidebar: require('@/components/sidebar.vue'),
      Avatar: require('vue-avatar/dist/Avatar'),
    },
  };
</script>
