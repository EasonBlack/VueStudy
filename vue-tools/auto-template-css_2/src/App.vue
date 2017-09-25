<template>
    <div class='main__section'>
        <div class='input__section'>
            <div class="area__section">
                <textarea v-model='inputOrigin' @keydown='keydownHandle'></textarea>
            </div>
        </div>
        <div class='display__section'>
            <div class='html__section'>{{inputTags}}</div>
            <div class='css__section'>{{inputClass}}</div>
        </div>
    </div>
</template>

<script>

import tagMixin from './mixin/tag'
import cssMixin from './mixin/class'
export default {
    mixins:[tagMixin, cssMixin],
    data() {
        return {
            inputOrigin: ''
        }
    },
    created: function() {
        let content = "     div.container.d-flex.box__3wrapper:title='Name':value";
        this.classRegex = /\.([\w-]*)/g;
        this.tagRegex = /^([\s\t]*)([\w-]+)/;
        this.cssRegex = /\.([\w-]*):([\w-:=%\d]*)/g;
        //var classRes = content.match(this.classRegex);
        //var tagRes = content.match( this.tagRegex);          
    },
    methods: {
        keydownHandle: function(e) {
            let el = e.target;
            if (e.keyCode === 9) {  //tab
                var start = el.selectionStart;
                var end = el.selectionEnd;
                var value = el.value;
                this.inputOrigin = this.inputOrigin.substring(0, start)
                    + "\t"
                    + this.inputOrigin.substring(end);
                el.selectionStart = el.selectionEnd = start + 1;
                e.preventDefault();
            }
        },
    }
}
</script>
<style lang='scss' scoped >
.main__section {
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

.input__section {
    width: 60%;
    height: 100%;
    border-right: 1px solid rgba(grey, 0.3);
    .area__section {
        height: 50%;
        border-bottom: 1px solid rgba(grey, 0.3);
    }
   
    textarea {
        width: 100%;
        height: 100%;
        padding: 10px;
        resize: none;
        &:focus {
            outline: 0;
        }
    }
}

.display__section {
    width: 40%;
    height: 100%;
}

.html__section {
    height: 50%;
    padding: 10px;
    overflow: auto;
    border-bottom: 1px solid rgba(grey, 0.3);
    white-space: pre-wrap;
}

.css__section {
    padding: 10px;
    height: 50%;
    overflow: auto;
    border-bottom: 1px solid rgba(grey, 0.3);
    white-space: pre-wrap;
}
</style>