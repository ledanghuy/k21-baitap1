*** Tổng hợp bài học số 2**

***Git***

----Git-----
 - Git có 3 môi trường làm việc chính là:
   - Working Directory.
   - Staging Area.
   - Repository.

- Cấu hình Git: 
 - Cấu hình global: 
   - git config --global user.name"Tên bạn"
   - git config --global user.email "email của bạn"
 - Tạo repo khác:
   - git config user.name "Alex"
   - git config user.emal "alex@gmail.com"
   

- Các lệnh trong Git:
   - Git init: 
       - Lệnh dùng để khởi tạo 1 repository mới trong Git.
       - file ở trong vùng Working Directory (chỉ tạo ra thư mục git).
   - Git add <file_name> : Lệnh dùng để đưa file từ vùng Working Directory vào trong vùng Staging Area.
   - git add . : Lệnh dùng để đưa toàn bộ tất cả các file ( file mới lẫn file thay đổi  ) từ vùng Working Directory vào trong vùng Staging Area. 
   - git commit -m “message” : Lệnh này dùng để chuyển các file từ vùng Staging Area lên Repository kèm theo tin nhắn mô tả. (như ***chore*** :sửa nhỏ lẻ.., ***feat*** : thêm tính năng hoặc test case mới, ***fix*** : sửa lỗi 1 test trước đó).
   - git status : xem trạng thái của file 
      - file màu xanh : vùng staging.
      - file màu đỏ : vùng working directory.
   - git log: kiểm tra danh sách commit.


   ***Simple Workflow***


- Không dùng global config: 
    - init -> config-> add -> commit-> push.

- Dùng global config:
    - init -> add -> commit -> push.

***Java Script***

- Biến  : biến trong từ biến thiên , có nghĩa là có thể thay đổi được. 
- Có  2 biến là let và var:
   - Giống nhau : đề là để khai báo biến.
   - Khác nhau : 
        - var:  phạm vi hoạt động của var : phạm vi hàm , dễ gây lỗi ngoài ý muốn.
        - let:  phạm vi hoạt động khối , an toàn .
        - var có thể khai báo lại còn let thì không.
- Hằng số : const: các giá trị không thay đổi được.


- Kiểu dữ liệu: 
  - Kiểu nguyên thủy: 
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol
    - BigInt

  - Kiểu Tham chiếu 
    - Object
 

 - Toán Tử so sánh :
    - So sánh bằng  == và === ( nên dùng ===  cho an toàn)
    - So sánh không bằng : !===
    - So sánh lớn hơn , nhỏ hơn 
       - >
       - <
       - <=
       - >=
- Toán tử logic:
   - && ( and ): trả về đúng nếu cả 2 vế của mệnh đề đều đúng.
   - || ( or) : trả về đúng nếu 1 trong 2 vế của mệnh đề đúng.

- Toán tử 1 ngôi:
   Ex: let x =5; 
    - x++ : toán tử nằm trước tăng trước , trả về sau.
    - ++x  : toán tử nằm ở phía sau trả về trước, tăng sau
    - x-- :toán tử nằm trước giảm trước , trả về sau.
    - --x :  toán tử nằm ở phía sau trả về trước, giảm sau

  - Ví dụ: 
   let a = 10;
   b = ++a; // tăng a lên 11 rồi trả về => b có giá trị là 11

   let c = 10;
   d = c++; // trả về giá trị 10 cho d rồi mới tăng // => d có giá trị là 10

- Toán tử toán học: 
   -  + ,-, *, /

- Câu điều kiện :
   - If (){} else {} : nếu điều kiện đúng thì mới chạy
- Vòng lặp: 
   - for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
       // code
     }

     for (<khởi tạo>; <kiểm tra>; <cập nhật>) {
     // code
      }
    Ví dụ:
          for (let i = 0;i < 5; i++) {
          console.log("Xin chào!")
             }














