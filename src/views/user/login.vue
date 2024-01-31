<script setup></script>
<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-4 border border-2 border-secondary rounded p-3 mt-5">
        <form action="#" method="#" class="login-form m-5">
          <div class="mb-3">
            <label for="account" class="form-label">帳號</label>
            <input
              type="text"
              class="form-control"
              id="account"
              placeholder="帳號或Email"
              name="account"
              minlength="6"
              maxlength="50"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">密碼</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="密碼"
              name="password"
              pattern="^(?=.*[A-Z])(?=.*\d).{8,20}$"
              minlength="8"
              maxlength="20"
              required
            />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="rememberMe" name="rememberMe" />
            <label class="form-check-label" for="rememberMe">記住我</label>
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">登入</button>
          </div>
          <div class="SSO d-flex justify-content-center mt-3">
            <div class="px-2">
              <a href="#"
                ><img
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-256.png"
                  class="sso-img"
                  alt="Facebook"
              /></a>
            </div>
            <div class="px-2">
              <a href="#"
                ><img
                  src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-256.png"
                  alt="Google"
                  class="sso-img"
              /></a>
            </div>
            <div class="px-2">
              <a href="#"
                ><img
                  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/200_Line_logo_logos-256.png"
                  alt="Line"
                  class="sso-img"
              /></a>
            </div>
          </div>
          <div id="login-no-account mb-5">
            <div class="login-new-content d-flex justify-content-center mt-3">
              <p>還沒有帳號嗎？註冊一個吧！</p>
            </div>
            <div class="login-new-content-link d-flex justify-content-center">
              <router-link to="/register" class="sign-up btn-outline-success btn">註冊</router-link>
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
