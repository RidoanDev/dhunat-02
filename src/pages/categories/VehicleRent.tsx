
import React, { useState } from 'react';
import Header from '../../components/Header';
import BottomNavBar from '../../components/BottomNavBar';
import AdvancedSearch from '../../components/AdvancedSearch';
import ServiceDetails from '../../components/ServiceDetails';
import { Car } from 'lucide-react';

const VehicleRent = () => {
  const vehicleServices = [
    {
      id: 1,
      name: "ধুনট কার রেন্টাল",
      phone: "+880171-234-5678",
      address: "বাস স্ট্যান্ড, ধুনট",
      subcategory: "গাড়ি ভাড়া",
      location: "বাস স্ট্যান্ড",
      rating: 4.3,
      hours: "সকাল ৬টা - রাত ১০টা",
      services: ["মাইক্রোবাস", "প্রাইভেট কার", "পিকআপ", "ট্রাক"],
      email: "info@dhunatcarrental.com"
    },
    {
      id: 2,
      name: "সফল ট্রান্সপোর্ট",
      phone: "+880181-987-6543",
      address: "স্টেশন রোড, ধুনট",
      subcategory: "বাস ভাড়া",
      location: "স্টেশন এলাকা",
      rating: 4.1,
      hours: "২৪ ঘণ্টা সেবা",
      services: ["বাস ভাড়া", "কোচ সার্ভিস", "লং রুট", "লোকাল ট্রিপ"]
    }
  ];

  const [filteredServices, setFilteredServices] = useState(vehicleServices);

  const subcategories = ["সকল", "গাড়ি ভাড়া", "বাস ভাড়া", "মোটরসাইকেল", "ট্রাক ভাড়া"];
  const locations = ["সকল এলাকা", "বাস স্ট্যান্ড", "স্টেশন এলাকা", "কেন্দ্রীয় বাজার"];

  const handleSearch = (filters: { searchTerm: string; subcategory: string; location: string }) => {
    let filtered = vehicleServices.filter(service => {
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
          <Car className="text-blue-600 mr-3" size={24} />
          <h1 className="text-2xl font-bold text-gray-900">গাড়ি ভাড়া</h1>
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
            <Car className="text-gray-400 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">কোন সেবা পাওয়া যায়নি</h3>
            <p className="text-gray-600">অনুসন্ধানের শর্ত পরিবর্তন করে আবার চেষ্টা করুন।</p>
          </div>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default VehicleRent;
