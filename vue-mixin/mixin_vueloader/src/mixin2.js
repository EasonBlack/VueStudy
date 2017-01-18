let mixin2 = {
    created: function () {
        console.log('already created 2')
    },
    methods: {
        sayGoodbye: function () {
            alert('Good Bye');
        }
    }
}

export default mixin2;
