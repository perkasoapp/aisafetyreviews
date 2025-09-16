// Utility functions for processing AI safety reviews data

export const parseCSVData = (csvText) => {
  const lines = csvText.split('\n');
  const headers = lines[0].split(',');
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '') continue;
    
    const values = parseCSVLine(lines[i]);
    if (values.length === headers.length) {
      const row = {};
      headers.forEach((header, index) => {
        row[header.trim()] = values[index]?.trim() || '';
      });
      data.push(row);
    }
  }
  
  return data;
};

// Helper function to properly parse CSV lines with quoted values
const parseCSVLine = (line) => {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current);
  return result;
};

// Process and clean tool data
export const processToolData = (rawData) => {
  return rawData.map(tool => ({
    slug: tool.slug || '',
    name: tool.Name || '',
    company: tool.company || '',
    url: tool.url || '',
    category: tool.category || '',
    subcategory: tool.subcategory || '',
    ageRecommendation: tool.age_recommendation || '',
    overallSafetyScore: parseFloat(tool.overall_safety_score) || null,
    freeVersion: tool.free_version === 'TRUE',
    freeTrial: tool.free_trial === 'TRUE',
    summary: tool['parent_summary.summary'] || '',
    pros: tool['parent_summary.pros'] || '',
    cons: tool['parent_summary.cons'] || '',
    metaDescription: tool['seo.meta_description'] || '',
    seoTitle: tool['seo.title'] || '',
    privacyScore: parseFloat(tool['privacy_protection.score']) || null,
    contentScore: parseFloat(tool['content_appropriateness.score']) || null,
    educationalScore: parseFloat(tool['educational_value.score']) || null,
    parentalControlsScore: parseFloat(tool['parental_controls.score']) || null,
    confidence: tool.confidence || '',
    evaluationCompleteness: tool.evaluation_completeness || '',
    // Store raw data for detailed pages
    rawData: tool
  }));
};

// Get unique categories for filtering
export const getUniqueCategories = (tools) => {
  const categories = tools.map(tool => tool.category).filter(Boolean);
  return [...new Set(categories)].sort();
};

// Get unique age recommendations for filtering
export const getUniqueAgeRecommendations = (tools) => {
  const ages = tools.map(tool => tool.ageRecommendation).filter(Boolean);
  return [...new Set(ages)].sort();
};

// Filter tools based on criteria
export const filterTools = (tools, filters) => {
  return tools.filter(tool => {
    // Safety score filter
    if (filters.minSafetyScore && tool.overallSafetyScore < filters.minSafetyScore) {
      return false;
    }
    if (filters.maxSafetyScore && tool.overallSafetyScore > filters.maxSafetyScore) {
      return false;
    }

    // Category filter
    if (filters.category && tool.category !== filters.category) {
      return false;
    }

    // Age recommendation filter
    if (filters.ageRecommendation && tool.ageRecommendation !== filters.ageRecommendation) {
      return false;
    }

    // Free version filter
    if (filters.freeVersion && !tool.freeVersion) {
      return false;
    }

    // Free trial filter
    if (filters.freeTrial && !tool.freeTrial) {
      return false;
    }

    // Search query filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const searchableText = `${tool.name} ${tool.company} ${tool.category} ${tool.summary}`.toLowerCase();
      if (!searchableText.includes(query)) {
        return false;
      }
    }

    return true;
  });
};

// Sort tools by various criteria
export const sortTools = (tools, sortBy = 'name') => {
  return [...tools].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'safetyScore':
        return (b.overallSafetyScore || 0) - (a.overallSafetyScore || 0);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });
};

// Get safety score color
export const getSafetyScoreColor = (score) => {
  if (score >= 4.5) return 'text-green-600 bg-green-100';
  if (score >= 3.5) return 'text-yellow-600 bg-yellow-100';
  if (score >= 2.5) return 'text-orange-600 bg-orange-100';
  return 'text-red-600 bg-red-100';
};

// Format safety score display
export const formatSafetyScore = (score) => {
  if (score === null || score === undefined) return 'N/A';
  return score.toFixed(1);
};

