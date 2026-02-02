import { test } from '@playwright/test';

test('Bài tập số 3:', async ({ page }) => {

    await test.step('Đi đến trang material', async () => {
        await page.goto("https://material.playwrightvn.com/");

    });

    await test.step("Todo Page”,", async () => {
        const BaiHoc3Locator = page.locator("//a[@href='03-xpath-todo-list.html']");
        await BaiHoc3Locator.click();

        /// thêm mới 100 todo item có nội dung "Todo<i>"
        const arrayToDoList = [];
        const toDoList = page.locator("//input[@id='new-task']");
        const addTask = page.locator("//button[@id='add-task']");
        for (let i = 0; i <= 100; i++) {
            arrayToDoList.push(
                {
                    sothutu: i,
                    name: `Todo ${i}`

                }
            );
        }
        ///Xoá các todo có số lẻ
        const evenNumbers = arrayToDoList.filter(num => num.sothutu % 2 === 0);
        console.log(evenNumbers);

        for (let key of evenNumbers) {
            await toDoList.fill(key.name);
            await addTask.click();
        }

    });

});

