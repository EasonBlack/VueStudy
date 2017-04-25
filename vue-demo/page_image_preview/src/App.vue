<template>
	<div class='main__container'>
        <div class='preview__container'>
            <little-preview :bgImage='currentImage'></little-preview>
        </div>
        <div class='control__container'>
            <control-panel :items='images' @setBg='setBg'></control-panel>
        </div>
	</div>
</template>

<script>
    import littlePreview from './little_preview/index.vue';
    import controlPanel from './control_panel/index.vue';
	export default {
        components: {littlePreview, controlPanel},
		data() {
			return {
                currentImage: '400_400_1.png',
                images: [
                    '400_400_1.png',
                    '400_400_2.png',
                    '400_400_3.png'
                ]
			}
		},
		methods: {
            setBg(item) {
                this.currentImage = item;
            }
		},
		created:function() {

		}

	}
</script>
<style>
    .main__container {
        width:100%;
        height:500px;
        background-color: #ccc;
        display:flex;
    }

    .control__container {
        flex:1;
    }
    .preview__container {
        flex: 1;
        display:flex;
        justify-content: center;
        align-items: center;
    }

</style>