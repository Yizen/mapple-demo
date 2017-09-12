<template>
  <v-layout :pageTitle="$store.state.project.deals[$store.state.route.params.projectId-1].name" pageSubTitle="Valuation">
    <v-sidebar slot="sidebar"></v-sidebar>
    <template slot="content">
      <!-- Info alert -->
      <div class="alert alert-info alert-styled-left alert-arrow-left alert-component">
        <button type="button" class="close" data-dismiss="alert"><span>&times;</span><span class="sr-only">Close</span>
        </button>
        <h6 class="alert-heading text-semibold">Deep learning </h6>
        Click to get our  valuation analysis based on our Big Data engine.
      </div>

      <v-panel>
        <template slot="panel-title">Internal valuation analysis</template>
        <template slot="panel-body">
          <div class="list-group no-border">
            <a href="#" class="list-group-item">
              <i class="icon-file-pdf"></i> General valuation document.pdf <span class="label bg-success-400">New</span>
            </a>

            <a href="#" class="list-group-item">
              <i class="icon-file-word"></i> Industry assumptions.docx
            </a>

            <a href="#" class="list-group-item">
              <i class="icon-file-excel"></i> Financials documents <span class="label bg-slate">Draft</span>
            </a>

            <a href="#" class="list-group-item">
              <i class="icon-file-word"></i> Client conclusions.docx
            </a>

            <a href="#" class="list-group-item">
              <i class="icon-arrow-right22"></i> Show all files (13)
            </a>
          </div>
        </template>
        <template slot="panel-table">
          <table class="table">
            <thead>
            <tr>
              <th>Version #</th>
              <th>Modified by</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="doc in docs">
              <td>{{doc.id}}</td>
              <td>{{doc.name}}</td>
              <td>{{doc.date}}</td>
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
      <!-- /info alert -->
    </template>
  </v-layout>

</template>
<script>
  const Charlatan = require('charlatan');
  const moment = require('moment');

  export default {
    data() {
      Charlatan.setLocale('en');

      const fakeDocs = [];

      for (let i = 0; i < 10; i += 1) {
        const doc = {
          id: 10 - i,
          name: Charlatan.Name.name(),
          date: moment(Charlatan.Date.backward((i + 1) * 30)).calendar(),
        };

        fakeDocs.push(doc);
      }

      return {
        docs: fakeDocs,
      };
    },
    components: {
      VLayout: require('@/layouts/default.vue'),
      VPanel: require('@/components/panel.vue'),
      VSidebar: require('@/components/sidebar.vue'),
    },
  };
</script>
