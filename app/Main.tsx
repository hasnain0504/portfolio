import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <div className="pt-24 pb-16">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Hasnain Somani
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        Machine Learning–focused Master’s student in Data Science with hands-on
        experience in deep learning, computer vision, and generative AI.
      </p>

      <p className="mt-2 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        Focused on building practical ML systems and applied research.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/projects"
          className="rounded-lg bg-gray-900 px-5 py-2.5 text-white hover:bg-gray-700"
        >
          View Projects
        </a>

        <a
          href={siteMetadata.github}
          className="rounded-lg border border-gray-300 px-5 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          GitHub
        </a>

        <a
          href={siteMetadata.linkedin}
          className="rounded-lg border border-gray-300 px-5 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          LinkedIn
        </a>
      </div>
    </div>
  )
}
