<template>
    <div>
        <p>
            {{breadcrumbs}}
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
	export default {
	    data() {
            return {
                breadcrumbs: ''
            }
        },
        watch: {
            '$route.path':function(nv){
                console.log(this.$router);

                let options = this.$router.options;

                let paths = this.$route.matched.map(m=>{
                    return m.meta.title;
                });

                this.breadcrumbs = paths.join('>');
            }
        },
	}
</script>
<style>

</style>