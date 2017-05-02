<template>
    <div class='dropzone'
    @drop.prevent = 'drop($event)'
    @dragover.prevent='processDragOverOrEnter($event)'
    @dragenter.prevent='processDragOverOrEnter($event)'>
    </div>
</template>

<script>
    import {getAverageRGB} from './util'
    export default{
        data(){
            return{
                currentImage: null
            }
        },
        methods: {
            processDragOverOrEnter(e) {
                e.dataTransfer.effectAllowed = 'copy';
                return ;
            },
            drop(e) {
                 let reader, file,name,type,size;
                 reader = new FileReader();
                 file = e.dataTransfer.files[0];
                 name = file.name;
                 type = file.type;
                 size = file.size;
                 reader.readAsDataURL(file);



                 reader.onload = (evt)=> {
                       this.currentImage = evt.target.result;
                       var im = new Image();
                       im.onload = ()=>{
                          let v = getAverageRGB(im);
                          console.log(v);
                          this.$emit('selectImage', {
                               currentImage: this.currentImage,
                               name: name,
                               color: v
                          })
                       };
                       im.src = this.currentImage;
                 };
            }
        }
    }
</script>

<style lang='scss' scoped>
    .dropzone  {
        width:200px;
        height:200px;
        border: 1px solid steelblue;
    }
</style>
