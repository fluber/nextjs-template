'use client'
import { useTranslations } from 'next-intl'
import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from "next/image"

// ✅ 使用 dynamic() 讓 ReactPlayer 只在 Client Side 運行
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const projects = [
    {
        title: 'Portfolio_001_Title',
        description: 'Portfolio_001_Description',
        videoUrl: 'https://www.youtube.com/embed/kNnnKljKJ54',
        pdfUrl: '',
        image: ''
    },
    {
        title: 'Portfolio_002_Title',
        description: 'Portfolio_002_Description',
        videoUrl: 'https://www.youtube.com/embed/0IiyfrljP8Y',
        pdfUrl: '',
        image: ''
    },
    {
        title: 'Portfolio_003_Title',
        description: 'Portfolio_003_Description',
        videoUrl: '',
        pdfUrl: '/pdf/battery.pdf',
        image: '/images/photo13.png'
    },
    {
        title: 'Portfolio_004_Title',
        description: 'Portfolio_004_Description',
        videoUrl: '',
        pdfUrl: '/pdf/標籤凹凸分析.pdf',
        image: '/images/photo14.png'
    },
    {
        title: 'Portfolio_005_Title',
        description: 'Portfolio_005_Description',
        videoUrl: '',
        pdfUrl: '/pdf/TYC.pdf',
        image: '/images/photo15.png'
    },
    {
        title: 'Portfolio_006_Title',
        description: 'Portfolio_006_Description',
        videoUrl: '',
        pdfUrl: '/pdf/OCR視覺評估建議書.pdf',
        image: '/images/photo16.png'
    },
    {
        title: 'Portfolio_007_Title',
        description: 'Portfolio_007_Description',
        videoUrl: '',
        pdfUrl: '/pdf/PlantCV.pdf',
        image: '/images/photo17.png'
    },
    {
        title: 'Portfolio_008_Title',
        description: 'Portfolio_008_Description',
        videoUrl: '',
        pdfUrl: '/pdf/FlirManual.pdf',
        image: '/images/photo18.png'
    },
    {
        title: 'Portfolio_009_Title',
        description: 'Portfolio_009_Description',
        videoUrl: '',
        pdfUrl: '/pdf/3D屬性檢測程式.pdf',
        image: '/images/photo19.png'
    },
    {
        title: 'Portfolio_010_Title',
        description: 'Portfolio_010_Description',
        videoUrl: '',
        pdfUrl: '/pdf/農產品磅秤系統.pdf',
        image: '/images/photo20.png'
    },
    {
        title: 'Portfolio_011_Title',
        description: 'Portfolio_011_Description',
        videoUrl: '',
        pdfUrl: '/pdf/農產品分類視覺檢測機.pdf',
        image: '/images/photo21.png'
    },
    // 其他專案...
]

const Portfolio: React.FC = () => {
    const t = useTranslations('')
    return (
        <div className="max-w-screen-lg mx-auto py-10 px-5">
            <h1 className="text-3xl font-bold text-center mb-8">我的開發專案</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white bg-opacity-50 border border-gray-300 p-5 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-3">{t(project.title)}</h2>
                        <p className="text-gray-700 mb-4">{t(project.description)}</p>
                        {/* ✅ 檢查 videoUrl 是否有值，若沒有則顯示圖片 */}
                        {project.videoUrl ? (
                            <div className="relative aspect-w-16 aspect-h-9">
                                <ReactPlayer url={project.videoUrl} width="100%" height="200px" controls />
                            </div>
                        ) : project.image ? (
                            <div className="relative aspect-w-16 aspect-h-9">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}  // 設置圖片的寬度
                                    height={200} // 設置圖片的高度
                                    className="w-full h-full object-cover rounded-lg"
                                    priority={index === 0} // 優化加載第一張圖片
                                    quality={100} // 你可以設置圖片質量，步驟可根據需要調整
                                />
                            </div>
                        ) : null}
                        <div className="mt-4">
                            {project.pdfUrl ? (
                                <Link href={project.pdfUrl} target="_blank" className="text-blue-600 hover:underline">
                                    {t('ViewPDF')}
                                </Link>
                            ) : (
                                <span className="text-gray-400">{t('No_PDF_Manual_Yet')}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio