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
                     {id: 'image', title: 'Image', options:{coltype: 'image', size:'100px'}},
                     {id: 'rate', title: 'Rate', options:{coltype: 'with-desc', desc:'desc'}},
                 ],
                 rows: [
                     {name: 'AA', age: 12, image: 'src/img/320_50.png', desc: 'aaaa', rate: '10%'},
                     {name: 'BB', age: 13, image: 'src/img/320_100.png', desc: 'bbbb', rate: '10%'},
                     {name: 'CC', age: 14, image: 'src/img/320_100.png', desc: 'cccc', rate: '10%'}
                 ]

             }
         }
    }
</script>
<style lang='scss' scoped>

</style>