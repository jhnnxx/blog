import Link from 'next/link'

export default function PortfolioItems() {
  return (
    <section className={`container mx-auto max-w-2xl`}>
      <div className={`grid grid-cols-1 gap-6 py-10 lg:py-24`}>
        <Link href={`https://x-pf.vercel.app`} target={'_self'}>
          <article
            className={`flex flex-col items-center gap-8 border p-6 font-semibold hover:bg-gray-300`}
          >
            <div className={`flex place-items-center rounded-full text-3xl`}>
              <span className={`text-2xl font-bold`}>
                jhnn<text className={`text-5xl`}>X</text>
              </span>
            </div>
            <div className={`flex flex-col`}>
              <span>SNS 기능 구현 페이지입니다.</span>
              <div className={`flex flex-wrap gap-3 italic`}>
                <i>#aws-amplify</i>
                <i>#graphql</i>
              </div>
            </div>
          </article>
        </Link>
        {/*<Link href={`/`} target={'_self'}>*/}
        <article
          className={`flex cursor-not-allowed flex-col items-center gap-8 border p-6 font-semibold hover:bg-gray-300`}
        >
          <div className={`flex place-items-center rounded-full text-3xl`}>
            <span className={`text-3xl font-bold`}>Invitation</span>
          </div>
          <div className={`flex flex-col`}>
            <span></span>
            <div className={`flex flex-wrap gap-3 italic`}>
              <i>#WeddingCeremony</i>
              <i>#ThankYou</i>
            </div>
          </div>
        </article>
        {/*</Link>*/}
      </div>
    </section>
  )
}
