class Login
{

    txtUserName = "[name='username']"
    txtPassword = "[name='password']"
    btnSubmit = "button[type='submit']"

    setUserName(username) {
        cy.get(this.txtUserName).type(username)
    }

    setPassword(password) {
        cy.get(this.txtPassword).type(password)
    }

    clickSubmit() {
        cy.get(this.btnSubmit).click()
    }

}

export default Login;