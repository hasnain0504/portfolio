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
    title: 'Multiclass Image Classification & Few-Shot Learning on Tiny ImageNet',
    description:
      'Trained multiclass image classification models using ResNet-50, MobileNet, and EfficientNet on Tiny ImageNet. Integrated few-shot learning via Model-Agnostic Meta-Learning (MAML), achieving ~15% accuracy gains over fine-tuned baselines under limited data settings, with reproducible training and evaluation pipelines.',
    imgSrc: '/static/images/object-detection.png',
    href: '/projects/multiclass-object-detection',
    github: 'https://github.com/hasnain0504', // optional
    medium: 'https://medium.com/@hasnain.somani2', // optional
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
