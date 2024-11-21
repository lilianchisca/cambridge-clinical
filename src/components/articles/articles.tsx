'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { ArrowRight, Search } from 'lucide-react'

import { PostCard } from '@/lib/posts'

import Select from '@/components/ui/select'

const sortOptions = ['Sort by Newest', 'Sort by Oldest']

export default function Articles({
  posts,
  selectedCategory,
}: {
  posts: PostCard[]
  selectedCategory?: string
}) {
  const [activeCategory, activeCategorySet] = useState(selectedCategory ?? 'All')
  const [query, querySet] = useState('')
  const [filteredPosts, filteredPostsSet] = useState(posts)
  const [activeSort, activeSortSet] = useState('Sort by Newest')
  const postsCats = posts
    .map((post) => post.categories?.nodes?.map((category) => category?.name))
    .flat()
    .filter(Boolean)
    .map((cat) => cat ?? '')

  const categories = Array.from(new Set(postsCats))

  useEffect(() => {
    filteredPostsSet(
      posts
        .filter(
          (post) =>
            activeCategory === 'All' ||
            post?.categories?.nodes.some((cat) => cat?.name === activeCategory)
        )
        .filter((post) => post?.title?.toLowerCase().includes(query.toLowerCase()))
        .sort((a, b) => {
          if (activeSort === 'Sort by Newest') {
            return new Date(b?.date ?? '').getTime() - new Date(a?.date ?? '').getTime()
          }
          return new Date(a?.date ?? '').getTime() - new Date(b?.date ?? '').getTime()
        })
    )
  }, [activeCategory, query, activeSort, posts])

  return (
    <div className="relative overflow-hidden bg-gray-100 pb-70 pt-20 lg:pt-40">
      <div className="c-container">
        <div className="flex flex-wrap items-center justify-between border-b border-gray-400/20 pb-20 md:flex-nowrap lg:pb-35">
          <div className="flex flex-wrap items-center md:flex-nowrap">
            <div className="w-full md:w-auto">
              <Select
                options={['All', ...categories]}
                value={activeCategory}
                onValueChange={activeCategorySet}
                btnClasses="w-full md:w-auto"
              />
            </div>
            <div className="relative mt-10 w-full md:ml-10 md:mt-0 md:w-auto">
              <input
                placeholder="Search by keyword"
                value={query}
                onChange={(e) => querySet(e.target.value)}
                type="text"
                className="block w-full rounded-full border-0 bg-white px-25 py-16 text-16 text-secondary-400 shadow-none transition-all placeholder:text-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:min-w-[380px] lg:px-30 xl:px-35"
              />

              <span className="pointer-events-none absolute right-20 top-1/2 -translate-y-1/2 text-secondary-400">
                <Search size={20} />
              </span>
            </div>
          </div>
          <div className="mt-10 w-full md:hidden lg:mt-0 lg:block lg:w-auto">
            <Select
              options={sortOptions}
              value={activeSort}
              onValueChange={activeSortSet}
              btnClasses="w-full lg:w-auto"
            />
          </div>
        </div>
        <div className="flex items-center justify-between pb-25 pt-30 md:pb-35 md:pt-20 lg:pt-50">
          <div className="flex w-full items-baseline justify-center md:w-auto md:justify-start">
            <h2 className="text-16 font-bold text-secondary-400 md:text-18 lg:text-25">
              {activeCategory}
            </h2>
            <span className="ml-15 block pb-2 text-14 text-black">
              {filteredPosts.length} article{filteredPosts.length > 1 && 's'}
            </span>
          </div>
          <div className="hidden md:block lg:hidden">
            <Select options={sortOptions} value={activeSort} onValueChange={activeSortSet} />
          </div>
        </div>
        <div className="-mx-10 flex flex-wrap">
          {filteredPosts.map((post) => (
            <div className="mb-20 w-full px-10 md:w-1/2 lg:w-1/3" key={post.slug}>
              <Link
                href={`/resources/${post.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-15 bg-white shadow-md transition-all hover:ring-4 hover:ring-primary-200/50"
              >
                {post?.featuredImage?.node?.sourceUrl && (
                  <div className="relative h-210 overflow-hidden rounded-t-15">
                    <Image
                      src={post?.featuredImage?.node?.sourceUrl}
                      alt={post?.title ?? ''}
                      fill
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>
                )}
                <div className="flex grow flex-col px-22 pb-20 pt-22">
                  <div className="flex items-center space-x-4">
                    {post?.categories?.nodes?.map((cat) => (
                      <div
                        key={cat.name}
                        className="text-12 leading-none"
                        dangerouslySetInnerHTML={{ __html: cat?.name ?? '' }}
                      ></div>
                    ))}
                  </div>
                  <h3
                    className="mt-10 text-15 font-bold leading-tight md:text-16 lg:text-17 xl:text-18"
                    dangerouslySetInnerHTML={{ __html: post?.title ?? '' }}
                  ></h3>
                  <div className="mt-auto pt-25 text-12">Read More</div>
                  <div className="absolute bottom-15 right-15 flex h-30 w-30 items-center justify-center overflow-hidden rounded-full bg-primary-100 text-primary-600">
                    <span className="absolute inset-0 flex items-center justify-center transition-all group-hover:translate-x-full">
                      <span>
                        <ArrowRight size={18} />
                      </span>
                    </span>
                    <span className="absolute inset-0 flex -translate-x-full items-center justify-center transition-all group-hover:translate-x-0">
                      <span>
                        <ArrowRight size={18} />
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
