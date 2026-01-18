const projectsData = [
  {
    title: 'Controlled Jewelry Image Synthesis using Diffusion Models',
    description:
      'Domain-adapted text-to-image generation system for fine jewelry, built by fine-tuning Stable Diffusion v1.5 using LoRA. Achieved near state-of-the-art CLIP alignment with a curated dataset of ~300 images, enabling strong prompt-level control over gemstone, metal, and design attributes.',
    href: '/projects/jewelry-generator', // internal project page
    github: 'https://github.com/hasnain0504', // optional
    medium: 'https://medium.com/@hasnain.somani2', // optional
  },
  {
    title: 'Multiclass Image Classification & Few-Shot Learning on Tiny ImageNet',
    description:
      'Trained multiclass image classification models using ResNet-50, MobileNet, and EfficientNet on Tiny ImageNet. Integrated few-shot learning via Model-Agnostic Meta-Learning (MAML), achieving ~15% accuracy gains over fine-tuned baselines under limited data settings, with reproducible training and evaluation pipelines.',
    href: '/projects/multiclass-object-detection',
    github: 'https://github.com/hasnain0504', // optional
    medium: 'https://medium.com/@hasnain.somani2', // optional
  },
  {
  title: 'Automated Gas Meter Reading',
  description:
    'Developed a production-oriented computer vision system for automated gas meter reading for Sui Southern Gas Company (SSGC), achieving 94% accuracy using morphological image processing, transfer learning (ResNet50, EfficientNet, LeNet), and ensemble bagging. The project received the Merit Award and People’s Choice Award at APICTA 2023 (Hong Kong).',
  href: '/projects/ssgc',
  },
]

export default projectsData
