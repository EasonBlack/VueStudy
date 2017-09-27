<template>
  <div>
    <div class='style__container'>
      <div class='sugar__container'>
        <textarea class='sugar__textarea'  v-model='inputOrigin' @keydown='keydownHandle' />
        <button class='sugar__confirm' @click='confirm'>
          Confirm
        </button>
        <button class='sugar__cancel' @click='cancel'>
          Cancel
        </button>
      </div>
      <div class='display__container'>
        <div class='display__html'>{{inputTags}}</div>
        <div class='display__css'>{{inputClass}}</div>
      </div>
    </div>
    <div class='mask'></div>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import tagMixin from '../mixin/tag'
  import cssMixin from '../mixin/class'
  export default {
    mixins:[tagMixin, cssMixin],
    data() {
      return {
        inputOrigin: ''
      }
    },

    created: function() {
        this.classRegex = /\.([\w-]*)/g;
        this.tagRegex = /^([\s\t]*)([\w-]+)/;
        this.cssRegex = /\.([\w-]*):([\w-:=%\d]*)/g;      
    },

    methods: {
      keydownHandle: function(e) {
        let el = e.target;
        if (e.keyCode === 9) {  //tab
            var start = el.selectionStart;
            var end = el.selectionEnd;
            var value = el.value;
            this.inputOrigin = this.inputOrigin.substring(0, start)
                + "\t"
                + this.inputOrigin.substring(end);
            el.selectionStart = el.selectionEnd = start + 1;
            e.preventDefault();
        }
      },
      
      confirm() {
        this.$store.commit('saveBoxContent', {
          html: this.inputTags,
          css: this.inputClass,
          sugar: this.inputOrigin,
          boxid: this.boxid
        });
        this.$store.commit('setCurrentBoxNull');
      },

      cancel() {
        this.$store.commit('setCurrentBoxNull');
      }
    },
    computed: {
      ...mapState({
        boxid: (state) => state.box.currentBoxId,
        currentBoxSugar: (state) => state.box.currentBoxSugar
      }),
    },
    mounted() {
      this.inputOrigin = this.currentBoxSugar || '';
    }
  }
</script>
<style lang='scss' scoped>
.mask {
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: rgba(black, 0.3);
  z-index:2;
}

.style__container {
  width: 600px;
  height: 500px;
  z-index:400;
  margin: auto;
  margin-top:20px;
  border: 1px solid grey;
}

.sugar__container {
  width: 100%;
  height: 50%;
  border-bottom: 1px solid grey;
}

.sugar__textarea {
  width: 100%;
  height: 100%;
  resize: none;
}

.sugar__confirm {
  position: absolute;
  width: 100px;
  padding: 5px 10px;
  bottom: 3px;
  right: 150px;
}

.sugar__cancel {
  position: absolute;
  width: 100px;
  padding: 5px 10px;
  bottom: 3px;
  right: 10px;
}

.display__container {
  display: flex;
  height: 50%;
  border-bottom: 1px solid grey;
  background-color:white;
}

.display__html {
  flex: 1;
  height: 100%;
  border-right: 1px solid grey;
   white-space: pre-wrap;
   overflow:auto;
}

.display__css {
  flex: 1;
  height: 100%;
   white-space: pre-wrap;
   overflow:auto;
}
</style>