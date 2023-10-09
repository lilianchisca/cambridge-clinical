import Image from 'next/image'

import Balancer from 'react-wrap-balancer'

import Button from '@/components/ui/button'

type CalloutBigProps = {
  topTitle: string
  topContent: string
  topButton: {
    title: string
    url: string
  }
  bottomTitle: string
  bottomContent: string
  bottomButton: {
    title: string
    url: string
  }
  bottomImage: {
    sourceUrl: string
  }
  features: {
    title: string
    subtitle: string
    icon: {
      sourceUrl: string
    }
  }[]
}

export default function CalloutBig({
  topTitle,
  topContent,
  topButton,
  bottomTitle,
  bottomContent,
  bottomButton,
  bottomImage,
  features,
}: CalloutBigProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-gray-100 py-50 md:pb-90 md:pt-70 lg:pb-120 lg:pt-90 xl:pt-110">
        <div className="c-container">
          <div className="relative">
            <div className="-mx-20 flex flex-wrap">
              <div className="w-full px-20 text-center md:w-1/2 md:text-left">
                <div className="max-w-[450px]">
                  <Balancer
                    as="h2"
                    className="h2 text-secondary-400"
                    dangerouslySetInnerHTML={{ __html: topTitle }}
                  ></Balancer>
                </div>
                <Balancer
                  as="div"
                  className="prose mt-20 max-w-full lg:prose-lg xl:prose-xl md:mt-25"
                  dangerouslySetInnerHTML={{ __html: topContent }}
                ></Balancer>
                <div className="mt-25 md:mt-30">
                  <Button href={topButton.url}>{topButton.title}</Button>
                </div>
              </div>
            </div>
            <div className="z-10 mt-40 w-full rounded-b-40 border-6 border-white bg-primary-100 px-20 py-40 md:absolute md:-top-20 md:right-0 md:mt-0 md:w-[340px] md:max-w-[calc(50%-30px)] md:border-0 md:bg-transparent md:px-30 md:py-25 lg:-top-40 lg:w-[550px] lg:pl-40 lg:pt-50 2lg:pt-65 xl:pt-85">
              {features.map((feature, index) => (
                <div
                  className="2lg:max-w[360px] relative z-10 flex items-center not-first:mt-30 md:not-first:mt-15 lg:mx-auto lg:max-w-[360px] lg:not-first:mt-40 xl:not-first:mt-50"
                  key={feature.icon.sourceUrl}
                >
                  <div className="flex w-78 shrink-0 origin-left scale-70 justify-center lg:scale-100">
                    {index === 0 && (
                      <Image
                        src={feature.icon.sourceUrl}
                        alt={feature.title}
                        width={77}
                        height={79}
                        className="h-79 w-77"
                      />
                    )}
                    {index === 1 && (
                      <Image
                        src={feature.icon.sourceUrl}
                        alt={feature.title}
                        width={78}
                        height={77}
                        className="h-77 w-78"
                      />
                    )}
                    {index === 2 && (
                      <Image
                        src={feature.icon.sourceUrl}
                        alt={feature.title}
                        width={53}
                        height={78}
                        className="h-78 w-53"
                      />
                    )}
                  </div>
                  <div className="lg:pl-20 2lg:pl-30">
                    <h3
                      className="text-42 font-bold leading-none tracking-tighter text-primary-600"
                      dangerouslySetInnerHTML={{ __html: feature.title }}
                    ></h3>
                    <div
                      className="mt-5 text-14 font-bold uppercase text-secondary-400 lg:text-18"
                      dangerouslySetInnerHTML={{
                        __html: feature.subtitle,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
              <Image
                src="/images/block-shape.png"
                width={550}
                height={634}
                alt="Background Shape"
                className="absolute inset-0 hidden h-auto w-full md:block"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-r from-primary-800 to-primary-300">
        <div className="c-container">
          <div className="relative py-50 md:py-70 lg:pb-100 lg:pt-85 xl:py-80">
            <Image
              src={bottomImage.sourceUrl}
              alt={bottomTitle}
              width={489}
              height={661}
              className="absolute bottom-0 left-1/2 z-10 hidden h-auto w-[400px] md:block lg:left-5/12 lg:w-[489px]"
            />
            <div className="-mx-20 flex flex-wrap">
              <div className="w-full px-20 text-center md:w-1/2 md:text-left lg:w-5/12">
                <Balancer
                  as="h2"
                  className="h2 h2--styled text-white"
                  dangerouslySetInnerHTML={{ __html: bottomTitle }}
                ></Balancer>
                <Balancer
                  as="div"
                  className="prose mt-20 max-w-full text-white lg:prose-lg xl:prose-xl md:mt-25"
                  dangerouslySetInnerHTML={{ __html: bottomContent }}
                ></Balancer>
                <div className="mt-25 md:mt-30">
                  <Button href={bottomButton.url}>{bottomButton.title}</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
