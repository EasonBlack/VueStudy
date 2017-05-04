<template>
	<div class='main__container'>
	     <drop-zone @selectImage='selectImage'></drop-zone>

	     <div class="image-container">
                <img :src='newImage' />
                <div class='domain-color' :style="{
                    'background-color': domainColor
                }">
                </div>

         </div>
          <el-color-picker v-model="color1" show-alpha></el-color-picker>
	</div>
</template>

<script>
    import dropZone from './dropzone.vue';
	export default {
	    components: {dropZone},
		data() {
			return {
                newImage: '',
                domainColor: 'rgb(0,0,0)',
                color1: 'rgba(19, 206, 102, 0.8)'
			}
		},
		methods: {
            selectImage(o) {
                this.newImage = o.currentImage;
                this.domainColor = `rgb(${o.color.r}, ${o.color.g}, ${o.color.b})`;
            }
		},


	}
</script>
<style lang='scss' scoped>
    .image-container {

        img {
           border: 1px solid #ccc;
           width:200px;
           height:200px;
        }
        .domain-color {
            width:30px;
            height:10px;
        }
    }




</style>