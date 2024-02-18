<script setup>
import { registerUser } from '@/apis/user'
import { ref } from 'vue'

const userData = ref({
  lastName: '',
  firstName: '',
  nickName: '',
  account: '',
  password: '',
  checkPassword: '',
  nationalId: '',
  email: '',
  gender: '',
  birthdate: '',
  phoneNumber: '',
  playSince: null,
  introduction: '',
  avatar: ''
})

const register = async () => {
  // console.log('Register function called')
  // console.log('Sending data to server:', userData.value)
  try {
    const result = await registerUser(userData.value)
    console.log('註冊成功', result)
  } catch (error) {
    console.error('註冊失敗', error)
  }
}
const fillTestData = () => {
  // 一鍵輸入方便測試
  userData.value = {
    lastName: 'White',
    firstName: 'Anna',
    nickName: 'Ann',
    account: 'test15',
    password: 'Test1111',
    checkPassword: 'Test1111',
    nationalId: 'H223456787',
    email: 'test15@test.com',
    gender: 'female',
    birthdate: '1995-01-14',
    phoneNumber: '0922345671',
    playSince: null,
    introduction: '',
    avatar: ''
  }
}
</script>
<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-6 my-3 border border-secondary">
        <VForm @submit="register" v-slot="{ errors }" class="register-form m-3 p-3">
          <button @click.prevent="fillTestData" class="btn btn-dark">一鍵輸入</button>
          <div class="mb-3">
            <div class="input-group mb-3 flex-nowrap">
              <div class="pe-3">
                <label for="lastName" class="form-label"
                  >姓<span class="text-danger px-1">*</span></label
                >
                <VField
                  type="text"
                  class="form-control"
                  name="lastName"
                  id="lastName"
                  placeholder="請輸入您的姓氏"
                  v-model="userData.lastName"
                  rules="required|max:20"
                  :class="{ 'is-invalid': errors.lastName }"
                />
                <ErrorMessage name="lastName" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="pe-3">
                <label for="firstName" class="form-label"
                  >名<span class="text-danger px-1">*</span></label
                >
                <VField
                  type="text"
                  class="form-control"
                  name="firstName"
                  id="firstName"
                  placeholder="請輸入您的名字"
                  v-model="userData.firstName"
                  rules="required|max:20"
                  :class="{ 'is-invalid': errors['firstName'] }"
                />
                <ErrorMessage name="firstName" class="invalid-feedback"></ErrorMessage>
              </div>
              <div>
                <label for="nickName" class="form-label">暱稱</label>
                <VField
                  type="text"
                  class="form-control"
                  id="nickName"
                  name="nickName"
                  placeholder="請輸入您的暱稱"
                  v-model="userData.nickName"
                  rules="max:20"
                  :class="{ 'is-invalid': errors['nickName'] }"
                />
                <ErrorMessage name="nickName" class="invalid-feedback"></ErrorMessage>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="account" class="form-label"
              >帳號<span class="text-danger px-1">*</span></label
            >
            <VField
              type="text"
              class="form-control"
              id="account"
              name="account"
              placeholder="請輸入至少6個英數字組成的帳號"
              v-model="userData.account"
              :rules="{ required: true, min: 6, max: 50, regex: /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/ }"
              :class="{ 'is-invalid': errors['account'] }"
            />
            <ErrorMessage name="account" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="password" class="form-label"
              >密碼<span class="text-danger px-1">*</span></label
            >
            <VField
              type="password"
              class="form-control"
              id="password"
              name="password"
              placeholder="請輸入最少8個字元，需包含至少一個大寫英文字母和一個數字"
              v-model="userData.password"
              :rules="{ required: true, min: 8, max: 20, regex: /^(?=.*[A-Z])(?=.*\d).{8,20}$/ }"
              :class="{ 'is-invalid': errors['password'] }"
            />
            <ErrorMessage name="password" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="checkPassword" class="form-label"
              >確認密碼<span class="text-danger px-1">*</span></label
            >
            <VField
              type="password"
              class="form-control"
              id="checkPassword"
              name="checkPassword"
              placeholder="請再輸入一次密碼"
              v-model="userData.checkPassword"
              rules="required|confirmed:@password"
              :class="{ 'is-invalid': errors['checkPassword'] }"
            />
            <ErrorMessage name="checkPassword" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="nationalId" class="form-label"
              >身分證字號 <span class="text-danger px-1">*</span></label
            >
            <VField
              type="text"
              class="form-control"
              id="nationalId"
              name="nationalId"
              placeholder="請輸入正確的身分證字號（第一碼為大寫英文字母）"
              v-model="userData.nationalId"
              :rules="{ required: true, max: 10, regex: /^[A-Za-z][12]\d{8}$/ }"
              :class="{ 'is-invalid': errors['nationalId'] }"
            />
            <ErrorMessage name="nationalId" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label"
              >Email <span class="text-danger px-1">*</span></label
            >
            <VField
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="請輸入有效的Email"
              v-model="userData.email"
              rules="required|email|max:100"
              :class="{ 'is-invalid': errors['email'] }"
            />
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="gender" class="form-label"
              >性別<span class="text-danger px-1">*</span></label
            >
            <VField
              type="radio"
              name="gender"
              value="male"
              v-model="userData.gender"
              rules="required"
              :class="{ 'is-invalid': errors['gender'] }"
            />
            <span class="ps-1 pe-2">男性</span>
            <VField type="radio" name="gender" value="female" v-model="userData.gender" />
            <span class="ps-1">女性</span>
            <ErrorMessage name="gender" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="birthdate" class="form-label"
              >出生日期<span class="text-danger px-1">*</span></label
            >
            <VField
              type="date"
              class="form-control"
              id="birthdate"
              name="birthdate"
              v-model="userData.birthdate"
              rules="required|beforeToday"
              :class="{ 'is-invalid': errors['birthdate'] }"
            />
            <ErrorMessage name="birthdate" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="phoneNumber" class="form-label"
              >手機<span class="text-danger px-1">*</span></label
            >
            <VField
              type="text"
              class="form-control"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="請輸入正確的手機號碼（例如：0912345678）"
              v-model="userData.phoneNumber"
              :rules="{ required: true, max: 10, regex: /^09\d{8}$/ }"
              :class="{ 'is-invalid': errors['phoneNumber'] }"
            />
            <ErrorMessage name="phoneNumber" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="playSince" class="form-label">接觸羽球時間</label>
            <VField
              type="date"
              class="form-control"
              id="playSince"
              name="playSince"
              value=""
              v-model="userData.playSince"
              rules="beforeBadmintonStart"
              :class="{ 'is-invalid': errors['playSince'] }"
            />
            <ErrorMessage name="playSince" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="introduction" class="form-label">個人簡介</label>
            <VField
              as="textarea"
              rows="10"
              class="form-control"
              name="introduction"
              id="introduction"
              placeholder="請輸入您的個人簡介（最多150字元）"
              v-model="userData.introduction"
              rules="max:150"
              :class="{ 'is-invalid': errors['introduction'] }"
            />
            <ErrorMessage name="introduction" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">註冊</button>
          </div>

          <div class="SSO d-flex justify-content-center">
            <div class="mb-3 p-3">
              <a href="#" class="btn btn-outline-dark"
                ><img
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-256.png"
                  class="sso-img"
                  alt="Facebook"
                />Facebook</a
              >
            </div>
            <div class="mb-3 p-3">
              <a href="#" class="btn btn-outline-dark"
                ><img
                  src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-256.png"
                  alt="Google"
                  class="sso-img"
                />Google</a
              >
            </div>
            <div class="mb-3 p-3">
              <a href="#" class="btn btn-outline-dark"
                ><img
                  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/200_Line_logo_logos-256.png"
                  alt="Line"
                  class="sso-img"
                />Line</a
              >
            </div>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>
<style scoped>
.sso-img {
  height: 30px;
  width: 30px;
}
</style>
