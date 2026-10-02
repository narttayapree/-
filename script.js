// ======================================================
// ระบบจัดการผ่อนสินค้าและเงินยืม
// script.js
// ======================================================

// URL ของ Google Apps Script Web App
const API_URL =
  'https://script.google.com/macros/s/AKfycbypnznOawqL85P9whZD-Lpg_gecB9coFEQoMm52dl_3YcdeSg5T9RN4fbtm2OgbaXvThA/exec';


// ======================================================
// ตัวแปรระบบ
// ======================================================

let ผู้ใช้งานปัจจุบัน = null;

let หน้าปัจจุบัน = 'login';


// ======================================================
// เริ่มระบบ
// ======================================================

document.addEventListener('DOMContentLoaded', function () {

  console.log('เริ่มระบบจัดการผ่อนสินค้าและเงินยืม');

  แสดงหน้า('login');

});


// ======================================================
// เปลี่ยนหน้า
// ======================================================

function แสดงหน้า(ชื่อหน้า) {

  const หน้าทั้งหมด =
    document.querySelectorAll('.page');

  หน้าทั้งหมด.forEach(function (หน้า) {

    หน้า.classList.remove('active');

  });


  const หน้าที่ต้องการ =
    document.getElementById(
      'page-' + ชื่อหน้า
    );


  if (หน้าที่ต้องการ) {

    หน้าที่ต้องการ.classList.add('active');

    หน้าปัจจุบัน = ชื่อหน้า;

  }

}


// ======================================================
// ตรวจสอบระบบ Apps Script
// ======================================================

async function ตรวจสอบระบบ() {

  try {

    const response =
      await fetch(API_URL);

    const data =
      await response.json();

    console.log(
      'Apps Script:',
      data
    );

    return data;

  } catch (error) {

    console.error(
      'ไม่สามารถเชื่อมต่อ Apps Script',
      error
    );

    return null;

  }

}
