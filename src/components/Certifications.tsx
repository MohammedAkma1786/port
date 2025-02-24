const Certifications = () => {
  return (
    <div className="py-20 bg-[#0F0F0F] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 rounded-lg bg-black/50 backdrop-blur-sm animate-fade-up hover:scale-105 transition-transform">
            <img
              src="/uploads/az-900.png"
              alt="Microsoft Azure Certification"
              className="w-full rounded-lg"
            />
          </div>
          <div className="p-4 rounded-lg bg-black/50 backdrop-blur-sm animate-fade-up hover:scale-105 transition-transform">
            <img
              src="/uploads/aws.png"
              alt="AWS Certification"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;