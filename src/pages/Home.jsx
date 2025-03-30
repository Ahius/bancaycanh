import { Link } from "react-router-dom";
import { products } from "../data/products";
import { news } from "../data/news";
import ProductCard from "../components/ProductCard";
import NewsCard from "../components/NewsCard";

export default function Home() {
  const featuredProducts = products.slice(0, 5);
  const latestNews = news.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative   min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img
          src="https://tools.dalathasfarm.com/assets/_file/2023/2023-03/Banner-Web7.png"
          alt="Không gian xanh"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 mt-6">
          <div className="mb-8">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-4 border border-white/30">
              🌿 Mang thiên nhiên vào không gian sống
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-green-200">Bạn của Lá</span>  <br />
              Kết nối bạn với thiên nhiên
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Khám phá bộ sưu tập cây cảnh độc đáo, mang lại không gian xanh tươi mát 
              và năng lượng tích cực cho ngôi nhà của bạn
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="relative overflow-hidden group bg-[#0e6655] hover:bg-[#0d5a4a] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-500 shadow-xl hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center justify-center">
                Khám phá ngay
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
            
            <Link
              to="/about"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 border border-white/30 backdrop-blur-sm"
            >
              Về chúng tôi
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
  <div className="flex flex-col md:flex-row items-center gap-8">
    {/* Image Column - Adjusted height */}
    <div className="md:w-1/2 h-[350px]"> {/* Fixed height */}
      <img 
        src="https://caycanhhoanganh.com/wp-content/uploads/2023/09/ccvp.jpg" 
        alt="Về Bạn của Lá" 
        className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-xl transition duration-500 hover:-translate-y-2"
      />
    </div>
    
    {/* Text Column */}
    <div className="md:w-1/2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
        <span className="text-[#0e6655]">Bạn của Lá</span> - Hành trình mang thiên nhiên vào không gian sống
      </h2>
      <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">
        Từ một niềm đam mê với cây xanh, chúng tôi đã xây dựng Bạn của Lá thành 
        điểm đến tin cậy cho những ai yêu thích thiên nhiên. Mỗi sản phẩm của chúng tôi 
        không chỉ là cây cảnh, mà còn là tâm huyết, là câu chuyện về sự kết nối giữa 
        con người và thiên nhiên.
      </p>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-start">
          <div className="bg-green-100 p-2 rounded-full mr-3">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <p className="text-gray-700 text-sm md:text-base">100% cây giống chất lượng cao, chọn lọc kỹ lưỡng</p>
        </div>
        <div className="flex items-start">
          <div className="bg-green-100 p-2 rounded-full mr-3">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <p className="text-gray-700 text-sm md:text-base">Tư vấn chăm sóc tận tình 24/7</p>
        </div>
        <div className="flex items-start">
          <div className="bg-green-100 p-2 rounded-full mr-3">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <p className="text-gray-700 text-sm md:text-base">Bảo hành cây trồng dài hạn</p>
        </div>
      </div>
      
      <Link
        to="/about"
        className="inline-block bg-[#0e6655] hover:bg-[#0d5a4a] text-white px-5 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition duration-300 shadow-md hover:shadow-lg"
      >
        Khám phá câu chuyện của chúng tôi
      </Link>
    </div>
  </div>
</section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12 bg-gray-50 rounded-xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            SẢN PHẨM ĐỘC ĐÁO
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Cây cảnh nổi bật</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá bộ sưu tập cây cảnh được yêu thích nhất của chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-block border-2 border-[#0e6655] text-[#0e6655] hover:bg-[#0e6655] hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-300"
          >
            Xem tất cả sản phẩm
          </Link>
        </div>
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            KIẾN THỨC CÂY CẢNH
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Thông tin & Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cập nhật kiến thức mới nhất về chăm sóc và trang trí cây cảnh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((newsItem) => (
            <NewsCard key={newsItem.id} newsItem={newsItem} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/news"
            className="inline-block border-2 border-[#0e6655] text-[#0e6655] hover:bg-[#0e6655] hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-300"
          >
            Xem tất cả bài viết
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="bg-[#0e6655] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bạn cần tư vấn về cây cảnh?</h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn chọn lựa 
              và chăm sóc cây cảnh phù hợp nhất với không gian sống của bạn
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#0e6655] px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
              >
                Liên hệ ngay
              </Link>
              <Link
                to="/products"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition"
              >
                Xem sản phẩm
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}