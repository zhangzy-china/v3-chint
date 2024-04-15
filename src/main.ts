/*
 * @Author: ZhongYang Zhang
 * @Date: 2024-04-08 14:55:00
 * @Last Modified by:   ZhongYang Zhang
 * @Last Modified time: 2024-04-08 14:55:00
 */
import {createApp} from 'vue'

const app = createApp(App)


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/styles/index.scss'

import i18n from '@/language/index.ts'

app.config.globalProperties.aaa = ()=>{
    return aaa
}
app.use(i18n)
// @ts-ignore
import router from "@/router"

// @ts-ignore
import App from './App.vue'

app.use(ElementPlus).use(router).mount('#app')
