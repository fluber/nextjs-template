'use client'
import React from 'react'
import { useTranslations } from 'next-intl'


const About = () => {
  const t = useTranslations() // Use translations hook
  return (
    <div className='mx-auto mt-32 max-w-7xl bg-gray-100 p-6'>
      <h1 className='mb-12 text-center text-3xl font-bold'>
        {t('Strengths_and_Abilities')}
      </h1>

      <section className='mb-8 rounded-lg bg-white p-6 shadow-lg'>
        <h2 className='mb-4 text-2xl font-semibold text-blue-600'>
          {t(
            'Our_confidence_comes_from_our_strength_and_our_experience_comes_from_our_clients_trust'
          )}
        </h2>
        <p className='mb-6 text-gray-700'>
          {t('Our_company_was_established_in_2015')}
        </p>

        <h3 className='mb-4 text-xl font-semibold text-blue-500'>
          {t('Main_Products_Services')}
        </h3>
        <ul className='list-disc space-y-4 pl-6'>
          <li>
            <strong>{t('Core_Technology_of_AOI_Equipment')}</strong>
            {t('The_planninng_of')}
          </li>
          <li>
            <strong>{t('Full_Stack_Development_Services')}</strong>
            {t('Our_full_stack_development')}
          </li>
        </ul>
      </section>

      <section className='mb-8 rounded-lg bg-white p-6 shadow-lg'>
        <h2 className='mb-4 text-2xl font-semibold text-blue-600'>
          {t('Professional_Services_and_Background')}
        </h2>
        <ul className='space-y-4'>
          <li className='grid grid-cols-[1fr_2fr] items-start'>
            <span className='max-w-xs truncate text-right font-medium text-blue-500'>
              {t('Computer_Vision_Technology')}
            </span>
            <span className='text-left'>{t('Over_12_years')}</span>
          </li>
          <li className='grid grid-cols-[1fr_2fr] items-start'>
            <span className='max-w-xs truncate text-right font-medium text-blue-500'>
              {t('Machine_Learning_and_Deep_Learning')}
            </span>
            <span className='text-left'>
              {t('Implementing_real_time_object_detection')}
            </span>
          </li>
          <li className='grid grid-cols-[1fr_2fr] items-start'>
            <span className='max-w-xs truncate text-right font-medium text-blue-500'>
              {t('Full_Stack_Development')}
            </span>
            <span className='text-left'>{t('Expertise_in_Nextjs')}</span>
          </li>
          <li className='grid grid-cols-[1fr_2fr] items-start'>
            <span className='max-w-xs truncate text-right font-medium text-blue-500'>
              {t('Industrial_Automation_and_Visual_Inspection')}
            </span>
            <span className='text-left'>
              {t('Designing_and_implementing_high')}
            </span>
          </li>
          <li className='grid grid-cols-[1fr_2fr] items-start'>
            <span className='max-w-xs truncate text-right font-medium text-blue-500'>
              {t('Visual_System_Integration')}
            </span>
            <span className='text-left'>
              {t('Providing_lighting_technology')}
            </span>
          </li>
          <li className='grid grid-cols-[1fr_2fr] items-start'>
            <span className='max-w-xs truncate text-right font-medium text-blue-500'>
              {t('Automation_Integration_and_Robotic_Arm_Applications')}
            </span>
            <span className='text-left'>
              {t('Achieving_seamless_inntegration')}
            </span>
          </li>
          <li className='grid grid-cols-[1fr_2fr] items-start'>
            <span className='max-w-xs truncate text-right font-medium text-blue-500'>
              {t('Real_Time_Visual_Image_Development')}
            </span>
            <span className='text-left'>
              {t('Offerinng_visual_image_development')}
            </span>
          </li>
          <li className='grid grid-cols-[1fr_2fr] items-start'>
            <span className='max-w-xs truncate text-right font-medium text-blue-500'>
              {t('LINE_SCAN_and_MOTION_Integration_Technology')}
            </span>
            <span className='text-left'>
              {t('Achieving_real_time_processinng')}
            </span>
          </li>
        </ul>
      </section>

      <section className='mb-8 rounded-lg bg-white p-6 shadow-lg'>
        <h2 className='mb-4 text-2xl font-semibold text-blue-600'>
          {t('Company_Operating_Philosophy')}
        </h2>
        <ul className='space-y-4'>
          <li className='grid grid-cols-[1fr_2fr] items-start'>
            <span className='max-w-xs truncate text-right font-medium text-blue-500'>
              {t('Leading_Technology')}
            </span>
            <span className='text-left'>{t('We_connstantly_drive')}</span>
          </li>
          <li className='grid grid-cols-[1fr_2fr] items-start'>
            <span className='max-w-xs truncate text-right font-medium text-blue-500'>
              {t('Honest_Service')}
            </span>
            <span className='text-left'>{t('We_base_our_service')}</span>
          </li>
          <li className='grid grid-cols-[1fr_2fr] items-start'>
            <span className='max-w-xs truncate text-right font-medium text-blue-500'>
              {t('Mutual_Support_and_Care')}
            </span>
            <span className='text-left'>{t('We_consider_mutual')}</span>
          </li>
          <li className='grid grid-cols-[1fr_2fr] items-start'>
            <span className='max-w-xs truncate text-right font-medium text-blue-500'>
              {t('Unity_and_Innovation')}
            </span>
            <span className='text-left'>{t('We_uphold_the_power')}</span>
          </li>
          <li className='grid grid-cols-[1fr_2fr] items-start'>
            <span className='max-w-xs truncate text-right font-medium text-blue-500'>
              {t('Co_Creating_Value')}
            </span>
            <span className='text-left'>{t('We_work_together_with_our')}</span>
          </li>
        </ul>
      </section>

      <section className='mt-8 rounded-lg bg-white p-6 shadow-lg'>
        <h2 className='mb-4 text-2xl font-semibold text-blue-600'>
          {t('Contact_Us')}
        </h2>
        <p className='mb-4 text-gray-700'>{t('If_you_have_any_questions')}</p>
        <a
          href='mailto:fluber@winerva.com'
          className='inline-block text-blue-500 underline'
        >
          Send us an Email
        </a>
      </section>
    </div>
  )
}

export default About
