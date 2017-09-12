<template>
  <v-layout :pageTitle="$store.state.project.deals[$store.state.route.params.projectId-1].name"
            pageSubTitle="User Access">
    <v-sidebar slot="sidebar"></v-sidebar>
    <template slot="content">
      <v-panel :hasRefresh="false">
        <template slot="panel-title">{{$store.state.project.deals[$store.state.route.params.projectId - 1].name}} Access rights</template>
        <template slot="panel-body">
          <div class="row">
            <div class="col-md-6">
              <v-panel contextualStyle="white" :hasRefresh=false>
                <template slot="panel-title">
                  <i class="icon-forward position-left"></i> Invite user
                </template>
                <template slot="panel-body">

                  <!-- Mail details -->
                  <div class="table-responsive mail-details-write">
                    <table class="table">
                      <tbody>
                      <tr>
                        <td>From:</td>
                        <td class="no-padding"><input type="text" class="form-control"
                                                      placeholder="olivier.grenet@gmail.com"/></td>

                      </tr>
                      <tr>
                        <td style="width: 150px">To:</td>
                        <td class="no-padding"><input type="text" class="form-control" placeholder="Add user email"/>
                        </td>
                      </tr>
                      <tr>
                        <td>Subject:</td>
                        <td class="no-padding"><input type="text" class="form-control"
                                                      :placeholder="$store.state.project.deals[$store.state.route.params.projectId - 1].name"/>
                        </td>
                      </tr>

                      </tbody>
                    </table>
                  </div>
                  <!-- /mail details -->

                  <!-- Mail container -->
                  <div class="mail-container-write pt-20">
                    <!-- Email sample (demo) -->
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
                      <tr>
                        <td>
                          <el-input
                            type="textarea"
                            :autosize="{ minRows: 6}"
                            placeholder="Dear name, please join this project on Mapple">
                          </el-input>
                        </td>
                      </tr>
                    </table>
                    <!-- /email sample (demo) -->`
                    <!-- /mail container -->
                  </div>
                  <div class="navbar navbar-default" style="padding-left: 0">
                    <ul class="nav navbar-nav visible-xs-block no-border">
                      <li>
                        <a
                          class="text-center collapsed"
                          data-toggle="collapse"
                          data-target="#inbox-toolbar-toggle-single">
                          <i class="icon-circle-down2"></i>
                        </a>
                      </li>
                    </ul>

                    <div class="navbar-collapse collapse" id="inbox-toolbar-toggle-single">
                      <div class="btn-group navbar-btn">
                        <button type="button" class="btn bg-blue">
                          <i class="icon-checkmark3 position-left"></i>
                          Send invitation
                        </button>
                      </div>
                    </div>
                    <!-- /mail toolbar -->
                  </div>
                  <!-- /single mail -->
                </template>
              </v-panel>
            </div>
            <div class="col-md-6">
              <v-panel contextualStyle="white" :hasRefresh=false>
                <template slot="panel-title">
                  <i class="icon-user-lock position-left"></i> User list
                </template>
                <template slot="panel-body">
                  <ul class="media-list">
                    <li class="media-header">Active users</li>
                    <template v-for="user in users">
                      <li class="media">
                        <div class="media-left media-middle">
                          <a href="#">
                            <avatar :username="user.firstName+' '+user.lastName" :size="48" :rounded=true></avatar>
                          </a>
                        </div>

                        <div class="media-body">
                          <div class="media-heading text-semibold">{{user.firstName}} {{user.lastName}}</div>
                          <span class="text-muted">Development</span>
                        </div>

                        <div class="media-right media-middle">
                          <ul class="icons-list text-nowrap">
                            <li class="dropdown">
                              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>

                              <ul class="dropdown-menu dropdown-menu-right">
                                <li><a href="#" data-toggle="modal" data-target="#call"><i class="icon-phone2"></i>
                                  Make a call</a></li>
                                <li><a href="#" data-toggle="modal" data-target="#chat"><i class="icon-comment"></i>
                                  Start chat</a></li>
                                <li><a href="#" data-toggle="modal" data-target="#video"><i
                                  class="icon-video-camera"></i> Video call</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </template>
                    <!--<li class="media panel panel-body stack-media-on-mobile">
                      <div class="media-left">
                        <div style="display: inline-block">
                          <div style="display: inline-block;">
                          </div>
                        </div>
                      </div>

                      <div class="media-body">
                        <h6 class="media-heading text-semibold">
                          <a href="#">{{user.firstName}} {{user.lastName}}</a>
                        </h6>

                        <ul class="list-inline list-inline-separate text-muted mb-10">
                          <li><a href="#" class="text-muted">{{user.company}}</a></li>
                        </ul>

                        <ul class="list-inline list-inline-separate mb-10">
                          <li><i class="icon-envelop2"></i> {{user.email}}</li>
                        </ul>

                      </div>

                      <div class="media-right text-nowrap">
                        <span v-if="user.isNew" class="label bg-blue">New</span>
                        <span v-else="user.isNew" class="text-muted">Last connected {{user.lastConnectionDate}}</span>
                        <div class="">{{user.type}}</div>

                      </div>
                    </li>-->
                  </ul>
                </template>
              </v-panel>
            </div>
          </div>
        </template>
      </v-panel>
    </template>
  </v-layout>
</template>
<script>
  const Charlatan = require('charlatan');
  const moment = require('moment');

  export default {
    data() {
      Charlatan.setLocale('en');

      const fakeUsers = [];
      const userType = ['Bank', 'Client', 'Legal', 'Advisor'];

      for (let i = 0; i < 15; i += 1) {
        const user = {
          lastConnectionDate: moment(Charlatan.Date.backward(4)).fromNow(),
          company: Charlatan.Company.name(),
          firstName: Charlatan.Name.firstName(),
          lastName: Charlatan.Name.lastName(),
          phone: Charlatan.PhoneNumber.cellPhone(),
          email: Charlatan.Internet.email(),
          city: Charlatan.Address.city(),
          country: Charlatan.Address.country(),
          isNew: Math.random() >= 0.5,
          type: userType[Math.floor(Math.random() * (3))],
        };

        fakeUsers.push(user);
      }

      return {
        users: fakeUsers,
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
