<script setup lang="ts">
import {reactive, ref} from 'vue'
import i18n from "@/language";

const options = [
  {
    title: '推荐使用Chrome 79或Firefox ESR 68及其以上版本浏览器，最优分辨率1920*1080像素',
    titleEn: 'Chrome 79、Firefox ESR 68 or above are recommended, the optimal resolution is 1920*1080 pixels'
  }, {
    title: '© 2011-2022 正泰电源系统版权所有 保留一切权利',
    titleEn: '© 2011-2022 Chint Power System. All rights reserved.'
  }, {
    title: '手机用户请扫描二维码下载正泰电源系统智能光伏App',
    titleEn: 'Scan QR code to download the APP'
  }
]

interface FormData {
  email: undefined | string,
  password: undefined | string,
}

const formData = reactive<FormData>({
  email: undefined,
  password: undefined
})
const url = (image) => {
  return new URL(image, import.meta.url).href
}

let languageValue = ref()

languageValue.value = i18n.global.locale.value

interface languageOptionsType {
  label: string,
  value: string
}

const languageOptions = reactive<languageOptionsType[]>([
  {label: '中文', value: 'zh-CN'},
  {label: 'English', value: 'en-US'}
])
/*  第一种 let language=ref(getCurrentInstance()?.appContext.config.globalProperties.$i18n.locale)
    在全局下面获取 i18n 的值，然后再去刷新页面，较为麻烦  getCurrentInstance 需要在vue中引入
    第二种  直接 import i18n from "@/language";
    引入之后去更改 i18n 的值，页面直接会进行更改
*/

const languageChange = () => {
  i18n.global.locale.value =languageValue.value
}
</script>

<template>
  <div class="login-box">
    <header>
      <el-image class="login-logo" :src="url('../../assets/images/login-logo.png')" fit="fill"/>
      <div>
        <el-select v-model="languageValue" :fit-input-width="true" class="global-select" style="width: 120px"
                   placement="bottom-end" @change="languageChange">
          <el-option
              v-for="item in languageOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <el-popover
            placement="bottom-end"
            :width="200"
            trigger="hover"
        >
          <el-image :src="url('../../assets/images/app.png')"></el-image>
          <template #reference>
            <el-button class="login-app-down">App {{ $t('m.login') }}</el-button>
          </template>
        </el-popover>
      </div>
    </header>
    <body class="login-body">
    <div class="login-body-center">
      <el-image class="login-content-image" :src="url('../../assets/images/login.png')"/>
      <div class="login-form">
        <div class="el-form-title"> 欢迎来到正泰云</div>
        <el-form label-position="top">
          <el-form-item>
            <el-input v-model="formData.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" show-password v-model="formData.password"></el-input>
          </el-form-item>
          <div class="login-form-password">忘记密码</div>
          <el-form-item>
            <el-button type="primary">{{ $t('m.login') }}</el-button>
          </el-form-item>
          <el-form-item>
            <div class="login-form-register">注册账号</div>
          </el-form-item>
        </el-form>
      </div>

    </div>
    </body>
    <footer>
      <div v-for="item in options" :key="item">
        {{ item.title }}
      </div>
      <div>
        <router-link to="#">
          用户手册
        </router-link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <router-link to="#">
          隐私政策
        </router-link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <router-link to="#">
          使用条款
        </router-link>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.login-box {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/login-bgc.png");
  overflow: hidden;

  header {
    display: flex;
    justify-content: space-between;
    height: 100px;
    padding: 10px 15px 0 15px;

    .login-logo {
      width: 120px;
      height: 60px;
    }

    .login-app-down {
      border: 0;

      &:hover {
        border: 0;
        color: #fff;
        background: #ccc;
      }
    }

  }

  .login-body {
    height: calc(100% - 220px);

    .login-body-center {
      display: flex;
      width: 800px;
      height: 500px;
      margin: 0 auto;

      .login-content-image {
        width: 350px;
        height: 100%;
      }

      .login-form {
        width: calc(100% - 350px);
        text-align: center;
        padding-top: 100px;
        background: #fff;
        border-radius: 0 6px 6px 0;


        .el-form {
          width: 250px;
          margin: 35px auto 0 auto;

          .el-form-title {
            width: 100%;
            font-size: 16px;
            font-weight: 700;
            text-align: center;
            margin-bottom: 15px;
          }

          .el-input {
            width: 250px;
            margin: 0 auto;
          }

          .login-form-password {
            text-align: right;
            line-height: 35px;
            font-size: 15px;
            cursor: pointer;
          }

          .login-form-register {
            width: 100%;
            text-align: center;
            cursor: pointer;
          }

          .el-button {
            width: 100%;
          }
        }

      }

    }
  }

  footer {
    height: 120px;
    text-align: center;
    font-size: 14px;
    color: #46a6ff;

    > div {
      margin-bottom: 8px;

      .router-link-active {
        color: #46a6ff;
        text-decoration: none;
      }
    }
  }
}

:deep(.el-form-item__content) {
  height: 44px;
}

:deep(.el-popper__arrow) {
  left: 0 !important;
}
</style>
