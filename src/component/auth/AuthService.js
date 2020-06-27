const AuthService = {
    isLogin: false,

    login(cb) {
        this.isLogin = true
        setTimeout(cb, 100)

    },

    logout(cb) {
        this.isLogin = false
        setTimeout(cb, 100)
    }
}

export default AuthService
