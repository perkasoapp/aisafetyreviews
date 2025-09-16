import { useState, useEffect, useMemo } from 'react';
import { parseCSVData, processToolData, getUniqueCategories, getUniqueAgeRecommendations, filterTools, sortTools } from '../utils/dataProcessor';

export const useToolsData = () => {
  const [rawData, setRawData] = useState([]);
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    searchQuery: '',
    category: '',
    ageRecommendation: '',
    minSafetyScore: null,
    maxSafetyScore: null,
    freeVersion: false,
    freeTrial: false
  });
  const [sortBy, setSortBy] = useState('name');

  // Load CSV data
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/src/assets/DirectoryDataREVISED.csv');
        if (!response.ok) {
          throw new Error('Failed to load data');
        }
        const csvText = await response.text();
        const parsedData = parseCSVData(csvText);
        const processedTools = processToolData(parsedData);
        
        setRawData(parsedData);
        setTools(processedTools);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error loading tools data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Get unique values for filters
  const categories = useMemo(() => getUniqueCategories(tools), [tools]);
  const ageRecommendations = useMemo(() => getUniqueAgeRecommendations(tools), [tools]);

  // Apply filters and sorting
  const filteredAndSortedTools = useMemo(() => {
    const filtered = filterTools(tools, filters);
    return sortTools(filtered, sortBy);
  }, [tools, filters, sortBy]);

  // Get tool by slug
  const getToolBySlug = (slug) => {
    return tools.find(tool => tool.slug === slug);
  };

  // Update filters
  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  // Update sorting
  const updateSorting = (newSortBy) => {
    setSortBy(newSortBy);
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      searchQuery: '',
      category: '',
      ageRecommendation: '',
      minSafetyScore: null,
      maxSafetyScore: null,
      freeVersion: false,
      freeTrial: false
    });
  };

  return {
    tools: filteredAndSortedTools,
    allTools: tools,
    loading,
    error,
    filters,
    sortBy,
    categories,
    ageRecommendations,
    updateFilters,
    updateSorting,
    resetFilters,
    getToolBySlug,
    totalTools: tools.length,
    filteredCount: filteredAndSortedTools.length
  };
};

