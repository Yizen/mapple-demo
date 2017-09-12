<template>
  <!-- Mtopnavbarvbar -->
  <div class="navbar navbar-inverse">
    <div class="navbar-header">
      <router-link class="navbar-brand" :to="{ name: 'home.index' }">
        <img src="/static/img/logo_light.svg" alt="">
      </router-link>

      <ul class="nav navbar-nav pull-right visible-xs-block">
        <li><a data-toggle="collapse" data-target="#navbar-mobile"><i class="icon-tree5"></i></a></li>
      </ul>
    </div>

    <div class="navbar-collapse collapse" id="navbar-mobile">
      <ul class="nav navbar-nav">

        <li>
          <router-link :to="{ name: 'home.buyside' }">
            <i class="icon-shuffle"></i>
            <span class="visible-lg-inline-block position-right">Switch to buy side</span>
          </router-link>
        </li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">
          <i class="icon-gift"></i>
          <span class="label label-inline bg-warning-400 position-right">What's new</span>
        </a></li>

        <li class="dropdown language-switch">
          <a class="dropdown-toggle" data-toggle="dropdown">
            <img src="static/img/flags/gb.png" class="position-left" alt="">
            English
            <span class="caret"></span>
          </a>

          <ul class="dropdown-menu">
            <li><a class="deutsch"><img src="static/img/flags/de.png" alt=""> Deutsch</a></li>
            <li><a class="english"><img src="static/img/flags/gb.png" alt=""> English</a></li>
            <li><a class="espana"><img src="static/img/flags/fr.png" alt=""> Français</a></li>
            <li><a class="russian"><img src="static/img/flags/ru.png" alt=""> Русский</a></li>
          </ul>
        </li>


        <li class="dropdown dropdown-user">
          <a class="dropdown-toggle" data-toggle="dropdown">
            <div style="display: inline-block; margin-top: -2.5px;">
              <avatar username="Olivier Grenet" backgroundColor="#EB5151" :size="30"></avatar>
            </div>
            <span>Olivier Grenet</span>
            <i class="caret"></i>
          </a>

          <ul class="dropdown-menu dropdown-menu-right">
            <li><a href="#"><i class="icon-user-plus"></i> My profile</a></li>
            <li><a href="#"><i class="icon-coins"></i> My balance</a></li>
            <li><a href="#"><span class="badge badge-warning pull-right">58</span> <i class="icon-comment-discussion"></i>
              Messages</a></li>
            <li class="divider"></li>
            <li><a href="#"><i class="icon-cog5"></i> Account settings</a></li>
            <li><a href="#" @click.prevent="logout"><i class="icon-switch2"></i> Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <!-- /mtopnavbarvbar -->
</template>

<script>
  /**
   * Created by ogrenet on 11/04/17.
   */
  import authService from '@/services/auth';

  export default {
    methods: {
      logout() {
        authService.logout();
      },
    },
    components: {
      Avatar: require('vue-avatar/dist/Avatar'),
    },
  };
</script>
