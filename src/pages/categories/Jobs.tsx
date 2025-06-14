
import React, { useState } from 'react';
import Header from '../../components/Header';
import BottomNavBar from '../../components/BottomNavBar';
import AdvancedSearch from '../../components/AdvancedSearch';
import ServiceDetails from '../../components/ServiceDetails';
import { Briefcase } from 'lucide-react';

const Jobs = () => {
  const jobServices = [
    {
      id: 1,
      name: "ধুনট জব সেন্টার",
      phone: "+880171-234-5678",
      address: "কলেজ রোড, ধুনট",
      subcategory: "চাকরির তথ্য",
      location: "কলেজ এলাকা",
      rating: 4.2,
      hours: "সকাল ৯টা - বিকাল ৫টা",
      services: ["চাকরির বিজ্ঞাপন", "সিভি তৈরি", "ইন্টারভিউ প্রস্তুতি", "ক্যারিয়ার গাইডেন্স"],
      email: "info@dhunatjobs.com"
    },
    {
      id: 2,
      name: "স্কিল ডেভেলপমেন্ট সেন্টার",
      phone: "+880181-987-6543",
      address: "ট্রেনিং সেন্টার, ধুনট",
      subcategory: "দক্ষতা উন্নয়ন",
      location: "ট্রেনিং এলাকা",
      rating: 4.5,
      hours: "সকাল ৮টা - সন্ধ্যা ৬টা",
      services: ["কম্পিউটার প্রশিক্ষণ", "ভাষা শিক্ষা", "কারিগরি প্রশিক্ষণ", "সার্টিফিকেট কোর্স"]
    }
  ];

  const [filteredServices, setFilteredServices] = useState(jobServices);

  const subcategories = ["সকল", "চাকরির তথ্য", "দক্ষতা উন্নয়ন", "সরকারি চাকরি", "বেসরকারি চাকরি"];
  const locations = ["সকল এলাকা", "কলেজ এলাকা", "ট্রেনিং এলাকা", "কেন্দ্রীয় বাজার"];

  const handleSearch = (filters: { searchTerm: string; subcategory: string; location: string }) => {
    let filtered = jobServices.filter(service => {
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
          <Briefcase className="text-green-600 mr-3" size={24} />
          <h1 className="text-2xl font-bold text-gray-900">চাকরি</h1>
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
            <Briefcase className="text-gray-400 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">কোন সেবা পাওয়া যায়নি</h3>
            <p className="text-gray-600">অনুসন্ধানের শর্ত পরিবর্তন করে আবার চেষ্টা করুন।</p>
          </div>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Jobs;
