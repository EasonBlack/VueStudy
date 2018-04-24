<template>
  <div class='item-container'>
    <div class='item-parent'>
      <input :id='item.id' type='checkbox' @change='itemChange' v-model='item.check' />
      <label :for='item.id'>{{item.name}}</label>
    </div>
    <div class='item-children'>
      <item-wrapper v-for='(child,$index) in item.children' :key='$index'  :item='child'  @childChange='childChange'/>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'item-wrapper',
    components: {
      'item-wrapper': this
    },
    props: ['item'],
    // watch: {
    //   triggerAll(n) {
    //     this.item.check = n
    //   }
    // },
    methods: {
      itemChange() {
        this.parentChange(this.item);
        this.$emit('childChange');
      },
      parentChange(item) {
        if(item.children) {
          item.children.forEach(c=>{
            c.check = item.check;
            if(c.children) {
              this.parentChange(c);
            }
          })
        }
      },
      childChange() {
        let hasChildCheck = this.item.children.filter(c=>c.check == true);
        if(hasChildCheck.length) {
          this.item.check = true;
        } else {
          this.item.check = false;
        }
        // console.log(hasChildCheck,this.item.check,this.item.name, this.item.id);
        // this.$forceUpdate();
        this.$emit('childChange');
      }
    }
  }
</script>

<style lang='scss' scoped>
.item-parent {
  position:relative;
  display:flex;
  align-items: center;
}
.item-children {
  padding-left:20px;
}
</style>