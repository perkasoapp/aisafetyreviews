import { useState } from 'react';
import { Filter } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import AdBanner from '../components/AdBanner';
import FilterSidebar from '../components/FilterSidebar';
import ToolsGrid from '../components/ToolsGrid';
import { useToolsData } from '../hooks/useToolsData';

const HomePage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const {
    tools,
    loading,
    error,
    filters,
    categories,
    ageRecommendations,
    updateFilters,
    filteredCount,
    totalTools
  } = useToolsData();

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Data</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

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

      {/* Tools Section */}
      <section id="tools-section" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AI Tools Directory
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Browse our comprehensive collection of child-safe AI tools
            </p>
            
            {/* Stats */}
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
              <span>Total Tools: {totalTools}</span>
              <span>Showing: {filteredCount}</span>
            </div>
          </div>
          
          <div className="flex gap-8">
            {/* Mobile Filter Button */}
            <div className="lg:hidden fixed bottom-6 right-6 z-30">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
              >
                <Filter className="h-6 w-6" />
              </button>
            </div>

            {/* Filter Sidebar */}
            <FilterSidebar
              filters={filters}
              onFiltersChange={updateFilters}
              categories={categories}
              ageRecommendations={ageRecommendations}
              isOpen={isFilterOpen}
              onToggle={() => setIsFilterOpen(!isFilterOpen)}
            />

            {/* Tools Grid */}
            <div className="flex-1">
              <ToolsGrid tools={tools} loading={loading} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

