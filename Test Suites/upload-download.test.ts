import {test, expect} from '@playwright/test';

test('download files', async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo")

    await page.type("#textbox", "Like, Share, comment & bollocks")
    await page.click("id=create")

    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ])

    const fileName = download[0].suggestedFilename()
    console.log(fileName)



    await download[0].saveAs(fileName)

})


test.only("Upload files", async ({page}) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")

    // await page.setInputFiles("input[type='file']",
    //     ["uploads/race1.jpg", "uploads/race2.jpg"]);

    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])

    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple)
    uploadFiles.setFiles(["uploads/race1.jpg", "uploads/race2.jpg"])

    await page.waitForTimeout(3000)
})
