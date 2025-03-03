'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { BuildingStorefrontIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [status, setStatus] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('傳送中...')

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            setStatus('你的訊息已經傳送成功')
            setFormData({ name: '', email: '', message: '' })
        } else {
            setStatus('傳送失敗，請稍後再試')
        }
    }
    const t = useTranslations('')

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white bg-opacity-50 shadow-md rounded-lg mt-32 flex">
            <div className="w-full mr-8">  {/* 表單部分 */}
                <h1 className="text-2xl font-bold mb-4">{t('Contact_Us')}</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder= {t('Name')}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder={t('Email')}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                    <textarea
                        name="message"
                        placeholder={t('Message')}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full h-32 p-2 border rounded"
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">傳送</button>
                </form>
                {status && <p className="mt-4 text-center text-red-500">{status}</p>}
            </div>

            <div className="w-1/3">  {/* 聯絡資訊部分 */}
                <h2 className="text-xl font-bold mb-2">{t('Contact_Info')}</h2>
                <p className="flex items-center mb-2">
                    <BuildingStorefrontIcon className="size-8 mr-2" />  {/* 地址圖示 */}
                    {t('Company_Label')}：{t('Company')}
                </p>
                <p className="flex items-center mb-2">
                    <PhoneIcon className="size-8  mr-2 " />  {/* 電話圖示 */}
                    {t('Company_Phone')}：0927-377-741
                </p>
                <p className="flex items-center mb-2">
                    <EnvelopeIcon className="size-8  mr-2" />  {/* 郵件圖示 */}
                    {t('Email')}：fluber@winerva.com
                </p>
            </div>
        </div>
    )
}

export default ContactPage
