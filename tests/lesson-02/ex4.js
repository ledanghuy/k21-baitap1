const chieu_cao = 172;
let so_le_chieu_cao = chieu_cao % 100;

/// can nang ly tuong
const can_nang_ly_tuong = (so_le_chieu_cao * 9) / 10

// muc can toi da
const muc_can_toi_da = so_le_chieu_cao

/// muc can toi thieu
const muc_can_toi_thieu = (so_le_chieu_cao * 8) / 10

console.log("Cân nặng lý tưởng:" + can_nang_ly_tuong + " kg" + " Mức cân tối đa: "
    + muc_can_toi_da + " kg" + " Mức cân tối thiểu: " + muc_can_toi_thieu + " kg");




