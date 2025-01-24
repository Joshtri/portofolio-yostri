import React, { useState, useEffect } from 'react';
import { ProjectProps } from '../types/ProjectProps';
// import projectsData from '../data/projects.json'; // Import the JSON data
import './noScrollBar.css';
import starsVideo from '../assets/stars.mp4';
import { FaProjectDiagram, FaGithub } from "react-icons/fa";
import deltaStore from '../assets/projects/delta-store.png';
import litlaneBook from '../assets/projects/litlane-book.png';
import masjidAlAnsharAlak from '../assets/projects/masjid-al-anshar-alak.png';
import mbulAdventures from '../assets/projects/mbul-adventures.png';
import pokemonList from '../assets/projects/pokemon-list.png';
import registerManagement from '../assets/projects/register-management.png';
import SeleksiApp from '../assets/projects/seleksi-app.png';
import siberCSMS from '../assets/projects/siber-csms.png';
import sistemKelolaAbsen from '../assets/projects/sistem-kelola-absen.png';
import spkLPIIA from '../assets/projects/spk-lp-iia.png';
import techTalkBlog from '../assets/projects/tech-talks-blog.png';
import todoListApp from '../assets/projects/todo-list-app.png';
import profilwebOeba from '../assets/projects/web-profil-oeba.png';
import profilwebNaioni from '../assets/projects/web-profil-naioni.png';
import profilwebOebufu from '../assets/projects/web-profil-oebufu.png';
import profilwebOetete from '../assets/projects/web-profil-oetete.png';
import profilwebFontein from '../assets/projects/web-profil-fontein.png';
import yayasanSirihPinangKebaikan from '../assets/projects/yasipikan.png';
import weddingInvitation from '../assets/projects/wedding-invitation.png';
import pengisianBukuTamuLPPM from '../assets/projects/pengisian-buku-tamu-lppm.png';
import natureCare from '../assets/projects/nature-care.png';
import codeTyper from '../assets/projects/code-typer.png';
import laundryDolphin from '../assets/projects/laundry-dolphin-kupang.png';

const projectsData = [ 

    {
      "title": "Information System for Data Collection of Church Church Camp of Airnona",
      "description": "Develop a web -based system to manage congregation data, streamline the administration of records and history of members.",
      "link": "#",
      "imageUrl": '',
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "MUI",
          "iconUrl": "https://cdn.simpleicons.org/mui/007FFF"
        },
        {
          "name": "Refine",
          "iconUrl": "https://cdn.simpleicons.org/refine/14141F"
        },
        {
          "name": "Prisma",
          "iconUrl": "https://cdn.simpleicons.org/prisma/2D3748"
        },
        {
          "name": "postgresql",
          "iconUrl": "https://cdn.simpleicons.org/postgresql/4169E1"
        },
        {
          "name": "React",
          "iconUrl": "https://cdn.simpleicons.org/react/61DAFB"
        },
        {
          "name": "Typescript",
          "iconUrl": "https://cdn.simpleicons.org/typescript/3178C6"
        }
      ]
    },

    {
      "title": "UMKM & Web Information System Profile of Oetete Village",
      "description": "Website for Oetete Kelurahan with complete information about news, events, administrative services, and MSMEs available in the Kelurahan ",
      "link": "https://weboetete.kupangkota.go.id",
      "imageUrl": profilwebOetete,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "Bootstrap",
          "iconUrl": "https://cdn.simpleicons.org/bootstrap/7952B3"
        },
        {
          "name": "MongoDB",
          "iconUrl": "https://cdn.simpleicons.org/mongodb/47A248"
        },
        {
          "name": "EJS",
          "iconUrl": "https://cdn.simpleicons.org/ejs/B4CA65"
        }
      ]
    },
    

    {
      "title": "UMKM & Web Information System Fontein Village Profile ",
      "description": "Interactive Website for Fontein Village, provides UMKM data in the village, administrative procedures, and announcements.",
      "link": "https://webfontein.kupangkota.go.id",
      "imageUrl": profilwebFontein,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "Bootstrap",
          "iconUrl": "https://cdn.simpleicons.org/bootstrap/7952B3"
        },
        {
          "name": "MongoDB",
          "iconUrl": "https://cdn.simpleicons.org/mongodb/47A248"
        },
        {
          "name": "EJS",
          "iconUrl": "https://cdn.simpleicons.org/ejs/B4CA65"
        }
      ]
    },

    {
      "title": "CodeTyper - Typing Test",
      "description": "Developing web -based applications designed to test typing speeds and accuracy with programming syntax. Allow users to practice typing code of snippets in popular programming languages, increasing speed and familiarity with syntax.",
      "link": "https://code-typer-mu.vercel.app",
      "imageUrl": codeTyper,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },

        {
          "name": "TailwindCSS",
          "iconUrl": "https://cdn.simpleicons.org/tailwindcss/06B6D4"
        },

        {
          "name": "React",
          "iconUrl": "https://cdn.simpleicons.org/react/61DAFB"
        },
        {
          "name": "Typescript",
          "iconUrl": "https://cdn.simpleicons.org/typescript/3178C6"
        }
      ]
    },

    {
      "title": "NatureCare (Wasted Bank System)",
      "description": "Develop a waste management system where users can create an account and choose waste collection points for transactions.",
      "link": "https://naturecare-eco.vercel.app",
      "imageUrl": natureCare,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "TailwindCSS",
          "iconUrl": "https://cdn.simpleicons.org/tailwindcss/06B6D4"
        },
        {
          "name": "MongoDB",
          "iconUrl": "https://cdn.simpleicons.org/mongodb/47A248"
        },
        {
          "name": "React",
          "iconUrl": "https://cdn.simpleicons.org/react/61DAFB"
        }
      ]
    },

    {
      "title": "Yayasan Sirih Pinang Kebaikan",
      "description": "Interactive websites that provide services to help writers and publishers in the process of publishing books and making official ISBNs, articles, and the latest news.",
      "link": "https://yayasan-sirih-pinang-kebaikan.com/",
      "imageUrl": yayasanSirihPinangKebaikan,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "TailwindCSS",
          "iconUrl": "https://cdn.simpleicons.org/tailwindcss/06B6D4"
        },
        {
          "name": "MongoDB",
          "iconUrl": "https://cdn.simpleicons.org/mongodb/47A248"
        },
        {
          "name": "React",
          "iconUrl": "https://cdn.simpleicons.org/react/61DAFB"
        }

      ]
    },
    {
      "title": "UMKM & Web Information System Profile of Oebufu Village",
      "description": "The informative site for Oebufu Village, provides the latest news, UMKM data in the village, and e-services for residents.",
      "link": "https://weboebufu.kupangkota.go.id",
      "imageUrl": profilwebOebufu,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "Bootstrap",
          "iconUrl": "https://cdn.simpleicons.org/bootstrap/7952B3"
        },
        {
          "name": "MongoDB",
          "iconUrl": "https://cdn.simpleicons.org/mongodb/47A248"
        },
        {
          "name": "EJS",
          "iconUrl": "https://cdn.simpleicons.org/ejs/B4CA65"
        }
      ]
    },
    {
      "title": "CSMS Limau Field for  Verification Information System ",
      "description": "The system for verification of the file related to CSMS in the Limau Field, helps ensure compliance with safety standards.",
      "link": "https://siber-csms-v44.vercel.app",
      "imageUrl": siberCSMS,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "Bootstrap",
          "iconUrl": "https://cdn.simpleicons.org/bootstrap/7952B3"
        },
        {
          "name": "MongoDB",
          "iconUrl": "https://cdn.simpleicons.org/mongodb/47A248"
        },
        {
          "name": "EJS",
          "iconUrl": "https://cdn.simpleicons.org/ejs/B4CA65"
        }
      ]
    },

    {
      "title": "Profile Website Masjid Al Anshar Alak",
      "description": "Developing a website profile website for the Al Anshar Alak Mosque, including schedules, announcements, as well as an article.",
      "link": "https://masjid-al-anshar-alak.com",
      "imageUrl": masjidAlAnsharAlak,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "MongoDB",
          "iconUrl": "https://cdn.simpleicons.org/mongodb/47A248"
        },
        {
          "name": "TailwindCSS",
          "iconUrl": "https://cdn.simpleicons.org/tailwindcss/06B6D4"
        },
        {
          "name": "React",
          "iconUrl": "https://cdn.simpleicons.org/react/61DAFB"
        }
      ]
    },

    {
      "title": "Geographic Information System for Educational Facilities in Kelapa Lima District",
      "description": "GIS application for mapping and analysis of educational facilities in Kelapa Lima District.",
      "link": "[link-to-project-5]",
      "imageUrl": "[link-to-image-5]",
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "Bootstrap",
          "iconUrl": "https://cdn.simpleicons.org/bootstrap/7952B3"
        },
        {
          "name": "MySQL",
          "iconUrl": "https://cdn.simpleicons.org/mysql/4479A1"
        },
        {
          "name": "EJS",
          "iconUrl": "https://cdn.simpleicons.org/ejs/B4CA65"
        }
      ]
    },
    {
      "title": "Decision Support System for granting parole rights to prisoners with web -based topsis methods",
      "description": "Web -based systems to help parole decisions with topsis methods.",
      "link": "https://spk-lp-iia.vercel.app",
      "imageUrl": spkLPIIA,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "Bulma CSS",
          "iconUrl": "https://cdn.simpleicons.org/bulma/00D1B2"
        },
        {
          "name": "MySQL",
          "iconUrl": "https://cdn.simpleicons.org/mysql/4479A1"
        },
        {
          "name": "EJS",
          "iconUrl": "https://cdn.simpleicons.org/ejs/B4CA65"
        }
      ]
    },

    {
      "title": "Dolphin Kupang laundry business web",
      "description": "Developing a laundry business web for Laundry Dolphin Kupang, allows customers to place an order via via Whats App and see the laundry profile with the services provided and packages and pricelists available on the web.",
      "link": "https://laundry-dolphin.vercel.app",
      "imageUrl": laundryDolphin,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "React",
          "iconUrl": "https://cdn.simpleicons.org/react/61DAFB"
        },
        {
          "name": "TailwindCSS",
          "iconUrl": "https://cdn.simpleicons.org/tailwindcss/06B6D4"
        },
      ]
    },

    {
      "title": "Litlane Book",
      "description": "Websites for reading free books with various genres to increase literacy.",
      "link": "https://litlane-book-app.vercel.app",
      "imageUrl": litlaneBook,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "Bootstrap",
          "iconUrl": "https://cdn.simpleicons.org/bootstrap/7952B3"
        },
        {
          "name": "MongoDB",
          "iconUrl": "https://cdn.simpleicons.org/mongodb/47A248"
        },
        {
          "name": "EJS",
          "iconUrl": "https://cdn.simpleicons.org/ejs/B4CA65"
        }
      ]
    },

    {
      "title": "LPPM Guest Book Filling",
      "description": "Build a digital guest book system for LPPM Undana to improve the recording of visitor data.",
      "link": "https://to-do-list-bs.vercel.app",
      "imageUrl": pengisianBukuTamuLPPM,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "Bulma CSS",
          "iconUrl": "https://cdn.simpleicons.org/bulma/00D1B2"
        },
        {
          "name": "MongoDB",
          "iconUrl": "https://cdn.simpleicons.org/mongodb/47A248"
        },
        {
          "name": "HBS",
          "iconUrl": "https://cdn.simpleicons.org/handlebarsdotjs/000000"
        }
      ]
    },
    {
      "title": "To-Do List Web App",
      "description": "Web applications to manage daily tasks and increase productivity.",
      "link": "https://to-do-list-bs.vercel.app",
      "imageUrl": todoListApp,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "Bootstrap",
          "iconUrl": "https://cdn.simpleicons.org/bootstrap/7952B3"
        },
        {
          "name": "MySQL",
          "iconUrl": "https://cdn.simpleicons.org/mysql/4479A1"
        },
        {
          "name": "EJS",
          "iconUrl": "https://cdn.simpleicons.org/ejs/B4CA65"
        }
      ]
    },
    {
      "title": "Top Up Game | Delta Store",
      "description": "Platforms for top up games quickly and safely through the Delta Store.",
      "link": "https://top-up-game-orcin.vercel.app",
      "imageUrl": deltaStore,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "Bootstrap",
          "iconUrl": "https://cdn.simpleicons.org/bootstrap/7952B3"
        },
        {
          "name": "MySQL",
          "iconUrl": "https://cdn.simpleicons.org/mysql/4479A1"
        },
        {
          "name": "EJS",
          "iconUrl": "https://cdn.simpleicons.org/ejs/B4CA65"
        }
      ]
    },
    {
      "title": "Tech Talk Blog",
      "description": "Blog about the latest technology, tutorials, and discussions about the world of technology.",
      "link": "https://tech-talk-blog-rho.vercel.app",
      "imageUrl": techTalkBlog,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "React",
          "iconUrl": "https://cdn.simpleicons.org/react/61DAFB"
        },
        {
          "name": "TailwindCSS",
          "iconUrl": "https://cdn.simpleicons.org/tailwindcss/06B6D4"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "MongoDB",
          "iconUrl": "https://cdn.simpleicons.org/mongodb/47A248"
        }
      ]
    },
    {
      "title": "Group percentage selection",
      "description": "Application for group presentation selection and assessment.",
      "link": "https://seleksi-random-kelompok-presentase.vercel.app",
      "imageUrl": SeleksiApp,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "EJS",
          "iconUrl": "https://cdn.simpleicons.org/ejs/B4CA65"
        },
        {
          "name": "TailwindCSS",
          "iconUrl": "https://cdn.simpleicons.org/tailwindcss/06B6D4"
        }
      ]
    },
    {
      "title": "Oeba Village Profile Web",
      "description": "The interactive website for Oeba Village, provides easy access to village information, administrative procedures, and announcements.",
      "link": "https://web-profil-oeba.vercel.app",
      "imageUrl": profilwebOeba,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "Bootstrap",
          "iconUrl": "https://cdn.simpleicons.org/bootstrap/7952B3"
        },
        {
          "name": "React",
          "iconUrl": "https://cdn.simpleicons.org/react/61DAFB"
        },
        {
          "name": "MongoDB",
          "iconUrl": "https://cdn.simpleicons.org/mongodb/47A248"
        }
      ]
    },
    {
      "title": "Naioni Kelurahan Web Profile",
      "description": "Static websites for Naioni Village, created as KKN work programs with the aim of providing easy access to village information, administrative procedures, and announcements.",
      "link": "https://tesamhrn.github.io/web-profil-naioni",
      "imageUrl": profilwebNaioni,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "Bootstrap",
          "iconUrl": "https://cdn.simpleicons.org/bootstrap/7952B3"
        },
        {
          "name": "EJS",
          "iconUrl": "https://cdn.simpleicons.org/ejs/B4CA65"
        }
      ]
    },
    {
      "title": "Mbul's Adventure",
      "description": "Arcade games, made during semester 4 lecture assignments.",
      "link": "https://itch.io/e/10612624/chipset-unc-updated-mbuls-adventure",
      "imageUrl": mbulAdventures,
      "technologies": [
        {
          "name": "Unity",
          "iconUrl": "https://cdn.simpleicons.org/unity/FFFFFF"
        },
        {
          "name": ".NET",
          "iconUrl": "https://cdn.simpleicons.org/dotnet/000000"
        }
      ]
    },
    {
      "title": "Attendance management system",
      "description": "The system created for the purposes of class attendance management in a training and facilitate the monitoring of attendance ",
      "link": "#",
      "imageUrl": sistemKelolaAbsen,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "Bootstrap",
          "iconUrl": "https://cdn.simpleicons.org/bootstrap/7952B3"
        },
        {
          "name": "EJS",
          "iconUrl": "https://cdn.simpleicons.org/ejs/B4CA65"
        }
      ]
    },
    {
      "title": "Register Management System ICAFFA",
      "description": "The register system used for the Seminar on the International Conference on Agriculture, Food, Forestry and Agribusiness (ICAFFA) 2024",
      "link": "#",
      "imageUrl": registerManagement,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "React",
          "iconUrl": "https://cdn.simpleicons.org/react/61DAFB"
        },
        {
          "name": "TailwindCSS",
          "iconUrl": "https://cdn.simpleicons.org/tailwindcss/06B6D4"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "MongoDB",
          "iconUrl": "https://cdn.simpleicons.org/mongodb/47A248"
        }
      ]
    },
    {
      "title": "Pokemon List",
      "description": "The website used is modestly displaying Pokemon data",
      "link": "https://pokemon-list-wine-ten.vercel.app",
      "imageUrl": pokemonList,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "Bootstrap",
          "iconUrl": "https://cdn.simpleicons.org/bootstrap/7952B3"
        },
        {
          "name": "EJS",
          "iconUrl": "https://cdn.simpleicons.org/ejs/B4CA65"
        }
      ]
    },
    {
      "title": "Wedding Invitation",
      "description": "Website -based digital invitations with an interactive, dynamic, and informative display",
      "link": "https://wedding-invitation-lofi-bwv3.vercel.app",
      "imageUrl": weddingInvitation,
      "technologies": [
        {
          "name": "Node JS",
          "iconUrl": "https://cdn.simpleicons.org/Node.js/5FA04E"
        },
        {
          "name": "React",
          "iconUrl": "https://cdn.simpleicons.org/react/61DAFB"
        },
        {
          "name": "TailwindCSS",
          "iconUrl": "https://cdn.simpleicons.org/tailwindcss/06B6D4"
        },
        {
          "name": "Express",
          "iconUrl": "https://cdn.simpleicons.org/express/000000"
        },
        {
          "name": "MongoDB",
          "iconUrl": "https://cdn.simpleicons.org/mongodb/47A248"
        }
      ]
    }
  
];

const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Loading state
  const itemsPerPage = 6; // Number of cards per page

  // Simulate loading effect
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a delay for loading
    return () => clearTimeout(timer);
  }, [currentPage]);

  // Calculate total pages
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  // Get current page projects
  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);

  // Handle pagination
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section id="projects" className="relative pb-24 pt-15 p-10 text-white">
      {/* Background video */}
      <video
        className="absolute inset-0 object-cover w-full h-full -z-10"
        src={starsVideo} // Replace with the path to your video file
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      ></video>

      <div className="relative z-10">
        <h2 className="text-4xl font-semibold mb-8 text-center text-white flex items-center justify-center gap-2">
          <FaProjectDiagram className='text-4xl text-green-400' />
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            // Skeleton loading animation
            Array.from({ length: itemsPerPage }).map((_, index) => (
              <div key={index} className="relative bg-gradient-to-r from-gray-600 to-gray-900 text-white shadow-lg rounded-lg p-4 animate-pulse">
                <div className="h-36 bg-gray-300 rounded mb-3"></div>
                <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
                <div className="flex space-x-2">
                  <div className="h-4 w-4 bg-gray-300 rounded"></div>
                  <div className="h-4 w-4 bg-gray-300 rounded"></div>
                  <div className="h-4 w-4 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))
          ) : (
            currentProjects.map((project: ProjectProps, index) => (
<div
  key={index}
  className="relative bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white shadow-md rounded-lg p-4 transition transform hover:scale-105 hover:shadow-2xl group"
>
  {/* Project Image */}
  <div className="relative overflow-hidden rounded-md mb-3 h-40 flex items-center justify-center bg-gray-700">
    {project.imageUrl ? (
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover rounded-md"
      />
    ) : (
      <div className="w-full h-full bg-gray-500 flex items-center justify-center">
        <span className="text-gray-300 text-sm">No Image</span>
      </div>
    )}
    {/* Hover Effect */}
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-60 transition-opacity"
    >
      <FaGithub className="h-8 w-8 text-white" />
    </a>
  </div>

  {/* Project Title */}
  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
  <p className="text-gray-300 text-sm mb-3">{project.description}</p>

  {/* Technologies */}
  <div className="flex space-x-3 mb-2">
    {project.technologies?.map((tech, i) => (
      <div key={i} className="flex items-center space-x-1">
        <img
          src={tech.iconUrl}
          alt={tech.name}
          title={tech.name}
          className="h-5 w-5 object-contain"
        />
        {/* <span className="text-xs text-gray-400">{tech.name}</span> */}
      </div>
    ))}
  </div>
</div>

            ))
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-green-400 text-white' : 'bg-gray-800 text-gray-400'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
