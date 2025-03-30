export default function FAQ() {
    const faqs = [
      {
        question: "Làm cách nào để đặt hàng?",
        answer: "Bạn có thể đặt hàng trực tiếp trên website bằng cách chọn sản phẩm, thêm vào giỏ hàng và tiến hành thanh toán. Hoặc bạn có thể gọi điện đến số hotline của chúng tôi để được hỗ trợ đặt hàng."
      },
      {
        question: "Thời gian giao hàng là bao lâu?",
        answer: "Thời gian giao hàng phụ thuộc vào địa chỉ nhận hàng của bạn. Đối với nội thành TP.HCM, thời gian giao hàng từ 1-2 ngày làm việc. Đối với các tỉnh thành khác, thời gian giao hàng từ 3-7 ngày làm việc."
      },
      {
        question: "Tôi có thể đổi trả sản phẩm không?",
        answer: "Chúng tôi chấp nhận đổi trả sản phẩm trong vòng 7 ngày kể từ ngày nhận hàng nếu sản phẩm gặp vấn đề về chất lượng hoặc lỗi kỹ thuật. Sản phẩm phải còn nguyên vẹn, đầy đủ hộp và phụ kiện đi kèm."
      },
      {
        question: "Phương thức thanh toán nào được chấp nhận?",
        answer: "Chúng tôi chấp nhận các phương thức thanh toán sau: Thanh toán khi nhận hàng (COD), Chuyển khoản ngân hàng, Thanh toán qua thẻ tín dụng/ghi nợ, và các ví điện tử phổ biến."
      },
      {
        question: "Làm sao để kiểm tra tình trạng đơn hàng?",
        answer: "Bạn có thể kiểm tra tình trạng đơn hàng bằng cách đăng nhập vào tài khoản của bạn trên website và vào mục 'Đơn hàng của tôi'. Hoặc bạn có thể liên hệ với bộ phận chăm sóc khách hàng để được hỗ trợ."
      },
      {
        question: "Sản phẩm có bảo hành không?",
        answer: "Tất cả các sản phẩm do chúng tôi cung cấp đều được bảo hành chính hãng theo chính sách của nhà sản xuất. Thời gian bảo hành tùy thuộc vào từng sản phẩm, thông thường từ 12-24 tháng."
      }
    ];
  
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Câu hỏi thường gặp (FAQ)</h1>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Bạn vẫn còn thắc mắc?</h2>
          <p className="text-gray-700 mb-4">
            Nếu bạn không tìm thấy câu trả lời cho câu hỏi của mình, vui lòng liên hệ với 
            chúng tôi qua trang liên hệ hoặc gọi đến số hotline để được hỗ trợ.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Liên hệ ngay
          </a>
        </div>
      </div>
    );
  }