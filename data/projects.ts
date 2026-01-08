// Define the structure
export interface Project {
  id: number;
  title: string;
  url: string;
  image1: string;
  image2: string;
  // description: string;
}

// Ensure the word 'export' is right before 'const'
export const projects: Project[] = [
  {
    id: 1,
    title: "UX/UI design",
    url: "./ux-design",
    image1: "/projects/project1_1.jpg",
    image2: "/projects/project1_2.jpg"//,
    // description: "Detailed description here."
  },
  {
    id: 2,
    title: "Graphics design & motion graphics",
    url: "#",
    image1: "/projects/project2_1.gif",
    image2: "/projects/project2_2.jpg"//,
    // description: "Detailed description here."
  },
  {
    id: 3,
    title: "Illustrations & Visualisations",
    url: "#",
    image1: "/projects/project3_1.jpg",
    image2: "/projects/project3_2.jpg"//,
    // description: "Detailed description here."
  }
];