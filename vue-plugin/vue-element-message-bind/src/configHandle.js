import Vue from 'vue'
import { MessageBox } from 'element-ui'

export function configHandle() {
    Vue.prototype.$msg = {
        display(msg, type, title, callback) {
            MessageBox.alert(msg, title, {
                confirmButtonText: 'OK',
                type: type,
                callback: action => {
                    if(callback) 
                        callback()
                }
            });
        }
    }
}