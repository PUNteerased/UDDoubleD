/**
 * Q&A Configuration
 * ตั้งค่า API URL สำหรับระบบ Q&A
 */

// ตั้งค่า API URL ที่นี่
// - สำหรับ development: 'http://localhost:3000'
// - สำหรับ production: ใส่ URL ของ backend ที่ deploy แล้ว เช่น 'https://your-backend.vercel.app'
// - ถ้าไม่มี backend: ใส่ '' เพื่อใช้ localStorage แทน

var QA_CONFIG = {
  // เปลี่ยน URL นี้เป็น URL ของ backend ที่ deploy แล้ว
  API_URL: '', // ตัวอย่าง: 'https://uddoubled-backend.vercel.app'
  
  // ใช้ localStorage เป็น fallback ถ้าไม่มี backend
  USE_LOCAL_STORAGE: true
};
