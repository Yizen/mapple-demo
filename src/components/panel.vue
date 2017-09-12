<template>
  <div :class="classNames">
    <div class="panel-heading" v-if="hasSlot('panel-title')">
      <h6 class="panel-title">
        <slot name="panel-title"></slot>
      </h6>
      <slot name="panel-subtitle"></slot>
      <div class="heading-elements">
        <slot name="heading-elements"></slot>
        <ul class="heading-thumbnails" v-if="hasSlot('heading-thumbnails')">
          <slot name="heading-thumbnails"></slot>
        </ul>
        <ul class="icons-list" v-if="hasRefresh">
          <li v-if="hasRefresh"><a data-action="reload"></a></li>
        </ul>
      </div>
    </div>
    <slot name="panel-toolbar"></slot>
    <div class="panel-body" v-if="hasSlot('panel-body')" :style="{padding: bodyPadding}">
      <slot name="panel-body"></slot>
    </div>
    <div class="table-responsive" v-if="hasSlot('panel-table')">
      <slot name="panel-table"></slot>
    </div>
    <div class="panel-footer" v-if="hasSlot('panel-footer')">
      <div class="heading-elements">
      <span class="heading-text">
        <slot name="panel-footer"></slot>
      </span>
      </div>
    </div>
  </div>
</template>

<script>
  /* ============
   * Panel Component
   * ============
   *
   * A basic panel component.
   *
   * Gives an idea how components work.
   */

  import slotMixin from '@/mixins/slot';

  export default {
    mixins: [
      slotMixin,
    ],
    props: {
      contextualStyle: {
        type: String,
        required: false,
      },
      hasRefresh: {
        type: Boolean,
        required: false,
        default: true,
      },
      hasBodyPadding: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    computed: {
      classNames() {
        let classNames = 'panel ';
        if (this.contextualStyle) {
          if (this.contextualStyle instanceof Array) {
            this.contextualStyle.forEach((style) => {
              classNames += (`${style} `);
            });
          } else {
            classNames += this.contextualStyle;
          }
        } else {
          classNames += ' panel-flat';
        }
        return classNames;
      },
      bodyPadding() {
        let bodyPadding = '20px';

        if (this.hasBodyPadding) {
          bodyPadding = 0;
        }
        return bodyPadding;
      },
    },
  };
</script>
