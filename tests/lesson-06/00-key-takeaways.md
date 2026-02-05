# Tổng hợp bài học số 6:

## Danh Sách Các Mục Trong Bài 6:
1. Git
   - Remote.
   - Push.
   - Pull.
   - Stashing.
   - Merge request.
   - Reviewer

2. JavaScript.
   - Class.
      - Hàm tạo (Contructor)trong class.
      - Thuộc tính (Properties) trong Class.
      - Phương thức (Methods) trong Class.

### Git :

**1.1: Remote:**
 
 ● (hay remote repository) là danh sách các repository được
lưu trữ ở máy chủ từ xa (remote server), cho phép bạn cộng tác với người khác.

 ● Mỗi remote được định danh bằng một tên ngắn gọn và liên kết đến một URL

 ● Ví dụ: 

    - git remote add origin git@github.com:bba/k18-practice.git

     Nghĩa là:
      Tên ngắn gọn: origin

      URL: git@github.com:bba/k18-practice.git


**1.1: Clone:**

● Là hành động lấy code từ 1 repo đã có sẵn về máy tính cá nhân.

●  Câu lệnh clone:

     - git clone <link repo>


● Ví dụ : 

    - git clone git@github.com:better-bytes-academy/k18-practice.git


●  Có thể đặt lại tên cho thư mục clone:

     -  git clone <link repo> <tên mới>

● Ví dụ : 

    - git clone git@github.com:better-bytes-academy k18-practice.git k18-practice-2



***Chú ý : Có thể Clone bằng HTTPS được nhưng mỗi lần push/ pull code lại phải đăng nhập lại mật khẩu ==> Bất tiện**

**1.2: Push:**

● Là hành động đưa code từ vùng repository ở local của một nhánh cụ thể lên trên remote

● Câu lệnh push: 

    - git push <remote_name> <branch_name> 

● Ví dụ:

    - git push origin main

**1.3: Pull:**

● Là hành động lấy code từ một nhánh cụ thể về nhánh local.

● Câu lệnh pull:
    
    - git pull <remote_name> <branch_name>

● Ví dụ:

    - git pull origin main


**1.4: Stashing:**

● Là hành động lưu trữ các thay đổi hiện tại (ở vùng staging) vào một vùng nhớ tạm.

● Giúp ta có thể chuyển đổi qua một nhánh khác dễ dàng hơn.

● Câu lệnh Stashing:
    
    - git stash save


● Để lấy công việc lại, dùng lệnh:

    - git stash pop



**1.5: Merge request:**

● Gộp code từ 1 nhánh sang nhánh còn lại.


**1.6: Reviewer:**

● Người review code.

● Một lần review = một lần học từ người khác.

● Đẩy code lên sớm thì sẽ được review kĩ.



### JavaScript :

**2.1: Class:**

● Là một "bản thiết kế" (blueprint) để tạo ra các object có cùng đặc điểm và hành vi.

●  Class giống như bản vẽ thiết kế một chiếc xe hơi.

●  Object (đối tượng) là chiếc xe thực tế được sản xuất từ bản vẽ đó.

●  Tạo nhiều object cùng kiểu dễ dàng.

●  Tổ chức code gọn gàng, rõ ràng

●  Tái sử dụng code hiệu quả

●  Các thành phần chính: 

     - Constructor: Khởi tạo object.
     - Thuộc tính: Lưu trữ dữ liệu (this.property).
     - Phương thức: Định nghĩa hành vi (functions).



● Trước khi có Class 

       // Tạo user thủ công - lặp lại code nhiều

          let user1 = {
            name: "Nam",
               age: 25,
            sayHello: function() {
            console.log("Xin chào, tôi là " + this.name);
           }
          };

         let user2 = {
            name: "Lan",
            age: 23,
            sayHello: function() {
           console.log("Xin chào, tôi là " + this.name);
           }
         };

       // Phải copy-paste code → dễ sai và khó maintain


● Sau khi có Class: 

           class User {
              constructor(name, age) {
                 this.name = name;
                 this.age = age;
              }
              sayHello() {
               console.log("Xin chào, tôi là " + this.name);
             }
            }

            // Tạo nhiều user dễ dàng, code gọn
            
            let user1 = new User("Nam", 25);
            let user2 = new User("Lan", 23);
            user1.sayHello(); // "Xin chào, tôi là Nam"
            user2.sayHello(); // "Xin chào, tôi là Lan"



- Code ngắn gọn, không lặp lại.
- Dễ bảo trì và mở rộng.
- Tổ chức code rõ ràng hơn.
- Cách khai báo Class

          class TenClass {
              // Nội dung class ở đây
          }

           VD:
          class TestCase {
            // Class để quản lý test case
           }

           class Product {
           // Class để quản lý sản phẩm
          }


**2.2:  Hàm tạo (Contructor)trong class:**

      class Student {

      // Constructor - hàm khởi tạo

         constructor(name, grade) {
          this.name = name; // Thuộc tính name
          this.grade = grade; // Thuộc tính grade
        }
       }

        // Tạo object mới - constructor tự chạy

        let student1 = new Student("Hùng", 8.5);
        console.log(student1.name); // "Hùng"
        console.log(student1.grade); // 8.5



**2.3: Thuộc tính (Properties) trong Class:**

● Thuộc tính là các biến lưu trữ dữ liệu của object. 
● Ví dụ : 
       
        class TestCase {
        constructor(id, title, priority) {

        // Thuộc tính instance (mỗi object có giá trị riêng)
             this.id = id;
             this.title = title;
             this.priority = priority;
             this.status = "Not Run"; // Giá trị mặc định
           }
         }

        let tc1 = new TestCase(1, "Login test", "High");
        let tc2 = new TestCase(2, "Logout test", "Medium");
        console.log(tc1.title); // "Login test"
        console.log(tc2.title); // "Logout test"
        console.log(tc1.status); // "Not Run"


 **2.4: Phương thức (Methods) trong Class:**  

 ● Phương thức là các hàm định nghĩa hành vi của object.

 ● Ví dụ : 

       class TestCase {
        constructor(id, title) {
          this.id = id;
          this.title = title;
          this.status = "Not Run";
       }
       // Phương thức instance
       
        execute() {
          this.status = "Running";
        console.log(`Đang chạy test: ${this.title}`);
        }

        pass() {
         this.status = "Passed";
         console.log(`✓ ${this.title} - PASSED`);
        }

         fail(reason) {
         this.status = "Failed";
         console.log(`✗ ${this.title} - FAILED: ${reason}`);
        }

        getInfo() {
       return `Test #${this.id}: ${this.title} [${this.status}]`;
       }
     }
        // Sử dụng

         let test1 = new TestCase(1, "Kiểm tra đăng nhập");

         test1.execute(); // "Đang chạy test: Kiểm tra đăng nhập"

         test1.pass(); // "✓ Kiểm tra đăng nhập - PASSED"
         
        console.log(test1.getInfo()); // "Test #1: Kiểm tra đăng nhập [Passed]"
    


   