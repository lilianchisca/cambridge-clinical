import { useEffect, useState } from 'react'

export function TestCountdown({ timeCap }: { timeCap: number }) {
  const [timeLeft, timeLeftSet] = useState(timeCap)
  const [timeLeftFormatted, timeLeftFormattedSet] = useState('')
  const [timeLeftPercentage, timeLeftPercentageSet] = useState(100)
  const [timeLeftColor, timeLeftColorSet] = useState('bg-primary-600')

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeftSet(timeLeft - 1)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [timeLeft])

  useEffect(() => {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    timeLeftFormattedSet(`${minutes}:${seconds.toString().padStart(2, '0')}`)
  }, [timeLeft])

  useEffect(() => {
    timeLeftPercentageSet((timeLeft / timeCap) * 100)
  }, [timeLeft, timeCap])

  useEffect(() => {
    if (timeLeftPercentage < 50) {
      timeLeftColorSet('bg-primary-600')
    }
    if (timeLeftPercentage < 25) {
      timeLeftColorSet('bg-primary-600')
    }
  }, [timeLeftPercentage])

  return (
    <div className='flex items-center justify-center'>
      <div className='flex h-50 w-50 items-center justify-center rounded-full bg-white'>
        <div
          className={`h-full w-full rounded-full ${timeLeftColor}`}
          style={{ transform: `rotate(${timeLeftPercentage * 3.6}deg)` }}
        ></div>
        <div className='absolute flex h-full w-full items-center justify-center'>
          <div className='text-24 font-bold text-white'>{timeLeftFormatted}</div>
        </div>
      </div>
    </div>
  )
}
