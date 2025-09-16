import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';

const FilterSidebar = ({ 
  filters, 
  onFiltersChange, 
  categories, 
  ageRecommendations,
  isOpen,
  onToggle 
}) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleFilterChange = (key, value) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      searchQuery: '',
      category: '',
      ageRecommendation: '',
      minSafetyScore: null,
      maxSafetyScore: null,
      freeVersion: false,
      freeTrial: false
    };
    setLocalFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const sidebarContent = (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </h3>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          Clear All
        </button>
      </div>

      {/* Search */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search Tools
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, company, or category..."
            value={localFilters.searchQuery}
            onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Safety Score Range */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Safety Score Range
        </label>
        <div className="space-y-2">
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              min="0"
              max="5"
              step="0.1"
              value={localFilters.minSafetyScore || ''}
              onChange={(e) => handleFilterChange('minSafetyScore', e.target.value ? parseFloat(e.target.value) : null)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Max"
              min="0"
              max="5"
              step="0.1"
              value={localFilters.maxSafetyScore || ''}
              onChange={(e) => handleFilterChange('maxSafetyScore', e.target.value ? parseFloat(e.target.value) : null)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="text-xs text-gray-500">Score range: 0.0 - 5.0</div>
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <select
          value={localFilters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Age Recommendation Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Age Recommendation
        </label>
        <select
          value={localFilters.ageRecommendation}
          onChange={(e) => handleFilterChange('ageRecommendation', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Ages</option>
          {ageRecommendations.map(age => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
      </div>

      {/* Checkbox Filters */}
      <div className="space-y-3">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="freeVersion"
            checked={localFilters.freeVersion}
            onChange={(e) => handleFilterChange('freeVersion', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="freeVersion" className="ml-2 text-sm text-gray-700">
            Free Version Available
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="freeTrial"
            checked={localFilters.freeTrial}
            onChange={(e) => handleFilterChange('freeTrial', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="freeTrial" className="ml-2 text-sm text-gray-700">
            Free Trial Available
          </label>
        </div>
      </div>
    </div>
  );

  // Mobile overlay
  if (isOpen) {
    return (
      <>
        {/* Overlay */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
        
        {/* Mobile Sidebar */}
        <div className="fixed inset-y-0 left-0 w-80 bg-white shadow-xl z-50 lg:hidden overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button
                onClick={onToggle}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {sidebarContent}
          </div>
        </div>
      </>
    );
  }

  // Desktop sidebar
  return (
    <div className="hidden lg:block w-80 bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-fit sticky top-24">
      {sidebarContent}
    </div>
  );
};

export default FilterSidebar;

