<template>
    <div class='container'>
        <div class='calendar__header'>
            <div class='left__section'>
                <div class='flex__left'>
                     <a class='calendar__prev icon-left-open' v-on:click='prev'></a>
                </div>
                <div class='flex__center'>
                    {{this.current.format('YYYY-MM')}}
                </div>
                <div class='flex__right'>
                    <a class='calendar__next icon-right-open' v-on:click='next'></a>
                </div>
            </div>
        </div>
        <div class='calendar__content'>
            <calendar  :currentYear='currentYear'
                   :currentMonth='currentMonth'
                   :source='feedbacks'
                   :eventHandle='eventHandle'
                   ></calendar>
        </div>
        <feedback-detail v-if='detail.length>0 && showDetail' :detail = 'detail' @closeHandle='closeHandle' ></feedback-detail>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    import calendar from './calendar/index.vue';
    import feedbackDetail from '../feedback-detail/index.vue';
    import moment from 'moment';
    import bus from '../../bus.js'
    export default {
        components: {calendar, feedbackDetail},
        created:function() {
            this.fetchFeedBack();
            bus.$on('eventHandle', this.eventHandle)
        },
        watch: {
            '$route': 'fetchFeedBack'
        },
        data:function() {
        	 return {
        	     showDetail: false,
        	     current: moment().startOf('month'),
                 currentMonth: moment().month(),
                 currentYear: moment().year()
             }
        },
        methods: {
            prev: function() {
                this.current =this.current.subtract(1, 'months');
                this.currentMonth = this.current.month();
                this.currentYear = this.current.year();
            },
            next: function() {
                this.current = this.current.add(1, 'months');
                this.currentMonth = this.current.month();
                this.currentYear = this.current.year();
            },
            fetchFeedBack: function() {
                this.$store.dispatch('fetchFeedbacks');
            },
            eventHandle : function(obj) {
                 this.$store.dispatch('fetchFeedBackDetailById', obj.val);
                 this.showDetail = true;
            },
            closeHandle: function() {
                 this.showDetail = false;
            }
        },
        computed:{
            ...mapState({
                feedbacks: (state) => {
                    return state.feedback.all;
                },
                detail: (state)=> {
                    return state.feedback.detail;
                }

            })
        },
    }

</script>
<style lang='scss' scoped>
    .container {
        height:100vh;
        position:relative;
    }
    .calendar__header {
        height:60px;
        position:relative;
        .left__section {
            height:100%;
            width:300px;
            display:flex;
            align-items:center;
            padding:0 10px;

            .flex__left,.flex__right, .flex__center {
                flex:1;
                display: flex;
            }

            .flex__center {
                justify-content: center;
            }

            .flex__right {
                 justify-content:flex-end;
            }

            .calendar__prev, .calendar__next {
                width:30px;
                height:30px;
                color: white;
                background-color: #00AECD;
                border-radius: 50%;
                display:flex;
                justify-content: center;
                align-items:center;
            }
            .calendar__next:before {
                margin-right:0;
            }
        }
    }
    .calendar__content {
        height: calc(100% - 60px);
        overflow:auto;
    }
</style>