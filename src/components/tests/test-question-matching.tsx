import { useCallback, useEffect, useRef, useState } from 'react'
import { DndProvider, DragPreviewImage, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { cn } from '@/helpers/cn'
import { getRgbChannels } from '@/helpers/hex-rgb'

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']

type TestQuestionMatchingProps = {
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
  answer,
  index,
}: {
  accept: string[]
  lastDroppedItem?: any
  onDrop: (item: any, coords: null | { endX: number; endY: number }) => void
  answer: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  function handleDrop(item: any) {
    const coords = ref.current?.getBoundingClientRect()

    onDrop(item, coords ? { endX: coords.x - 1, endY: coords.y + coords.height / 2 } : null)
  }

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept,
    drop: handleDrop,
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
    <div ref={drop} className='relative h-34 w-auto'>
      <div
        ref={ref}
        className={cn(
          'absolute inset-0 rounded-5 transition-all',
          (isActive || canDrop) && 'ring-2',
          lastDroppedItem ? 'bg-[#ecd9e4]' : 'bg-[#f5f6f7]'
        )}
        aria-hidden='true'
      />
      {answer ? (
        <div className='relative flex items-center px-15 text-13 leading-[32px]'>
          <div className='mr-10 font-bold'>{letters[index]}.</div>
          <div dangerouslySetInnerHTML={{ __html: answer }}></div>
        </div>
      ) : null}
    </div>
  )
}

function Drag({
  type,
  answer,
  isDropped,
  coords,
}: {
  type: string
  answer: string
  isDropped: boolean
  coords: {
    endX: number
    endY: number
  } | null
}) {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type,
      item: {
        answer,
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [answer, type]
  )

  const [lineCoords, lineCoordsSet] = useState({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
  })

  function handleDrag(e: React.DragEvent<HTMLDivElement>) {
    const { clientX, clientY } = e
    const { x, y, width, height } = e.currentTarget.getBoundingClientRect()

    const startX = x + width
    const startY = y + height / 2

    const endX = clientX
    const endY = clientY

    lineCoordsSet({ startX, startY, endX, endY })
  }

  return (
    <>
      <DragPreviewImage
        connect={preview}
        src='data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2210%22%3E%3Ccircle%20cx%3D%225%22%20cy%3D%225%22%20r%3D%225%22%20fill%3D%22%238d094a%22%20%2F%3E%3C%2Fsvg%3E'
      />
      {coords || (lineCoords.endX > 0 && lineCoords.endY > 0) ? (
        <svg className='pointer-events-none fixed inset-0 z-10 h-full w-full opacity-60'>
          <line
            x1={lineCoords.endX === 0 && isDragging ? 0 : lineCoords.startX}
            y1={lineCoords.endY === 0 && isDragging ? 0 : lineCoords.startY}
            x2={coords && !isDragging ? coords.endX : lineCoords.endX}
            y2={coords && !isDragging ? coords.endY : lineCoords.endY}
            stroke='#cb4080'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </svg>
      ) : null}
      <div ref={drag} className='relative' onDrag={handleDrag}>
        <div
          className='cursor-pointer rounded-5 border border-[#f5f6f7] bg-[#f5f6f7] px-20 py-14 text-13 ring-gray-400 transition-all hover:ring-2'
          dangerouslySetInnerHTML={{ __html: answer }}
        ></div>
      </div>
    </>
  )
}

export function TestQuestionMatching({ question }: TestQuestionMatchingProps) {
  const leftSide = question.matches
    .filter((match) => !!match.leftSide)
    .map((match) => match.leftSide.replace(/<[^>]+>/g, '').replace('\n', ''))
  const rightSide = question.matches
    .map((match) => match.rightSide.replace(/<[^>]+>/g, '').replace('\n', ''))
    .filter((value, index, self) => self.indexOf(value) === index)

  const [boxes, boxesSet] = useState<
    {
      type: string
      answer: string
      added: boolean
      coords: null | { endX: number; endY: number }
    }[]
  >(() => {
    return leftSide.map((answer) => ({
      type: answer,
      answer,
      added: false,
      coords: null,
    }))
  })
  const [dustbins, dustbinsSet] = useState<
    {
      accepts: string[]
      lastDroppedItem: null | { answer: string }
      answer: string
    }[]
  >(() => {
    const items = rightSide.map((item) => ({
      accepts: leftSide,
      lastDroppedItem: null,
      answer: item,
    }))

    return items
  })

  const handleDrop = useCallback(
    (index: number, item: { answer: string }, coords: null | { endX: number; endY: number }) => {
      const { answer } = item
      const newBoxes = [...boxes]
      const newDustbins = [...dustbins]

      newBoxes.forEach((box) => {
        if (box.answer === answer) {
          box.added = true
          box.coords = coords
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
      <div className='relative'>
        <div className='-mx-40 flex flex-wrap'>
          <div className='w-1/2 px-40'>
            <div className='max-w-[440px]'>
              {boxes.map((box, index) => (
                <div className='mb-10 w-full' key={index}>
                  <Drag
                    type={box.type}
                    answer={box.answer}
                    isDropped={box.added}
                    coords={box.coords}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='w-1/2 px-40'>
            {dustbins.map((dustbin, index) => (
              <div className='mb-12' key={index}>
                <div className='flex items-center'>
                  <Drop
                    accept={leftSide}
                    onDrop={(item, coords) => handleDrop(index, item, coords)}
                    lastDroppedItem={dustbin.lastDroppedItem}
                    answer={dustbin.answer}
                    index={index}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  )
}
