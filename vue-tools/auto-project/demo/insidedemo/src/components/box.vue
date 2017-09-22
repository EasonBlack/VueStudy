<template>
  <div class='box box1' :style='{
              top: b.currentTop + "px",
              left: b.currentLeft + "px",
              width: b.width + "px",
              height: b.height + "px"
            }'>

    <box v-for='(box , b_key) in b.boxes' :b='box' :boxid='b_key' :key='b_key'></box>

    <div class='box-header' @dblclick="toggleEditTitle" v-if='!isEditHeader'>
      {{b.title}}
    </div>

    <input type='text' ref="titleInput" v-model='currentTitle' class='box-header-input' @blur='titleEditBlur' v-if='isEditHeader' />

    <div class='box-utility size-box' @mousedown.prevent.stop='sizehandle'>size</div>
    <div class='box-utility move-box' @mousedown.prevent.stop='movehandle'>move</div>
    <div class='box-utility insert-box' @click.prevent.stop='addInside'>insert</div>

  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'box',
  components: {
    'box': this
  },
  props: ['boxid', 'b'],
  data() {
    return {
      currentTitle: '',
      isEditHeader: false
    }
  },
  created() {
    this.currentTitle = this.b.title;
  },
  watch: {
    'triggerFlag': function(nv) {
      if(nv){
        this.$forceUpdate();
      } 
    }
  },
  methods: {
    toggleEditTitle() {
      this.isEditHeader = true;
      this.$nextTick(function() {
        this.$refs.titleInput.focus();
      })
    },

    titleEditBlur(e) {
      this.isEditHeader = false;
      this.$store.commit('editBoxTitle', {
        title: this.currentTitle,
        boxid: this.boxid
      })
    },

    movehandle(e) {
      this.$store.commit('moveHandle', {
        boxid: this.boxid,
        e
      })
    },

    sizehandle(e) {
      this.$store.commit('sizeHandle', {
        boxid: this.boxid,
        e
      })
    },

    addInside() {
      this.$store.commit('addInside', {
        id: this.boxid
      })
      this.$forceUpdate();
    }
  },
  computed: {
    ...mapState({
			triggerFlag: (state) => state.box.triggerFlag
		}),
  }
}
</script>
<style scoped lang='scss'>

</style>