<template>
	<div>
        <my-table :columns='columns' :rows='rows'>
        </my-table>
	</div>
</template>

<script>
    import myTable from '../table/index.vue';
	export default {
	    components: {myTable},
        data() {
            return {
                columns: [
                    {id: 'name', title: 'Name', options:{}},
                    {id: 'age', title: 'Age', options:{}},
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
<style>
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: Arial;
    }

    #app {
        min-height:100vh;
        background-color:#EFEFEF;
        padding-top:50px;
        padding-left:50px;
    }



</style>