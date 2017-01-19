import Vue from 'vue'
import App from '../src/App.vue'

describe('App', () => {

    it('has a created hook', () => {
        expect(typeof App.created).toBe('function')
    })

    it('sets the correct default data', () => {
        expect(typeof App.data).toBe('function')
        const defaultData = App.data()
        expect(defaultData.message).toBe('my vue')
    })

    it('correctly sets the message when created', () => {
        const vm = new Vue(App).$mount()
        expect(vm.message).toBe('Hello')
    })

})