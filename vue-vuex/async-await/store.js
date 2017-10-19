
const errorFun = function () {
    return new Promise(function (resolve, reject) {
        reject('sth wrong')
    })
}


const store = new Vuex.Store({
    state: {
        count: 0,
        name: ''
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
        setName: (state, name) => {
            state.name = name
        }
    },
    actions: {
        async fetch({
            commit,
            state
        }) {
            let result = await axios.get('./data.json')
            commit('setName', result.data.name);
            return result;
        },

        async fetchError({commit,state}) {
            let result  = await axios.get('./data.json')
            let test = await errorFun();
            return true;
        },

        //if use promise, there should be a extra catch in it
        fetchPromise({commit, state}) {
            return new Promise((resolve,reject)=>{
                errorFun()
                .then(res=>{
                    resolve()
                })
                .catch(err=>{
                    reject(err)
                })
            })
        }
    }
})