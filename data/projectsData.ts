const projectsData = [
  {
    title: 'Controlled Jewelry Image Synthesis using Diffusion Models',
    description:
      'Domain-adapted text-to-image generation system for fine jewelry, built by fine-tuning Stable Diffusion v1.5 using LoRA. Achieved near state-of-the-art CLIP alignment with a curated dataset of ~300 images, enabling strong prompt-level control over gemstone, metal, and design attributes.',
    imgSrc: '/static/images/jewelry-generator.png',
    href: '/projects/jewelry-generator', // internal project page
    github: 'https://github.com/hasnain0504', // optional
    medium: 'https://medium.com/@hasnain.somani2', // optional
  },
  {
    title: 'Multiclass Object Detection & Few-Shot Learning',
    description:
      'Trained and evaluated multi-class image models using ResNet-50, MobileNet, and EfficientNet on Tiny ImageNet. Integrated Model-Agnostic Meta-Learning (MAML) for few-shot classification, improving accuracy by 15% over fine-tuned baselines, with reproducible training and evaluation pipelines.',
    imgSrc: '/static/images/object-detection.png',
    href: 'https://github.com/hasnain0504',
  },
  {
    title: 'Automated Gas Meter Reading',
    description:
      'Built an IoT-based deep learning system for automated gas meter reading using computer vision. Achieved 94% accuracy by combining morphological image processing with transfer learning (ResNet50, EfficientNet, LeNet) and ensemble bagging to improve robustness and reduce overfitting.',
    imgSrc: '/static/images/gas-meter.png',
    href: 'https://github.com/hasnain0504',
  },
]

export default projectsData
