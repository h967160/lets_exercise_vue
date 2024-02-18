import { defineRule } from 'vee-validate'

// 定義錯誤訊息內容
export default {
  messages: {
    // 覆寫原有 validator 錯誤訊息
    _default: '格式不符',
    required: '此欄位為必填',
    email: '輸入格式錯誤',
    regex: '輸入格式不符合要求',
    max: `不得超過 0:{length} 字元`,
    min: `不得少於 0:{length} 字元`,
    confirmed: '兩次輸入的密碼不一致',
    beforeToday: '所選日期必須早於今日',
    beforeBadmintonStart: '請選擇今日或之前的日期'
  }
}

// 跨領域驗證,確認密碼
defineRule('confirmed', (value, [checkPassword]) => {
  if (value === checkPassword) {
    return true
  }
  return false
})

// 出生日期驗證
defineRule('beforeToday', (value) => {
  const selectedDate = new Date(value)
  const today = new Date()
  // 檢查選擇的日期是否早於今天
  return selectedDate < today
})

// 接觸羽毛球時間驗證
defineRule('beforeBadmintonStart', (value) => {
  // 如果日期未填寫，不進行驗證
  if (!value) {
    return true
  }
  const selectedDate = new Date(value)
  const today = new Date()
  return selectedDate.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0)
})
