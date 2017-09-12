<template>
  <v-layout>
    <div class="row">
      <div class="three columns hide-on-mobiles"></div>
      <div class="six columns">
        <h1>
          Forgot your password
        </h1>
        <p>Please fill in your email and we'll send it back to you</p>

        <el-form ref="forgotPasswordForm" :model="user" :rules="rules" label-width="120px" label-position="top">
          <el-form-item label="Your email" prop="email">
            <el-input v-model="user.email" type="email" placeholder="Email"></el-input>
          </el-form-item>
          <div class="row">
            <el-form-item>
              <el-button type="primary" @click="submitForm('forgotPasswordForm', user)" class="four columns">Login</el-button>
            </el-form-item>
          </div>
        </el-form>
        <div>
          Ready to login ?
          <router-link :to="{ name: 'login.index' }">Back to the login form </router-link>
        </div>
      </div>
    </div>
  </v-layout>
</template>
<script>
  /* ============
   * Forgot Password Index Page
   * ============
   *
   * Page where the user can retrieve its password
   */

  import Vue from 'vue';

  export default {

    data() {
      return {
        user: {
          email: null,
        },
        rules: {
          email: [
            { type: 'email', message: 'Please enter a valid email', required: true },
          ],
        },
      };
    },

    methods: {
      submitForm(formName) {
        // Check for validity of the form
        this.$refs[formName].validate((valid) => {
          if (valid) {
            Vue.router.push({ name: 'login.index' });
          } else {
            return false;
          }
          return false;
        });
      },
    },

    components: {
      VLayout: require('@/layouts/minimal.vue'),
      VPanel: require('@/components/panel.vue'),
    },
  };
</script>
