let mixin = {
    created: function () {
        console.log('already created')
    },
    methods: {
        sayHello: function () {
            alert('Hello');
        }
    }
}

export default mixin;