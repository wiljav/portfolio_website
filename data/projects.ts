// Define the structure
export interface Project {
  id: number;
  title: string;
  image1: string;
  image2: string;
  // description: string;
}

// Ensure the word 'export' is right before 'const'
export const projects: Project[] = [
  {
    id: 1,
    title: "UX/UI design",
    image1: "/projects/project1.jpg",
    image2: "/projects/project2.jpg"//,
    // description: "Detailed description here."
  }
];