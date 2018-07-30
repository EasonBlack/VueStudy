<template>
    <div class='book-wrapper'>
        <ul class='left noisy'>
            <li v-for='menu in menus' :key='menu.name' @click='goto(menu)'>
                {{menu.title}}
            </li>
        </ul>
        <div class='right'>
            <router-view />
        </div>
        
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        data() {
            return {
                menus: [
                    {name: 'general', title: 'General', path: 'general'},
                    {name: 'charactor', title: 'Charactor', path: 'charactor'},
                    {name: 'section', title: 'Section', path: 'section'}
                ]
            }
        },
        created() {
            
        },
        methods: {
            goto(menu) {
                this.$router.push(`/book/${this.bookId}/${menu.path}`);
            }
        },
        computed: {
			...mapState({
                bookId: (state) => state.route.params.id
            })
		}
    }
</script>

<style lang='scss' scoped>
    .book-wrapper {
        display:flex;
    }
    .left {
        width:20%;
        height:100%;
        overflow-y: auto;
        background-color: #174a75;
        margin-bottom: 0px;
        padding-left: 0px !important;  
       
        li {
            padding: 10px 0;
            padding-left: 20px;
            color:white;
            cursor:pointer;
            box-shadow: inset 0px -1px 2px 0px #ccc;
            
            &:hover {
                border-right:10px solid #70bbb1;
            }
        }
    }
    .right {
        flex: 1;
        height:100%;
        overflow:hidden;
    }
</style>
