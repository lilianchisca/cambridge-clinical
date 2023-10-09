'use client'

import { useState } from 'react'

import { ArrowDown } from 'lucide-react'
import AnimateHeight from 'react-animate-height'

import { Page_Builder_Sections_Faqs } from '@/types/wordpress'

import Select from '@/components/ui/select'

type FaqsProps = {
  section: Page_Builder_Sections_Faqs
}

export default function Faqs({ section }: FaqsProps) {
  const sectionFaqs = section?.faq ?? []
  const faqCategories = sectionFaqs.map((faq) => faq?.categories?.map((item) => item?.category))
  const categories = faqCategories.reduce((acc: string[], curr) => {
    if (curr) {
      curr.forEach((category) => {
        if (category && !acc.includes(category)) {
          acc.push(category)
        }
      })
    }
    return acc
  }, [])
  const faqs = sectionFaqs.map((faq) => ({
    ...faq,
    categories: faq?.categories?.map((item) => item?.category),
  }))

  const courses = ['Filter by course', ...categories]

  const [selectedCourse, selectedCourseSet] = useState<string>(courses[0] || 'Filter by course')
  const [activeFaq, activeFaqSet] = useState<string>('')

  return (
    <div className="relative overflow-hidden">
      <div className="c-container py-20 lg:py-30">
        <Select options={courses} value={selectedCourse} onValueChange={selectedCourseSet} />
      </div>
      {faqs
        .filter(
          (faq) =>
            selectedCourse === 'Filter by course' || faq?.categories?.includes(selectedCourse)
        )
        .map((faq) => (
          <button
            onClick={() => activeFaqSet(activeFaq === faq?.question ? '' : faq?.question ?? '')}
            className={`group block w-full appearance-none text-left transition-all hover:bg-white/40 ${
              activeFaq === faq.question ? 'bg-white' : 'bg-gray-100'
            }`}
            key={faq.question}
          >
            <div className="c-container">
              <div
                className={`flex w-full appearance-none items-center justify-between border-b py-20 lg:py-30 ${
                  activeFaq === faq.question
                    ? 'border-transparent'
                    : 'border-gray-400/20 hover:border-primary-200/50'
                }`}
              >
                {faq?.question ? (
                  <div
                    className="pr-20 text-16 font-bold text-secondary-400 md:text-18 lg:text-20 xl:text-22 2xl:text-25"
                    dangerouslySetInnerHTML={{ __html: faq.question }}
                  ></div>
                ) : null}
                <div
                  className={`flex h-36 w-36 shrink-0 items-center justify-center rounded-full transition-all group-hover:ring-4 group-hover:ring-primary-200/50 md:h-50 md:w-50 ${
                    activeFaq === faq.question ? 'bg-primary-600' : 'bg-white'
                  }`}
                >
                  <span
                    className={`transition-all ${
                      activeFaq === faq.question
                        ? 'rotate-180 text-white'
                        : 'rotate-0 text-primary-600'
                    }`}
                  >
                    <ArrowDown size={24} />
                  </span>
                </div>
              </div>
              <AnimateHeight duration={300} height={activeFaq === faq.question ? 'auto' : 0}>
                {faq?.answer ? (
                  <div
                    className="prose max-w-full pb-50 lg:prose-lg xl:prose-xl md:pr-100"
                    dangerouslySetInnerHTML={{
                      __html: faq.answer,
                    }}
                  ></div>
                ) : null}
              </AnimateHeight>
            </div>
          </button>
        ))}
    </div>
  )
}
