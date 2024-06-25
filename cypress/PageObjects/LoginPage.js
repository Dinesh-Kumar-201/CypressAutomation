class Login
{

    setUserName(username) {
        cy.get("[name='username']").type(username)
    }

    setPassword(password) {
        cy.get("[name='password']").type(password)
    }

    clickSubmit() {
        cy.get("button[type='submit']").click()
    }

}

export default Login;