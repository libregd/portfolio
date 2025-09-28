interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Figma",
    description: "best tool for UI/UX design and prototyping",
    icon: "figma"
  },
  {
    name: "Affinity Designer",
    description: "My favorite tool for designing vector graphics",
    icon: "affinity_designer"
  },
  {
    name: "Affinity Photo",
    description: "My favorite tool for photo editing and retouching",
    icon: "affinity_photo"
  },
  {
    name: "Blender",
    description: "My favorite tool for 3D modeling and animation",
    icon: "blender"
  },
];

export default hardSkills;