<template>
    <ul class='d-flex mb-0'>
        <li>Hello</li>
        <li class='position-relative p-10 profile-menu-container'>
            <a class='d-flex align-items-center' >
                <img src='assets/images/user.png' class='mr-2'>
                <span class='mr-2'>Profile & Alerts</span>
                <i class="fa fa-caret-down" aria-hidden="true"></i>
                <profile-menu    />             
            </a>     
        </li>
    </ul>
</template> 

<script>
import profileMenu from './profile-menu.vue';
export default { 
    components: {profileMenu},
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style lang='scss' scoped>

    li {
        color:white;
        display: flex;
        align-items: center;
        padding: 0 10px;
        a {
            cursor:pointer;
        }
    }
    img {
        width: 30px;
        height: 30px;
    }
    .fa {
        font-size: 0.8em;
        margin-top: 3px;
    }
    .profile-menu-container:hover {
        border-bottom: 2px solid #fbeb29;
        ul {
            display:block;
            margin-top: 0;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    }
</style> 

