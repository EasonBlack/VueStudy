import rules from './rules';

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
    let _rulelist = Object.assign({}, rulelist);
    myrules.forEach(rule=> {
        console.log(name)
        let _rule = _rulelist[rule.name](name, ...rule.param);
        _rule.params = rule.param;
        validate.push(_rule);
    })
    return validate;
}

export default (options)=> ({
    bind(el, binding, vnode) {
        let modelName = findVModelName(vnode);
        //console.log(vnode);
        vnode.componentInstance.rules = getValidateRule(modelName, rules, getRules(binding.value));
    },
    update(el, binding, vnode) {
        let modelName = findVModelName(vnode);
        let _model = vnode.context[modelName];
        //console.log(vnode);
        vnode.componentInstance.error = "";
        vnode.componentInstance.rules.some(r=>{
            if(!r.fn(_model , ...r.params)){
                console.log('sth wrong with ' + r.key);
                vnode.componentInstance.error = r.text;
                return true
            } else {
                console.log(r.key + ' success');
            }
        })
    }
})