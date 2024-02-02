// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// 引入 Vee Validate 元件跟功能
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
// 引入 Vee Validate 全部驗證規則
import * as AllRules from '@vee-validate/rules'
// 引入 Vee Validate 多國語系功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 Vee Validate 繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// 引入自定義驗證
import twValidations from './i18n/tw/validations'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

//Vee Validate 繁體中文語系檔,將當前語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 指欄位輸入內容時,會立即進行驗證(即邊寫邊判斷)
})

//設定預設語系
setLocale('zh_TW')

//自訂錯誤訊息
localize('zh_TW', twValidations)

// FontAwesome
library.add(fas, far)

// 註冊全域的表單驗證元件(VForm, VField, ErrorMessage)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
// FonAwesome
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router)
app.mount('#app')
