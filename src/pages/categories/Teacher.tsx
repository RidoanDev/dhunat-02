
import React, { useState } from 'react';
import Header from '../../components/Header';
import BottomNavBar from '../../components/BottomNavBar';
import AdvancedSearch from '../../components/AdvancedSearch';
import ServiceDetails from '../../components/ServiceDetails';
import { GraduationCap } from 'lucide-react';

const Teacher = () => {
  const teacherServices = [
    {
      id: 1,
      name: "প্রফেসর আব্দুল করিম",
      phone: "+880171-234-5678",
      address: "ধুনট সরকারি কলেজ",
      subcategory: "গণিত শিক্ষক",
      location: "কলেজ এলাকা",
      rating: 4.8,
      hours: "সকাল ৮টা - দুপুর ২টা",
      services: ["উচ্চ মাধ্যমিক গণিত", "প্রাইভেট টিউশন", "অনলাইন ক্লাস", "পরীক্ষার প্রস্তুতি"],
      email: "prof.karim@dhunatcollege.edu"
    },
    {
      id: 2,
      name: "মিসেস রাশিদা বেগম",
      phone: "+880181-987-6543",
      address: "ধুনট উচ্চ বিদ্যালয়",
      subcategory: "ইংরেজি শিক্ষক",
      location: "স্কুল এলা এলাকা",
      rating: 4.6,
      hours: "সকাল ৯টা - বিকাল ৩টা",
      services: ["ইংরেজি ব্যাকরণ", "স্পোকেন ইংলিশ", "রাইটিং স্কিল", "আইইএলটিএস প্রস্তুতি"]
    }
  ];

  const [filteredServices, setFilteredServices] = useState(teacherServices);

  const subcategories = ["সকল", "গণিত শিক্ষক", "ইংরেজি শিক্ষক", "বিজ্ঞান শিক্ষক", "বাংলা শিক্ষক"];
  const locations = ["সকল এলাকা", "কলেজ এলাকা", "স্কুল এলাকা", "ট্রেনিং সেন্টার"];

  const handleSearch = (filters: { searchTerm: string; subcategory: string; location: string }) => {
    let filtered = teacherServices.filter(service => {
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
          <GraduationCap className="text-green-600 mr-3" size={24} />
          <h1 className="text-2xl font-bold text-gray-900">শিক্ষক</h1>
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
            <GraduationCap className="text-gray-400 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">কোন সেবা পাওয়া যায়নি</h3>
            <p className="text-gray-600">অনুসন্ধানের শর্ত পরিবর্তন করে আবার চেষ্টা করুন।</p>
          </div>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Teacher;
