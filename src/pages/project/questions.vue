<template>
  <v-layout :pageTitle="$store.state.project.deals[$store.state.route.params.projectId-1].name" pageSubTitle="Questions">
    <v-sidebar slot="sidebar"></v-sidebar>
    <template slot="content">
      <v-panel contextualStyle="white" :hasRefresh=false>

        <div slot="panel-title">Questions <span class="label bg-primary heading-text">80 new today</span>
        </div>

        <template slot="heading-elements">
          <el-pagination style="display: inline-block"
                         layout="prev, pager, next"
                         :total="50">
          </el-pagination>

        </template>
        <template slot="panel-table">
          <table class="table">
            <thead>
            <tr>
              <th>Star</th>
              <th>Icon</th>
              <th>Notifier</th>
              <th>Question</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="notification in notifications">
              <td><i class="icon-star-empty3"></i></td>
              <td>
                <avatar :username="notification.name" :size="24" :rounded=false></avatar>
              </td>
              <td>{{notification.name}}</td>
              <td><span v-if="notification.urgent" class="label label-flat border-warning text-warning-600">Urgent</span>&nbsp;{{notification.text}}</td>
              <td>{{notification.date}}</td>
              <td>
                <ul class="icons-list">
                  <li><a href="#"><i class="icon-pencil7"></i></a></li>
                  <li><a href="#"><i class="icon-trash"></i></a></li>
                </ul>
              </td>
            </tr>
            </tbody>
          </table>
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

      const fakeNotifs = [];

      for (let i = 0; i < 15; i += 1) {
        const notification = {
          date: moment(Charlatan.Date.backward(4)).fromNow(),
          name: Charlatan.Name.name(),
          text: `${Charlatan.Lorem.sentence(5)} ?`,
          urgent: (Math.random() > 0.8),
        };

        fakeNotifs.push(notification);
      }

      return {
        notifications: fakeNotifs,
        multipleSelection: [],
      };
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
    },
    components: {
      VLayout: require('@/layouts/default.vue'),
      VPanel: require('@/components/panel.vue'),
      VSidebar: require('@/components/sidebar.vue'),
      Avatar: require('vue-avatar/dist/Avatar'),
    },
  };
</script>
