<template>
    <div class='daily__container'>
        <table cellspacing=0 cellpadding=0>
            <table-header :start='start' :end='end'></table-header>
            <tbody>
               <tr v-for='p in source'>
                   <td class='title__col'>{{p.name}}</td>
                   <td v-for='i in getBlankDurationPrev(p.start)'></td>
                   <td valign="middle" :colspan='getStepDuration(p.start, p.end)'>
                        <span class='daily__arrange'
                            v-bind:class="{
                               special: !p.end
                            }"
                        >{{p.text?p.text:''}}</span>
                   </td>
                   <td v-for='i in getBlankDurationNext(p.start,p.end)'></td>
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

                return (parseInt(start) - this.start)/50;
            },
            getStepDuration: function(start, end) {
                let _end = end;
                if(!_end) { _end= parseInt(start) + 200; }
                return (parseInt(_end) - parseInt(start))/50;
            },
            getBlankDurationNext: function(start,end) {
               let _end = end;
               if(!_end) { _end = parseInt(start)+200; }
               return (this.end - parseInt(_end))/50;
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
            height: 25px;
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
          width: 100%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: inline-block;
          height: 25px;
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
    .special {
        background-color: black;
        color:white;
        font-size:0.8px;
        padding-left:10px;
        &:before {
            content: '';
            position:absolute;
            width:2px;
            background-color:green;
            height:100%;
            top:0;
            left:5px;
        }
    }
</style>