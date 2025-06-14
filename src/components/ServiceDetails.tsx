
import React from 'react';
import { Phone, MapPin, Mail, Clock, Globe, Star } from 'lucide-react';

interface ServiceDetailsProps {
  name: string;
  phone?: string;
  address?: string;
  email?: string;
  website?: string;
  image?: string;
  description?: string;
  subcategory?: string;
  openingHours?: string;
  rating?: number;
  mapEmbed?: string;
  services?: string[];
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ 
  name, 
  phone, 
  address, 
  email, 
  website,
  image, 
  description,
  subcategory,
  openingHours,
  rating,
  mapEmbed,
  services = []
}) => {
  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = (emailAddress: string) => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleWebsite = (url: string) => {
    window.open(url.startsWith('http') ? url : `https://${url}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-4">
      {image && (
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-gray-900 text-lg mb-1">{name}</h3>
          {subcategory && (
            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mb-2">
              {subcategory}
            </span>
          )}
        </div>
        {rating && (
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        )}
      </div>
      
      {description && (
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      )}

      {services.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Services:</h4>
          <div className="flex flex-wrap gap-2">
            {services.map((service, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                {service}
              </span>
            ))}
          </div>
        </div>
      )}
      
      <div className="space-y-3">
        {phone && (
          <button
            onClick={() => handlePhoneCall(phone)}
            className="flex items-center text-sm text-blue-600 hover:text-blue-800 w-full text-left"
          >
            <Phone size={16} className="mr-3 flex-shrink-0" />
            <span>{phone}</span>
          </button>
        )}
        
        {address && (
          <div className="flex items-start text-sm text-gray-600">
            <MapPin size={16} className="mr-3 flex-shrink-0 mt-0.5" />
            <span>{address}</span>
          </div>
        )}

        {openingHours && (
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-3 flex-shrink-0" />
            <span>{openingHours}</span>
          </div>
        )}
        
        {email && (
          <button
            onClick={() => handleEmail(email)}
            className="flex items-center text-sm text-blue-600 hover:text-blue-800 w-full text-left"
          >
            <Mail size={16} className="mr-3 flex-shrink-0" />
            <span>{email}</span>
          </button>
        )}

        {website && (
          <button
            onClick={() => handleWebsite(website)}
            className="flex items-center text-sm text-blue-600 hover:text-blue-800 w-full text-left"
          >
            <Globe size={16} className="mr-3 flex-shrink-0" />
            <span>{website}</span>
          </button>
        )}
      </div>

      {mapEmbed && (
        <div className="mt-4">
          <h4 className="font-medium text-gray-900 mb-2">Location:</h4>
          <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src={mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map location for ${name}`}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
