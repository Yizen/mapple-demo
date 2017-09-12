<template>
  <v-layout :pageTitle="$store.state.project.deals[$store.state.route.params.projectId-1].name" pageSubTitle="Buyer">
    <v-sidebar slot="sidebar"></v-sidebar>
    <template slot="content">
      <div class="panel panel-body bg-blue-300">
        <div class="media no-margin">
          <div class="media-left media-middle">
            <i class="icon-wave icon-2x"></i>
          </div>
          <div class="media-body text-right">
            <h6 class="media-heading text-semibold">{{$store.state.project.deals[$store.state.route.params.projectId-1].buyers[$store.state.route.params.contactId-1].name}}</h6>
            <span class="text-muted">
              <i class="icon-user-check"></i>
              <strong>Main Contact:
              </strong>{{$store.state.project.deals[$store.state.route.params.projectId-1].buyers[$store.state.route.params.contactId-1].contact}}</span>
          </div>
        </div>
      </div>

      <div class="panel panel-flat panel-body">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="Buyer details" name="company">
            <!-- Info alert -->
            <div class="alert alpha-slate alert-styled-left alert-arrow-left alert-component">
              <button type="button" class="close" data-dismiss="alert"><span>&times;</span><span class="sr-only">Close</span>
              </button>
              <h6 class="alert-heading text-semibold">History of the buyer</h6>
              <ul>
                <li>Transaction history</li>
                <li>Usual targets</li>
                <li>Usual multiples paid</li>
              </ul>
            </div>
            <!-- /info alert -->
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
          </el-tab-pane>
          <el-tab-pane label="Contacts" name="contacts">
            <!-- Info alert -->
            <div class="alert alpha-slate alert-styled-left alert-arrow-left alert-component">
              <button type="button" class="close" data-dismiss="alert"><span>&times;</span><span class="sr-only">Close</span>
              </button>
              <h6 class="alert-heading text-semibold">Key people</h6>
              <ul>
                <li>Key people involved in previous transactions</li>
                <li>Trusted advisors</li>
              </ul>
            </div>
            <!-- /info alert -->
            <ul class="media-list content-group" v-for="user in $store.state.project.deals[$store.state.route.params.projectId-1].buyers[$store.state.route.params.contactId-1].contacts">
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
          </el-tab-pane>

          <el-tab-pane label="Send Teaser" name="teaser">
            <v-panel contextualStyle="white" :hasRefresh=false>
              <template slot="panel-title">
                Send a new teaser
              </template>
              <template slot="panel-body">
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
                    Send teaser
                  </button>
                </div>

                <div class="btn-group navbar-btn">
                  <button type="button" class="btn btn-default">
                    <i class="icon-plus2"></i>
                    <span class="hidden-xs position-right">Save</span></button>
                  <button type="button" class="btn btn-default">
                    <i class="icon-cross2"></i>
                    <span class="hidden-xs position-right">Cancel</span></button>

                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-default dropdown-toggle"
                      data-toggle="dropdown">
                      <i class="icon-menu7"></i>
                      <span class="caret"></span>
                    </button>

                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#">Action</a>
                      </li>
                      <li>
                        <a href="#">Another action</a>
                      </li>
                      <li>
                        <a href="#">Something else here</a>
                      </li>
                      <li>
                        <a href="#">One more line</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Single mail -->

              </div>
              <!-- /mail toolbar -->

              <!-- Mail details -->
              <div class="table-responsive mail-details-write">
                <table class="table">
                  <tbody>
                  <tr>
                    <td>From:</td>
                    <td class="no-padding"><input type="text" class="form-control" placeholder="olivier.grenet@gmail.com"/></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="width: 150px">To:</td>
                    <td class="no-padding"><input type="text" class="form-control" placeholder="Add recipients"/></td>
                    <td style="width: 250px" class="text-right">
                      <ul class="list-inline list-inline-separate no-margin">
                        <li>
                          <a href="#">Copy</a>
                        </li>
                        <li>
                          <a href="#">Hidden copy</a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Subject:</td>
                    <td class="no-padding"><input type="text" class="form-control" placeholder="Add subject"/></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <ul class="list-inline no-margin">
                        <li>
                          <a href="#">
                            <i class="icon-attachment position-left"></i>
                            Attach files</a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="icon-google-drive position-left"></i>
                            Google Drive</a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="icon-dropbox position-left"></i>
                            Dropbox</a>
                        </li>
                      </ul>
                    </td>
                    <td class="text-right">
                      <a href="#">
                        <i class="icon-cloud-upload2 position-left"></i>
                        Cloud drive</a>
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
                        placeholder="Dear name, please find attached a teaser for a great company that might be of some interest for you"></el-input>
                    </td>
                  </tr>
                </table>
                <!-- /email sample (demo) -->
              </div>
              <!-- /mail container -->

              <!-- Attachments -->
              <div class="mail-attachments-container">
                <h6 class="mail-attachments-heading">2 Attachments</h6>

                <ul class="mail-attachments">
                  <li>
                    <span class="mail-attachments-preview">
                      <i class="icon-file-pdf icon-2x"></i>
                    </span>

                    <div class="mail-attachments-content">
                      <span class="text-semibold">Watermarked company teaser.pdf</span>

                      <ul class="list-inline list-inline-condensed no-margin">
                        <li class="text-muted">174 KB</li>
                        <li>
                          <a href="#">View</a>
                        </li>
                        <li>
                          <a href="#">Remove</a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <span class="mail-attachments-preview">
                      <i class="icon-file-pdf icon-2x"></i>
                    </span>

                    <div class="mail-attachments-content">
                      <span class="text-semibold">NDA proposal.pdf</span>

                      <ul class="list-inline list-inline-condensed no-margin">
                        <li class="text-muted">736 KB</li>
                        <li>
                          <a href="#">View</a>
                        </li>
                        <li>
                          <a href="#">Remove</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- /attachments -->

            </div>
            <!-- /single mail -->
              </template>
            </v-panel>
            <v-panel contextualStyle="white">
              <template slot="panel-title">
                Analytics
              </template>
              <template slot="panel-body">
                <ul class="list-feed list-feed-time">
                  <li>
                    <span class="feed-time text-muted">08:25</span>
                    <a href="#">David Linner</a> sent a teaser to <a href="#">Christopher Wallace</a>
                  </li>

                  <li>
                    <span class="feed-time text-muted">10:25</span>
                    <a href="#">David Linner</a> re-sent a teaser to <a href="#">Christopher Wallace</a>
                  </li>

                  <li>
                    <span class="feed-time text-muted">12:37</span>
                    <a href="#">Christopher Wallace</a> opened the teaser
                  </li>

                  <li>
                    <span class="feed-time text-muted">16:28</span>
                    <a href="#">Eugene Kopyov</a> requested access to InfoMemo
                  </li>

                  <li>
                    <span class="feed-time text-muted">17:58</span>
                    <a href="#">David Linner</a> sent a NDA to <a href="#">Christopher Wallace</a>
                  </li>
                </ul>
              </template>
            </v-panel>

          </el-tab-pane>
          <el-tab-pane label="NDA" name="nda">

            <div class="media-left">
              <img
                src="/static/img/hellosign/HelloSign_Logo.png"
                class="media-preview img-preview"
                alt=""/>
            </div>
            <div class="media-body">
              <h6 class="media-heading">Powered by HelloSign</h6>
              Our partner HelloSign will send a link to your partner, to a page where they can
              review and digitally sign the NDA to gain access to the InfoMemo
            </div>

            <div class="panel bg-success mt-20">
              <div class="panel-heading">
                <h6 class="panel-title">NDA Signed</h6>
                <div class="heading-elements">
                  <ul class="icons-list">
                    <li>
                      <a data-action="collapse"></a>
                    </li>
                    <li>
                      <a data-action="close"></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="panel-body">
                NDA has been signed on
                <mark>March 14, 2017</mark>
                by
                <mark>lawyer@company.com</mark>

                <div class="mt-20">
                  <div class="media-left">
                    <i class="icon-file-pdf icon-2x text-white"></i>

                  </div>
                  <div class="media-body">
                    <h6 class="media-heading">signed-NDA</h6>
                    Click to view the final NDA
                  </div>
                </div>
              </div>
            </div>
            <v-panel contextualStyle="white" :hasRefresh=false>

              <div slot="panel-title"><span class="label bg-success heading-text">All change requests done</span>
              </div>
              <template slot="panel-table">
                <table class="table">
                  <thead>
                  <tr>
                    <th>Status</th>
                    <th>Page</th>
                    <th>Question</th>
                    <th>Date</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="question in questions">
                    <td><i class="icon-checkmark-circle"></i></td>
                    <td>{{question.page}}</td>
                    <td>{{question.name}}</td>
                    <td><span v-if="question.urgent" class="label label-flat border-warning text-warning-600">Blocker</span>&nbsp;{{question.text}}</td>
                    <td>{{question.date}}</td>
                  </tr>
                  </tbody>
                </table>
              </template>
            </v-panel>

          </el-tab-pane>
          <el-tab-pane label="InfoMemo" name="infomemo">
            <!-- Info alert -->
            <div class="alert alpha-slate alert-styled-left alert-arrow-left alert-component">
              <button type="button" class="close" data-dismiss="alert"><span>&times;</span><span class="sr-only">Close</span>
              </button>
              <h6 class="alert-heading text-semibold">InfoMemo insights</h6>
              <ul>
                <li>Standardized structure of InfoMemo</li>
                <li>Knowledge management to help recycle previous material</li>
                <li>Deep learning to automate some parts of InfoMemo</li>
              </ul>
            </div>
            <!-- /info alert -->
          </el-tab-pane>
          <el-tab-pane label="VDD" name="vdd">
            <!-- Info alert -->
            <div class="alert alpha-slate alert-styled-left alert-arrow-left alert-component">
              <button type="button" class="close" data-dismiss="alert"><span>&times;</span><span class="sr-only">Close</span>
              </button>
              <h6 class="alert-heading text-semibold">Process digitization</h6>
              <ul>
                <li>Automate dispatch of release letters and VDD</li>
                <li>Online exchanges</li>
                <li>Consistency check between InfoMemo and VDD</li>
              </ul>
            </div>
            <!-- /info alert -->
          </el-tab-pane>
          <el-tab-pane label="Offer" name="offer">
            <!-- Info alert -->
            <div class="alert alpha-slate alert-styled-left alert-arrow-left alert-component">
              <button type="button" class="close" data-dismiss="alert"><span>&times;</span><span class="sr-only">Close</span>
              </button>
              <h6 class="alert-heading text-semibold">Offers</h6>
              <ul>
                <li>Automated dispatch of process letters</li>
                <li>Automated offer summary build up</li>
              </ul>
            </div>
            <!-- /info alert -->

          </el-tab-pane>
          <el-tab-pane label="Behaviour analysis" name="behaviour">
            <div class="row">
              <div class="col-sm-6 col-md-3">
                <div class="panel panel-body bg-blue-400 has-bg-image">
                  <div class="media no-margin">
                    <div class="media-body">
                      <h3 class="no-margin">54</h3>
                      <span class="text-uppercase text-size-mini">deals entered</span>
                    </div>

                    <div class="media-right media-middle">
                      <i class="icon-bubbles4 icon-3x opacity-75"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-3">
                <div class="panel panel-body bg-danger-400 has-bg-image">
                  <div class="media no-margin">
                    <div class="media-body">
                      <h3 class="no-margin">25</h3>
                      <span class="text-uppercase text-size-mini">early dropout</span>
                    </div>

                    <div class="media-right media-middle">
                      <i class="icon-stairs-down icon-3x opacity-75"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-3">
                <div class="panel panel-body bg-success-400 has-bg-image">
                  <div class="media no-margin">
                    <div class="media-left media-middle">
                      <i class="icon-medal-star icon-3x opacity-75"></i>
                    </div>

                    <div class="media-body text-right">
                      <h3 class="no-margin">26</h3>
                      <span class="text-uppercase text-size-mini">deals won</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-3">
                <div class="panel panel-body bg-indigo-400 has-bg-image">
                  <div class="media no-margin">
                    <div class="media-left media-middle">
                      <i class="icon-coins icon-3x opacity-75"></i>
                    </div>

                    <div class="media-body text-right">
                      <h3 class="no-margin">80 - 120 m€</h3>
                      <span class="text-uppercase text-size-mini">valuation range</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Info alert -->
            <div class="alert alpha-slate alert-styled-left alert-arrow-left alert-component">
              <button type="button" class="close" data-dismiss="alert"><span>&times;</span><span class="sr-only">Close</span>
              </button>
              <h6 class="alert-heading text-semibold">List of relevant deals by buyer</h6>
              <ul>
                <li>Transaction history</li>
                <li>Time to drop ? </li>
                <li>Reliability of buyer...</li>
                <li>Centralisation of information currently not written</li>
              </ul>
            </div>
            <!-- /info alert -->
          </el-tab-pane>

        </el-tabs>
      </div>
    </template>
  </v-layout>
</template>
<script>
  const Charlatan = require('charlatan');
  const moment = require('moment');

  export default {
    data() {
      Charlatan.setLocale('en');

      const fakeQuestions = [];

      for (let i = 0; i < 12; i += 1) {
        const question = {
          page: Charlatan.Number.between(1, 4),
          date: moment(Charlatan.Date.backward(4)).fromNow(),
          name: Charlatan.Name.name(),
          text: `${Charlatan.Lorem.sentence(4)} ?`,
          urgent: (Math.random() > 0.8),
        };

        fakeQuestions.push(question);
      }

      return {
        questions: fakeQuestions,
        activeName: 'company',
      };
    },
    components: {
      VLayout: require('@/layouts/default.vue'),
      VPanel: require('@/components/panel.vue'),
      VSidebar: require('@/components/sidebar.vue'),
    },
    methods: {
        /*
      handleClick(tab, event) {
        console.log(tab, event);
      },*/
    },
  };
</script>
