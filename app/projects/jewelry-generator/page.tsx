import Link from '@/components/Link'

export default function JewelryGeneratorPage() {
  return (
    <div className="max-w-4xl pt-10 pb-16">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Controlled Jewelry Image Synthesis using Diffusion Models
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Domain-adapted text-to-image generation for fine jewelry using Stable Diffusion and LoRA
      </p>

      {/* Divider */}
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700" />

      {/* Overview */}
      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Project Overview</h2>

        <p className="text-gray-700 dark:text-gray-300">
          I developed a domain-adapted text-to-image generation system for fine jewelry by
          fine-tuning Stable Diffusion v1.5 using Low-Rank Adaptation (LoRA). The model was trained
          on a carefully curated dataset of approximately 300 jewelry images paired with
          structured, hand-crafted prompts describing gemstone shape, metal type, band geometry,
          and design attributes.
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          The full pipeline—from data curation and prompt engineering to training, inference, and
          evaluation—was implemented in PyTorch. I benchmarked multiple diffusion schedulers
          (DDIM, Euler A, DPM++ 2M) and hyperparameter configurations to identify an optimal setup
          for both visual fidelity and prompt controllability.
        </p>
      </section>

      {/* Technical Details */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Technical Highlights</h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            Fine-tuned Stable Diffusion v1.5 using LoRA (rank=8, α=16) with parameter-efficient
            training
          </li>
          <li>
            Implemented structured prompt construction for controlled generation of jewelry
            attributes (stone shape, metal, band geometry, halo design)
          </li>
          <li>
            Built a full training and inference pipeline in PyTorch with reproducible experiments
          </li>
          <li>
            Evaluated outputs using CLIP-based prompt–image alignment metrics and qualitative A/B
            comparisons
          </li>
        </ul>
      </section>

      {/* Results */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Results & Evaluation</h2>

        <p className="text-gray-700 dark:text-gray-300">
          Despite the limited dataset size, the optimized LoRA model achieved CLIP alignment scores
          comparable to state-of-the-art community checkpoints, while consistently outperforming
          generic diffusion models on jewelry-specific structural accuracy.
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          Improvements were most notable in gemstone faceting, prong placement, halo symmetry,
          and band geometry—attributes that are critical for real-world jewelry design but often
          poorly captured by generic text-to-image models.
        </p>
      </section>

      {/* Tools */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Tools & Technologies</h2>

        <p className="text-gray-700 dark:text-gray-300">
          Python · PyTorch · Stable Diffusion · LoRA · CLIP · Diffusion Schedulers · Prompt
          Engineering · Generative AI
        </p>
      </section>

      {/* Links */}
      <section className="mt-10 flex gap-4">
        <Link
          href="https://github.com/hasnain0504"
          className="rounded-md bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900"
        >
          GitHub
        </Link>

        <Link
          href="https://medium.com/@your-handle"
          className="rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Technical Write-up
        </Link>
      </section>
    </div>
  )
}
