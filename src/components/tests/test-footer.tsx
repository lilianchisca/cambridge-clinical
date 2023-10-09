import { ArrowRight, X } from 'lucide-react'

type TestFooterProps = {
  currentTab: number | 'start' | 'review'
  setActiveTab: () => void
  currentTabSet: (tab: number | 'start' | 'review') => void
  reviewViewSet: (view: 'all' | 'flagged' | 'incomplete') => void
  tabs: {
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
  }[]
}

export function TestFooter({
  currentTabSet,
  currentTab,
  setActiveTab,
  tabs,
  reviewViewSet,
}: TestFooterProps) {
  const hasIncomplete = tabs.some((tab) => !tab.answered)
  const hasFlagged = tabs.some((tab) => tab.flagged)

  return (
    <footer className="bg-primary-600 text-white">
      <div className="c-container--lg c-container">
        <div className="flex min-h-70 items-center justify-between 2xl:min-h-90">
          <div className="flex items-center">
            {currentTab !== 'review' ? (
              <button
                onClick={() => currentTabSet('review')}
                className="group flex appearance-none items-center space-x-11 rounded-full bg-primary-300 py-4 pl-5 pr-20 text-white transition-all hover:bg-primary-400"
              >
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white text-primary-300">
                  <span>
                    <X size={20} />
                  </span>
                </div>
                <div className="text-18 font-bold">End and mark test</div>
              </button>
            ) : null}
            {currentTab === 'review' ? (
              <button
                onClick={() => currentTabSet('start')}
                className="group flex appearance-none items-center space-x-11 rounded-full bg-primary-300 py-4 pl-5 pr-20 text-white transition-all hover:bg-primary-400"
              >
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white text-primary-300">
                  <span>
                    <X size={20} />
                  </span>
                </div>
                <div className="text-18 font-bold">End Review</div>
              </button>
            ) : null}
          </div>
          <div className="flex items-center">
            {currentTab !== 'review' ? (
              <button
                onClick={() => setActiveTab()}
                className="group flex appearance-none items-center space-x-29 rounded-full bg-primary-300 py-4 pl-20 pr-5 text-white transition-all hover:bg-primary-400"
              >
                <div className="text-18 font-bold">Next</div>
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white text-primary-300">
                  <span>
                    <ArrowRight size={20} />
                  </span>
                </div>
              </button>
            ) : null}
            {currentTab === 'review' ? (
              <>
                {hasIncomplete ? (
                  <button
                    onClick={() => reviewViewSet('incomplete')}
                    className="group flex appearance-none items-center rounded-full bg-primary-300 px-20 py-8 text-white transition-all hover:bg-primary-400"
                  >
                    <div className="text-18 font-bold leading-[28px]">Review Incomplete</div>
                  </button>
                ) : null}
                {hasFlagged ? (
                  <button
                    onClick={() => reviewViewSet('flagged')}
                    className="group ml-11 flex appearance-none items-center rounded-full bg-primary-300 px-20 py-8 text-white transition-all hover:bg-primary-400"
                  >
                    <div className="text-18 font-bold leading-[28px]">Review Flagged</div>
                  </button>
                ) : null}
                <button
                  onClick={() => reviewViewSet('all')}
                  className="group ml-11 flex appearance-none items-center rounded-full bg-primary-300 px-20 py-8 text-white transition-all hover:bg-primary-400"
                >
                  <div className="text-18 font-bold leading-[28px]">Review All</div>
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  )
}
