import { useCallback, useEffect, useRef, useState } from 'react'

import { cn } from '@/helpers/cn'
import { getRgbChannels } from '@/helpers/hex-rgb'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']

type TestQuestionRankingProps = {
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

function Drop({
  accept,
  lastDroppedItem,
  onDrop,
}: {
  accept: string[]
  lastDroppedItem?: any
  onDrop: (item: any) => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const isActive = isOver && canDrop

  useEffect(() => {
    if (ref.current) {
      if (isActive) {
        ref.current.style.setProperty(
          '--tw-ring-color',
          `rgb(${getRgbChannels('#8d094a')} / 0.5)` ?? ''
        )
      } else if (canDrop) {
        ref.current.style.setProperty(
          '--tw-ring-color',
          `rgb(${getRgbChannels('#8d094a')} / 0.2)` ?? ''
        )
      } else {
        ref.current.style.setProperty(
          '--tw-ring-color',
          `rgb(${getRgbChannels('#e1e1e1')} / 0.4)` ?? ''
        )
      }
    }
  }, [ref, isActive, canDrop])

  return (
    <div ref={drop} className="relative h-34 w-full">
      <div
        ref={ref}
        className={cn(
          'absolute inset-0 rounded-5 border border-dotted border-[#e1e1e1] transition-all',
          (isActive || canDrop) && 'ring-2'
        )}
        aria-hidden="true"
      />
      {lastDroppedItem?.answer ? (
        <div
          className="absolute inset-0 rounded-5 bg-[#f5f6f7] px-15 text-13 leading-[32px]"
          dangerouslySetInnerHTML={{ __html: lastDroppedItem.answer }}
        ></div>
      ) : null}
    </div>
  )
}

function Drag({ type, answer, isDropped }: { type: string; answer: string; isDropped: boolean }) {
  const [{ opacity, isDragging }, drag] = useDrag(
    () => ({
      type,
      item: {
        answer,
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
        isDragging: monitor.isDragging(),
      }),
    }),
    [answer, type]
  )

  return (
    <div ref={drag} className="p-2">
      <div
        className="cursor-pointer rounded-5 border border-[#f5f6f7] bg-[#f5f6f7] px-15 text-13 leading-[32px] ring-gray-400 transition-all hover:ring-2"
        style={{ opacity: isDropped ? 0.4 : opacity }}
        dangerouslySetInnerHTML={{ __html: answer }}
      ></div>
    </div>
  )
}

export function TestQuestionRanking({ question }: TestQuestionRankingProps) {
  const answers = question.answers.map((answer) =>
    answer.answer.replace(/<[^>]+>/g, '').replace('\n', '')
  )

  const [boxes, boxesSet] = useState(() => {
    return answers.map((answer) => ({
      type: answer,
      answer,
      added: false,
    }))
  })
  const [dustbins, dustbinsSet] = useState<
    {
      accepts: string[]
      lastDroppedItem: null | { answer: string }
    }[]
  >(() => {
    const items = answers.map(() => ({
      accepts: answers,
      lastDroppedItem: null,
    }))

    return items
  })

  const handleDrop = useCallback(
    (index: number, item: { answer: string }) => {
      const { answer } = item
      const newBoxes = [...boxes]
      const newDustbins = [...dustbins]

      const currAnswer = newDustbins[index].lastDroppedItem?.answer

      if (currAnswer) {
        newBoxes.forEach((box) => {
          if (box.answer === currAnswer) {
            box.added = false
          }
        })
      }

      newBoxes.forEach((box) => {
        if (box.answer === answer) {
          box.added = true
        }
      })
      newDustbins.forEach((dustbin) => {
        if (dustbin.lastDroppedItem?.answer === answer) {
          dustbin.lastDroppedItem = null
        }
      })
      newDustbins[index].lastDroppedItem = item

      boxesSet(newBoxes)
      dustbinsSet(newDustbins)
    },
    [boxes, dustbins]
  )

  return (
    <DndProvider backend={HTML5Backend}>
      {dustbins.map((dustbin, index) => (
        <div className="mb-30" key={index}>
          <div className="flex items-center">
            <div className="mr-10 font-bold text-primary-400">{letters[index]}.</div>
            <Drop
              accept={answers}
              onDrop={(item) => handleDrop(index, item)}
              lastDroppedItem={dustbin.lastDroppedItem}
            />
          </div>
        </div>
      ))}
      <div className="-mx-2 mt-35 flex flex-wrap">
        {boxes.map((box, index) => (
          <div className="mb-10 mr-8" key={index}>
            <Drag type={box.type} answer={box.answer} isDropped={box.added} />
          </div>
        ))}
      </div>
    </DndProvider>
  )
}
