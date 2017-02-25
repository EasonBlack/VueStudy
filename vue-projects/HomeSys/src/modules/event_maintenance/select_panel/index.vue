<template>
     <div class='status__container'>
         <label>Status:</label>
         <select v-model='selectStatus' @change='changeHandle'>
             <option value='1'>Open</option>
             <option value='2'>Close</option>
             <option value='3'>Pend</option>
         </select>
     </div>
</template>
<script>
    export default {
        data() {
            return {
                selectStatus : 1
            }
        },
        methods: {
            changeHandle: function() {
                this.$emit('statusChange', this.selectStatus);
            }
        }
    }
</script>
<style lang='scss' scoped>
    .status__container {
        width:100%;
        height:50px;
        line-height:50px;
        display:flex;
        margin-bottom:20px;
        border: 2px solid #cc689b;
        padding-left: 5px;
        align-items: center;
        position: relative;
        label {
            display:inline-block;
            width:80px;
        }
        select {
            display:inline-block;
            padding:5px 10px;
            height:80%;
        }
    }

</style>