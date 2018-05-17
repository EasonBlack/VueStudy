<template>
    <div class='w-100 h-100'>
        <div>Demo </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <template v-for='(tag,$index) in tags' :index='$index'  >
                <el-menu-item  v-if='!tag.items' :index="tag.name" :key='tag.name'>
                    {{tag.title}}
                </el-menu-item>
                <el-submenu v-else :index='tag.name' :key='tag.name'>
                    <template slot="title">{{tag.title}}</template>
                    <el-menu-item v-for='(item) in tag.items' :index='item.name' :key='item.name'>
                        {{item.title}}
                    </el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
        <router-view class='container-fluid'></router-view>
    </div>
</template>

<script>
  
    export default {
        data() {
            return {
                 activeIndex: 'campaign',
                 tags: [
                     {name: "campaign",title: 'Campaign'},
                     {name: "center", title: 'Center', items: [
                         {name: 'charttype1', title: 'Chart Type 1'},
                         {name: 'charttype2', title: 'Chart Type 2'},
                         {name: 'charttype3', title: 'Chart Type 3'},
                     ]}
                 ]
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                this.$router.push({ path: key });
            }
        }
    }
</script>

<style lang='scss' scoped >
  
</style>