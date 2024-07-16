# nextJs_Auth_Ref

## คำอธิบาย

โปรเจกต์ **nextJs_Auth_Ref** นี้เป็นตัวอย่างการสร้างระบบล็อกอินในแอปพลิเคชัน Next.js โดยใช้ NextAuth ซึ่งแสดงให้เห็นถึงการใช้งานที่ดีที่สุดในการรวมการเข้าสู่ระบบ การลงทะเบียน และการจัดการเซสชันของผู้ใช้ เหมาะสำหรับนักพัฒนาเว็บที่ต้องการเข้าใจและนำการตรวจสอบสิทธิ์ที่ปลอดภัยมาใช้ในโปรเจกต์ Next.js ของตน

## การติดตั้ง

1. Clone โปรเจกต์นี้:
    ```bash
    git clone https://github.com/yourusername/nextJs_Auth_Ref.git
    ```
2. ไปที่ไดเรกทอรีของโปรเจกต์:
    ```bash
    cd nextJs_Auth_Ref
    ```
3. ติดตั้ง dependencies:
    ```bash
    npm install
    ```
4. สร้างไฟล์ `.env` สามารถคัดลองได้จาก `.env.example` ซึ่งมีค่าดังต่อไปนี้:
    ```env
    DATABASE_URL="XXX"
    NEXTAUTH_SECRET=XXX
    NEXTAUTH_URL=XXX
    GOOGLE_CLIENT_ID=XXX
    GOOGLE_CLIENT_SECRET=XXX
    ```

## การใช้งาน

1. รันโปรเจกต์:
    ```bash
    npm run dev
    ```
2. เปิดเบราว์เซอร์และไปที่ [http://localhost:3000](http://localhost:3000)

## การใช้งานเพิ่มเติม

สำหรับการตั้งค่าหรือการปรับแต่งเพิ่มเติม คุณสามารถดูที่ [NextAuth.js documentation](https://next-auth.js.org/getting-started/introduction)

## การสนับสนุน
หากมีคำถามหรือปัญหาใด ๆ สามารถสร้าง issue ใน repository นี้หรือส่งอีเมลมาที่ [aofphuwadech@gmail.com](mailto:aofphuwadech@gmail.com)

## อ้างอิงจาก
- [mikelopster](https://mikelopster.dev)
  - [รู้จักกับ Next Auth + Prisma](https://mikelopster.dev/posts/next-auth-basic)
  - [รู้จักกับ Prisma ORM](https://mikelopster.dev/posts/next-prisma/)

## ผู้คัดลอก
- [ozoneaik](https://github.com/ozoneaik)

## License

โปรเจกต์นี้อยู่ภายใต้ลิขสิทธิ์ [MIT License](LICENSE)
