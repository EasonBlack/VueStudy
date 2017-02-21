<template>
    <div class='daily__container'>
        <table cellspacing=0 cellpadding=0>
            <table-header :start='start' :end='end'></table-header>
            <tbody>
               <tr v-for='p in source'>
                   <td class='title__col'>{{p.name}}</td>
                   <td v-for='i in getBlankDurationPrev(p.start)'></td>
                   <td valign="middle" v-for='i in getStepDuration(p.start, p.end)'>
                        <span class='daily__arrange'
                            v-bind:class="{
                               first: i==1,
                               last : i == getStepDuration(p.start, p.end)
                            }"
                        ></span
                   </td>
                   <td v-for='i in getBlankDurationNext(p.end, end)'></td>
               </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import tableHeader from './table_header.vue';
    export default {
        components: {tableHeader},
        props: ['source', 'start', 'end'],
        data() {
            return {
            }
        },
        methods: {
            getBlankDurationPrev: function(start) {
                console.log( (parseInt(start) - this.start)/50);
                return (parseInt(start) - this.start)/50;
            },
            getStepDuration: function(start, end) {
                 console.log( (parseInt(end) - parseInt(start))/50);
                 return (parseInt(end) - parseInt(start))/50;
            },
            getBlankDurationNext: function(end) {
               console.log( (this.end - parseInt(end))/50);
               return (this.end - parseInt(end))/50;
           }
        }
    }
</script>
<style lang='scss' scoped>
    .daily__container {
        td {
            background-color:white;
            position:relative;
            border-top: 1px solid rgba(grey, 0.3);
            &:nth-child(odd) {
               border-left: 1px dotted rgba(grey, 0.3);
            }
            &:nth-child(even) {
               border-left: 1px solid rgba(grey, 0.3);
            }

        }
        .title__col {
            text-align:center;
        }

    }
    .daily__arrange {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: inline-block;
          width: 20px;
          height: 15px;
          background-color: steelblue;
          z-index:10;
          &.first {
              border-top-left-radius:10px;
              border-bottom-left-radius:10px;
          }
          &.last {
              border-top-right-radius:10px;
              border-bottom-right-radius:10px;
          }
    }
</style>