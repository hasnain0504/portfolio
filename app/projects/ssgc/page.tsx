import Link from '@/components/Link'

export default function GasMeterReadingPage() {
  return (
    <div className="mx-auto max-w-3xl pt-8 pb-16">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Automated Gas Meter Reading using Computer Vision
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
        Real-world computer vision system developed for Sui Southern Gas Company (SSGC)
      </p>

      {/* Divider */}
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700" />

      {/* Overview */}
      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Project Overview
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          This project was developed as a production-oriented computer vision solution for
          Sui Southern Gas Company (SSGC), one of Pakistan’s largest utility providers. The
          goal was to automate meter reading from real-world field images captured by
          technicians, replacing time-consuming manual entry with a scalable, accurate
          automated method.
        </p>

        <p className="text-gray-600 dark:text-gray-400">
          The work included annotation of thousands of unstructured images, preprocessing
          to improve label quality, architectural experiments with modern CNNs, and robust
          evaluation in deployment-like conditions.
        </p>

        <p className="text-gray-600 dark:text-gray-400 font-semibold">
          Note: As this project was delivered under an industry engagement with SSGC, the
          detailed codebase and internal data cannot be publicly shared.
        </p>
      </section>

      {/* Technical Highlights */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Technical Highlights
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
          <li>Annotated and preprocessed thousands of raw, unstructured field images to improve label quality.</li>
          <li>Applied morphological image processing and contrast enhancement for digit visibility.</li>
          <li>Used transfer learning with CNN architectures (ResNet50, EfficientNet, LeNet) for digit recognition.</li>
          <li>Implemented ensemble bagging to reduce overfitting and improve robustness.</li>
          <li>Built modular, reproducible training and evaluation pipelines suitable for industry testing and deployment.</li>
        </ul>
      </section>

      {/* Results & Recognition */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Results & Recognition
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          The final system achieved a strong <strong>94% recognition accuracy</strong> on
          real-world test data, demonstrating the model’s robustness under diverse lighting
          and environmental conditions commonly encountered in field operations.
        </p>

        <p className="text-gray-600 dark:text-gray-400">
          This work was recognized at APICTA 2023 (Hong Kong) with two awards in the
          Students Category:
        </p>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
          <li><strong>Merit Award</strong></li>
          <li><strong>People’s Choice Award</strong></li>
        </ul>
      </section>

      {/* Tools & Technologies */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Tools & Technologies
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Python · OpenCV · PyTorch · CNNs · Transfer Learning · Image Processing · Ensemble Learning · Computer Vision
        </p>
      </section>

      
    </div>
  )
}
