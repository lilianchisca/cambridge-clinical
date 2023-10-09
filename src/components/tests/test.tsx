'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { cn } from '@/helpers/cn'
import shuffle from 'lodash/shuffle'
import { useIsClient } from 'usehooks-ts'

import { GetTestByUriQuery, Question } from '@/types/wordpress'

import { TestFooter } from '@/components/tests/test-footer'
import { TestHeader } from '@/components/tests/test-header'
import { TestQuestion } from '@/components/tests/test-question'

type TestProps = {
  test: Exclude<GetTestByUriQuery['test'], null | undefined>
}

export function Test({ test }: TestProps) {
  const isClient = useIsClient()
  const testCourse = test.testDetails?.course?.title ?? ''
  const testTitle = test?.title?.replace(`${testCourse}`, '').trim() ?? ''
  const testIntro = test?.testDetails?.introductionScreen ?? ''
  let questions = test?.testDetails?.categories
    ?.map((category) => category?.questions?.nodes)
    .flat(Infinity) as Question[]

  questions = shuffle(
    questions.filter(
      (question) =>
        question.questionDetails?.course?.some((course) => course?.title === testCourse) ?? false
    )
  )

  const [tabs, tabsSet] = useState(() => {
    return questions.map((question) => ({
      id: question.id,
      flagged: false,
      answered: false,
      questionContent: question.questionDetails?.questionContent ?? null,
      question: question.questionDetails?.question ?? '',
      questionsType: question.questionDetails?.questionType ?? null,
      timeCap: question.questionDetails?.timeCap ?? null,
      matches:
        (question.questionDetails?.matches as {
          leftSide: string
          rightSide: string
        }[]) ?? null,
      answers:
        (question.questionDetails?.answers as {
          answer: string
          result: boolean | null
        }[]) ?? null,
    }))
  })
  const [currentTab, currentTabSet] = useState<number | 'start' | 'review'>('start')
  const questionsLength = tabs.length
  const [currentTimeCap, currentTimeCapSet] = useState<number | null>(null)
  const [reviewView, reviewViewSet] = useState<'all' | 'flagged' | 'incomplete'>('all')

  function setActiveTab() {
    if (currentTab === 'start') {
      currentTabSet(0)
    } else if (typeof currentTab === 'number') {
      const nextTab = currentTab === tabs.length - 1 ? 'review' : currentTab + 1
      currentTabSet(nextTab)
    }
  }

  function flagQuestion(id: string) {
    const updatedTabs = tabs.map((item) => {
      if (item.id === id) {
        item.flagged = !item.flagged
      }
      return item
    })

    tabsSet(updatedTabs)
  }

  function answerQuestion(id: string) {
    const updatedTabs = tabs.map((item) => {
      if (item.id === id) {
        item.answered = true
      }
      return item
    })

    tabsSet(updatedTabs)
  }

  useEffect(() => {
    if (typeof currentTab === 'number') {
      currentTimeCapSet(tabs[currentTab]?.timeCap ?? null)
    }
  }, [currentTab, tabs])

  if (!isClient) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      <TestHeader
        testTitle={testTitle}
        testCourse={testCourse}
        currentTab={currentTab}
        setActiveTab={setActiveTab}
        questionsLength={questionsLength}
        currentTimeCap={currentTimeCap}
      />

      <div
        className={cn(
          'relative flex grow flex-col justify-center',
          currentTab === 'review' ? 'bg-[#f3f3f4]' : 'bg-white'
        )}
      >
        {currentTab === 'start' ? (
          <div className="w-full pb-50">
            <div className="c-container">
              <div className="relative pb-100 pt-60 2xl:pb-150 2xl:pt-85">
                <h2 className="text-26 font-bold leading-none text-secondary-400 md:text-32 lg:text-38 xl:text-42">
                  Introduction Screen
                </h2>
                <div className="mt-36 max-w-[675px]">
                  <div
                    className="prose max-w-full lg:prose-lg 2xl:prose-xl"
                    dangerouslySetInnerHTML={{ __html: testIntro }}
                  ></div>
                </div>

                <div className="absolute -bottom-30 -left-86 2xl:bottom-0">
                  <Image
                    src="/images/logo.png"
                    alt="Cambridge Clinical"
                    className="h-79 w-169 opacity-40 transition-all lg:h-93 lg:w-199 2xl:h-111 2xl:w-239"
                    width={199}
                    height={93}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {tabs.map((tab, index) =>
          index === currentTab ? (
            <TestQuestion
              question={tab}
              flagQuestion={flagQuestion}
              key={tab.question}
              answerQuestion={answerQuestion}
            />
          ) : null
        )}

        {currentTab === 'review' ? (
          <div className="w-full pb-50">
            <div className="c-container">
              <div className="relative pb-150 pt-85">
                <h2 className="text-26 font-bold leading-none text-secondary-400 md:text-32 lg:text-38 xl:text-42">
                  Review Section
                </h2>
                <div className="mt-36 max-w-[775px]">
                  <div className="prose max-w-full lg:prose-lg xl:prose-xl">
                    <p>Your questions are summarised below.</p>
                    <p>Review them using one of the three buttons at the bottom of the screen:</p>
                  </div>
                </div>
                <div className="mt-40">
                  <div
                    className="bg-primary-400 px-15 text-20 uppercase leading-[44px] text-white lg:py-18 lg:pl-30"
                    dangerouslySetInnerHTML={{ __html: test?.title ?? '' }}
                  ></div>
                  <div className="shadow-sm">
                    {tabs.map((tab, index) =>
                      (reviewView === 'flagged' && tab.flagged) ||
                      (reviewView === 'incomplete' && !tab.answered && !tab.flagged) ||
                      reviewView === 'all' ? (
                        <div
                          key={tab.question}
                          className="relative flex flex-wrap py-20 transition-all odd:bg-white even:bg-[#f4edf1] hover:z-1 hover:shadow-md"
                        >
                          <div className="w-1/3 px-15 text-18 lg:pl-30 xl:text-20">
                            Question {index + 1}
                          </div>
                          <div className="w-1/3 px-15 text-18 xl:text-20">
                            <div className="mx-auto flex w-185 items-center">
                              {tab.flagged ? (
                                <>
                                  <div className="w-120">Flagged</div>
                                  <div className="h-13 w-13 rounded-full bg-[#e7e761]"></div>
                                </>
                              ) : tab.answered ? (
                                <>
                                  <div className="w-120">Complete</div>
                                  <div className="h-13 w-13 rounded-full bg-[#84e761]"></div>
                                </>
                              ) : (
                                <>
                                  <div className="w-120">Incomplete</div>
                                  <div className="h-13 w-13 rounded-full bg-[#e76161]"></div>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="w-1/3 px-15 text-right text-18 lg:pr-30 xl:text-20">
                            <button
                              className="underline hover:no-underline"
                              onClick={() => currentTabSet(index)}
                            >
                              Review this question
                            </button>
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <TestFooter
        currentTab={currentTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
        currentTabSet={currentTabSet}
        reviewViewSet={reviewViewSet}
      />
    </div>
  )
}
