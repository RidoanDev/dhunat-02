
import React, { useState } from 'react';
import Header from './Header';
import BottomNavBar from './BottomNavBar';
import AdvancedSearch from './AdvancedSearch';
import ServiceDetails from './ServiceDetails';
import { LucideIcon } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  phone?: string;
  address?: string;
  email?: string;
  subcategory: string;
  location: string;
  rating?: number;
  hours?: string;
  services?: string[];
}

interface CategoryTemplateProps {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  services: Service[];
  subcategories: string[];
  locations: string[];
  emptyStateMessage?: string;
}

const CategoryTemplate: React.FC<CategoryTemplateProps> = ({
  title,
  icon: IconComponent,
  iconColor,
  services,
  subcategories,
  locations,
  emptyStateMessage = "কোন সেবা পাওয়া যায়নি"
}) => {
  const [filteredServices, setFilteredServices] = useState(services);

  const handleSearch = (filters: { searchTerm: string; subcategory: string; location: string }) => {
    let filtered = services.filter(service => {
      const matchesSearch = !filters.searchTerm || 
        service.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        service.subcategory.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        service.services?.some(s => s.toLowerCase().includes(filters.searchTerm.toLowerCase()));

      const matchesSubcategory = !filters.subcategory || filters.subcategory === "সকল" || service.subcategory === filters.subcategory;
      const matchesLocation = !filters.location || filters.location === "সকল এলাকা" || service.location === filters.location;

      return matchesSearch && matchesSubcategory && matchesLocation;
    });

    setFilteredServices(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-4 py-6 pb-20">
        <div className="flex items-center mb-6">
          <IconComponent className={`${iconColor} mr-3`} size={24} />
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        </div>

        <AdvancedSearch
          onSearch={handleSearch}
          subcategories={subcategories}
          locations={locations}
        />

        <div className="space-y-4">
          {filteredServices.map((service) => (
            <ServiceDetails
              key={service.id}
              name={service.name}
              phone={service.phone}
              address={service.address}
              email={service.email}
              subcategory={service.subcategory}
              openingHours={service.hours}
              rating={service.rating}
              services={service.services}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <IconComponent className="text-gray-400 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">{emptyStateMessage}</h3>
            <p className="text-gray-600">অনুসন্ধানের শর্ত পরিবর্তন করে আবার চেষ্টা করুন।</p>
          </div>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default CategoryTemplate;
