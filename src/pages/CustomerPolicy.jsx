export default function CustomerPolicy() {
    return (
      <div className="container mx-auto px-6 py-10 max-w-4xl bg-green-50 rounded-xl shadow-lg border border-green-200 mb-10 mt-10">
        <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">Chính Sách Khách Hàng</h1>
        
        <div className="prose max-w-none text-green-900">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">1. Giới thiệu</h2>
            <p className="text-gray-800">
              Chào mừng bạn đến với GreenStore. Chúng tôi cam kết mang đến trải nghiệm mua sắm tốt nhất và chính sách chăm sóc khách hàng tận tâm.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">2. Chính sách đổi trả</h2>
            <p className="text-gray-800">
              Khách hàng có thể đổi trả sản phẩm trong vòng 7 ngày kể từ ngày nhận hàng nếu sản phẩm bị lỗi hoặc không đúng mô tả.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">3. Chính sách bảo hành</h2>
            <p className="text-gray-800">
              GreenStore cung cấp bảo hành cho cây trồng trong vòng 30 ngày kể từ ngày mua. Hãy liên hệ với chúng tôi để biết thêm chi tiết.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">4. Chính sách vận chuyển</h2>
            <p className="text-gray-800">
              Chúng tôi hỗ trợ giao hàng toàn quốc với mức phí hợp lý. Đơn hàng sẽ được xử lý và vận chuyển trong vòng 2-5 ngày làm việc.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">5. Chính sách khách hàng thân thiết</h2>
            <p className="text-gray-800">
              Khách hàng thân thiết sẽ nhận ưu đãi đặc biệt, mã giảm giá và quà tặng vào các dịp đặc biệt.
            </p>
          </section>
          
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">6. Liên hệ</h2>
            <p className="text-gray-800">
              Nếu bạn có bất kỳ câu hỏi nào về chính sách khách hàng, vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại trên website.
            </p>
          </section>
        </div>
      </div>
    );
  }
  