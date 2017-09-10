<template>
    <div>
        <my-table :columns='columns' :rows='rows' />
    </div>
</template>
<script>
    import myTable from '../../../table/index.vue';
    export default {
         components: {myTable},
          data() {
             return {
                 columns: [
                     {id: 'name', title: 'Name', options:{coltype: 'link-route', routeName: 'home_detail',  keyName: 'name', paramName: 'id', textAlign: 'center'}},
                     {id: 'age', title: 'Age', options:{textAlign: 'right'}},
                     {id: 'image', title: 'Image', options:{coltype: 'image', size:'100px'}}
                 ],
                 rows: [
                     {name: 'AA', age: 12, image: 'src/img/320_50.png', desc: 'aaaa'},
                     {name: 'BB', age: 13, image: 'src/img/320_100.png', desc: 'bbbb'},
                     {name: 'CC', age: 14, image: 'src/img/320_100.png', desc: 'cccc'}
                 ]

             }
         }
    }
</script>
<style lang='scss' scoped>

</style>