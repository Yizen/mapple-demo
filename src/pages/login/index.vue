<template>
  <v-layout>
    <div style="margin: 0 auto 20px auto; width: 800px;">
      <div style="display: table-cell;vertical-align: top;">
        <object id="mappleLogo" type="image/svg+xml" data="/static/img/mappleLeaf.svg" height="400px"></object>
      </div>
      <div style="display: table-cell;">
        <v-panel>
          <template slot="panel-body">
            <div class="row">
              <h1>Welcome to your Mapple account</h1>
            </div>
            <div class="row">
              <el-form ref="loginForm" :model="user" :rules="rules" label-width="120px" label-position="top">
                <el-form-item label="Your email" prop="email">
                  <el-input v-model="user.email" type="email" placeholder="Email"></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="password">
                  <el-input type="password" v-model="user.password" placeholder="Password"
                            auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button @click="forgot()" class="six columns">Forgot your password ?</el-button>
                  <el-button type="primary" @click="submitForm('loginForm', user)" class="four columns">Login
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
          </template>

          <template slot="panel-footer">

            No account?

            <router-link :to="{ name: 'register.index' }">Register</router-link>
          </template>
        </v-panel>
      </div>
    </div>
  </v-layout>
</template>

<script>
  /* ============
   * Login Index Page
   * ============
   *
   * Page where the user can login.
   */
  import authService from '@/services/auth';
  import Vue from 'vue';
  import Vivus from 'vivus';

  export default {
    mounted() {
      // eslint-disable-next-line no-new
      new Vivus('mappleLogo', { duration: 90 });
    },

    data() {
      return {
        user: {
          email: null,
          password: null,
        },
        rules: {
          email: [
            { type: 'email', message: 'Please enter a valid email', required: true },
          ],
          password: [
            { required: true, message: 'Please enter your password' },
          ],
        },
      };
    },

    methods: {
      submitForm(formName, user) {
        // Check for validity of the form
        this.$refs[formName].validate((valid) => {
          if (valid) {
            authService.login(user);
          } else {
            return false;
          }
          return false;
        });
      },
      forgot() {
        Vue.router.push({ name: 'login.forgot' });
      },
    },
    components: {
      VLayout: require('@/layouts/minimal.vue'),
      VPanel: require('@/components/panel.vue'),
    },
  };
</script>
