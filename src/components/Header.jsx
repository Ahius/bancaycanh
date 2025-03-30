import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-[#0e6655] text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo và menu chính */}
        <div className="flex items-center w-full md:w-auto justify-between">    
          <Link 
            to="/" 
            className="text-3xl font-bold text-white hover:text-green-200 transition-all duration-300 font-serif italic"
            style={{ 
              textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
              letterSpacing: '1px'
            }}
          >
            Bạn của lá
          </Link>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white hover:text-green-200 transition">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu chính */}
        <nav className="hidden md:flex space-x-6 mt-4 md:mt-0">
          <Link 
            to="/" 
            className="text-white hover:text-green-200 transition-all duration-300 py-2 px-1 border-b-2 border-transparent hover:border-green-200 font-medium"
          >
            Trang chủ
          </Link>
          <Link 
            to="/about" 
            className="text-white hover:text-green-200 transition-all duration-300 py-2 px-1 border-b-2 border-transparent hover:border-green-200 font-medium"
          >
            Giới thiệu
          </Link>
          <Link 
            to="/products" 
            className="text-white hover:text-green-200 transition-all duration-300 py-2 px-1 border-b-2 border-transparent hover:border-green-200 font-medium"
          >
            Sản phẩm
          </Link>
          <Link 
            to="/news" 
            className="text-white hover:text-green-200 transition-all duration-300 py-2 px-1 border-b-2 border-transparent hover:border-green-200 font-medium"
          >
            Tin tức
          </Link>
          <Link 
            to="/contact" 
            className="text-white hover:text-green-200 transition-all duration-300 py-2 px-1 border-b-2 border-transparent hover:border-green-200 font-medium"
          >
            Liên hệ
          </Link>
        </nav>

        {/* Giỏ hàng và đăng nhập */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link 
            to="/cart" 
            className="p-2 rounded-full hover:bg-green-500 transition-all duration-300 text-white relative group"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 bg-green-400 text-xs rounded-full h-5 w-5 flex items-center justify-center group-hover:bg-green-300 transition">
              0
            </span>
          </Link>
          <Link 
            to="/login" 
            className="bg-green-700 px-4 py-2 rounded hover:bg-green-600 transition-all duration-300 text-white font-medium hover:shadow-md"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </header>
  );
}