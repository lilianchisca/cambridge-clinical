import slugify from 'slugify'

import { TestQuestionMatching } from '@/components/tests/test-question-matching'
import { TestQuestionRanking } from '@/components/tests/test-question-ranking'

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']

type TestQuestionProps = {
  flagQuestion: (id: string) => void
  answerQuestion: (id: string) => void
  question: {
    id: string
    flagged: boolean
    answered: boolean
    questionContent: string | null
    question: string
    questionsType: string | null
    timeCap: number | null
    matches: {
      leftSide: string
      rightSide: string
    }[]
    answers: {
      answer: string
      result: boolean | null
    }[]
  }
}

export function TestQuestion({ question, flagQuestion, answerQuestion }: TestQuestionProps) {
  const multiple =
    question?.questionsType === 'single-multiple' &&
    question?.answers.reduce((acc, curr) => (curr?.result ? acc + 1 : acc), 0) > 1

  return (
    <>
      {question?.questionsType !== 'matching' ? (
        <>
          <div className="absolute inset-y-0 left-0 w-1/2 bg-[#f3f3f4]"></div>
          <div className="absolute inset-y-0 right-0 w-1/2 bg-white"></div>
        </>
      ) : null}
      <div className="relative mb-auto">
        <div className="border-b border-b-[#e1e1e1]">
          <div className="c-container">
            <div className="-mx-20 flex flex-wrap py-22">
              <div className="flex w-1/2 px-20">
                <button className="inline-flex items-center text-[#A5A5A5] transition-all hover:text-black/80">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          id="Vector"
                          d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.5 7.58008V8.58008C16.5 9.40008 15.83 10.0801 15 10.0801H9C8.18 10.0801 7.5 9.41008 7.5 8.58008V7.58008C7.5 6.76008 8.17 6.08008 9 6.08008H15C15.83 6.08008 16.5 6.75008 16.5 7.58008Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.13599 14H8.14799M11.995 14H12.007M15.854 14H15.866M8.13599 17.5H8.14799M11.995 17.5H12.007M15.854 17.5H15.866"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                  <div className="ml-12 text-16 font-bold">Calculator</div>
                </button>
              </div>
              <div className="flex w-1/2 justify-between px-20">
                <button className="inline-flex items-center text-[#A5A5A5] transition-all hover:text-black/80 lg:ml-100 xl:ml-125">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 8V13M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.995 16H12.004"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="ml-12 text-16 font-bold">Report an issue</div>
                </button>
                <button
                  className="inline-flex items-center text-[#A5A5A5] transition-all hover:text-black/80"
                  onClick={() => flagQuestion(question.id)}
                >
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.15002 2V22M5.15002 4H16.35C19.05 4 19.65 5.5 17.75 7.4L16.55 8.6C15.75 9.4 15.75 10.7 16.55 11.4L17.75 12.6C19.65 14.5 18.95 16 16.35 16H5.15002"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="ml-12 text-16 font-bold">
                    {question.flagged ? 'Unflag' : 'Flag for overview'}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-60">
          <div className="c-container">
            {question?.questionsType !== 'matching' ? (
              <div className="-mx-40 flex flex-wrap lg:-mx-60 xl:-mx-80">
                <div className="w-1/2 px-40 lg:px-60 xl:px-80">
                  {question?.questionContent ? (
                    <div
                      className="prose prose-sm"
                      dangerouslySetInnerHTML={{ __html: question.questionContent }}
                    ></div>
                  ) : null}
                </div>
                <div className="w-1/2 px-40 lg:px-60 xl:px-80">
                  {question?.question ? (
                    <h3
                      className="text-14 font-bold"
                      dangerouslySetInnerHTML={{ __html: question.question }}
                    ></h3>
                  ) : null}
                  <div className="mt-30">
                    {question?.questionsType === 'single-multiple'
                      ? question?.answers.map((item, index) => (
                          <div className="mb-13" key={item.answer}>
                            <div className="flex items-center">
                              {multiple ? (
                                <input
                                  type="checkbox"
                                  name={`${slugify(question.question)}-${index}`}
                                  id={`${slugify(item.answer)}`}
                                  className="form-radio rounded-full text-[#8d094a] focus:ring-primary-400/30"
                                />
                              ) : (
                                <input
                                  type="radio"
                                  name={`${slugify(question.question)}`}
                                  id={`${slugify(item.answer)}`}
                                  className="form-radio text-[#8d094a] focus:ring-primary-400/30"
                                />
                              )}

                              <label
                                htmlFor={`${slugify(item.answer)}`}
                                className="ml-12 flex cursor-pointer items-center text-14 font-normal"
                              >
                                <strong className="mr-5">{letters[index]}.</strong>
                                <span dangerouslySetInnerHTML={{ __html: item.answer }}></span>
                              </label>
                            </div>
                          </div>
                        ))
                      : null}

                    {question?.questionsType === 'ranking' ? (
                      <TestQuestionRanking question={question} />
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}

            {question?.questionsType === 'matching' ? (
              <div>
                {question?.question ? (
                  <h3
                    className="text-14 font-bold"
                    dangerouslySetInnerHTML={{ __html: question.question }}
                  ></h3>
                ) : null}
                <div className="mt-35">
                  <TestQuestionMatching question={question} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}
