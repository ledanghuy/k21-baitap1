import { test } from '@playwright/test';

test('Bài tập số 4:', async ({ page }) => {

    await test.step('Đi đến trang material', async () => {
        await page.goto("https://material.playwrightvn.com/");

    });

    await test.step("Todo Page”,", async () => {
        const BaiHoc3Locator = page.locator("//a[@href='04-xpath-personal-notes.html']");
        await BaiHoc3Locator.click();

    });

    /*
    a. Thêm mới 10 note với nội dung sau ở bảng dưới đây.
    i. Field “Title”: điền nội dung ở cột “Tên action”
    ii. Field “Content”: điền nội dung ở cột “Mô tả”
    */


    const searchText = page.locator("//input[@id='search']");
    const titleText = page.locator("//input[@id='note-title']");
    const contentText = page.locator("//textarea[@id='note-content']");
    const addNotebutton = page.locator("//button[@id='add-note']");

    const arrayList =
        [
            { Tilte: "Click", Content: "Hàm click dùng để thực hiện click vào các phần tử trên trang web" },
            { Tilte: "fill", Content: "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web" },
            { Tilte: "type", Content: "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng" },
            { Tilte: "hover", Content: "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover" },
            { Tilte: "check", Content: "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked" },
            { Tilte: "uncheck", Content: "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked" },
            { Tilte: "selectOption", Content: "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown" },
            { Tilte: "press", Content: "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác" },
            { Tilte: "dblclick", Content: "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web" },
            { Tilte: "dragAndDrop", Content: "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web" }

        ]

    for (let key of arrayList) {
        await titleText.fill(key.Tilte);
        await contentText.fill(key.Content);
        await addNotebutton.click();
    }

    //Thực hiện search với keyword “một hoặc nhiều”
    await searchText.fill("một hoặc nhiều");

















});
