import AdBanner from '../components/AdBanner';
import { Mail, MessageCircle } from 'lucide-react';

const ContactPage = () => {
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
            Contact Us
          </h1>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Have questions about AI safety for children? We're here to help.
            </p>
            
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <a 
                  href="mailto:aisafetyreviews@gmail.com" 
                  className="text-blue-600 hover:text-blue-700"
                >
                  aisafetyreviews@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MessageCircle className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Response Time</p>
                <p className="text-gray-600">We typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

