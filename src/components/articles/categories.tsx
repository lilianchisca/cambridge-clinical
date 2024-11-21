import Link from 'next/link'

import { cn } from '@/helpers/cn'

import { getAllCategories } from '@/lib/posts'

export default async function Categories({
  activeName,
}: {
  activeName: string | null | undefined
}) {
  const categories = await getAllCategories()

  return (
    <div className="hidden bg-primary-600 p-20 text-white md:block">
      <div className="flex items-center justify-center">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/resources/category/${category.slug}`}
            className={cn(
              'mx-15 text-12 font-bold uppercase transition-all hover:opacity-50 2lg:text-16 xl:mx-25',
              activeName && activeName === category.name ? '' : 'opacity-60'
            )}
            dangerouslySetInnerHTML={{ __html: category.name }}
          />
        ))}
      </div>
    </div>
  )
}
