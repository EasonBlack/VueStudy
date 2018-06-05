<template>
    <div class='container-fluid'>
        <div class='row'>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <template v-for='tag in tags'  >
                    <el-menu-item   :index="tag.name" :key='tag.name'>
                        {{tag.title}}
                    </el-menu-item>
                </template>
            </el-menu>
        </div>
        <div>
            <router-view></router-view>
        </div>
       
    </div>
</template>

<script>
	export default {
        data() {
            return {
                activeIndex: "home",
                tags: [
                    { name: "home", title: "Home" },
                    { name: "detail", title: "Detail" },
                ]
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                this.$router.push({ path: key });
            }
        }
	}
</script>
<style lang='scss' scoped>
    .el-menu-demo {
        width:100%;
    }
</style>