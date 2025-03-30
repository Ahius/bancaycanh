import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header với hình nền xanh lá */}
      <div className="bg-green-50 rounded-xl p-8 mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Kết nối với Bạn của lá
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Chúng tôi luôn sẵn lòng lắng nghe mọi thắc mắc và tư vấn miễn phí về
          cây cảnh phong thủy cho bạn
        </p>
      </div>

      {/* Grid thông tin liên hệ và form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Thông tin liên hệ */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <svg
              className="w-6 h-6 text-green-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Thông tin liên hệ
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Địa chỉ cửa hàng
                </h3>
                <p className="text-gray-600 mt-1">Thủ Dầu Một, Bình Dương</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Điện thoại
                </h3>
                <p className="text-gray-600 mt-1">
                  0909 123 456 (Hotline) <br /> 028 1234 5678 (Văn phòng)
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600 mt-1"> hotro@bancuala.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Giờ làm việc
                </h3>
                <p className="text-gray-600 mt-1">
                  Thứ 2 - Thứ 6: 8:00 - 17:00 <br />
                  Thứ 7: 8:00 - 12:00 <br />
                  Chủ nhật: Nghỉ
                </p>
              </div>
            </div>
          </div>

          {/* Mạng xã hội */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Kết nối với chúng tôi
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-green-100 hover:bg-green-200 text-green-800 p-3 rounded-full transition"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="bg-green-100 hover:bg-green-200 text-green-800 p-3 rounded-full transition"
              >
                <span className="sr-only">Zalo</span>
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.376 16.272c-.12.168-.324.24-.528.24-.144 0-.288-.048-.408-.144l-1.656-1.2-1.296.96c-.144.096-.336.144-.528.144-.192 0-.384-.072-.528-.216l-3.6-3.624c-.192-.192-.192-.48 0-.672s.48-.192.672 0l3.072 3.072 1.296-.96c.144-.096.336-.144.528-.144.192 0 .384.072.528.216l2.184 1.584c.192.144.24.408.096.6z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-green-100 hover:bg-green-200 text-green-800 p-3 rounded-full transition"
              >
                <span className="sr-only">TikTok</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-green-100 hover:bg-green-200 text-green-800 p-3 rounded-full transition"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Form liên hệ */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <svg
              className="w-6 h-6 text-green-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            Gửi tin nhắn cho chúng tôi
          </h2>
          <ContactForm />
        </div>
      </div>

      {/* Bản đồ */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <svg
              className="w-6 h-6 text-green-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Tìm đường đến Bạn của lá
          </h2>
        </div>
        <div className="bg-gray-200 h-96 w-full">
          {/* Embed Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1234567890123!2d106.65698741533838!3d10.9809999921875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d1aaf0a3b9a5%3A0x123456789abcdef!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBUaOG7jSBN4buFdCwgQ-G6p24gTOG7mWkgMiwgQsOsbmggRMawxqFuZw!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale-0 hover:grayscale-0 transition"
          ></iframe>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-green-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Bạn cần tư vấn ngay?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Liên hệ hotline 0909 123 456 để được tư vấn miễn phí về cây cảnh phong
          thủy phù hợp với bạn
        </p>
        <a
          href="tel:0909123456"
          className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Gọi ngay: 0909 123 456
        </a>
      </div>
    </div>
  );
}
