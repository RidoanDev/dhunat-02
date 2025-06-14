
import React, { useState } from 'react';
import Header from '../../components/Header';
import BottomNavBar from '../../components/BottomNavBar';
import AdvancedSearch from '../../components/AdvancedSearch';
import ServiceDetails from '../../components/ServiceDetails';
import { ShoppingCart } from 'lucide-react';

const TodaysMarket = () => {
  const marketServices = [
    {
      id: 1,
      name: "ধুনট কৃষি বাজার",
      phone: "+880171-234-5678",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "সবজি বাজার",
      location: "কেন্দ্রীয় বাজার",
      rating: 4.3,
      hours: "ভোর ৫টা - সন্ধ্যা ৭টা",
      services: ["তাজা সবজি", "ফলমূল", "মাছ", "মাংস", "মুদি সামগ্রী"],
      email: "dhunatmarket@email.com"
    },
    {
      id: 2,
      name: "নিউ মার্কেট কমপ্লেক্স",
      phone: "+880181-987-6543",
      address: "নিউ মার্কেট, ধুনট",
      subcategory: "শপিং মল",
      location: "নিউ মার্কেট",
      rating: 4.1,
      hours: "সকাল ৯টা - রাত ৯টা",
      services: ["কাপড়চোপড়", "জুতা", "ইলেক্ট্রনিক্স", "কসমেটিক্স"]
    }
  ];

  const [filteredServices, setFilteredServices] = useState(marketServices);

  const subcategories = ["সকল", "সবজি বাজার", "শপিং মল", "মাছের বাজার", "কাপড়ের দোকান"];
  const locations = ["সকল এলাকা", "কেন্দ্রীয় বাজার", "নিউ মার্কেট", "পুরাতন বাজার"];

  const handleSearch = (filters: { searchTerm: string; subcategory: string; location: string }) => {
    let filtered = marketServices.filter(service => {
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
          <ShoppingCart className="text-yellow-600 mr-3" size={24} />
          <h1 className="text-2xl font-bold text-gray-900">আজকের বাজার</h1>
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
            <ShoppingCart className="text-gray-400 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">কোন সেবা পাওয়া যায়নি</h3>
            <p className="text-gray-600">অনুসন্ধানের শর্ত পরিবর্তন করে আবার চেষ্টা করুন।</p>
          </div>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default TodaysMarket;
