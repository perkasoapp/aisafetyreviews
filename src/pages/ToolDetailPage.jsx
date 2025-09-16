import { useParams } from 'react-router-dom';
import AdBanner from '../components/AdBanner';

const ToolDetailPage = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Ad Banner */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdBanner size="banner" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Tool Detail: {slug}
              </h1>
              <p className="text-gray-600">
                Detailed tool review will be implemented in the next phase with data from CSV
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <AdBanner size="sidebar" />
              <AdBanner size="sidebar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailPage;

