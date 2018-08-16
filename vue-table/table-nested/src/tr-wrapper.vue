<template>
    <div>
        <template v-for='item in items' >
            <tbody :key='item.id'>
                <tr>
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.content}}</td>	
                </tr>
            </tbody>
            <trwrapper :items='item.children'  v-if='item.children' :key='item.id + "child"'/>     
        </template>
    </div>
  
</template>
<script>
    export default {
        name: 'trwrapper',
        components: {trwrapper: this},
        props: ['items']
    }
</script>
<style lang='scss' scoped>
</style>