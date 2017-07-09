import Vue from 'vue'
import App from '../src/App.vue'

describe('App', () => {

    it('has a created hook', () => {
        expect(typeof App.created).to.equal('function');
    })

    it('sets the correct default data', () => {
        expect(typeof App.data).to.equal('function');
        const defaultData = App.data()
        expect(defaultData.message).to.equal('my vue');
    })

    it('correctly sets the message when created', () => {
        const vm = new Vue(App).$mount()
        expect(vm.message).to.equal('Hello');
    })

})