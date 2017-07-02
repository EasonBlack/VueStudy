

const state = {
    menus: [
        {name: 'overview',title: "Overview", href: 'overview' },
        {name: 'campaign_management',title: "Campaign Management", items: [
            {name: 'campaign', title: 'Campaign',  href: 'campaign'},
            {name: 'content_management', title: 'Content Management',  href: 'content_management'}
        ]},
        {name: 'reports',title: "Reports" },
    ],
    currentMenu: ""
}

const mutations = {

}

const actions = {
}


export default {
    state,
    mutations,
    actions
}