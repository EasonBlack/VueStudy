<template>
    <div class='w-100 h-100'>
        <div>Demo </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <template v-for='(tag,$index) in tags' :index='$index'  >
                <el-menu-item  :index="tag.name" :key='tag.name'>{{tag.title}}</el-menu-item>
            </template>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script>
  
    export default {
        data() {
            return {
                 activeIndex: 'a',
                 tags: [
                     {name: "campaign",title: 'Campaign'},
                     {name: "center", title: 'Center'}
                 ]
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                this.$router.push({ path: key });
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang='scss' scoped >
  
</style>