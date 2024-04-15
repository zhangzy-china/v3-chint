import {createI18n} from 'vue-i18n'

import zh from './zh.ts'
import en from './en.ts'


const messages = {
    'zh-CN': {
       ...zh
    },
    'en-US': {
        ...en
    }
}

const language = navigator.language || 'en'// 这是获取浏览器的语言
const i18n = createI18n({
    locale:  localStorage.getLanguage || language || 'en', // 首先从缓存里拿，没有的话就用浏览器语言，
    fallbackLocale: 'en', // 设置备用语言
    messages: messages,
    globalInjection: true,
    legacy: false,
    global: true,
    silentTranslationWarn: true,
    fallback:'en'
})


export default i18n
