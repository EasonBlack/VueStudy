<template>
    <div>
        <my-table :columns='columns' :rows='rows' />
    </div>
</template>
<script>
import myTable from '../../../table/index.vue';
export default {
    components: { myTable },
    data() {
        return {
            columns: [
                { id: 'name', title: 'Name', show: true,
                options: { coltype: 'link-route', routeName: 'home_detail', keyName: 'name', paramName: 'id', textAlign: 'center' } },
                { id: 'age', title: 'Age',  show: true,
                options: { textAlign: 'right' } },
                { id: 'image', title: 'Image',  show: true,
                options: { coltype: 'image', size: '100px' } },
                { id: 'rate', title: 'Rate',  show: true,
                options: { coltype: 'with-desc', key: 'rate_desc' } },
                { id: 'desc', title: 'Description',  show: true,
                options: { coltype: 'with-limit-popup', width:'w-200' } },
            ],
            rows: [
                { name: 'AA', age: 12, image: 'src/img/320_50.png',  rate_desc: 'aaaa', rate: '10%', desc: 'aaa aaa aa a aa aaaaa aaaa aaa aaa aa a aa aaaaa aaaa' },
                { name: 'BB', age: 13, image: 'src/img/320_100.png', rate_desc: 'bbbb', rate: '10%', desc: 'bbb bb b bb b bbb  bb bbxa ability' },
                { name: 'CC', age: 14, image: 'src/img/320_100.png', rate_desc: 'cccc', rate: '10%', desc: 'df' }
            ]

        }
    }
}
</script>
<style lang='scss' scoped>

</style>