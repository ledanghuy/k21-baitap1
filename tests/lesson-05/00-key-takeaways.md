# Tổng hợp bài học số 5:

## Danh Sách Các Mục Trong Bài 5:
1. Function advance.
   - Function expression.
   - Lambda function.
   - Anonymous function.

2. DOM.

3. Selector.
   - XPath.
   - CSS selector.
   - Xpath Selector.
        + Xpath Tuyệt Đối.

        + Xpath Tương Đối.

   - Playwright selector.

4. Playwright basic syntax.
   - Viết một test.
   - Tổ chức thành các step.
   - Tương tác cơ bản. 

     + Navigation.
     + Click.
     + Fill.


### Function advance :

**1.1: Function expression:**

   ● Định nghĩa function bằng cách gán nó cho một biến.

   ● Ví dụ:
     
         // Function Declaration (khai báo hàm)
       function add(a, b) {
           return a + b;
        }

       // Function Expression (biểu thức hàm)
           const add = function(a, b) {
              return a + b;
            };

           // So sánh cách gọi
           console.log(add(2, 3)); // 5 - cả hai đều giống nhau
     
**1.2: Lambda function:**     

    ● Còn gọi là Arrow Function.

    ● Đây là cách viết ngắn gọn hơn cho function.

    ● Sử dụng dấu =>


● Ví dụ: 

         // Function truyền thống 
         function add(a, b) {
              return a + b;
          }

         // Function expression
            const add = function(a, b) {
               return a + b;
             };
         // Arrow function (Lambda)
               const add = (a, b) => {
                return a + b;
             };
            const add = (a, b) => a + b;



● Nếu chỉ có 1 dòng code => có thể rút gọn cặp ngoặc nhọn và bỏ return.   
● Ví dụ: 

         // Arrow function (Lambda)
            const add = (a, b) => {
               return a + b;
            };
        // Cú pháp ngắn gọn nhất (implicit return)
             const add = (a, b) => a + b;
             console.log(add(2,3));
             const add = () => console.log(‘add’)

● Một số cách viết khác.

● Ví dụ:
  
    Không có tham số
    // Phải có dấu ngoặc tròn rỗng
        const greet = () => console.log("Hello!");
        const getRandom = () => Math.random();

    Một tham số
     // Có thể bỏ dấu ngoặc tròn
         const double = x => x * 2;
         const square = x => x * x;
     // Hoặc giữ dấu ngoặc (tùy style)
         const triple = (x) => x * 3;


**1.3: Anonymous function:** 

● Function không có tên.

● Được sử dụng khi function chỉ cần dùng một lần hoặc làm callback.

● Ví dụ:
 

       // Named function (có tên)

           function namedFunction() {
             console.log("I have a name!"); 
           }

       // Anonymous function (không tên)

            function() { // SyntaxError! Không thể đứng một mình
             console.log("I'm anonymous!");
            }

       // Anonymous function phải được sử dụng ngay

            // 1. Gán cho biến
            const anonymousFunc = function() {
             console.log("I'm anonymous but stored in a
             variable!");
           };


### DOM :
● DOM: Document Object Model.

● Khi vào một website, ta nhìn thấy website dưới dạng:

     - Các khối text.
     - Các hình ảnh.
     - Các liên kết.
     - Các ô input.
 
● Trên thực tế, có rất nhiều loại thẻ khác nhau:

- Thẻ tiêu chuẩn: thẻ do tổ chức uy tín mozilla định nghĩa.


    1. Thẻ Cấu Trúc khung trang.


      ● <html>: Thẻ gốc của trang.

      ● <head>: Chứa metadata: tiêu đề website, hiển thị Google.

      ● <body>: Nội dung của cả website hiển thị.

    2. Thẻ Bố Cục & Ngữ nghĩa.

      ● <div>: Khối/container chung.

      ● <span>: Inline container (phần tử nội tuyến).

      ● <header>, <footer>, <nav>, <section>: Thẻ ngữ nghĩa.

    3. Thẻ Nội Dung:
    
      ● <h1> đến <h6>: Tiêu đề.

      ● <p>: Đoạn văn.

      ● <ul>, <ol>, <li>: Danh sách.

    4. Thẻ Tương Tác & Media:

      ● <a>: Liên kết

      ● <img>: Hình ảnh

    5. Thẻ Form (Quan trọng cho Testing):

      ● <form>: Biểu mẫu.

      ● <input>: Ô nhập liệu (text, password, checkbox, radio, etc.).
      
      ● <button>: Nút bấm.

      ● <select> và <option>: Dropdown.

      ● <textarea>: Vùng văn bản nhiều dòng.
   
     6. Link Demo tất cả các thẻ :
   
      ●  https://material.playwrightvn.com/035-DOM-elements.html


- Thẻ tự định nghĩa: do lập trình viên/ website tự định nghĩa.


### Selector :

   ● Để tương tác được, ta cần tìm được phần tử này Selector là công cụ giúp ta tìm.

   ● Có 3 loại selector thường dùng:

      - XPath.

      - CSS selector.

      - Playwright selector.


**3.1: Xpath:** 

    ○ Dùng được trong hầu hết các trường hợp (99.99%).
    ○ Đa dạng, có khả năng tìm các phần tử khó
    ○ Hơi dài
    ○ VD: //button[normalize-space() = ‘Add to cart’]


**3.2: CSS selector:** 

     ○ Ngắn gọn, performance cao.
     ○ Dùng cho các trường hợp dễ tìm.
     ○ Không linh hoạt bằng XPath.
     ○ VD: .add-to-cart.

**3.3: Playwright selector:** 

      ○ Chỉ dùng riêng cho Playwright
      ○ Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
      ○ Hướng tới “giống người dùng đang nhìn thấy gì”
      ○ VD: page.getByText(“Add to cart”);

## Khi nào thì dùng gì

     ○ Playwright selector > CSS Selector > XPath
  
**3.4: Xpath selector:** 


     ○ XPath = XML Path
     ○ Có 2 loại:
          ○ Tuyệt đối: đi dọc theo cây DOM
              - bắt đầu bởi 1 /
              - /html/body/div/input
          ○ Tương đối: tìm dựa vào đặc tính
              - bắt đầu bởi 2 //
              - //tenthe[@thuoctinh=”gia tri”]

     ○ Nên dùng XPath tương đối



**3.4.1: Xpath Tuyệt Đối:** 

● Bắt đầu từ root (gốc), dùng dấu / 

● Ví dụ : 

    - /html/body/div/input


● Đặc điểm:

    -  Bắt đầu bằng /.
    -  Phải viết đầy đủ đường dẫn từ root.
    -  Dễ bị lỗi khi cấu trúc HTML thay đổi.
    -  Ít linh hoạt.

**3.4.2: Xpath Tương Đối:** 

  ● Bắt đầu từ bất kỳ đâu trong DOM, dùng //

  ● Ví dụ : 

    - //input[@id=’user’]

  ● Đặc điểm:

    - Bắt đầu bằng //.
    - Tìm element ở bất kỳ vị trí nào.
    - Linh hoạt, ít bị ảnh hưởng khi HTML thay đổi.
    - Nên dùng trong thực tế.



### Playwright basic syntax :

      ● Viết một test.
      ● Tổ chức thành các step.
      ● Tương tác cơ bản:

          ○ Navigation
          ○ Click
          ○ Fill


 

**4.1: Test:** 

● test: Đơn vị cơ bản để khai báo một test.

● Ví dụ: 


         import { test } from '@playwright/test';
          test('<tên test>', async ({ page }) => {
              // Code của test
           });    


● Step : Đơn vị nhỏ hơn test, để khai báo từng step của test case.

● Ví dụ: 

      await test.step('Tên step', async () => {
          // Code here
        });

   
**4.2: Tổ chức thành các Step:**

 ● Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain.

● Ví dụ:  

        await test.step('Tên step', async () => {
            // Code here
            });

           ------

        test('<tên test>', async ({ page }) => {
            await test.step('Tên step', async () => {
            // Code here
         });
      });
 


 
**4.3: Tương tác cơ bản:**


1. Navigate: 
 
   - await page.goto('https://pw-practice.playwrightvn.com/');
   - https://youtu.be/KBwgjIDsfMc


2. Locate: 

   ● https://youtu.be/mV84VZAwcj4 

   ● Sử dụng page.locator(“<selector>”) để chọn phần tử
trên trang.

   ● Ví Dụ: 

        - page.locator(“//input[@id=’email’]”)

         


3. Click.

   ● https://www.youtube.com/watch?v=FeG9-P3gN3I

   ● Single Click:

       - await page.locator("//button").click();

   ● Double Click:

       - await page.locator("//button").dblclick();

   ● Right Click:

        - page.locator("//button").click({ button: 'right'})

   ● Click chuột kèm bấm phím khác.

        - page.locator("").click({modifiers: ['Shift'],})

4. Input.

     ● https://www.youtube.com/watch?v=bcilbBBD72I&feature=youtu.be (text-based).

     ● https://www.youtube.com/watch?v=odyBKeoNtwA&feature=youtu.be  (date time)

     ● https://www.youtube.com/watch?v=KNmsLeBh3Rw&feature=youtu.be  ( Radio, checkbox, dropdown (select & autocompleted))

     ● https://www.youtube.com/watch?v=S4h4v2wQS6c (Xử lý confirmation dialog)

     ● Fill : Giống việc bạn paste content vào một ô input.

        - page.locator("//input").fill('Playwright Viet Nam');

     ● pressSequentially: Giống việc bạn gõ từng chữ cái vào ô input

        -page.locator("//input").pressSequentially('Playwright Viet Nam', {delay: 100,});


    ● Radio/checkbox: Lấy giá trị hiện tại đang là check hay không:

       - const isChecked = page.locator("//input").isChecked();

       - Check/ uncheck
          page.locator("//input").check();
          page.locator("//input").setChecked(false);


    ● Select 
       
       - await page.locator('//select[@id=”country”]').selectOption({ label: 'USA' })

     ● Upload File

        - await page.locator("//input[@id='profile']").setInputFiles("<file-path>");
        