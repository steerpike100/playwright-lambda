import {expect, test} from "@playwright/test";

test("Hello", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded()
    console.log(await messageInput.getAttribute("placeholder"));

    await expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log('Before entering data' + await messageInput.inputValue())

    await messageInput.type("Hi Steve")

    console.log('After entering data' + await messageInput.inputValue())

})

test("Sum", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const sum1Input = page.locator("#sum1");
    const sum2Input = page.locator("#sum2");

    const getValuesBtn = page.locator("//button[text()='Get values']")

    let num1 = 123;
    let num2 = 456;

    await sum1Input.type("" + num1);
    await sum2Input.type("" + num2);

    await getValuesBtn.click();

    const result = page.locator("#addmessage")

    console.log(await result.textContent());
    let expectedResult = num1 + num2;
    await expect(result).toHaveText("" + expectedResult)

})

test.only("Checkboxes", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")

    const singleCheckbox = await page.locator("id=isAgeSelected")
    await singleCheckbox.check()
    await expect(singleCheckbox).toBeChecked();

})