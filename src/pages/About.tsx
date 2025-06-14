
import React from 'react';
import Header from '../components/Header';
import BottomNavBar from '../components/BottomNavBar';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-4 py-6 pb-20">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">About Dhunat.App</h1>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Dhunat.App is your comprehensive local service directory, connecting you with 
              trusted service providers in the Dhunat area. From healthcare to education, 
              transportation to emergency services, we make it easy to find what you need 
              in your community.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Our mission is to strengthen local communities by making local services 
              easily accessible to everyone. Whether you're looking for a doctor, 
              need transportation, or want to explore local attractions, Dhunat.App 
              is your go-to resource.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="text-blue-600 mr-3" size={20} />
              <div>
                <p className="font-medium text-gray-900">Address</p>
                <p className="text-gray-600">Dhunat, Bogura, Bangladesh</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className="text-blue-600 mr-3" size={20} />
              <div>
                <p className="font-medium text-gray-900">Phone</p>
                <p className="text-gray-600">+88 01XXX-XXXXXX</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Mail className="text-blue-600 mr-3" size={20} />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-600">info@dhunat.app</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Globe className="text-blue-600 mr-3" size={20} />
              <div>
                <p className="font-medium text-gray-900">Website</p>
                <p className="text-gray-600">www.dhunat.app</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Developer</h2>
          <p className="text-gray-700">
            Developed with ❤️ for the Dhunat community
          </p>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default About;
