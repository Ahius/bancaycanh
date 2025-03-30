import Vy1 from "../assets/Vy1.jpg";

import Vy2 from "../assets/Vy2.jpg";
import Vy3 from "../assets/Vy3.jpg";
export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src="https://caycanhhanoi.com/wp-content/uploads/2020/07/banner-img.png"
          alt="Về Bạn của Lá"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Về <span className="text-green-200">Bạn của Lá</span>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src="https://mowgarden.com/wp-content/uploads/2021/04/cach-cham-soc-cay-trong-nha-800x501.jpg"
                alt="Chăm sóc cây cảnh"
                className="rounded-xl shadow-lg hover:shadow-xl transition duration-500 hover:-translate-y-2"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <span className="text-[#0e6655]">Bạn của Lá</span> - Hành trình
                kết nối con người với thiên nhiên
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Từ một tình yêu với cây xanh, chúng tôi đã xây dựng Bạn của Lá
                thành điểm đến tin cậy cho những ai muốn mang thiên nhiên vào
                không gian sống. Mỗi sản phẩm của chúng tôi là kết tinh của đam
                mê, kiến thức và sự tận tâm.
              </p>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-[#0e6655]">
                <p className="italic text-gray-700">
                  "Mỗi cây xanh là một câu chuyện, mỗi không gian xanh là một
                  tác phẩm nghệ thuật sống động"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src="https://danviet.mediacdn.vn/296231569849192448/2022/9/25/cay-canh-4-1664045578608691112261.jpg"
                alt="Lịch sử Bạn của Lá"
                className="rounded-xl shadow-lg hover:shadow-xl transition duration-500 hover:-translate-y-2"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Hành trình phát triển
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#0e6655] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Khởi đầu (2015)
                    </h3>
                    <p className="text-gray-600">
                      Từ một cửa hàng nhỏ với vài loại cây cảnh phổ biến, chúng
                      tôi bắt đầu hành trình mang thiên nhiên đến gần hơn với
                      mọi nhà.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#0e6655] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Mở rộng (2018)
                    </h3>
                    <p className="text-gray-600">
                      Phát triển hệ thống vườn ươm riêng, nhập khẩu các giống
                      cây độc đáo từ khắp nơi trên thế giới.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#0e6655] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Hiện tại
                    </h3>
                    <p className="text-gray-600">
                      Trở thành địa chỉ tin cậy cho cây cảnh cao cấp, dịch vụ
                      thiết kế không gian xanh và tư vấn phong thủy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Giá trị cốt lõi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Chất lượng",
                desc: "Mỗi cây xanh đều được chọn lọc kỹ lưỡng, đảm bảo sức sống và vẻ đẹp tối ưu",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#0e6655]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Đam mê",
                desc: "Truyền tình yêu thiên nhiên qua từng sản phẩm và dịch vụ",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#0e6655]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Sáng tạo",
                desc: "Thiết kế không gian xanh độc đáo, phù hợp với từng khách hàng",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#0e6655]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Bền vững",
                desc: "Cam kết phát triển bền vững, thân thiện với môi trường",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#0e6655]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-green-50 p-6 rounded-xl hover:bg-green-100 transition duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
    Đội ngũ của chúng tôi
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        name: "Kim chủ tịch",
        role: "Người sáng lập, chuyên gia cây cảnh",
        desc: "10 năm kinh nghiệm trong lĩnh vực trồng và chăm sóc cây cảnh nội thất",
        img: Vy1,
      },
      {
        name: "Kim chi",
        role: "Thiết kế không gian xanh",
        desc: "Chuyên gia tư vấn phong thủy và thiết kế cảnh quan",
        img: Vy2,
      },
      {
        name: "Kim Vieon",
        role: "Chăm sóc khách hàng",
        desc: "Luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của khách hàng",
        img: Vy3,
      },
    ].map((member, index) => (
      <div
        key={index}
        className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-300 flex flex-col h-full"
      >
        <div className="relative pt-[80%] overflow-hidden">
          <img
            src={member.img}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-4 flex-grow">
          <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
          <p className="text-[#0e6655] font-medium text-sm mb-2">{member.role}</p>
          <p className="text-gray-600 text-sm">{member.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>;
      </div>
    </div>
  );
}
