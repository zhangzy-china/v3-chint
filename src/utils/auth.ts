import Cookies from "js-cookie";
import language from "../language";

export function getToken() {
    return Cookies.get(token); //获取token的值
}

export function setToken(tokenVal: string) {
    return Cookies.set(token, tokenVal); //设置token，值为tokenVal
}

export function removeToken() {
    return Cookies.remove(token); //移除token值
}

export function getLanguage() {
    return Cookies.get(language); //获取token的值
}

export function setLanguage(languageVal: string) {
    return Cookies.set(language, languageVal); //设置token，值为tokenVal
}

