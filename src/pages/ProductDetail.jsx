import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-green-50 rounded-xl p-8 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Sản phẩm không tồn tại</h1>
          <Link 
            to="/products" 
            className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Quay lại danh sách sản phẩm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-green-600">Trang chủ</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-green-600">Sản phẩm</Link>
        <span className="mx-2">/</span>
        <span className="text-green-600">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Gallery */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-4 bg-green-50 border-b">
            <span className="text-green-600 font-medium">Sản phẩm mới</span>
          </div>
          <div className="p-6">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto rounded-lg object-cover transition duration-300 hover:scale-105"
            />
            <div className="grid grid-cols-4 gap-2 mt-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="border rounded-lg overflow-hidden cursor-pointer">
                  <img 
                    src={product.image} 
                    alt={`Thumbnail ${item}`} 
                    className="w-full h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star} 
                  className={`w-5 h-5 ${star <= product.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">({product.reviews} đánh giá)</span>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
              {product.stock > 0 ? 'Còn hàng' : 'Hết hàng'}
            </span>
          </div>
          
          <div className="mb-6">
            <div className="flex items-end mb-2">
              <span className="text-3xl font-bold text-green-600">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="ml-2 text-gray-500 line-through">
                  {product.originalPrice}đ
                </span>
              )}
            </div>
            {product.discount && (
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                Tiết kiệm {product.discount}%
              </span>
            )}
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Mô tả sản phẩm
            </h2>
            <div className="prose text-gray-700">
              <p>{product.description}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Thông số kỹ thuật
            </h2>
            <div className="bg-green-50 rounded-lg p-4">
              <ul className="space-y-3">
                <li className="flex">
                  <span className="w-1/3 text-gray-600">Danh mục</span>
                  <span className="w-2/3 font-medium">{product.category}</span>
                </li>
                <li className="flex">
                  <span className="w-1/3 text-gray-600">Loại cây</span>
                  <span className="w-2/3 font-medium">{product.type || 'Cây cảnh phong thủy'}</span>
                </li>
                <li className="flex">
                  <span className="w-1/3 text-gray-600">Chiều cao</span>
                  <span className="w-2/3 font-medium">{product.height || '30-50cm'}</span>
                </li>
                <li className="flex">
                  <span className="w-1/3 text-gray-600">Bảo hành</span>
                  <span className="w-2/3 font-medium">12 tháng</span>
                </li>
                <li className="flex">
                  <span className="w-1/3 text-gray-600">Xuất xứ</span>
                  <span className="w-2/3 font-medium">{product.origin || 'Việt Nam'}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="px-4 py-2">1</span>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
            
            <button 
              className={`flex-1 px-6 py-3 rounded-lg font-medium transition flex items-center justify-center ${
                product.stock > 0 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }`}
              disabled={product.stock <= 0}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {product.stock > 0 ? 'Thêm vào giỏ hàng' : 'Hết hàng'}
            </button>
            
            <button className="flex-1 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Mua ngay
            </button>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Miễn phí vận chuyển
            </span>
            <span className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Đổi trả trong 7 ngày
            </span>
            <span className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Tư vấn phong thủy miễn phí
            </span>
          </div>
        </div>
      </div>
      
      {/* Product Tabs */}
      <div className="mt-16">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button className="py-4 px-1 border-b-2 font-medium text-sm border-green-500 text-green-600">
              Thông tin chi tiết
            </button>
            <button className="py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Hướng dẫn chăm sóc
            </button>
            <button className="py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Đánh giá ({product.reviews})
            </button>
          </nav>
        </div>
        
        <div className="py-8">
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-4">Ý nghĩa phong thủy</h3>
            <p className="mb-4">Cây {product.name} mang lại nguồn năng lượng tích cực, giúp cân bằng âm dương trong không gian sống. Theo chuyên gia phong thủy Nguyễn Văn A, loại cây này đặc biệt phù hợp với người mệnh {product.fengshui || 'Mộc và Hỏa'}.</p>
            
            <h3 className="text-xl font-semibold mb-4">Vị trí đặt cây lý tưởng</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Phòng khách - góc Đông Nam (kích hoạt tài lộc)</li>
              <li>Bàn làm việc - hướng Bắc (thúc đẩy sự nghiệp)</li>
              <li>Phòng ngủ - góc Tây Nam (cải thiện quan hệ)</li>
            </ul>
            
            <div className="bg-green-50 p-4 rounded-lg my-6">
              <h4 className="font-semibold text-green-800 mb-2">Lưu ý quan trọng:</h4>
              <p>Tránh đặt cây ở hướng Tây Bắc nếu gia chủ mệnh Kim, vì có thể gây xung khắc ngũ hành.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div className="mt-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Sản phẩm liên quan</h2>
          <Link to="/products" className="text-green-600 hover:text-green-800 font-medium flex items-center">
            Xem tất cả
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
        </div>
      </div>
    </div>
  );
}