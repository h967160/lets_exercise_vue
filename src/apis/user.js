import request from '@/utils/http'

export const registerUser = async (userData) => {
  try {
    const response = await request.post('/users/signup', userData)
    return response.data
  } catch (error) {
    // 檢查 error.response 是否存在，避免 undefined 的情況
    if (error.response) {
      // 如果存在，拋出伺服器返回的錯誤信息
      throw error.response.data
    } else {
      // 如果不存在，拋出一般性錯誤
      throw new Error('An error occurred while processing the request.')
    }
  }
}
