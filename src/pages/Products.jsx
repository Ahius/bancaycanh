import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [categoryFilter, setCategoryFilter] = useState("Tất cả");
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    "Tất cả",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    categoryFilter === "Tất cả"
      ? products
      : products.filter((product) => product.category === categoryFilter);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-green-50 rounded-xl p-8 mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Khám phá bộ sưu tập cây cảnh
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Mang thiên nhiên vào không gian sống của bạn với những cây cảnh được
          chọn lọc kỹ lưỡng
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Danh mục sản phẩm
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                categoryFilter === category
                  ? "bg-[#0e6655] text-white shadow-md"
                  : hoveredCategory === category
                  ? "bg-green-100 text-[#0e6655] shadow-sm"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-green-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="transform hover:-translate-y-2 transition duration-300"
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            Không tìm thấy sản phẩm
          </h3>
          <p className="text-gray-600 mb-6">
            Hiện không có sản phẩm nào trong danh mục này.
          </p>
          <button
            onClick={() => setCategoryFilter("Tất cả")}
            className="bg-[#0e6655] hover:bg-[#0d5a4a] text-white px-6 py-2.5 rounded-lg font-medium transition duration-300"
          >
            Xem tất cả sản phẩm
          </button>
        </div>
      )}

      {/* Video Section */}
      <div className="mt-16 bg-green-50 rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Hướng dẫn chăm sóc cây cảnh
            </h2>
            <p className="text-gray-600 mb-6">
              Xem video hướng dẫn cách chăm sóc các loại cây cảnh trong nhà để
              luôn tươi tốt và phát triển khỏe mạnh.
            </p>
            <Link
              to="/guides"
              className="inline-flex items-center text-[#0e6655] font-medium hover:text-[#0d5a4a]"
            >
              Xem thêm hướng dẫn
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="md:w-1/2 bg-gray-200 min-h-[300px]">
            <div className="aspect-w-16 aspect-h-9 w-full h-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/G0ZBMWxxt2g"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
