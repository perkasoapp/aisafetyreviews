import AdBanner from '../components/AdBanner';

const SafetyGuidePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Ad Banner */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdBanner size="banner" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            AI Safety Guide for Parents
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive safety guide content will be added here to help parents 
            understand AI tool safety and make informed decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafetyGuidePage;

