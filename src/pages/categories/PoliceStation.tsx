
import React, { useState } from 'react';
import Header from '../../components/Header';
import BottomNavBar from '../../components/BottomNavBar';
import AdvancedSearch from '../../components/AdvancedSearch';
import ServiceDetails from '../../components/ServiceDetails';
import { Shield } from 'lucide-react';

const PoliceStation = () => {
  const policeServices = [
    {
      id: 1,
      name: "ধুনট থানা",
      phone: "+880582-456789",
      address: "থানা রোড, ধুনট সদর",
      subcategory: "মূল থানা",
      location: "ধুনট সদর",
      rating: 4.0,
      hours: "২৪ ঘণ্টা সেবা",
      services: ["জিডি", "মামলা দায়ের", "জরুরি সেবা", "ট্রাফিক নিয়ন্ত্রণ"],
      email: "dhunat.police@police.gov.bd"
    },
    {
      id: 2,
      name: "ধুনট ট্রাফিক পুলিশ",
      phone: "+880171-999888",
      address: "মেইন রোড, ধুনট বাজার",
      subcategory: "ট্রাফিক পুলিশ",
      location: "কেন্দ্রীয় বাজার",
      rating: 3.8,
      hours: "সকাল ৬টা - রাত ১০টা",
      services: ["ট্রাফিক নিয়ন্ত্রণ", "লাইসেন্স চেক", "দুর্ঘটনা হ্যান্ডলিং"]
    }
  ];

  const [filteredServices, setFilteredServices] = useState(policeServices);

  const subcategories = ["সকল", "মূল থানা", "ট্রাফিক পুলিশ", "ওসি অফিস", "তদন্ত বিভাগ"];
  const locations = ["সকল এলাকা", "ধুনট সদর", "কেন্দ্রীয় বাজার", "স্টেশন এলাকা"];

  const handleSearch = (filters: { searchTerm: string; subcategory: string; location: string }) => {
    let filtered = policeServices.filter(service => {
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
          <Shield className="text-blue-600 mr-3" size={24} />
          <h1 className="text-2xl font-bold text-gray-900">থানা</h1>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-800 text-sm">
            <strong>জরুরি:</strong> জরুরি পরিস্থিতিতে ৯৯৯ নম্বরে কল করুন।
          </p>
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
            <Shield className="text-gray-400 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">কোন সেবা পাওয়া যায়নি</h3>
            <p className="text-gray-600">অনুসন্ধানের শর্ত পরিবর্তন করে আবার চেষ্টা করুন।</p>
          </div>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default PoliceStation;
