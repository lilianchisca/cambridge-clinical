'use client'

import { useState } from 'react'

import { ArrowDown } from 'lucide-react'
import AnimateHeight from 'react-animate-height'

import Select from '@/components/ui/select'

const faqs = [
  {
    question: 'Improve your UCAT preparation technique',
    answer:
      // prettier-ignore
      '<p>We have a team of around 120 UCAT tutors from Universities such as Oxford, Cambridge, UCL and Imperial and King\'s College London.All our UCAT tutors have scored in the top 10% of the exam and are here to support you with your UCAT preparation.We can find a UCAT tutor who meets your needs and will send you a few profiles to choose a tutor you prefer.</p>',
    category: 'UCAT',
  },
  {
    question: 'Where does the UCAT Tutoring take place?',
    answer:
      '<p>Our UCAT tutors are based all over the UK and can tutor you online or in person.</p>',
    category: 'UCAT',
  },
  {
    question: 'I live outside the UK is that a problem?',
    answer:
      '<p>Not at all, we have UCAT tutors based all over the world and can tutor you online.</p>',
    category: 'UCAT',
  },
  {
    question: 'How many hours of UCAT tutoring do I actually need?',
    answer:
      '<p>It depends on your current UCAT score and your target score. We recommend 10 hours of UCAT tutoring for students who are scoring below 600 and 5 hours of UCAT tutoring for students who are scoring above 600.</p>',
    category: 'UCAT',
  },
  {
    question: 'Do I have to pay for all the 1-1 UCAT Tutoring up front?',
    answer:
      '<p>No, you can pay for each UCAT tutoring session as you go along. We will send you a link to pay for each UCAT tutoring session after the session has taken place.</p>',
    category: 'UCAT',
  },
  {
    // prettier-ignore
    question: 'I can\'t afford up to 20 hours, can I still get 1-1 UCAT Tutoring?',
    answer:
      '<p>Yes, we can offer you 1-1 UCAT tutoring for 5 hours. We recommend 10 hours of UCAT tutoring for students who are scoring below 600 and 5 hours of UCAT tutoring for students who are scoring above 600.</p>',
    category: 'UCAT',
  },
  {
    question: 'Do you just provide UCAT Tutoring?',
    answer:
      '<p>No, we also provide UCAT Courses, UCAT Question Banks, UCAT Mock Exams and UCAT Tutoring.</p>',
    category: 'UCAT',
  },
  {
    question: 'Can I try out your UCAT Tutoring?',
    answer:
      '<p>Yes, you can book a 1 hour trial session with one of our UCAT tutors. If you are happy with the session you can book more sessions with the same UCAT tutor.</p>',
    category: 'UCAT',
  },
  {
    question: 'When do you have the lessons?',
    answer:
      'We can easily work around your schedule, we can do evenings and weekends whatever is convenient for you.',
    category: 'Interview',
  },
  {
    question: 'When should I start my lessons?',
    answer:
      // prettier-ignore
      'Universities often only give 10-14 days\' notice for an interview, and medicine interview preparation cannot be done overnight! This is why we recommend starting as early as possible. We have a variety of students who come to us. Some students come 1 month in advance, and some come 1 week in advance. We will tailor our pace to your interview, and your preference.',
    category: 'Interview',
  },
  {
    question: 'Who are the interview tutors?',
    answer:
      'Our tutors are all experts in the interview, and have worked with hundreds of students with varying abilities. Many of our team are medical schools at universities such as UCL, Imperial, Oxford, and Cambridge. I can assure you that they are all of the highest quality. We will aim to find a tutor who has had an interview at your universities.',
    category: 'Interview',
  },
]

export default function Faqs() {
  const courses = [
    'Filter by course',
    ...faqs.reduce((acc: string[], curr) => {
      if (!acc.includes(curr.category)) {
        acc.push(curr.category)
      }
      return acc
    }, []),
  ]

  const [selectedCourse, selectedCourseSet] = useState<string>(courses[0] || 'Filter by course')
  const [activeFaq, activeFaqSet] = useState<string>('')

  return (
    <div className="relative overflow-hidden">
      <div className="c-container py-20 lg:py-30">
        <Select options={courses} value={selectedCourse} onValueChange={selectedCourseSet} />
      </div>
      {faqs
        .filter((faq) => selectedCourse === 'Filter by course' || faq.category === selectedCourse)
        .map((faq) => (
          <button
            onClick={() => activeFaqSet(activeFaq === faq.question ? '' : faq.question)}
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
                <div
                  className="pr-20 text-16 font-bold text-secondary-400 md:text-18 lg:text-20 xl:text-22 2xl:text-25"
                  dangerouslySetInnerHTML={{ __html: faq.question }}
                ></div>
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
                <div
                  className="prose max-w-full pb-50 lg:prose-lg xl:prose-xl md:pr-100"
                  dangerouslySetInnerHTML={{
                    __html: faq.answer,
                  }}
                ></div>
              </AnimateHeight>
            </div>
          </button>
        ))}
    </div>
  )
}
