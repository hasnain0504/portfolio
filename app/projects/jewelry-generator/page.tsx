import Link from 'next/link'

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
          on a carefully curated dataset of approximately 300 jewelry images paired with structured,
          hand-crafted prompts describing gemstone shape, metal type, band geometry, and design
          attributes.
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          The full pipeline: from data curation and prompt engineering to training, inference, and
          evaluation was implemented in PyTorch. I benchmarked multiple diffusion schedulers (DDIM,
          Euler A, DPM++ 2M) and hyperparameter configurations to identify an optimal setup for both
          visual fidelity and prompt controllability.
        </p>
      </section>

      {/* Technical Details */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Technical Highlights</h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            Fine-tuned Stable Diffusion v1.5 using LoRA (rank=8, alpha=16) with parameter-efficient training
          </li>
          <li>
            Implemented structured prompt construction for controlled generation of jewelry attributes
            (stone shape, metal, band geometry, halo design)
          </li>
          <li>Built a full training and inference pipeline in PyTorch with reproducible experiments</li>
          <li>
            Evaluated outputs using CLIP-based prompt–image alignment metrics and qualitative A/B comparisons
          </li>
        </ul>
      </section>

      {/* Results */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Results & Evaluation</h2>

        <p className="text-gray-700 dark:text-gray-300">
          Despite the limited dataset size, the optimized LoRA model achieved CLIP alignment scores
          comparable to strong diffusion baselines, while consistently improving jewelry-specific
          structural accuracy.
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          Improvements were most notable in gemstone faceting, prong placement, halo symmetry, and band
          geometry — attributes that are critical for real-world jewelry design but often poorly captured
          by generic text-to-image models.
        </p>
      </section>

      {/* Demo & Visual Results */}
      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">Demo & Visual Results</h2>

        <p className="text-gray-700 dark:text-gray-300">
          This section includes UI + qualitative comparisons and two key quantitative results:
          LoRA variant CLIP scores and training stability behavior.
        </p>

        <div className="space-y-10">
          {/* UI Screenshot */}
          <div>
            <h3 className="text-lg font-semibold">UI Screenshot</h3>
            <div className="mt-3 flex justify-center">
              <img
                src="/static/images/ui.png"
                alt="Jewelry Generator UI Screenshot"
                className="w-full max-w-2xl rounded-xl border border-gray-200 dark:border-gray-700"
              />
            </div>
          </div>

          {/* Base vs LoRA */}
          <div>
            <h3 className="text-lg font-semibold">Base vs LoRA Comparison</h3>
            <div className="mt-3 flex justify-center">
              <img
                src="/static/images/base_vs_lora.png"
                alt="Base model vs LoRA comparison"
                className="w-full max-w-2xl rounded-xl border border-gray-200 dark:border-gray-700"
              />
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Same prompt and seed; LoRA improves jewelry-specific structure such as stone placement,
              prong consistency, and symmetry compared to the base model.
            </p>
          </div>

          {/* LoRA A vs LoRA B */}
          <div>
            <h3 className="text-lg font-semibold">LoRA A vs LoRA B (CLIP Score)</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              This plot compares mean CLIP text–image similarity between two LoRA variants evaluated on
              the same prompt set.
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">LoRA A (lora_7):</span> r=8, alpha=16, 5 epochs.{' '}
              <span className="font-medium">LoRA B (lora_77):</span> r=8, alpha=16, 10 epochs + gradient clipping +
              LR scheduler + EMA.
            </p>

            <div className="mt-3 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
              <img
                src="/static/images/lora_comparison.png"
                alt="Bar chart showing mean CLIP score comparison between LoRA A and LoRA B"
                className="w-full"
              />
            </div>
          </div>

          {/* Training Stability */}
          <div>
            <h3 className="text-lg font-semibold">Training Stability (Loss Curve)</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Training loss vs step comparison to visualize stability differences across training durations.
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              This supports design decisions such as stabilized optimization (clipping/scheduler/EMA) and
              avoiding over-training under small-data constraints.
            </p>

            <div className="mt-3 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
              <img
                src="/static/images/training_loss.png"
                alt="Line plot showing LoRA training loss curve across training steps"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Tools & Technologies</h2>

        <p className="text-gray-700 dark:text-gray-300">
          Python · PyTorch · Stable Diffusion · LoRA · CLIP · Diffusion Schedulers · Prompt Engineering · Generative AI
        </p>
      </section>

      {/* Links */}
      <section className="mt-10 flex flex-wrap gap-4">
        <Link
          href="https://github.com/hasnain0504/Jewelry-Image-Generator"
          className="rounded-md bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900"
        >
          GitHub
        </Link>

        <Link
          href="https://huggingface.co/spaces/hsomani/jewelry-design-generator"
          className="rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Live Demo (CPU-only)
        </Link>

        <Link
          href="https://drive.google.com/file/d/1UkygDdS8IcLPU9h4jKopXGsbF-oelmXd/view"
          className="rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Demo Video (2 min)
        </Link>

        <Link
          href="https://medium.com/@hasnain.somani2"
          className="rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Medium Article (Technical)
        </Link>
      </section>
    </div>
  )
}
