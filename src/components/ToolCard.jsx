import { Link } from 'react-router-dom';
import { Star, Gift, Clock, ExternalLink } from 'lucide-react';
import { getSafetyScoreColor, formatSafetyScore } from '../utils/dataProcessor';

const ToolCard = ({ tool }) => {
  const safetyScoreColor = getSafetyScoreColor(tool.overallSafetyScore);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {tool.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              by {tool.company}
            </p>
            <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
              {tool.category}
            </span>
          </div>
          
          {/* Safety Score */}
          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${safetyScoreColor}`}>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1" />
              {formatSafetyScore(tool.overallSafetyScore)}
            </div>
          </div>
        </div>

        {/* Summary */}
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {tool.summary || 'No summary available.'}
        </p>

        {/* Features */}
        <div className="flex items-center space-x-4 mb-4">
          {tool.freeVersion && (
            <div className="flex items-center text-green-600 text-sm">
              <Gift className="h-4 w-4 mr-1" />
              Free
            </div>
          )}
          {tool.freeTrial && (
            <div className="flex items-center text-blue-600 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              Free Trial
            </div>
          )}
          {tool.ageRecommendation && (
            <div className="text-gray-600 text-sm">
              Age: {tool.ageRecommendation}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <Link
            to={`/${tool.slug}`}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            See Full Review
          </Link>
          {tool.url && (
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              title="Visit website"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolCard;

