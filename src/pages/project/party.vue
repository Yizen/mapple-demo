<template>
  <v-layout :pageTitle="$store.state.project.deals[$store.state.route.params.projectId-1].name" pageSubTitle="List of parties">
    <v-sidebar slot="sidebar"></v-sidebar>
    <template slot="sidebar-secondary">
      <div class="sidebar sidebar-secondary sidebar-default sidebar-separate">
        <div class="sidebar-content">
          <div class="panel panel-white">
            <div class="panel-heading">
              <div class="panel-title text-semibold">
                <i class="icon-search4 text-size-base position-left"></i>
                Filter
              </div>
            </div>

            <div class="panel-body">
              <form action="#">
                <div class="form-group">
                  <div class="has-feedback has-feedback-left">
                    <input type="search" class="form-control" placeholder="Title or keywords">
                    <div class="form-control-feedback">
                      <i class="icon-reading text-size-large text-muted"></i>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <div class="has-feedback has-feedback-left">
                    <input type="search" class="form-control" placeholder="Location">
                    <div class="form-control-feedback">
                      <i class="icon-pin-alt text-size-large text-muted"></i>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <el-checkbox>Bank</el-checkbox>
                  <br>
                  <el-checkbox>Client</el-checkbox>
                  <br>
                  <el-checkbox>Legal</el-checkbox>
                  <br>
                  <el-checkbox>Advisor</el-checkbox>
                </div>

                <button type="submit" class="btn bg-blue btn-block">
                  <i class="icon-search4 text-size-base position-left"></i>
                  Find people


                </button>
              </form>
            </div>
          </div>
          <!-- Company selection -->
          <div class="panel panel-white">
            <div class="panel-heading">
              <div class="panel-title text-semibold">
                <i class="icon-briefcase3 position-left"></i>
                Company


              </div>
            </div>

            <form action="#">
              <div class="panel-body">
                <div class="form-group">
                  <div class="no-margin-top">
                    <label>
                      <el-checkbox>Company 1</el-checkbox>
                      <span class="text-muted text-size-small">&nbsp;(43)</span>
                    </label>
                  </div>

                  <label>
                    <el-checkbox>Company 2</el-checkbox>
                    <span class="text-muted text-size-small">&nbsp;(124)</span>
                  </label>

                  <label>
                    <el-checkbox>Company 3</el-checkbox>

                    <span class="text-muted text-size-small">&nbsp;(67)</span>
                  </label>

                  <label>
                    <el-checkbox>Company 4</el-checkbox>

                    <span class="text-muted text-size-small">&nbsp;(67)</span>
                  </label>

                  <label>
                    <el-checkbox>Company 5</el-checkbox>

                    <span class="text-muted text-size-small">&nbsp;(67)</span>
                  </label>

                  <label>
                    <el-checkbox>Company 6</el-checkbox>

                    <span class="text-muted text-size-small">&nbsp;(67)</span>
                  </label>

                  <label>
                    <el-checkbox>Company 7</el-checkbox>

                    <span class="text-muted text-size-small">&nbsp;(67)</span>
                  </label>
                </div>
              </div>

              <div class="panel-footer no-padding">
                <a href="#" class="btn btn-default btn-block no-border">All companies</a>
              </div>
            </form>
          </div>
          <!-- /company selection -->

        </div>
      </div>
    </template>
    <template slot="content">
      <ul class="media-list content-group" v-for="user in users">
        <li class="media panel panel-body stack-media-on-mobile">
          <div class="media-left">
            <div style="display: inline-block">
              <div style="display: inline-block;">
                <avatar :username="user.firstName+' '+user.lastName" :size="48" :rounded=true></avatar>
              </div>
            </div>
          </div>

          <div class="media-body">
            <h6 class="media-heading text-semibold">
              <a href="#">{{user.firstName}} {{user.lastName}}</a>
            </h6>

            <ul class="list-inline list-inline-separate text-muted mb-10">
              <li><a href="#" class="text-muted">{{user.company}}</a></li>
              <li><i class="icon-pin-alt text-size-base"></i> {{user.city}}, {{user.country}}</li>
              <li><span class="label label-default label-rounded">{{user.type}}</span></li>
            </ul>

            <ul class="list-inline list-inline-separate mb-10">
              <li><i class="icon-phone2"></i> {{user.phone}}</li>
              <li><i class="icon-envelop2"></i> {{user.email}}</li>
            </ul>

          </div>

          <div class="media-right text-nowrap">
            <span v-if="user.isNew" class="label bg-blue">New</span>
            <span v-else="user.isNew" class="text-muted">Last connected {{user.lastConnectionDate}}</span>
          </div>
        </li>
      </ul>
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
