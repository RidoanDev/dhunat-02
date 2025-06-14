
import React, { useState } from 'react';
import Header from '../../components/Header';
import BottomNavBar from '../../components/BottomNavBar';
import AdvancedSearch from '../../components/AdvancedSearch';
import ServiceDetails from '../../components/ServiceDetails';
import { Scale } from 'lucide-react';

const Lawyer = () => {
  const lawyerServices = [
    {
      id: 1,
      name: "ব্যারিস্টার মো. রহমান",
      phone: "+880171-234-5678",
      address: "আদালত পাড়া, ধুনট",
      subcategory: "ফৌজদারি আইনজীবী",
      location: "আদালত এলাকা",
      rating: 4.6,
      hours: "সকাল ৯টা - বিকাল ৫টা",
      services: ["ফৌজদারি মামলা", "জামিন আবেদন", "আপিল", "আইনি পরামর্শ"],
      email: "barrister.rahman@law.com"
    },
    {
      id: 2,
      name: "আইনজীবী ফাতেমা খাতুন",
      phone: "+880181-987-6543",
      address: "আদালত রোড, ধুনট",
      subcategory: "দেওয়ানি আইনজীবী",
      location: "আদালত এলাকা",
      rating: 4.4,
      hours: "সকাল ১০টা - সন্ধ্যা ৬টা",
      services: ["দেওয়ানি মামলা", "সম্পত্তি বিরোধ", "পারিবারিক আইন", "চুক্তি আইন"]
    }
  ];

  const [filteredServices, setFilteredServices] = useState(lawyerServices);

  const subcategories = ["সকল", "ফৌজদারি আইনজীবী", "দেওয়ানি আইনজীবী", "পারিবারিক আইন", "ব্যবসায়িক আইন"];
  const locations = ["সকল এলাকা", "আদালত এলাকা", "কেন্দ্রীয় বাজার"];

  const handleSearch = (filters: { searchTerm: string; subcategory: string; location: string }) => {
    let filtered = lawyerServices.filter(service => {
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
          <Scale className="text-blue-600 mr-3" size={24} />
          <h1 className="text-2xl font-bold text-gray-900">আইনজীবী</h1>
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
            <Scale className="text-gray-400 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">কোন সেবা পাওয়া যায়নি</h3>
            <p className="text-gray-600">অনুসন্ধানের শর্ত পরিবর্তন করে আবার চেষ্টা করুন।</p>
          </div>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Lawyer;
