import { test } from '@playwright/test';

test('Bài tập số 1: ', async ({ page }) => {
    await test.step('Đi đến trang material', async () => {
        await page.goto("https://material.playwrightvn.com/");

    });

    await test.step("Register Page", async () => {
        const BaiHoc1Locator = page.locator("//a[@href='01-xpath-register-page.html']");
        await BaiHoc1Locator.click();

        ///Input UserName:
        await page.locator("//input[@id='username']").fill("Le Dang Huy");

        ///Input Email:
        await page.locator("//input[@id='email']").fill("ledanghuy91@gmail.com");

        ///Select Gender Radio button:
        const radioGender = page.locator("//input[@id='male']");
        await radioGender.check();

        /// Check Hobbies:
        const checkHobiesCooking = page.locator("//input[@id='cooking']");
        await checkHobiesCooking.click();
        const checkHobiesTraveling = page.locator("//input[@id='traveling']");
        await checkHobiesTraveling.click();

        //// Select Interests
        const interestsSelect = page.locator("//select[@id='interests']");
        await interestsSelect.selectOption(['Music', 'sports', 'technology']);

        //// Select Country:
        const selectCountry = page.locator("//select[@id='country']");
        await selectCountry.selectOption('australia');

        //// Select BOD:
        const selectBob = page.locator("//input[@id='dob']");
        await selectBob.fill("1991-04-30");

        ///Upload Profile Picture:
        const uploadProfilePic = page.locator("//input[@id='profile']");
        await uploadProfilePic.setInputFiles('tests/lesson-05/upload/pig.png');


        /// Input Biography 
        const inputBioraphy = page.locator("//textarea[@id='bio']");
        await inputBioraphy.fill("Hà Nội Mùa thu cây vàng lá đổ");

    });

    await test.step("Click button Register", async () => {

        const buttonRegister = page.locator("//button[@type='submit']");
        await buttonRegister.click();

    })


});



