
import React from 'react';
import Header from '../components/Header';
import BottomNavBar from '../components/BottomNavBar';
import { Calendar, Bell } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "নতুন মেডিকেল সেন্টার যোগ হয়েছে",
      description: "ধুনট ডিজিটাল ডায়াগনস্টিক সেন্টার এখন আমাদের তালিকায় পাওয়া যাবে",
      date: "2024-06-14",
      type: "new-service"
    },
    {
      id: 2,
      title: "জরুরি যোগাযোগ নম্বর আপডেট",
      description: "থানা এবং ফায়ার সার্ভিসের জরুরি যোগাযোগ নম্বর আপডেট করা হয়েছে",
      date: "2024-06-13",
      type: "update"
    },
    {
      id: 3,
      title: "ছুটির দিনের সময়সূচি",
      description: "আসন্ন ছুটির জন্য ব্যাংক ও সরকারি অফিসের সময়সূচি আপডেট করা হয়েছে",
      date: "2024-06-12",
      type: "schedule"
    },
    {
      id: 4,
      title: "নতুন পরিবহন সেবা",
      description: "নতুন বাস রুট এবং গাড়ি ভাড়ার অপশন যোগ করা হয়েছে",
      date: "2024-06-11",
      type: "new-service"
    },
    {
      id: 5,
      title: "অ্যাপ রক্ষণাবেক্ষণ সম্পন্ন",
      description: "নির্ধারিত রক্ষণাবেক্ষণ সফলভাবে সম্পন্ন হয়েছে। সকল সেবা এখন স্বাভাবিকভাবে চালু আছে।",
      date: "2024-06-10",
      type: "maintenance"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'new-service':
        return 'bg-green-100 text-green-800';
      case 'update':
        return 'bg-blue-100 text-blue-800';
      case 'schedule':
        return 'bg-yellow-100 text-yellow-800';
      case 'maintenance':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'new-service':
        return 'নতুন সেবা';
      case 'update':
        return 'আপডেট';
      case 'schedule':
        return 'সময়সূচি';
      case 'maintenance':
        return 'রক্ষণাবেক্ষণ';
      default:
        return 'সাধারণ';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('bn-BD', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-4 py-6 pb-20">
        <div className="flex items-center mb-6">
          <Bell className="text-blue-600 mr-3" size={24} />
          <h1 className="text-2xl font-bold text-gray-900">বিজ্ঞপ্তি</h1>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900 flex-1">{notification.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(notification.type)}`}>
                  {getTypeLabel(notification.type)}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {notification.description}
              </p>
              
              <div className="flex items-center text-xs text-gray-500">
                <Calendar size={14} className="mr-1" />
                {formatDate(notification.date)}
              </div>
            </div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-12">
            <Bell className="text-gray-400 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">কোন বিজ্ঞপ্তি নেই</h3>
            <p className="text-gray-600">আপনি সব দেখেছেন! নতুন আপডেটের জন্য পরে আবার দেখুন।</p>
          </div>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Notifications;
