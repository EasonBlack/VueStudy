export default {
    required(name) {
        return {
            fn: (val)=> !!val,
            key: 'required',
            text: `${name} is Required`
        }
    },
    numeric(name) {
        return {
            fn: (val) => !isNaN(val),
            key: 'numeric',
            text: `${name} must be num`
        }
    },
    min(name, minnum) {
        return {
            fn: (val,minnum)=> ( parseInt(val) > parseInt(minnum)),
            key: 'min',
            text: `${name} should be more than ${minnum}`
        }
    },
    max(name,maxnum) {
        return {
            fn: (val,maxnum)=> ( parseInt(val) < parseInt(maxnum)),
            key: 'max',
            text: `${name} should be less than ${maxnum}`
        }
    }
}