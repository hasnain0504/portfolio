import Link from '@/components/Link'

export default function MulticlassObjectDetectionPage() {
  return (
    <div className="mx-auto max-w-3xl pt-8 pb-16">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Multiclass Image Classification & Few-Shot Learning
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
        Transfer learning and meta-learning on Tiny ImageNet
      </p>

      {/* Divider */}
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700" />

      {/* Project Overview */}
      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Project Overview
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          This project explores the intersection of transfer learning and few-shot learning
          for multiclass image classification on the Tiny ImageNet dataset. Multiple deep
          convolutional architectures—including ResNet-50, MobileNet, and EfficientNet—were
          trained and evaluated under different fine-tuning strategies to understand
          performance trade-offs across varying data regimes.
        </p>

        <p className="text-gray-600 dark:text-gray-400">
          To address limited labeled data scenarios, Model-Agnostic Meta-Learning (MAML) was
          integrated to enable rapid adaptation from a small number of examples, significantly
          improving generalization performance compared to conventional fine-tuned baselines.
        </p>
      </section>

      {/* Technical Highlights */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Technical Highlights
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
          <li>
            Trained multiclass image classification models using ResNet-50, MobileNet, and
            EfficientNet on Tiny ImageNet with transfer learning.
          </li>
          <li>
            Implemented frozen, partially fine-tuned, and fully fine-tuned backbones to
            analyze model capacity versus generalization trade-offs.
          </li>
          <li>
            Integrated Model-Agnostic Meta-Learning (MAML) for few-shot classification,
            improving accuracy by approximately 15% (53% → 67%) over fine-tuned baselines.
          </li>
          <li>
            Conducted extensive hyperparameter experimentation across learning rates,
            optimizers, dropout configurations, and dense layer architectures.
          </li>
          <li>
            Evaluated models using confusion matrices and structured performance comparisons,
            with reproducible and modular training and evaluation pipelines.
          </li>
        </ul>
      </section>

      {/* Resources */}
      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Resources
        </h2>

        <div className="flex flex-wrap gap-6">
          <Link
            href="https://github.com/hasnain0504/tinyimagenet-project"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            GitHub Repository →
          </Link>

          <Link
            href="https://medium.com/@hasnain.somani2/transfer-learning-few-shot-on-imagenet-b01a112e6573"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            Medium Blog →
          </Link>
        </div>
      </section>
    </div>
  )
}
