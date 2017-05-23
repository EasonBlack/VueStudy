<template>
    <div>
        <div>
            <input type='file'  multiple  name='myfiles'
               @change="filesChange($event.target.name, $event.target.files); "/>
            <button @click.prevent='upload'>Upload</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        data(){
            return{
                fileCount:0,
                formData : null

            }
        },
        methods:{
            filesChange(fieldName, fileList) {
                console.log(fieldName, fileList);
                this.formData = new FormData();
                if (!fileList.length) return;
                Array
                  .from(Array(fileList.length).keys())
                  .map(x => {
                      this.formData.append(fieldName, fileList[x]);
                  });

                // save it

            },
            upload() {
                 axios.post('http://localhost:3000/api/test/upload', this.formData,  {
                    onUploadProgress:  (e)=> {
                         console.log(e.loaded + '/' + e.total)
                    },
                 })
                 .then(response => {
                     console.log(response);
                 })
            }
        }


    }
</script>

<style lang='scss' scoped>

</style>
