const chieu_cao = 172;
let can_nang_ly_tuong;
let muc_can_toi_da;
let muc_can_toi_thieu;

let so_le_chieu_cao = chieu_cao % 100;
console.log("Số lẻ chiều cao:" + so_le_chieu_cao + "cm");

/// can nang ly tuong
can_nang_ly_tuong = (so_le_chieu_cao * 9) / 10
console.log("Cân nặng lý tưởng:" + can_nang_ly_tuong + "kg");

// muc can toi da
muc_can_toi_da = so_le_chieu_cao
console.log("Mức cân tối đa: " + muc_can_toi_da + "kg");

/// muc can toi thieu
muc_can_toi_thieu = (so_le_chieu_cao * 8) / 10
console.log("Mức cân tối thiểu: " + muc_can_toi_thieu + "kg");






