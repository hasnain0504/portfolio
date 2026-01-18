import Link from './Link'

type CardProps = {
  title: string
  description: string
  href?: string
}

export const Card = ({ title, description, href }: CardProps) => {
  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <div className="h-full overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60">
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>

          <p className="mb-3 text-gray-500 dark:text-gray-400">
            {description}
          </p>

          {href && (
            <Link
              href={href}
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base font-medium"
            >
              Learn more →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
