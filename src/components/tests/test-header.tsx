import { useEffect, useState } from 'react'

import { Timer } from 'lucide-react'

type TestHeaderProps = {
  testTitle: string
  testCourse: string
  currentTab: number | 'start' | 'review'
  setActiveTab: () => void
  questionsLength: number
  currentTimeCap: number | null
}

export function TestHeader({
  testTitle,
  testCourse,
  currentTab,
  questionsLength,
  currentTimeCap,
  setActiveTab,
}: TestHeaderProps) {
  const [timeRemaining, timeRemainingSet] = useState<number | null>(currentTimeCap)

  useEffect(() => {
    if (typeof timeRemaining === 'number') {
      const timer = setInterval(() => {
        if (timeRemaining > 0) {
          timeRemainingSet(timeRemaining - 1)
        } else {
          timeRemainingSet(null)
          setActiveTab()
        }
      }, 1000)
      return () => clearInterval(timer)
    }

    return () => {}
  }, [timeRemaining, setActiveTab])

  useEffect(() => {
    if (typeof currentTab === 'number') {
      timeRemainingSet(currentTimeCap)
    } else {
      timeRemainingSet(null)
    }
  }, [currentTimeCap, currentTab])

  return (
    <header className="bg-primary-600 text-white">
      <div className="c-container--lg c-container">
        <div className="relative flex min-h-80 items-center justify-between 2xl:min-h-100">
          <div className="text-22 font-bold uppercase leading-tight">
            <span
              dangerouslySetInnerHTML={{ __html: testCourse }}
              className="text-[#cb4080]"
            ></span>{' '}
            {testTitle}
          </div>
          <div className="text-24 font-bold text-white">
            {typeof currentTab === 'number' ? (
              <div className="flex items-baseline">
                <span>{currentTab + 1}</span>
                <span className="text-14">{`/${questionsLength}`}</span>
              </div>
            ) : null}
          </div>
          {typeof timeRemaining === 'number' ? (
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center text-20 font-bold text-white">
              <span>
                <Timer size={30} />
              </span>
              <div className="ml-15">
                Time remaining 0{Math.floor(timeRemaining / 60)}:
                {timeRemaining % 60 < 10 ? '0' : ''}
                {timeRemaining % 60}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}
