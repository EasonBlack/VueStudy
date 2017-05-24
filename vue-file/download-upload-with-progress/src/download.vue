<template>
    <div>
        <img :src='imagesource'/>
        <progress :value='imagedownloadprogress' max="100"></progress>
    </div>
</template>

<script>
    import axios from 'axios';
	export default {
	    name: 'app',
		data() {
			return {
				message: 'my vue',
				imagesource: null,
				imagedownloadprogress: 0
			}
		},
		created() {
		    axios.get('../image.png?33', {
              responseType: 'arraybuffer',
               onDownloadProgress:  (e)=> {
                    let r = (e.loaded * 100) / e.total;
                    this.imagedownloadprogress = r;
                    console.log(e.loaded + '/' + e.total)
               },
            })
            .then(response => {
               this.imagesource = 'data:image/png;base64,'+ new Buffer(response.data, 'binary').toString('base64')
            })
		}
	}
</script>

<style lang='scss' scoped>
    img {
        display:block;
        width:200px;
        height:200px;
    }
    progress {
        width:200px;
    }
</style>
