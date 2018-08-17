<template>
    <transition>
        <template  v-for='item in items' >
           
            <tr :key='item.id'>
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.content}}</td>	
            </tr>
           
            <trwrapper :items='item.children'  v-if='item.children' :key='item.id + "child"'/>     
        </template>
    </transition>
  
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