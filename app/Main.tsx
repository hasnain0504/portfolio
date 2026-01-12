import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <div className="pt-24 pb-16">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Hasnain Somani
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        Master’s student in Data Science with hands-on experience across data analysis, machine learning, computer vision, and generative AI.
Experienced in building reproducible, end-to-end data and ML pipelines—from exploratory analysis and statistical modeling to training and fine-tuning deep learning systems using Python, PyTorch, and TensorFlow—delivering measurable, real-world impact.
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
