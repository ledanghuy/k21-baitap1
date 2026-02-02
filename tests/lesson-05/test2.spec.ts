import { test } from '@playwright/test';

test('Bài tập số 2:', async ({ page }) => {

    await test.step('Đi đến trang material', async () => {
        await page.goto("https://material.playwrightvn.com/");

    });

    await test.step("Product page”,", async () => {
        const BaiHoc2Locator = page.locator("//a[@href='02-xpath-product-page.html']");
        await BaiHoc2Locator.click();


        ///Sản phẩm 1: 2 sản phẩm: 
        const productOne = page.locator("//button[@data-product-id='1']");
        await productOne.dblclick();

        ///Sản phẩm 2: 3 sản phẩm:
        const productTwo = page.locator("//button[@data-product-id='2']");
        for (let i = 0; i < 3; i++) {
            await productTwo.click();

        };

        //Sản phẩm 3: 1 sản phẩm:
        const productThree = page.locator("//button[@data-product-id='3']");
        await productThree.click();

    });

});