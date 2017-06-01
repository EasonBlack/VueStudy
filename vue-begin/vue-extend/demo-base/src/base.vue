<template>
    <div class="container">
       This is base view {{message}}
       <div v-if='flagA'>This is flag A</div>
       <div v-if='flagB'>This is flag B</div>
       <div v-if='flagC'>This is flag C</div>
       <button @click='clickHandle'>Click Me</button>
       <my-component></my-component>
    </div>
</template>

<script>
    import myComponent from './blank-component.vue';
    export default {
        components: {
            myComponent
        },
        data() {
            return {
                flagA:false,
                flagB: false,
                flagC: false,
                message: 'xxx',
                clickMethods: "getA"
            }
        },
        created: function() {
            console.log('created!!');
        },
        methods: {
            getA() {
                alert('a');
            },
            getB() {
                alert('b');
            },
            clickHandle() {
                this[this.clickMethods]();
            }
        }
    }

</script>

<style lang="scss" scoped>
    .container {
        color: red;
    }
</style>