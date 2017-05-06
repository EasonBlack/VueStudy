import rules from './rules';

let theRules = [];

function findVModelName(vnode) {
    return vnode.data.model.expression;
}

function parseRule(rule) {
    let _rule = rule.split(':');
    return {
        name: _rule[0],
        param: _rule[1] ?  _rule[1].split(',') : []
    }
}

function getRules(rules) {
    const validations = [];
    rules.split('|').forEach(rule=>{
        let _rules = parseRule(rule);
        validations.push(_rules)
    })
    return validations;
}

function getValidateRule(name, rulelist, myrules ) {
    let validate = [];
    myrules.forEach(rule=> {
        let _rule = rulelist[rule.name](name, ...rule.param);
        _rule.params = rule.param;
        validate.push(_rule);
    })
    return validate;
}

export default (options)=> ({
    bind(el, binding, vnode) {
        theRules = getValidateRule(findVModelName(vnode), rules, getRules(binding.value));

    },
    update(el, binding, vnode) {
        let modelName = findVModelName(vnode);
        let _model = vnode.context[modelName];
        vnode.context.$children[0].error = "";
            theRules.some(r=>{
            if(!r.fn(_model , ...r.params)){
                console.log('sth wrong with ' + r.key);
                vnode.context.$children[0].error = r.text;
                return true
            } else {
                console.log(r.key + ' success');
            }
        })
    }
})