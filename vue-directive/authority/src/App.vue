<template>
	<div class='main__container'>
	    <ul>
            <li v-for="item in items" v-authority="item.auth" :userauth="auth">
                {{item.title}}
            </li>
        </ul>
	</div>
</template>

<script>

    import authority from '../directive/authority'
	export default {
        directives: {authority},
		data() {
			return {
			    auth: 'guest',
                items: [
                    {title: 'aaaa'},
                    {title: 'bbbb', auth: 'admin'},
                    {title: 'cccc'},
                    {title: 'dddd'},
                    {title: 'eeee'},
                    {title: 'ffff'}
                ]
			}
		}
	}
</script>
<style lang='scss' scoped>


</style>