import { Shield, Star, Users, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const trustIndicators = [
    { icon: Shield, text: 'Expert Safety Reviews', count: '173+' },
    { icon: Star, text: 'Trusted by Parents', count: '10K+' },
    { icon: Users, text: 'Child Safety Experts', count: '25+' },
    { icon: CheckCircle, text: 'Verified Evaluations', count: '100%' },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find <span className="text-blue-600">Safe AI Tools</span>
            <br />
            for Your Children
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive safety evaluations and expert reviews to help you choose 
            the right AI tools for your family with confidence.
          </p>

          {/* Trust Building Statement */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 max-w-4xl mx-auto border border-gray-100">
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold text-blue-600">Every tool is thoroughly evaluated</span> by our team of child safety experts 
              across privacy protection, content appropriateness, educational value, and parental controls.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                COPPA Compliance Checked
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                Privacy Policies Reviewed
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                Age-Appropriate Content
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                Parental Guidance Provided
              </span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3">
                  <indicator.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{indicator.count}</div>
                <div className="text-sm text-gray-600">{indicator.text}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('tools-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Browse Safe AI Tools
            </button>
            <a 
              href="/safety-guide" 
              className="text-blue-600 hover:text-blue-700 px-8 py-4 text-lg font-semibold transition-colors duration-200 border border-blue-600 rounded-lg hover:bg-blue-50"
            >
              Learn About AI Safety
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

