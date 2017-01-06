<template>
    <div>
        <div class='form__section'>
            <div class='form__row'>
                <label class='form__left'>Name:</label>
                <input class='form__right' type=text name='name' v-model='newName'/>
            </div>
            <div class='form__row'>
                <input type="file" name="file" accept="image/*" style='color:white;'
                       v-on:change="onFileChange"
                >
            </div>
            <div class='display__row'>
                <img  v-if='newImage' class='display__image' :src='newImage'/>
            </div>
        </div>

        <div class='bottom__section'>
            <div class='btn__wrapper'>
                <a class='btn__confirm' v-on:click='confirmHandle'>Confirm</a>
            </div>
            <div class='btn__wrapper'>
                <a class='close__confirm' v-on:click='closeHandle'>Close</a>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        props: ['active', 'currentItem'],
        data(){
            return{
                newName: '',
                newImage: ''
            }
        },
        methods: {
            confirmHandle: function() {
                this.$emit('confirmHandle', {id: this.currentItem.id, name: this.newName, image: this.newImage});
            },
            closeHandle:function() {
                this.$emit('closeHandle', {flag: false});
            },
            onFileChange:function(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage:function(f){
                var reader = new FileReader();
                reader.onload = (e) => {
                  this.newImage = e.target.result;
                };
                reader.readAsDataURL(f);
            }
        },
        watch: {
            'currentItem' : function(val) {
                this.newName = val.name;
                if(val.image) {
                    this.newImage = `/site_images/${val.image}.png?${this.currentItem.lasttime}`;
                } else {
                    this.newImage = '';
                }

            }
        }
    }


</script>

<style lang='scss' scoped>

    .btn__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }

    .btn__confirm {
        display: block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        background-color: steelblue;
        color: white;
        text-align: center;
    }

    .close__confirm {
        display: block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        background-color: coral;
        color: white;
        text-align: center;
    }
</style>
