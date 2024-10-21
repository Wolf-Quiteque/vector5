import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import { Menu, Home, Box, ShoppingCart, User, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = ({ onSignout, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: <Home size={24} />, label: 'Home', path: '/fornecedor/home' },
    { icon: <Box size={24} />, label: 'Peças', path: '/fornecedor/pecas' },
    { icon: <ShoppingCart size={24} />, label: 'Vendas', path: '/fornecedor/vendas' },
    { icon: <User size={24} />, label: 'Perfil', path: '/fornecedor/profile' },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div 
        className={`fixed left-0 top-0 h-screen bg-gray-900 text-white transition-all duration-300 ease-in-out z-50
          ${isOpen ? 'w-64' : 'w-20'}`}
      >
        {/* Toggle Button */}
        <button
          className="absolute -right-3 top-9 bg-gray-900 text-white p-1 rounded-full"
          onClick={toggleSidebar}
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>

        {/* Logo Area */}
        <div className="flex items-center justify-center h-20 border-b border-gray-800">
          {isOpen ? (
            <h1 className="text-xl font-bold">Vector5</h1>
          ) : (
            <Menu size={24} />
          )}
        </div>

        {/* Menu Items */}
        <nav className="mt-8">
          {menuItems.map((item, index) => (
           <Link 
           key={index}
           href={item.path}
           legacyBehavior
         >
           <a className={`flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors
             ${isOpen ? 'justify-start space-x-4' : 'justify-center'}
             ${router.pathname === item.path ? 'bg-gray-800 text-white' : ''}`}
           >
             {item.icon}
             {isOpen && <span className="ml-2">{item.label}</span>}
           </a>
         </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <button
          onClick={onSignout}
          className={`absolute bottom-8 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors w-full
            ${isOpen ? 'justify-start space-x-4' : 'justify-center'} flex items-center`}
        >
          <LogOut size={24} />
          {isOpen && <span className="ml-4">Sair</span>}
        </button>
      </div>

      <div 
        className={`flex-1 transition-all duration-300 bg-gray-100
          ${isOpen ? 'ml-56' : 'ml-8'}`}
      >
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;