import HeroSection from '../components/HeroSection';
import AdBanner from '../components/AdBanner';

const HomePage = () => {
  return (
    <div>
      {/* Ad Banner */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdBanner size="banner" />
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Tools Section - Placeholder for now */}
      <section id="tools-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AI Tools Directory
            </h2>
            <p className="text-lg text-gray-600">
              Browse our comprehensive collection of child-safe AI tools
            </p>
          </div>
          
          {/* Placeholder for tools grid and filters */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <p className="text-gray-600">
              Tools grid and filtering system will be implemented in the next phase
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

