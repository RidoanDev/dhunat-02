
import React from 'react';
import { Bell } from 'lucide-react';

const NoticeMarquee = () => {
  const notice = "ধুনটের সবচেয়ে বিশ্বস্ত অ্যাপ! আমরা ২৪/৭ আপনার সেবায় প্রস্তুত। সর্বশেষ আপডেটের জন্য যুক্ত থাকুন।";

  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 mx-4 my-2 p-2 rounded">
      <div className="flex items-center overflow-hidden">
        <Bell className="text-yellow-600 mr-2 flex-shrink-0" size={16} />
        <div className="overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-sm text-yellow-800">
            {notice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeMarquee;
