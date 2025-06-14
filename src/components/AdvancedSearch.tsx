
import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';

interface AdvancedSearchProps {
  onSearch: (filters: SearchFilters) => void;
  subcategories: string[];
  locations: string[];
}

interface SearchFilters {
  searchTerm: string;
  subcategory: string;
  location: string;
}

const AdvancedSearch: React.FC<AdvancedSearchProps> = ({ onSearch, subcategories, locations }) => {
  const [filters, setFilters] = useState<SearchFilters>({
    searchTerm: '',
    subcategory: '',
    location: '',
  });

  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onSearch(newFilters);
  };

  return (
    <div className="mb-6">
      {/* Main Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search services, names, or specialities..."
          value={filters.searchTerm}
          onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`absolute right-3 top-3 p-1 rounded transition-colors ${
            showFilters ? 'text-blue-600 bg-blue-50' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <Filter size={20} />
        </button>
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subcategory
            </label>
            <select
              value={filters.subcategory}
              onChange={(e) => handleFilterChange('subcategory', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Subcategories</option>
              {subcategories.map((sub, index) => (
                <option key={index} value={sub}>{sub}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="inline w-4 h-4 mr-1" />
              Location
            </label>
            <select
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Locations</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedSearch;
