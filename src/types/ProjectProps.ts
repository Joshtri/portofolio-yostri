export interface Technology {
    name: string;
    iconUrl: string;
  }
  
  export interface ProjectProps {
    title: string;
    description: string;
    link: string;
    imageUrl: string;
    technologies?: Technology[]; // Make this optional with '?'
  }
      