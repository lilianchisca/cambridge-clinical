import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import Switch from '@/components/ui/switch'
import TextArea from '@/components/ui/textarea'

type ArticleProps = {
  content: string
}

export default function Article({ content }: ArticleProps) {
  return (
    <>
      <div className='relative overflow-hidden bg-gray-100 py-50 md:py-60 lg:pb-100 lg:pt-70 xl:pb-120 xl:pt-80'>
        <div className='c-container'>
          <div
            className='prose max-w-full lg:prose-lg xl:prose-xl prose-headings:text-secondary-400'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
      <div className='relative bg-white py-50 md:py-60'>
        <div className='c-container'>
          <div className='flex flex-wrap'>
            <div className='mb-30 w-full md:mb-0 md:w-5/12 md:pr-30 lg:pr-40'>
              <h2 className='h2 text-center text-secondary-400 md:text-left'>
                Still got a question?
                <br />
                Leave a comment
              </h2>
              <div className='mt-30'>
                <div className='flex items-center justify-center md:justify-start'>
                  <label
                    htmlFor='anonymous'
                    className='mr-20 text-16 text-secondary-400/50 md:text-18 lg:text-20'
                  >
                    Anonymous
                  </label>
                  <Switch id='anonymous' />
                </div>
              </div>
            </div>
            <div className='w-full pt-5 md:w-7/12'>
              <div className='mb-24'>
                <Input placeholder='Display Name' type='text' className='bg-primary-100' />
              </div>
              <div className='mb-24'>
                <TextArea placeholder='Question or comment' className='bg-primary-100' />
              </div>
              <div className='text-center md:text-right'>
                <Button type='submit' href='#'>
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
