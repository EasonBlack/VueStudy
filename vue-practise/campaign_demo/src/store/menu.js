

const state = {
    menus: [
        {name: 'overview',title: "Overview" },
        {name: 'campaign_management',title: "Campaign Management", items: [
            {name: 'campaign', title: 'Campaign'},
            {name: 'content_management', title: 'Content Management'}
        ]},
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