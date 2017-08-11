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
            '$route.path': function (nv) {
                console.log(this.$router);
                console.log(this.$route);

                let root = this.$route.matched[0];
                let current = this.$route.matched.slice(-1)[0];
                let paths = [];
                paths = this.$route.matched.map(m=>{
                    return m.meta.title;
                });
                if(current.meta.parent) {
                    let slibingParents = [];
                    let parent = this.$route.matched.slice(-2)[0];
                    let siblings;
                    siblings = this.$router.options.routes.find(o => o.path == parent.path).children;
                    let p = siblings.find(s => s.name == current.meta.parent);
                    slibingParents.push(current.meta.title);
                    slibingParents.push(p.meta.title)
                    while (p.meta.parent) {
                        p = siblings.find(s => s.name == p.meta.parent);
                        slibingParents.push(p.meta.title)
                    }
                    paths = paths.slice(0, -1);
                    paths.push(...slibingParents.reverse());
                    console.log(paths);
                }

                this.breadcrumbs = paths.join('>');
            }
        },
    }
</script>
<style>

</style>