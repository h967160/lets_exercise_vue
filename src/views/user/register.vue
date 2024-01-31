<script setup>

</script>
<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-6 my-3 border border-secondary">
        <form action="#" method="#" class="register-form m-3 p-3">
          <div class="mb-3">
            <div class="input-group mb-3 flex-nowrap">
              <div class="pe-3">
                <label for="lastName" class="form-label"
                  >姓<span class="text-danger px-1">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  name="lastName"
                  id="lastName"
                  maxlength="20"
                  placeholder="請輸入您的姓氏"
                  required
                />
              </div>
              <div class="pe-3">
                <label for="firstName" class="form-label"
                  >名<span class="text-danger px-1">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  name="firstName"
                  id="firstName"
                  maxlength="20"
                  placeholder="請輸入您的名字"
                  required
                />
              </div>
              <div>
                <label for="nickName" class="form-label">暱稱</label>
                <input
                  type="text"
                  class="form-control"
                  id="nickName"
                  name="nickName"
                  maxlength="20"
                  placeholder="請輸入您的暱稱"
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="account" class="form-label"
              >帳號<span class="text-danger px-1">*</span></label
            >
            <input
              type="text"
              class="form-control"
              id="account"
              name="account"
              minlength="6"
              maxlength="50"
              placeholder="請輸入至少6個字元的帳號"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label"
              >密碼<span class="text-danger px-1">*</span></label
            >
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              pattern="^(?=.*[A-Z])(?=.*\d).{8,20}$"
              minlength="8"
              maxlength="20"
              placeholder="請輸入最少8個字元，需包含至少一個大寫英文字母和一個數字"
              required
            />
          </div>
          <div class="mb-3">
            <label for="checkPassword" class="form-label"
              >確認密碼<span class="text-danger px-1">*</span></label
            >
            <input
              type="password"
              class="form-control"
              id="checkPassword"
              name="checkPassword"
              pattern="^(?=.*[A-Z])(?=.*\d).{8,20}$"
              minlength="8"
              maxlength="20"
              placeholder="請再輸入一次密碼"
              required
            />
          </div>
          <div class="mb-3">
            <label for="nationalId" class="form-label"
              >身分證字號 <span class="text-danger px-1">*</span></label
            >
            <input
              type="text"
              class="form-control"
              id="nationalId"
              name="nationalId"
              pattern="^[A-Za-z][12]\d{8}$"
              maxlength="10"
              placeholder="請輸入正確的身分證字號（第一碼為大寫英文字母）"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label"
              >Email <span class="text-danger px-1">*</span></label
            >
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="請輸入有效的Email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="gender" class="form-label"
              >性別<span class="text-danger px-1">*</span></label
            >
            <input type="radio" name="gender" value="male" required /><span class="ps-1 pe-2"
              >男性</span
            >
            <input type="radio" name="gender" value="female" /><span class="ps-1">女性</span>
          </div>
          <div class="mb-3">
            <label for="birthday" class="form-label"
              >出生日期<span class="text-danger px-1">*</span></label
            >
            <input type="date" class="form-control" id="birthday" name="birthday" required />
          </div>
          <div class="mb-3">
            <label for="phoneNumber" class="form-label"
              >手機<span class="text-danger px-1">*</span></label
            >
            <input
              type="text"
              class="form-control"
              id="phoneNumber"
              name="phoneNumber"
              pattern="^09\d{8}$"
              maxlength="10"
              placeholder="請輸入正確的手機號碼（例如：0912345678）"
              required
            />
          </div>
          <div class="mb-3">
            <label for="playSince" class="form-label">接觸羽球時間</label>
            <input
              type="date"
              class="form-control"
              id="playSince"
              name="playSince"
              value="2023-01-01"
            />
          </div>
          <div class="mb-3">
            <label for="introduction" class="form-label">個人簡介</label>
            <textarea
              rows="10"
              class="form-control"
              name="introduction"
              id="introduction"
              maxlength="150"
              placeholder="請輸入您的個人簡介（最多150字元）"
            ></textarea>
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
        </form>
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
