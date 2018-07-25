<template>
    <div class='card'>
        <!-- <ul>
            <li class='li-card mr-10' v-for='key in keysArray' :key='key'>
                {{key}} 
                
            </li>
        </ul> -->
        <pre>{{item.CONTENT}}</pre>
        <button class='btn btn-danger btn-sm btn-edit' @click='edit(item)'>Edit</button>
    </div>
</template>
<script>
    export default {
        props: ['item'],
        methods: {
            edit(item) {
                this.$emit('edit', item);
            } 
        },
        computed: {
           
        }
    }
</script>
<style lang='scss' scoped>
    .card {
        width :100%;
        min-height: 50px;
        padding-left: 5px;
        padding-bottom: 5px;
        padding-top: 5px;
        position: relative;
        background-color: rgba(#174A75, 0.3);
        &:hover {
            .btn-edit {
                display:block;
            }
        }
        .btn-edit {
            display:none;
        }
    }
    .btn-edit {
        position:absolute;
        bottom:5px;
        right:5px;
    }

    ul {
        display: flex;
        justify-content: flex-start;
        padding-left: 0px;
        margin-bottom:5px;
    }
    
    pre {
        width: 100%;
        font-size:12px;
        margin-bottom: 0px;
      
        
        color: white;
        max-height: 150px;
        overflow:hidden;
        overflow-y: auto;
        display: block;
    }
</style>