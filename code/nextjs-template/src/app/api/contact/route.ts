import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {

    const { name, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: email,
      to: 'fluber@winerva.com',
      subject: `客服信件：鴻博資訊有限公司官網轉寄`,
      text: `姓名: ${name}\nEmail: ${email}\n訊息:\n${message}`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('發送郵件錯誤:', error)
    return NextResponse.json({ error: '發送失敗' }, { status: 500 })
  }
}
