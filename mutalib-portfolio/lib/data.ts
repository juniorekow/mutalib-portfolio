// All editable content lives here.
export const site = {
  name: "Mutalib Abubakar",
  linkedin: "https://www.linkedin.com/in/mutalib-abubakar-93623a366/",
  email: "abubakar792212@gmail.com",
};

export const categories = ["All", "Graphic Design", "Social Media & Marketing", "Educational Projects"];

export type Project = { slug: string; title: string; category: string; blurb: string; image: string; imageAlt: string; size: "w" | "s" | "h"; tint: string; role: string; tools: string; year: string };
const tbc = { role: "To be added", tools: "To be added", year: "To be added" };
export const projects: Project[] = [
  { slug: "balance-steppers-logo", title: "Balance Steppers Logo", category: "Graphic Design", blurb: "Logo design for Balance Steppers.", image: "/portfolio/balance-steppers-logo.png", imageAlt: "Black and white Balance Steppers logo", size: "s", tint: "bg-lav", ...tbc },
  { slug: "byu-pathway-success-story", title: "BYU-Pathway Success Story", category: "Educational Projects", blurb: "A visual story about the BYU-Pathway learning experience.", image: "/portfolio/byu-pathway-success-story.png", imageAlt: "BYU-Pathway success story poster featuring a student working on a laptop", size: "w", tint: "bg-lime", ...tbc },
  { slug: "dhuraba-food-beverages", title: "Dhuraba Food & Beverages", category: "Graphic Design", blurb: "Promotional flyer for Dhuraba Bracha Ent.'s food, drinks, and groceries.", image: "/portfolio/dhuraba-food-beverages.png", imageAlt: "Dhuraba Bracha Ent. food, beverages, and groceries promotional flyer", size: "s", tint: "bg-coral", ...tbc },
  { slug: "ghana-independence-69", title: "Ghana Independence Day", category: "Graphic Design", blurb: "A commemorative design celebrating Ghana's 69th Independence Anniversary.", image: "/portfolio/ghana-independence-69.jpg", imageAlt: "Ghana at 69 Independence Anniversary poster", size: "w", tint: "bg-blue", ...tbc },
  { slug: "bountiful-christmas-campaign", title: "Bountiful Technologies Christmas", category: "Social Media & Marketing", blurb: "A festive holiday greeting for Bountiful Technologies.", image: "/portfolio/bountiful-christmas-campaign.jpg", imageAlt: "Merry Christmas greeting design for Bountiful Technologies", size: "s", tint: "bg-lav", ...tbc },
  { slug: "wymp-campaign", title: "WYMP Campaign", category: "Social Media & Marketing", blurb: "A campaign poster for Youth MP candidate Whyte Amankwanor Sackey.", image: "/portfolio/wymp-campaign.png", imageAlt: "Youth MP campaign poster for Whyte Amankwanor Sackey", size: "w", tint: "bg-lime", ...tbc },
  { slug: "bountiful-fathers-day", title: "Bountiful Technologies Father's Day", category: "Social Media & Marketing", blurb: "A Father's Day greeting design for Bountiful Technologies.", image: "/portfolio/bountiful-fathers-day.png", imageAlt: "Father's Day greeting design for Bountiful Technologies", size: "h", tint: "bg-coral", ...tbc },
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
  ["Ensign College", "BSC COMMOUNICATION AND DIGITAL CREATION"],
];
