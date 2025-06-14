
import React, { useState } from 'react';
import Header from '../../components/Header';
import BottomNavBar from '../../components/BottomNavBar';
import AdvancedSearch from '../../components/AdvancedSearch';
import ServiceDetails from '../../components/ServiceDetails';
import { Stethoscope } from 'lucide-react';

interface Doctor {
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
}

const Doctor = () => {
  const doctors: Doctor[] = [
    {
      name: "Dr. Mohammad Rahman",
      phone: "+880 1712-345678",
      address: "Dhunat Sadar Hospital, Main Road, Dhunat",
      email: "dr.rahman@dhunathospital.com",
      description: "MBBS, MD - General Medicine. 10+ years experience in treating various medical conditions.",
      subcategory: "General Medicine",
      location: "Dhunat Sadar",
      openingHours: "9:00 AM - 5:00 PM (Mon-Sat)",
      rating: 4.5,
      website: "dhunathospital.com",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2!2d89.5!3d24.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzAwLjAiTiA4OcKwMzAnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1234567890123",
      services: ["General Checkup", "Fever Treatment", "Blood Pressure", "Diabetes Care"]
    },
    {
      name: "Dr. Fatema Khatun",
      phone: "+880 1698-765432",
      address: "Dhunat Medical Center, Hospital Road",
      email: "dr.fatema@dhunatmedical.com",
      description: "MBBS, FCPS - Gynecology & Obstetrics. Specialized in women's health.",
      subcategory: "Gynecology",
      location: "Hospital Road",
      openingHours: "10:00 AM - 4:00 PM (Sun-Thu)",
      rating: 4.8,
      services: ["Pregnancy Care", "Women's Health", "Family Planning", "Ultrasound"]
    },
    {
      name: "Dr. Abdul Karim",
      phone: "+880 1756-789123",
      address: "Popular Diagnostic Center, Dhunat Bazar",
      description: "MBBS, MS - Orthopedic Surgery. Bone and joint specialist.",
      subcategory: "Orthopedics",
      location: "Dhunat Bazar",
      openingHours: "8:00 AM - 2:00 PM (Daily)",
      rating: 4.2,
      services: ["Bone Treatment", "Joint Pain", "Fracture Care", "Sports Injury"]
    },
    {
      name: "Dr. Nasir Ahmed",
      phone: "+880 1823-456789",
      address: "Children Hospital, Station Road, Dhunat",
      description: "MBBS, DCH - Pediatrics. Specialized in child healthcare.",
      subcategory: "Pediatrics",
      location: "Station Road",
      openingHours: "9:00 AM - 6:00 PM (Daily)",
      rating: 4.6,
      services: ["Child Care", "Vaccination", "Growth Monitoring", "Fever Treatment"]
    },
    {
      name: "Dr. Rashida Begum",
      phone: "+880 1934-567890",
      address: "Eye Care Center, College Road",
      description: "MBBS, DO - Ophthalmology. Eye care specialist.",
      subcategory: "Ophthalmology",
      location: "College Road",
      openingHours: "2:00 PM - 8:00 PM (Sun-Thu)",
      rating: 4.4,
      services: ["Eye Checkup", "Glasses Prescription", "Cataract", "Eye Surgery"]
    }
  ];

  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctors);

  const subcategories = [...new Set(doctors.map(d => d.subcategory))];
  const locations = [...new Set(doctors.map(d => d.location))];

  const handleSearch = (filters: { searchTerm: string; subcategory: string; location: string }) => {
    let filtered = doctors.filter(doctor => {
      const matchesSearch = !filters.searchTerm || 
        doctor.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        doctor.subcategory.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        doctor.description?.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        doctor.services?.some(service => service.toLowerCase().includes(filters.searchTerm.toLowerCase()));

      const matchesSubcategory = !filters.subcategory || doctor.subcategory === filters.subcategory;
      const matchesLocation = !filters.location || doctor.location === filters.location;

      return matchesSearch && matchesSubcategory && matchesLocation;
    });

    setFilteredDoctors(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-4 py-6 pb-20">
        <div className="flex items-center mb-6">
          <Stethoscope className="text-red-600 mr-3" size={24} />
          <h1 className="text-2xl font-bold text-gray-900">Doctors</h1>
        </div>

        <AdvancedSearch
          onSearch={handleSearch}
          subcategories={subcategories}
          locations={locations}
        />

        {/* Doctor Cards */}
        <div className="space-y-4">
          {filteredDoctors.map((doctor, index) => (
            <ServiceDetails
              key={index}
              name={doctor.name}
              phone={doctor.phone}
              address={doctor.address}
              email={doctor.email}
              description={doctor.description}
              subcategory={doctor.subcategory}
              openingHours={doctor.openingHours}
              rating={doctor.rating}
              website={doctor.website}
              mapEmbed={doctor.mapEmbed}
              services={doctor.services}
            />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <Stethoscope className="text-gray-400 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Doctors Found</h3>
            <p className="text-gray-600">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Doctor;
