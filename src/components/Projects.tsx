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

const projectsData = [ 

    {
      "title": "Sistem Informasi UMKM & Web Profil Kelurahan Oetete",
      "description": "Situs web untuk Kelurahan Oetete dengan informasi lengkap tentang berita, acara, layanan administrasi, dan umkm yang tersedia pada kelurahan",
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
      "title": "Sistem Informasi UMKM & Web Profil Kelurahan Fontein",
      "description": "Situs web interaktif untuk Kelurahan Fontein, menyediakan data umkm yang ada pada kelurahan, prosedur administrasi, dan pengumuman.",
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
      "description": "Mengembangkan aplikasi berbasis web yang dirancang untuk menguji kecepatan pengetikan dan akurasi dengan sintaks pemrograman.Memungkinkan pengguna untuk mempraktikkan kode pengetikan cuplikan dalam bahasa pemrograman populer, meningkatkan kecepatan dan Keakraban dengan sintaks.",
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
      "description": "Mengembangkan sistem pengelolaan limbah di mana pengguna dapat membuat akun dan memilih titik pengumpulan limbah untuk transaksi.",
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
      "description": "Situs web interaktif yang menyediakan jasa untuk membantu penulis dan penerbit dalam proses penerbitan buku serta pembuatan ISBN yang resmi, Artikel, dan berita terbaru.",
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
      "title": "Sistem Informasi UMKM & Web Profil Kelurahan Oebufu",
      "description": "Situs informatif untuk Kelurahan Oebufu, menyediakan berita terbaru, data umkm yang ada pada kelurahan, dan e-layanan untuk warga.",
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
      "title": "Sistem Informasi Verifikasi Berkas CSMS Limau Field",
      "description": "Sistem untuk verifikasi berkas terkait CSMS di Limau Field, membantu memastikan kepatuhan dengan standar keselamatan.",
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
      "description": "Mengembangkan situs web profil untuk Masjid Al Anshar Alak, termasuk acara Jadwal, pengumuman, juga sebuah artikel.",
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
      "title": "Sistem Informasi Geografis Fasilitas Pendidikan Kecamatan Kelapa Lima",
      "description": "Aplikasi SIG untuk pemetaan dan analisis fasilitas pendidikan di Kecamatan Kelapa Lima.",
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
      "title": "Sistem Pendukung Keputusan Pemberian Hak Pembebasan Bersyarat Kepada Narapidana dengan Metode TOPSIS berbasis Web",
      "description": "Sistem berbasis web untuk membantu keputusan pembebasan bersyarat dengan metode TOPSIS.",
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
      "title": "Litlane Book",
      "description": "Website untuk membaca buku gratis dengan berbagai genre untuk meningkatkan literasi.",
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
      "title": "Pengisian Buku Tamu LPPM",
      "description": "Membangun sistem buku tamu digital untuk LPPM undana untuk meningkatkan Proses perekaman data pengunjung.",
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
      "description": "Aplikasi web untuk mengelola tugas harian dan meningkatkan produktivitas.",
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
      "description": "Platform untuk top up game dengan cepat dan aman melalui Delta Store.",
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
      "description": "Blog tentang teknologi terbaru, tutorial, dan diskusi seputar dunia teknologi.",
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
      "title": "Seleksi Presentase Kelompok",
      "description": "Aplikasi untuk seleksi dan penilaian presentasi kelompok secara efektif.",
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
      "title": "Web Profil Kelurahan Oeba",
      "description": "Situs web interaktif untuk Kelurahan Oeba, memberikan akses mudah ke informasi desa, prosedur administrasi, dan pengumuman.",
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
      "title": "Web Profil Kelurahan Naioni",
      "description": "Situs web static untuk Kelurahan Naioni, dibuat sebagai program kerja KKN dengan tujuan memberikan akses mudah ke informasi desa, prosedur administrasi, dan pengumuman.",
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
      "description": "Game Arcade, dibuat saat tugas perkuliahan semester 4.",
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
      "title": "Sistem Kelola Absensi",
      "description": "Sistem yang dibuat untuk keperluan managemen absensi kelas dalam sebuah pelatihan dan mempermudah pemantauan kehadiran",
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
      "description": "Sistem Register yang digunakan untuk seminar International Conference on Agriculture, Food, Forestry and Agribusiness (ICAFFA) 2024",
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
      "description": "Website yang digunakan sekedarnya menampilkan data Pokemon",
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
      "description": "Undangan digital berbasis website dengan tampilan interaktif, dinamis, dan informatif",
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
              <div key={index} className="relative bg-gradient-to-r from-gray-600 to-gray-900 text-white shadow-lg rounded-lg p-4 transition transform hover:scale-105 hover:shadow-2xl">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-md mb-3 h-36 flex items-center justify-center bg-gray-700">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-contain rounded-t-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                <div className="flex space-x-2 mb-2">
                  {project.technologies?.map((tech, i) => (
                    <img
                      key={i}
                      src={tech.iconUrl}
                      alt={tech.name}
                      title={tech.name}
                      className="h-4 w-4"
                    />
                  ))}
                </div>

                {/* Hover Effect - GitHub Icon */}
                <a href={project.link} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity">
                  <FaGithub className="h-8 w-8 text-white" />
                </a>
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
