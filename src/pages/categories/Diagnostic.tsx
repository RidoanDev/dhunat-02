
import React, { useState } from 'react';
import Header from '../../components/Header';
import BottomNavBar from '../../components/BottomNavBar';
import AdvancedSearch from '../../components/AdvancedSearch';
import ServiceDetails from '../../components/ServiceDetails';
import { TestTube } from 'lucide-react';

const Diagnostic = () => {
  const diagnosticServices = [
    {
      id: 1,
      name: "পপুলার ডায়াগনস্টিক সেন্টার",
      phone: "+880171-234-5678",
      address: "কলেজ রোড, ধুনট",
      subcategory: "ল্যাব টেস্ট",
      location: "কলেজ এলাকা",
      rating: 4.7,
      hours: "সকাল ৮টা - রাত ৯টা",
      services: ["রক্ত পরীক্ষা", "এক্স-রে", "আল্ট্রাসাউন্ড", "ইসিজি"],
      email: "info@populardiagnostic.com"
    },
    {
      id: 2,
      name: "ইবনে সিনা ডায়াগনস্টিক",
      phone: "+880181-987-6543",
      address: "হাসপাতাল রোড, ধুনট",
      subcategory: "ইমেজিং",
      location: "হাসপাতাল এলাকা",
      rating: 4.5,
      hours: "২৪ ঘণ্টা খোলা",
      services: ["সিটি স্ক্যান", "এমআরআই", "আল্ট্রা সাউন্ড", "এক্স-রে"]
    }
  ];

  const [filteredServices, setFilteredServices] = useState(diagnosticServices);

  const subcategories = ["সকল", "ল্যাব টেস্ট", "ইমেজিং", "হার্ট টেস্ট", "ক্যান্সার স্ক্রিনিং"];
  const locations = ["সকল এলাকা", "কলেজ এলাকা", "হাসপাতাল এলাকা", "কেন্দ্রীয় বাজার"];

  const handleSearch = (filters: { searchTerm: string; subcategory: string; location: string }) => {
    let filtered = diagnosticServices.filter(service => {
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
          <TestTube className="text-blue-600 mr-3" size={24} />
          <h1 className="text-2xl font-bold text-gray-900">ডায়াগনস্টিক</h1>
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
            <TestTube className="text-gray-400 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">কোন সেবা পাওয়া যায়নি</h3>
            <p className="text-gray-600">অনুসন্ধানের শর্ত পরিবর্তন করে আবার চেষ্টা করুন।</p>
          </div>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Diagnostic;
