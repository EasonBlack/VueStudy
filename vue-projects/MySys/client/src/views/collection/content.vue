<template>
    <div class='bigcontent-wrapper'>
        <ul>
            <li class='li-card mr-10' v-for='key in headerTxt' :key='key'>
                {{key}} 
                
            </li>
        </ul>
        <pre>{{bodyTxt}}</pre>
        <i class="fa fa-close" @click='close'></i>
    </div>
</template>
<script>
    export default {
        props: ['content'],
        data() {
            return {
                headerTxt: [],
                bodyTxt: null
            }
        },
        created() {
            if(this.content) {
                let _bodyTxt = this.content.split('\n')
                let _headerTxt = _bodyTxt.shift();
                let _headerArrays = [];
                var re =  /\[(.+?)\]/g, match;
                while (match = re.exec(_headerTxt)) {
                    _headerArrays.push(match[1]);
                }
                this.headerTxt = _headerArrays;
                this.bodyTxt = _bodyTxt.join('\n');           
            }
          
        },
        methods: {
            close() {
                this.$emit('close');
            }
        }
    }
</script>
<style lang='scss' scoped>
    .bigcontent-wrapper {
        position: absolute;
        width: calc(100vw - 2rem);
        height: 90%;
        padding: 10px;
        top: 0;
        color: white;
        background-color: rgba(black, 0.9);
        border: 2px solid #41bb8a;
        border-radius: 10px;
        overflow-y: auto;
        ul {
            display: flex;
            justify-content: flex-start;
            padding-left: 0px;
            margin-bottom:5px;
            li {
                font-size:16px;
            }
        }

        pre {
            color: white;
        }

        .fa-close {
            background-color: steelblue;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }
</style>