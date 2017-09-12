<template>
  <v-layout :pageTitle="$store.state.project.deals[$store.state.route.params.projectId-1].name" pageSubTitle="Informations">
    <v-sidebar slot="sidebar"></v-sidebar>
    <template slot="content">
      <v-panel :hasRefresh="false">
        <template slot="panel-title">{{$store.state.project.deals[$store.state.route.params.projectId-1].name}} company information</template>
        <template slot="panel-body">
          <div class="row">
            <p class="content-group-lg">
              Example of a company description Lorem Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            <div class="col-md-6">
              <fieldset>
                <legend class="text-semibold"><i class="icon-home5 position-left"></i> General</legend>
              <div class="form-group">
                <label>Location</label>
                <div class="input-group">
                  <span class="input-group-addon"><i class="icon-pin-alt"></i></span>
                  <input type="text" class="form-control" placeholder="Bay Area"></div>
              </div>
              <div class="form-group">
                <label>Founded</label>
                <div class="input-group">
                  <span class="input-group-addon"><i class="icon-calendar"></i></span>
                  <input type="text" class="form-control" placeholder="2013"></div>
              </div>
              <div class="form-group">
                <label>Employees</label>
                <div class="input-group">
                  <span class="input-group-addon"><i class="icon-users4"></i></span>
                  <input type="text" class="form-control" placeholder="877"></div>
              </div>
              <div class="form-group">
                <label>Website</label>
                <div class="input-group">
                  <span class="input-group-addon"><i class="icon-mention"></i></span>
                  <input type="text" class="form-control" placeholder="http://www.company.com"></div>
              </div>
              </fieldset>
            </div>
            <div class="col-md-6">
              <fieldset>
                <legend class="text-semibold"><i class="icon-coin-dollar position-left"></i> Financials Basics</legend>
              <div class="form-group">
                <label>Business Status</label>
                <div class="input-group">
                  <span class="input-group-addon"><i class="icon-stats-growth"></i></span>
                  <input type="text" class="form-control" placeholder="Generating Revenue"></div>
              </div>
              <div class="form-group">
                <label>Ownership Status</label>
                <div class="input-group">
                  <span class="input-group-addon"><i class="icon-briefcase"></i></span>
                  <input type="text" class="form-control" placeholder="Privately Held"></div>
              </div>
              <div class="form-group">
                <label>Financing Status</label>
                <div class="input-group">
                  <span class="input-group-addon"><i class="icon-gas"></i></span>
                  <input type="text" class="form-control" placeholder="Venture Capital Backed"></div>
              </div>
              <div class="form-group">
                <label>Primary Industry</label>
                <div class="input-group">
                  <span class="input-group-addon"><i class="icon-office"></i></span>
                  <input type="text" class="form-control" placeholder="Media and Information Services (B2C)"></div>
              </div>
              </fieldset></div>
          </div>
        </template>
      </v-panel>
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
