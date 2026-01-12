import Link from '@/components/Link'

export default function MulticlassObjectDetectionPage() {
  return (
    <div className="mx-auto max-w-3xl pt-8 pb-16">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Multiclass Image Classification and Few-Shot Learning on Tiny ImageNet
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
        Transfer learning and meta-learning under limited data regimes
      </p>

      {/* Divider */}
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700" />

      {/* Overview */}
      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Project Overview
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          This project investigates multiclass image classification under both
          standard and low-data settings using the Tiny ImageNet dataset. I trained
          and evaluated multiple convolutional architectures—including ResNet-50,
          MobileNet, and EfficientNet—using transfer learning and systematic
          fine-tuning strategies to analyze performance trade-offs across data regimes.
        </p>

        <p className="text-gray-600 dark:text-gray-400">
          To address scenarios with limited labeled data, I integrated
          Model-Agnostic Meta-Learning (MAML), enabling rapid adaptation from a
          small number of samples and improving generalization beyond conventional
          fine-tuned baselines.
        </p>
      </section>

      {/* Technical Highlights */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Technical Highlights
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
          <li>
            Trained multiclass image classification models using ResNet-50,
            MobileNet, and EfficientNet on Tiny ImageNet with transfer learning.
          </li>
          <li>
            Implemented frozen, partially fine-tuned, and fully fine-tuned
            backbones to study model capacity versus generalization trade-offs.
          </li>
          <li>
            Integrated Model-Agnostic Meta-Learning (MAML) for few-shot
            classification under limited data conditions.
          </li>
          <li>
            Conducted extensive hyperparameter experimentation across learning
            rates, optimizers, dropout configurations, and dense layer designs.
          </li>
          <li>
            Built reproducible and modular training and evaluation pipelines with
            structured performance comparisons and confusion matrix analysis.
          </li>
        </ul>
      </section>

      {/* Results */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Results & Evaluation
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          Under low-data regimes, meta-learning substantially outperformed
          conventional transfer learning approaches. MAML improved top-1 accuracy
          from approximately <strong>53% to 67%</strong>, representing a
          <strong> ~15% absolute gain</strong> over fine-tuned baselines while
          requiring significantly fewer labeled samples.
        </p>

        <p className="text-gray-600 dark:text-gray-400">
          In higher-data settings, fully fine-tuned ResNet-50 achieved the strongest
          overall performance, highlighting the trade-off between model capacity
          and data availability. These results clarify when meta-learning provides
          measurable benefits over standard fine-tuning strategies.
        </p>
      </section>

      <section className="mt-10 space-y-3">
  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
    Resources
  </h2>

  <div className="flex flex-wrap gap-4">
    <Link
      href="https://github.com/hasnain0504/tinyimagenet-project"
      className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
    >
      GitHub
    </Link>

    <Link
      href="https://medium.com/@hasnain.somani2/transfer-learning-few-shot-on-imagenet-b01a112e6573"
      className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
    >
      Technical Write-up
    </Link>
  </div>
</section>

    </div>
  )
}
