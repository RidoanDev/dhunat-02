
import React, { useState } from 'react';
import Header from '../../components/Header';
import BottomNavBar from '../../components/BottomNavBar';
import AdvancedSearch from '../../components/AdvancedSearch';
import ServiceDetails from '../../components/ServiceDetails';
import { Droplets } from 'lucide-react';

const Blood = () => {
  const bloodServices = [
    {
      id: 1,
      name: "ধুনট রক্ত ব্যাংক",
      phone: "+880171-234-5678",
      address: "ধুনট পৌরসভা, বগুড়া",
      subcategory: "রক্ত ব্যাংক",
      location: "ধুনট সদর",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=400&h=300&fit=crop",
      rating: 4.8,
      hours: "২৪ ঘণ্টা খোলা",
      services: ["সকল গ্রুপের রক্ত", "প্লাটিলেট", "প্লাজমা", "জরুরি সেবা"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2543721568973!2d89.52641831498241!3d24.76453058407969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ1JzUyLjMiTiA4OcKwMzEnNDEuMCJF!5e0!3m2!1sen!2sbd!4v1234567890123",
      email: "dhunatbloodbank@email.com"
    },
    {
      id: 2,
      name: "স্বেচ্ছাসেবী রক্তদাতা গ্রুপ",
      phone: "+880181-987-6543",
      address: "কলেজ রোড, ধুনট",
      subcategory: "রক্তদাতা সংগঠন",
      location: "কলেজ এলাকা",
      rating: 4.6,
      hours: "সকাল ৮টা - রাত ১০টা",
      services: ["জরুরি রক্তদান", "নিয়মিত ক্যাম্প", "স্বাস্থ্য পরীক্ষা", "সচেতনতা কার্যক্রম"]
    }
  ];

  const [filteredServices, setFilteredServices] = useState(bloodServices);

  const subcategories = [
    "সকল",
    "রক্ত ব্যাংক",
    "রক্তদাতা সংগঠন", 
    "মানবসেবা সংস্থা",
    "হাসপাতাল রক্ত বিভাগ",
    "যুব সংগঠন"
  ];

  const locations = [
    "সকল এলাকা",
    "ধুনট সদর",
    "কলেজ এলাকা", 
    "হাসপাতাল এলাকা",
    "হাসপাতাল কমপ্লেক্স",
    "কেন্দ্রীয় বাজার"
  ];

  const handleSearch = (filters: { searchTerm: string; subcategory: string; location: string }) => {
    let filtered = bloodServices.filter(service => {
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
          <Droplets className="text-red-600 mr-3" size={24} />
          <h1 className="text-2xl font-bold text-gray-900">রক্ত সেবা</h1>
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
              mapEmbed={service.mapUrl}
              services={service.services}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <Droplets className="text-gray-400 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">কোন সেবা পাওয়া যায়নি</h3>
            <p className="text-gray-600">অনুসন্ধানের শর্ত পরিবর্তন করে আবার চেষ্টা করুন।</p>
          </div>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Blood;
