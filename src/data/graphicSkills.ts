// Graphic Designer Skills Data
// Easy to add, update, or delete skills

export interface GraphicSkill {
  id: string;
  name: string;
  icon: string;
  category:
    | "design"
    | "photo"
    | "video"
    | "motion"
    | "other"
    | "print"
    | "illustration"
    | "uiux"
    | "ai";
  proficiency: number; // 1-100
  description: string;
}

export interface DesignCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const designCategories: DesignCategory[] = [
  {
    id: "ai",
    name: "AI Tools",
    icon: "🤖",
    description: "AI-powered design, generation, and productivity tools",
  },
  {
    id: "branding",
    name: "Branding & Identity",
    icon: "🎨",
    description: "Logo design, brand guidelines, visual identity",
  },
  {
    id: "print",
    name: "Print Design",
    icon: "📄",
    description: "Brochures, business cards, posters, packaging",
  },
  {
    id: "uiux",
    name: "UI/UX Design",
    icon: "📱",
    description: "Web & mobile app interfaces, prototypes",
  },
  {
    id: "illustration",
    name: "Illustration",
    icon: "✏️",
    description: "Digital art, character design, vector graphics",
  },
  {
    id: "photography",
    name: "Photography",
    icon: "📷",
    description: "Photo editing, retouching, color grading",
  },
  {
    id: "motion",
    name: "Motion Graphics",
    icon: "🎬",
    description: "Animations, video editing, visual effects",
  },
];

export const graphicSkills: GraphicSkill[] = [
  // Adobe Creative Suite
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
    category: "photo",
    proficiency: 95,
    description: "Image editing, retouching, compositing, digital art",
  },
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png",
    category: "design",
    proficiency: 95,
    description: "Vector graphics, logos, icons, typography",
  },
  {
    id: "indesign",
    name: "Adobe InDesign",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/1200px-Adobe_InDesign_CC_icon.svg.png",
    category: "print",
    proficiency: 90,
    description: "Layout design, print publications, eBooks",
  },
  {
    id: "premiere",
    name: "Adobe Premiere Pro",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1200px-Adobe_Premiere_Pro_CC_icon.svg.png",
    category: "video",
    proficiency: 88,
    description: "Video editing, color correction, sound design",
  },
  {
    id: "aftereffects",
    name: "Adobe After Effects",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Adobe_After_Effects_CC_icon.svg/1200px-Adobe_After_Effects_CC_icon.svg.png",
    category: "motion",
    proficiency: 85,
    description: "Motion graphics, VFX, animations",
  },
  {
    id: "xd",
    name: "Adobe XD",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png",
    category: "uiux",
    proficiency: 92,
    description: "UI/UX design, wireframing, prototyping",
  },
  {
    id: "lightroom",
    name: "Adobe Lightroom",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/1200px-Adobe_Photoshop_Lightroom_CC_logo.svg.png",
    category: "photo",
    proficiency: 90,
    description: "Photo editing, color grading, RAW processing",
  },
  {
    id: "animate",
    name: "Adobe Animate",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Adobe_Animate_CC_icon.png/1200px-Adobe_Animate_CC_icon.png",
    category: "motion",
    proficiency: 80,
    description: "2D animations, interactive content",
  },
  {
    id: "figma",
    name: "Figma",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/400px-Figma-logo.svg.png",
    category: "uiux",
    proficiency: 95,
    description: "Collaborative UI design, prototyping, design systems",
  },
  {
    id: "sketch",
    name: "Sketch",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Sketch_Logo.svg/1200px-Sketch_Logo.svg.png",
    category: "uiux",
    proficiency: 75,
    description: "Mac UI design, vector graphics",
  },
  {
    id: "coreldraw",
    name: "CorelDRAW",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/CorelDRAW_icon.svg/1200px-CorelDRAW_icon.svg.png",
    category: "design",
    proficiency: 85,
    description: "Vector editing, page layout, typography",
  },
  {
    id: "canva",
    name: "Canva",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/1200px-Canva_icon_2021.svg.png",
    category: "design",
    proficiency: 98,
    description: "Quick designs, social media graphics, presentations",
  },
  {
    id: "procreate",
    name: "Procreate",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Procreate_logo.svg/1200px-Procreate_logo.svg.png",
    category: "illustration",
    proficiency: 90,
    description: "Digital painting, illustration, sketching on iPad",
  },
  {
    id: "blender",
    name: "Blender",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Blender_2.81a_icons.svg/1200px-Blender_2.81a_icons.svg.png",
    category: "motion",
    proficiency: 70,
    description: "3D modeling, rendering, animation",
  },
  {
    id: "davinci",
    name: "DaVinci Resolve",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/DaVinci_Resolve_17_logo.svg/1200px-DaVinci_Resolve_17_logo.svg.png",
    category: "video",
    proficiency: 82,
    description: "Professional video editing, color grading",
  },
  {
    id: "affinity",
    name: "Affinity Suite",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Affinity_Designer_2_icon.svg/1200px-Affinity_Designer_2_icon.svg.png",
    category: "design",
    proficiency: 88,
    description: "Photo editing, graphic design, page layout",
  },
  {
    id: "notion",
    name: "Notion",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1200px-Notion-logo.svg.png",
    category: "other",
    proficiency: 85,
    description: "Project management, design documentation",
  },
  {
    id: "miro",
    name: "Miro",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Miro_logo.svg/1200px-Miro_logo.svg.png",
    category: "other",
    proficiency: 80,
    description: "Brainstorming, wireframing, collaboration",
  },
  {
    id: "webflow",
    name: "Webflow",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Webflow_Logo.svg/1200px-Webflow_Logo.svg.png",
    category: "uiux",
    proficiency: 78,
    description: "No-code web design, CMS, animations",
  },
  {
    id: "framer",
    name: "Framer",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Framer_Logo.svg/1200px-Framer_Logo.svg.png",
    category: "uiux",
    proficiency: 75,
    description: "Interactive prototyping, design to code",
  },
  // AI Tools - Related to Design
  {
    id: "midjourney",
    name: "Midjourney",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Midjourney_logo.svg/512px-Midjourney_logo.svg.png",
    category: "photo",
    proficiency: 92,
    description: "AI image generation from text prompts, artistic styles",
  },
  {
    id: "dalle",
    name: "DALL-E 3",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png",
    category: "photo",
    proficiency: 95,
    description: "OpenAI text-to-image generator, high fidelity",
  },
  {
    id: "stablediffusion",
    name: "Stable Diffusion",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Stability_AI_Logo.svg/512px-Stability_AI_Logo.svg.png",
    category: "photo",
    proficiency: 90,
    description: "Open-source AI image synthesis, customizable models",
  },
  {
    id: "ideogram",
    name: "Ideogram",
    icon: "https://ideogram.ai/static/images/brand/ideogram-logo.svg",
    category: "photo",
    proficiency: 88,
    description: "AI text-to-image with strong typography support",
  },
  {
    id: "flux",
    name: "Flux AI",
    icon: "https://blackforestlabs.ai/flux-icon.png",
    category: "photo",
    proficiency: 87,
    description: "High-quality open AI image generation",
  },
  {
    id: "runwayml",
    name: "RunwayML",
    icon: "https://runwayml.com/assets/images/brand/logo-black.svg",
    category: "motion",
    proficiency: 89,
    description: "AI video generation and editing tools",
  },
  {
    id: "kling",
    name: "Kling AI",
    icon: "https://klingai.com/favicon.ico",
    category: "motion",
    proficiency: 85,
    description: "Text-to-video AI generation",
  },
  {
    id: "luma",
    name: "Luma Dream Machine",
    icon: "https://lumalabs.ai/favicon.ico",
    category: "motion",
    proficiency: 84,
    description: "AI video from text/images",
  },
  {
    id: "cursor",
    name: "Cursor AI",
    icon: "https://cursor.com/favicon.svg",
    category: "uiux",
    proficiency: 92,
    description: "AI-powered code editor for UI development",
  },
  // Unrelated/General AI
  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png",
    category: "ai",
    proficiency: 98,
    description: "AI assistant for content, code, and creative brainstorming",
  },
  {
    id: "claude",
    name: "Claude 3.5",
    icon: "https://www.anthropic.com/favicon.ico",
    category: "ai",
    proficiency: 96,
    description: "Advanced AI reasoning and creative writing",
  },
  {
    id: "gemini",
    name: "Gemini",
    icon: "https://ai.google.dev/static/site-assets/images/share.png",
    category: "ai",
    proficiency: 94,
    description: "Google multimodal AI for research and generation",
  },
  {
    id: "grok",
    name: "Grok",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Grok_logo.svg/512px-Grok_logo.svg.png",
    category: "ai",
    proficiency: 93,
    description: "xAI assistant with real-time knowledge",
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    icon: "https://www.perplexity.ai/favicon.ico",
    category: "ai",
    proficiency: 91,
    description: "AI search engine with citations",
  },
  {
    id: "llama",
    name: "Llama 3",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Llama_logo.svg",
    category: "ai",
    proficiency: 89,
    description: "Open-source large language model",
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/GitHub_Copilot_logo.svg/512px-GitHub_Copilot_logo.svg.png",
    category: "ai",
    proficiency: 95,
    description: "AI coding assistant integrated in IDEs",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    icon: "https://elevenlabs.io/favicon.ico",
    category: "ai",
    proficiency: 86,
    description: "AI voice generation for multimedia",
  },
  {
    id: "suno",
    name: "Suno AI",
    icon: "https://suno.ai/favicon.ico",
    category: "other",
    proficiency: 82,
    description: "AI music generation from prompts",
  },
  {
    id: "devin",
    name: "Devin AI",
    icon: "https://www.cognition.ai/favicon.ico",
    category: "other",
    proficiency: 88,
    description: "AI software engineer for automation",
  },
  // Additional AI Tools (Feedback: add more)
  {
    id: "mistral",
    name: "Mistral AI",
    icon: "https://mistral.ai/favicon.ico",
    category: "ai",
    proficiency: 90,
    description: "Open-weight efficient AI models",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    icon: "https://www.deepseek.com/favicon.ico",
    category: "ai",
    proficiency: 89,
    description: "Cost-effective coding AI",
  },
  {
    id: "gpts",
    name: "GPTs (Custom)",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png",
    category: "ai",
    proficiency: 92,
    description: "Customizable ChatGPT agents",
  },
  {
    id: "replicate",
    name: "Replicate",
    icon: "https://replicate.com/favicon.ico",
    category: "ai",
    proficiency: 85,
    description: "Run AI models at scale",
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    icon: "https://huggingface.co/favicon.ico",
    category: "ai",
    proficiency: 88,
    description: "AI model hub and inference",
  },
  {
    id: "leonardo",
    name: "Leonardo AI",
    icon: "https://app.leonardo.ai/favicon.ico",
    category: "photo",
    proficiency: 87,
    description: "AI art generator with fine-tuning",
  },
  {
    id: "playground",
    name: "Playground AI",
    icon: "https://playground.com/favicon.ico",
    category: "photo",
    proficiency: 86,
    description: "Collaborative AI image design",
  },
  {
    id: "pika",
    name: "Pika Labs",
    icon: "https://pika.art/favicon.ico",
    category: "motion",
    proficiency: 84,
    description: "Lip-sync AI video generation",
  },
  {
    id: "sora",
    name: "Sora (OpenAI)",
    icon: "https://openai.com/favicon.ico",
    category: "motion",
    proficiency: 91,
    description: "Advanced text-to-video model",
  },
  {
    id: "firefly",
    name: "Adobe Firefly",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png",
    category: "photo",
    proficiency: 93,
    description: "Generative AI integrated in Creative Cloud",
  },
  {
    id: "groq",
    name: "Groq",
    icon: "https://groq.com/favicon.ico",
    category: "ai",
    proficiency: 94,
    description: "Ultra-fast AI inference hardware",
  },
  {
    id: "together",
    name: "Together AI",
    icon: "https://www.together.ai/favicon.ico",
    category: "ai",
    proficiency: 87,
    description: "Open AI inference platform",
  },
  {
    id: "anthropic",
    name: "Anthropic Console",
    icon: "https://console.anthropic.com/favicon.ico",
    category: "ai",
    proficiency: 92,
    description: "Enterprise Claude deployment",
  },
];

// Helper functions
export const getSkillsByCategory = (category: GraphicSkill["category"]) => {
  return graphicSkills.filter((skill) => skill.category === category);
};

export const getSkillCategories = () => {
  const categories = new Set(graphicSkills.map((skill) => skill.category));
  return Array.from(categories);
};
