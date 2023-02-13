import {Page} from "@playwright/test";

export default class RegistrationPage {

    constructor(public page: Page) {

    }

    async enterFirstName(firstname: string) {
        await this.page.locator("#input-firstname")
            .type(firstname)
    }

    async enterLastName(lastname: string) {
        await this.page.locator("#input[name='lastname']")
            .type(lastname)
    }

    async enterEmail(email: string) {
        await this.page.locator("#input[name='email']")
            .type(email)
    }

    async enterTelephone(phone: string) {
        await this.page.locator("#input[name='telephone']")
            .type(phone)
    }

    async enterPassword(password: string) {
        await this.page.locator("#input[name='password']")
            .type(password)
    }

    async enterConfirmPassword(password: string) {
        await this.page.locator("#input[name='confirm']")
            .type(password)
    }

    async isSubscribedChecked() {
        return await this.page.locator("#input-newsletter-no").isChecked();
    }

    async clickTermAndCondition() {
        await this.page.click("#input[name='agree']")
    }

    async clickContinueToRegister() {
        await this.page.click("#input[name='Continue']")
    }
}