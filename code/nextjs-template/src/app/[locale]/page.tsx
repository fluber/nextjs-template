import { useTranslations } from 'next-intl'
import Button from './components/Button'
import Carousel from './components/Carousel'
import ProductGrid from './components/ProductGrid'


export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>

      <section className="max-h-full flex flex-col items-center justify-center py-0">
        <div className="mx-auto mt-28 w-full px-4 sm:px-6 md:px-8">
          {/* 使用 h-auto 自動調整高度 */}
          <div className="relative w-full h-auto overflow-hidden">
            <Carousel className="w-full h-full" />
          </div>
        </div>
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          <span className="bg-span-bg bg-clip-text text-transparent">
            {t('Booster')}
          </span>
          <br />
          {t('to_Your_NextJS_Apps')}
        </h1>
        <div className="my-6 px-20 text-center text-2xl text-text-secondary">
          {t('An_approachable_performant_and_versatile_boilerplate_for_building_SSR_applications')}
        </div>
      </section>

      <ProductGrid />
      <section className="bg-background-secondary py-20 max-lg:py-10">
        <div className="mx-auto grid max-w-screen-lg grid-cols-3 gap-x-32 gap-y-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10">
          <div className="text-center max-w-lg mx-auto">
            <h2 className="mb-3 text-xl font-semibold w-full inline-block">{t('Approachable')}</h2>
            <p className="text-text-secondary text-left max-lg:max-w-[600px]">
              {t(
                'Add_components_without_sending_additional_client_side_JavaScript_Built_on_the_latest_React_features'
              )}
            </p>
          </div>
          <div className="text-center max-w-lg mx-auto">
            <h2 className="mb-3 text-xl font-semibold w-full inline-block">{t('Versatile')}</h2>
            <p className="text-text-secondary text-left max-lg:max-w-[600px]">
              {t(
                'Automatic_Image_Font_and_Script_Optimizations_for_improved_UX_and_Core_Web_Vitals'
              )}
            </p>
          </div>
          <div className="text-center max-w-lg mx-auto">
            <h2 className="mb-3 text-xl font-semibold w-full inline-block">{t('Performant')}</h2>
            <p className="text-text-secondary text-left max-lg:max-w-[600px]">
              {t(
                'A_rich_incredibly_adoptable_template_that_scales_between_a_small_showcase_website_and_a_full_size_app'
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}