<template>
	<div class='container'>
        <ul>
            <li v-for='user in users'>
                {{user.name}}
            </li>
        </ul>
        <div class='message' v-if="message" @click='cancel'>
            {{message}}
        </div>
	    <button @click='getList'>List</button>
	</div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
	export default {
        methods: {
           getList () {
              this.$store.dispatch('fetchUsers')
           },
           cancel() {
              this.$store.commit('cancelMessageBox');
           }
        },
        computed: {
            ...mapState({
                users: (state) => {
                     return state.user.list;
                },
                message: (state)=> {
                    return state.common.MessageBox
                }
            })
        }
	}
</script>
<style lang='scss' scoped>
    .container {
        width:100vw;
        height:100vh;
        position:ralative;
    }
    .message {
        position:absolute;
        top:0;
        bottom:0;
        left: calc(50% - 100px);
        margin-top:200px;
        width:200px;
        height:100px;
        border: 1px solid steelblue;
        display:flex;
        justify-content: center;
    }
</style>