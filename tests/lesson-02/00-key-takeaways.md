# 01-lythuyet-git.txt:
- git init : Lệnh dùng để khởi tạo 1 repository mới trong Git.
- git add <file_name> : Lệnh dùng để đưa file từ vùng Working Directory vào trong vùng Staging Area.
- git add . : Lệnh dùng để đưa toàn bộ tất cả các file ( file mới lẫn file thay đổi  ) từ vùng Working Directory vào trong vùng Staging Area. 
- git commit -m “message” : Lệnh này dùng để chuyển các file từ vùng Staging Area lên Repository của Github kèm theo tin nhắn mô tả. (như ***chore*** :sửa nhỏ lẻ.., ***feat*** : thêm tính năng hoặc test case mới, ***fix*** : sửa lỗi 1 test trước đó).

# 02-cacvung-git.txt: 
- **Step a: Tạo 3 file : file 1, file2, file3**: Ba file này sẽ nằm trong vùng Working Directory.
- **Step b: git init**: khởi tạo 1 repository mới trong Git. 
- **Step c: git commit -m”init project”**: Hiển thị thông báo lỗi :Không có gì file nào được thêm vào commit.
- **Step d: git add file1**: Chuyển file 1 từ Working Directory sang bên Staging Area.
- **Step e: git commit -m”add file1”**: file 1 sẽ được chuyển từ vùng Staging Area sang vùng Repository.
- **Step f: git commit -m”add file”**: Hiển thị thông báo lỗi :Không có gì file nào được thêm vào commit.
