<template>
  <v-layout :pageTitle="$store.state.project.deals[$store.state.route.params.projectId-1].name" pageSubTitle="Recent updates">
    <v-sidebar slot="sidebar"></v-sidebar>
    <template slot="content">
      <!-- Info alert -->
      <div class="alert alert-danger alert-styled-left alert-arrow-left alert-component">
        <button type="button" class="close" data-dismiss="alert"><span>&times;</span><span class="sr-only">Close</span>
        </button>
        <h6 class="alert-heading text-semibold">2 urgent tasks oustanding</h6>
        Please review tasks 1 and 2 swiftly.
      </div>
      <!-- /info alert -->
      <!-- Task manager table -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h6 class="panel-title">Task manager</h6>
          <div class="heading-elements">
            <ul class="icons-list">
              <li><a data-action="collapse"></a></li>
              <li><a data-action="reload"></a></li>
              <li><a data-action="close"></a></li>
            </ul>
          </div>
        </div>

        <table class="table tasks-list table-lg">
          <thead>
          <tr>
            <th>#</th>
            <th>Period</th>
            <th>Task Description</th>
            <th>Priority</th>
            <th>Latest update</th>
            <th class="text-center text-muted" style="width: 30px;"><i class="icon-checkmark3"></i></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>#25</td>
            <td>Today</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">NDA Request</a></div>
              <div class="text-muted">Send NDA to Eugene Kolyov</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-danger dropdown-toggle" data-toggle="dropdown">Highest <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class="active"><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="22 January, 17">
              </div>
            </td>
            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach document</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#24</td>
            <td>Today</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Open DataRoom access</a></div>
              <div class="text-muted">Open access for Kathy Courier</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-danger dropdown-toggle" data-toggle="dropdown">Highest <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class="active"><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="22 January, 17">
              </div>
            </td>
            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach document</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#23</td>
            <td>Today</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Schedule management meeting</a></div>
              <div class="text-muted">Subject : Lorem ipsum</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-primary dropdown-toggle" data-toggle="dropdown">Normal <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="22 January, 15">
              </div>
            </td>
            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach document</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#22</td>
            <td>Today</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Schedule Q/A call </a></div>
              <div class="text-muted">Topics covered: lorem ipsum</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-primary dropdown-toggle" data-toggle="dropdown">Normal <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="22 January, 15">
              </div>
            </td>
            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach document</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#21</td>
            <td>Yesterday</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Review valuation</a></div>
              <div class="text-muted">Review valuation and send revised version</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-info dropdown-toggle" data-toggle="dropdown">High <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="21 January, 15">
              </div>
            </td>
            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach document</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#20</td>
            <td>Yesterday</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Fix validation issues and commit</a></div>
              <div class="text-muted">But who knows, maybe that would be the best thing for me..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-danger dropdown-toggle" data-toggle="dropdown">Highest <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class="active"><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="22 January, 15">
              </div>
            </td>
            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach document</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#19</td>
            <td>Yesterday</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Support tickets list doesn't support commas</a></div>
              <div class="text-muted">I'd have gone up to the boss and told him just what i think..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-primary dropdown-toggle" data-toggle="dropdown">Normal <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="21 January, 15">
              </div>
            </td>
            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#18</td>
            <td>Yesterday</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Help Web devs with HTML integration</a></div>
              <div class="text-muted">Samsa was a travelling salesman - and above it there hung..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-success dropdown-toggle" data-toggle="dropdown">Low <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="21 January, 15">
              </div>
            </td>
            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#17</td>
            <td>2 days ago</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Another icon set</a></div>
              <div class="text-muted">A wonderful serenity has taken possession of my entire soul..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-success dropdown-toggle" data-toggle="dropdown">Low <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="20 January, 15">
              </div>
            </td>

            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#16</td>
            <td>2 days ago</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">iOS application design mockups</a></div>
              <div class="text-muted">Sweet mornings of spring which I enjoy with my whole heart..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-danger dropdown-toggle" data-toggle="dropdown">Highest <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class="active"><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="21 January, 15">
              </div>
            </td>

            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#15</td>
            <td>2 days ago</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">UI/UX design review</a></div>
              <div class="text-muted">I am alone, and feel the charm of existence in this spot..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-primary dropdown-toggle" data-toggle="dropdown">Normal <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="20 January, 15">
              </div>
            </td>

            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#14</td>
            <td>2 days ago</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Marketing campaign review</a></div>
              <div class="text-muted">Which was created for the bliss of souls like mine..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-success dropdown-toggle" data-toggle="dropdown">Low <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="20 January, 15">
              </div>
            </td>

            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#13</td>
            <td>2 days ago</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Fix website issues on mobile</a></div>
              <div class="text-muted">I am so happy, my dear friend, so absorbed in the exquisite..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-info dropdown-toggle" data-toggle="dropdown">High <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="21 January, 15">
              </div>
            </td>

            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#12</td>
            <td>Last week</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Add updated responsive styles</a></div>
              <div class="text-muted">I should be incapable of drawing a single stroke at the present..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-primary dropdown-toggle" data-toggle="dropdown">Normal <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="17 January, 15">
              </div>
            </td>

            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#11</td>
            <td>Last week</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Merge latest changes</a></div>
              <div class="text-muted">When, while the lovely valley teems with vapour around me..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-danger dropdown-toggle" data-toggle="dropdown">Highest <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class="active"><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="16 January, 15">
              </div>
            </td>

            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#10</td>
            <td>Last week</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Create landing page for a new app</a></div>
              <div class="text-muted">A few stray gleams steal into the inner sanctuary, I throw..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-info dropdown-toggle" data-toggle="dropdown">High <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="17 January, 15">
              </div>
            </td>

            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#9</td>
            <td>Last week</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Update JS code in app.js file</a></div>
              <div class="text-muted">When I hear the buzz of the little world among the stalks..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-info dropdown-toggle" data-toggle="dropdown">High <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="15 January, 15">
              </div>
            </td>

            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#8</td>
            <td>Last week</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Combine .js files in /app/js/</a></div>
              <div class="text-muted">Insects and flies, then I feel the presence of the Almighty..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-primary dropdown-toggle" data-toggle="dropdown">Normal <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="14 January, 15">
              </div>
            </td>

            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#7</td>
            <td>Last week</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Create application Photoshop draft</a></div>
              <div class="text-muted">Who formed us in his own image, and the breath of that universal..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-danger dropdown-toggle" data-toggle="dropdown">Highest <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class="active"><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="20 January, 15">
              </div>
            </td>

            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#6</td>
            <td>Last week</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Cartoon characters for app ads</a></div>
              <div class="text-muted">My friend, when darkness overspreads my eyes, and heaven..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-primary dropdown-toggle" data-toggle="dropdown">Normal <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="17 January, 15">
              </div>
            </td>

            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#5</td>
            <td>Last week</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Google AdWords campain graphics</a></div>
              <div class="text-muted">Seem to dwell in my soul and absorb its power, like the form..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-success dropdown-toggle" data-toggle="dropdown">Low <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="18 January, 15">
              </div>
            </td>

            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#4</td>
            <td>Last week</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Monthly statistics report</a></div>
              <div class="text-muted">I sink under the weight of the splendour of these visions..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-danger dropdown-toggle" data-toggle="dropdown">Highest <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class="active"><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="19 January, 15">
              </div>
            </td>

            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#3</td>
            <td>Last week</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Create invoice template</a></div>
              <div class="text-muted">Far far away, behind the word mountains, far from the..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-info dropdown-toggle" data-toggle="dropdown">High <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="20 January, 15">
              </div>
            </td>

            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#2</td>
            <td>Last week</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Add images to the product gallery</a></div>
              <div class="text-muted">Countries Vokalia and Consonantia, there live the blind..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-primary dropdown-toggle" data-toggle="dropdown">Normal <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="21 January, 15">
              </div>
            </td>

            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>#1</td>
            <td>Last week</td>
            <td>
              <div class="text-semibold"><a href="task_manager_detailed.html">Update User profile page</a></div>
              <div class="text-muted">A small river named Duden flows by their place and supplies it..</div>
            </td>
            <td>
              <div class="btn-group">
                <a href="#" class="label label-success dropdown-toggle" data-toggle="dropdown">Low <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><span class="status-mark position-left bg-danger"></span> Highest priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-info"></span> High priority</a></li>
                  <li><a href="#"><span class="status-mark position-left bg-primary"></span> Normal priority</a></li>
                  <li class="active"><a href="#"><span class="status-mark position-left bg-success"></span> Low priority</a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="input-group input-group-transparent">
                <div class="input-group-addon"><i class="icon-calendar2 position-left"></i></div>
                <input type="text" class="form-control datepicker" value="19 January, 15">
              </div>
            </td>

            <td class="text-center">
              <ul class="icons-list">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu9"></i></a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-alarm-add"></i> Check in</a></li>
                    <li><a href="#"><i class="icon-attachment"></i> Attach screenshot</a></li>
                    <li><a href="#"><i class="icon-rotate-ccw2"></i> Reassign</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="icon-pencil7"></i> Edit task</a></li>
                    <li><a href="#"><i class="icon-cross2"></i> Remove</a></li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <!-- /task manager table -->
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
