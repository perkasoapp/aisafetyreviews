import AdBanner from '../components/AdBanner';

const PrivacyPage = () => {
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
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Privacy policy and data protection information will be added here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;

