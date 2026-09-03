export default function HomePage() {
  // 1. เปลี่ยนค่า siteName เป็นชื่อเว็บไซต์ที่ต้องการ
  const siteName = "Student Course Hub";

  // 2. เพิ่มตัวแปร description สำหรับข้อความแนะนำเว็บไซต์
  const description = "ศูนย์รวมและค้นหาข้อมูลรายวิชาสำหรับนักศึกษา";

  return (
    <main className="page">
      <h1>{siteName}</h1>

      {/* 3. นำ description มาแสดงใน Element <p> */}
      <p>{description}</p>

      {/* 4. เพิ่ม <section> ที่อธิบายว่าเว็บไซต์นี้เหมาะกับผู้ใช้กลุ่มใด */}
      <section>
        <h2>กลุ่มผู้ใช้งานหลัก</h2>
        <p>
          เว็บไซต์นี้เหมาะสำหรับนักศึกษาที่ต้องการวางแผนการลงทะเบียนเรียน 
          และอาจารย์ผู้สอนที่ต้องการตรวจสอบรายละเอียดรายวิชา
        </p>
      </section>
    </main>
  );
}