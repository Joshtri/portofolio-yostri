import React, { useEffect, useRef } from 'react';
import { Card } from 'flowbite-react';
import './noScrollBar.css';

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const projects: ProjectProps[] = [
  {
    title: 'Web Profil Kelurahan Oetete',
    description: 'Description of Project 1.',
    link: '[link-to-project-1]',
    imageUrl: '[link-to-image-1]',
  },
  {
    title: 'Web Profil Kelurahan Fontein',
    description: 'Description of Project 2.',
    link: '[link-to-project-2]',
    imageUrl: '[link-to-image-2]',
  },
  {
    title: 'Web Profil Kelurahan Oebufu',
    description: 'Description of Project 3.',
    link: '[link-to-project-3]',
    imageUrl: '[link-to-image-3]',
  },
  {
    title: 'Sistem Informasi Verifikasi Berkas CSMS Limau Field',
    description: 'Description of Project 4.',
    link: '[link-to-project-4]',
    imageUrl: '[link-to-image-4]',
  },
  {
    title: 'Sistem Informasi Geografis Fasilitas Pendidikan Kecamatan Kelapa Lima',
    description: 'Description of Project 5.',
    link: '[link-to-project-5]',
    imageUrl: '[link-to-image-5]',
  },
  {
    title: 'Sistem Pendukung Keputusan Pemberian Hak Pembebasan Bersyarat Kepada Narapidana dengan Metode TOPSIS ',
    description: 'Description of Project 6.',
    link: '[link-to-project-6]',
    imageUrl: '[link-to-image-6]',
  },
  // Tambahkan proyek lain di sini

  {
    title: 'Sistem Pendukung Keputusan Pemberian Hak Pembebasan Bersyarat Kepada Narapidana dengan Metode TOPSIS ',
    description: 'Description of Project 6.',
    link: '[link-to-project-6]',
    imageUrl: '[link-to-image-6]',
  },

  {
    title: 'Sistem Pendukung Keputusan Pemberian Hak Pembebasan Bersyarat Kepada Narapidana dengan Metode TOPSIS ',
    description: 'Description of Project 6.',
    link: '[link-to-project-6]',
    imageUrl: '[link-to-image-6]',
  },

  {
    title: 'Sistem Pendukung Keputusan Pemberian Hak Pembebasan Bersyarat Kepada Narapidana dengan Metode TOPSIS ',
    description: 'Description of Project 6.',
    link: '[link-to-project-6]',
    imageUrl: '[link-to-image-6]',
  },
];

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        // Scroll ke kanan 200px
        scrollRef.current.scrollBy({
          left: 200,
          behavior: 'smooth',
        });

        // Jika scroll telah mencapai setengah dari total panjang
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          // Kembali ke awal tanpa transisi
          scrollRef.current.scrollTo({
            left: 0,
            behavior: 'auto',
          });
        }
      }
    };

    const interval = setInterval(scroll, 3000); // Scroll setiap 3 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, []);

  return (
    <section id="projects" className="mb-8">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <div className="overflow-hidden relative">
        <div ref={scrollRef} className="flex space-x-4 overflow-x-auto no-scrollbar">
          {/* Duplikat konten untuk memberikan efek loop */}
          {[...projects, ...projects].map((project, index) => (
            <div key={index} className="flex-shrink-0 w-96">
              <Card className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-36 object-cover" />
                <div className="p-3">
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-gray-700 text-xs mb-2">{project.description}</p>
                  <a href={project.link} className="text-blue-500 hover:underline text-xs">
                    View Project
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
