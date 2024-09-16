const Training: React.FC = () => {
    return (
      <section id="training" className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Training</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="space-y-4">
            <li>
              <h3 className="text-2xl font-semibold">Training Course 1</h3>
              <p>Description of Training Course 1.</p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold">Training Course 2</h3>
              <p>Description of Training Course 2.</p>
            </li>
            {/* Tambahkan pelatihan lain di sini */}
          </ul>
        </div>
      </section>
    );
  };
  
  export default Training;
  