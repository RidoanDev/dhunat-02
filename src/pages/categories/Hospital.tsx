
import React, { useState } from 'react';
import Header from '../../components/Header';
import BottomNavBar from '../../components/BottomNavBar';
import AdvancedSearch from '../../components/AdvancedSearch';
import ServiceDetails from '../../components/ServiceDetails';
import { Building2 } from 'lucide-react';

interface Hospital {
  name: string;
  phone?: string;
  address?: string;
  email?: string;
  description?: string;
  subcategory: string;
  location: string;
  openingHours?: string;
  rating?: number;
  website?: string;
  mapEmbed?: string;
  services?: string[];
  emergency: boolean;
}

const Hospital = () => {
  const hospitals: Hospital[] = [
    {
      name: "Dhunat Sadar Hospital",
      phone: "+880 5824-56789",
      address: "Hospital Road, Dhunat Sadar, Bogura",
      email: "info@dhunatsadar.gov.bd",
      description: "Government hospital with 24/7 emergency services, general medicine, surgery and specialized care.",
      subcategory: "Government Hospital",
      location: "Dhunat Sadar",
      openingHours: "24/7 Emergency & OPD: 8:00 AM - 2:00 PM",
      rating: 4.0,
      emergency: true,
      services: ["Emergency Care", "General Surgery", "Medicine", "Pediatrics", "Gynecology"]
    },
    {
      name: "Popular Medical College Hospital",
      phone: "+880 1712-333444",
      address: "College Road, Dhunat",
      email: "info@popularmedical.com",
      description: "Private hospital with modern facilities, ICU, CCU available with experienced doctors.",
      subcategory: "Private Hospital",
      location: "College Road",
      openingHours: "24/7 Emergency & OPD: 9:00 AM - 9:00 PM",
      rating: 4.5,
      website: "popularmedical.com",
      emergency: true,
      services: ["ICU", "CCU", "Surgery", "Cardiology", "Neurology", "Pathology"]
    },
    {
      name: "Dhunat Clinic & Hospital",
      phone: "+880 1698-555666",
      address: "Main Bazar, Dhunat",
      description: "24-hour clinic with pathology lab, X-ray, ultrasound facilities and general treatment.",
      subcategory: "Private Clinic",
      location: "Main Bazar",
      openingHours: "24/7 Service",
      rating: 4.1,
      emergency: false,
      services: ["X-Ray", "Ultrasound", "Pathology", "General Medicine", "Minor Surgery"]
    },
    {
      name: "Mother & Child Hospital",
      phone: "+880 1756-777888",
      address: "Station Road, Dhunat",
      email: "contact@motherchild.com",
      description: "Specialized in maternal and child healthcare, delivery services with modern equipment.",
      subcategory: "Specialized Hospital",
      location: "Station Road",
      openingHours: "24/7 Maternity & Emergency",
      rating: 4.7,
      emergency: true,
      services: ["Maternity Care", "Child Care", "Normal Delivery", "C-Section", "NICU"]
    },
    {
      name: "Ibn Sina Diagnostic & Hospital",
      phone: "+880 1823-999000",
      address: "Hospital Para, Dhunat",
      email: "info@ibnsina-dhunat.com",
      description: "Modern diagnostic center with full hospital facilities and advanced medical equipment.",
      subcategory: "Diagnostic Center",
      location: "Hospital Para",
      openingHours: "8:00 AM - 10:00 PM (Daily)",
      rating: 4.3,
      website: "ibnsina-dhunat.com",
      emergency: false,
      services: ["CT Scan", "MRI", "ECG", "Blood Test", "Ultrasound", "X-Ray"]
    }
  ];

  const [filteredHospitals, setFilteredHospitals] = useState<Hospital[]>(hospitals);

  const subcategories = [...new Set(hospitals.map(h => h.subcategory))];
  const locations = [...new Set(hospitals.map(h => h.location))];

  const handleSearch = (filters: { searchTerm: string; subcategory: string; location: string }) => {
    let filtered = hospitals.filter(hospital => {
      const matchesSearch = !filters.searchTerm || 
        hospital.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        hospital.subcategory.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        hospital.description?.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        hospital.services?.some(service => service.toLowerCase().includes(filters.searchTerm.toLowerCase()));

      const matchesSubcategory = !filters.subcategory || hospital.subcategory === filters.subcategory;
      const matchesLocation = !filters.location || hospital.location === filters.location;

      return matchesSearch && matchesSubcategory && matchesLocation;
    });

    setFilteredHospitals(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-4 py-6 pb-20">
        <div className="flex items-center mb-6">
          <Building2 className="text-blue-600 mr-3" size={24} />
          <h1 className="text-2xl font-bold text-gray-900">Hospitals</h1>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-800 text-sm">
            <strong>Emergency:</strong> For immediate medical emergencies, call 999 or visit the nearest hospital with 24/7 emergency services.
          </p>
        </div>

        <AdvancedSearch
          onSearch={handleSearch}
          subcategories={subcategories}
          locations={locations}
        />

        {/* Hospital Cards */}
        <div className="space-y-4">
          {filteredHospitals.map((hospital, index) => (
            <div key={index} className="relative">
              {hospital.emergency && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
                  24/7 Emergency
                </div>
              )}
              <ServiceDetails
                name={hospital.name}
                phone={hospital.phone}
                address={hospital.address}
                email={hospital.email}
                description={hospital.description}
                subcategory={hospital.subcategory}
                openingHours={hospital.openingHours}
                rating={hospital.rating}
                website={hospital.website}
                mapEmbed={hospital.mapEmbed}
                services={hospital.services}
              />
            </div>
          ))}
        </div>

        {filteredHospitals.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="text-gray-400 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Hospitals Found</h3>
            <p className="text-gray-600">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Hospital;
