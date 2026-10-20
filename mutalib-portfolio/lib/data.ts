// All editable content lives here.
export const site = {
  name: "Mutalib Abubakar",
  linkedin: "https://www.linkedin.com/in/mutalib-abubakar-93623a366/",
  email: "abubakar792212@gmail.com",
};

export const categories = ["All", "Graphic Design", "UI/UX Design", "Social Media & Marketing", "STEM & Robotics", "Educational Projects", "Digital Innovation"];

export type Project = { slug: string; title: string; category: string; blurb: string; size: "w" | "s" | "h"; tint: string; role: string; tools: string; year: string };
const tbc = { role: "To be added", tools: "To be added", year: "To be added" };
// PLACEHOLDERS: replace with real projects. None of these are real client work.
export const projects: Project[] = [
  { slug: "identity-sample", title: "Brand identity layout", category: "Graphic Design", blurb: "Sample: logo, palette and campaign kit.", size: "w", tint: "bg-lav", ...tbc },
  { slug: "app-screens-sample", title: "App interface layout", category: "UI/UX Design", blurb: "Sample: wireframes to responsive screens.", size: "s", tint: "bg-lime", ...tbc },
  { slug: "social-sample", title: "Social campaign layout", category: "Social Media & Marketing", blurb: "Sample: content plan and performance report.", size: "s", tint: "bg-coral", ...tbc },
  { slug: "robotics-sample", title: "Robotics session layout", category: "STEM & Robotics", blurb: "Sample: a beginner-friendly robotics session.", size: "w", tint: "bg-blue", ...tbc },
  { slug: "learning-sample", title: "Learning resource layout", category: "Educational Projects", blurb: "Sample: an activity pack for new learners.", size: "h", tint: "bg-lav", ...tbc },
  { slug: "innovation-sample", title: "Digital innovation layout", category: "Digital Innovation", blurb: "Sample: a small technology experiment.", size: "h", tint: "bg-lime", ...tbc },
];

export const areas = [
  { title: "Design & Creativity", text: "Graphic design and UI/UX that make ideas easy to understand and enjoy.", tint: "bg-lav" },
  { title: "STEM & Education", text: "Certified STEM instruction that makes technology approachable for beginners.", tint: "bg-lime" },
  { title: "Digital Growth", text: "Social media and digital marketing analysis that support steady, informed growth.", tint: "bg-coral" },
  { title: "Business & Organisation", text: "Bookkeeping discipline that keeps creative work practical and dependable.", tint: "bg-white" },
];
export const services = [
  ["Graphic Design", "Visual identities, promotional graphics, campaign materials, presentation design, and digital creatives."],
  ["UI/UX Design", "User research, information architecture, wireframes, interface design, responsive layouts, and interactive prototypes."],
  ["Social Media Management", "Content planning, creative direction, publishing workflows, community engagement, and brand consistency."],
  ["Digital Marketing & Analysis", "Campaign support, performance monitoring, reporting, content optimisation, and data-informed recommendations."],
  ["STEM Education & Innovation", "Educational activities, robotics instruction, beginner-friendly technology learning, and STEM engagement."],
];
export const steps = [
  ["Discover", "Understand the audience, goals, constraints, and actual problem."],
  ["Explore", "Research, brainstorm, sketch, experiment, and evaluate possible approaches."],
  ["Create", "Turn the strongest direction into a thoughtful design, campaign, interface, or learning experience."],
  ["Refine", "Test, gather feedback, improve, and prepare the final deliverables."],
];
export const experience = [
  ["Digital Marketing Analyst", "Pearl27"],
  ["Certified STEM Instructor", "Certifying body to be added"],
  ["Graphic & UI/UX Design", "Details to be added"],
  ["Social Media Management", "Details to be added"],
  ["Bookkeeping", "Details to be added"],
];
export const education = [
  ["BYU–Pathway Worldwide", "Programme and status to be added"],
  ["Ensign College", "Programme and status to be added"],
];
