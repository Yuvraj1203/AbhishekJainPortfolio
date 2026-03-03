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
    | "uiux";
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
];

// Helper functions
export const getSkillsByCategory = (category: GraphicSkill["category"]) => {
  return graphicSkills.filter((skill) => skill.category === category);
};

export const getSkillCategories = () => {
  const categories = new Set(graphicSkills.map((skill) => skill.category));
  return Array.from(categories);
};
