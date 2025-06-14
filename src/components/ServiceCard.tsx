
import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  phone?: string;
  address?: string;
  email?: string;
  image?: string;
  description?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  name, 
  phone, 
  address, 
  email, 
  image, 
  description 
}) => {
  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = (emailAddress: string) => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-3">
      {image && (
        <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      )}
      
      <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
      
      {description && (
        <p className="text-sm text-gray-600 mb-3">{description}</p>
      )}
      
      <div className="space-y-2">
        {phone && (
          <button
            onClick={() => handlePhoneCall(phone)}
            className="flex items-center text-sm text-blue-600 hover:text-blue-800"
          >
            <Phone size={16} className="mr-2" />
            {phone}
          </button>
        )}
        
        {address && (
          <div className="flex items-center text-sm text-gray-600">
            <MapPin size={16} className="mr-2" />
            {address}
          </div>
        )}
        
        {email && (
          <button
            onClick={() => handleEmail(email)}
            className="flex items-center text-sm text-blue-600 hover:text-blue-800"
          >
            <Mail size={16} className="mr-2" />
            {email}
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
