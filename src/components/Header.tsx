
import React from 'react';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">ধু</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">ধুনট</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600 hidden sm:block">স্থানীয় সেবা</div>
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
