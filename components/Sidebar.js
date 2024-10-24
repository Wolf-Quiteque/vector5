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
    { icon: <Home size={24} />, label: 'Home', path: '/fornecedor' },
    { icon: <Box size={24} />, label: 'Peças', path: '/fornecedor/pecas' },
    { icon: <ShoppingCart size={24} />, label: 'Vendas', path: '/fornecedor/vendas' },
    { icon: <User size={24} />, label: 'Perfil', path: '/fornecedor/prefil' },
  ];

  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <div 
        className={`position-fixed start-0 top-0 h-100 bg-dark text-white transition ${isOpen ? 'width-240' : 'width-80'}`}
        style={{
          transition: 'all 0.3s ease-in-out',
          zIndex: 1050
        }}
      >
        {/* Toggle Button */}
        <button
          className="position-absolute top-40 translate-middle-y bg-dark text-white border-0 rounded-circle p-1"
          style={{ right: '-12px' }}
          onClick={toggleSidebar}
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>

        {/* Logo Area */}
        <div className="d-flex align-items-center justify-content-center border-bottom border-secondary" style={{ height: '80px' }}>
          {isOpen ? (
            <h1 className="fs-4 fw-bold mb-0">Vector5</h1>
          ) : (
            <Menu size={24} />
          )}
        </div>

        {/* Menu Items */}
        <nav className="mt-4">
          {menuItems.map((item, index) => (
            <Link 
              key={index}
              href={item.path}
              legacyBehavior
            >
              <a 
                className={`d-flex align-items-center px-3 py-2 text-decoration-none text-light
                  ${isOpen ? 'justify-content-start' : 'justify-content-center'}
                  ${router.pathname === item.path ? 'bg-secondary' : 'hover-bg-secondary'}`}
                style={{ transition: 'background-color 0.2s' }}
              >
                {item.icon}
                {isOpen && <span className="ms-3">{item.label}</span>}
              </a>
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <button
          onClick={onSignout}
          className={`position-absolute bottom-0 mb-4 px-3 py-2 text-light bg-transparent border-0 w-100
            ${isOpen ? 'text-start' : 'text-center'} d-flex align-items-center hover-bg-secondary`}
          style={{ transition: 'background-color 0.2s' }}
        >
          <LogOut size={24} />
          {isOpen && <span className="ms-3">Sair</span>}
        </button>
      </div>

      {/* Main Content */}
      <div 
        className={`flex-grow-1 transition-all bg-light ${isOpen ? 'ms-240' : 'ms-80'}`}
        style={{ transition: 'margin-left 0.3s ease-in-out' }}
      >
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

