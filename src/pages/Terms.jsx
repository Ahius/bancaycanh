export default function Terms() {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Điều khoản và Điều kiện</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Giới thiệu</h2>
            <p className="text-gray-700 mb-4">
              Chào mừng bạn đến với TechStore. Bằng cách truy cập và sử dụng website của chúng tôi, 
              bạn đồng ý tuân thủ và bị ràng buộc bởi các điều khoản và điều kiện sử dụng được nêu 
              dưới đây.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Sử dụng website</h2>
            <p className="text-gray-700 mb-4">
              Bạn đồng ý sử dụng website này chỉ cho các mục đích hợp pháp và phù hợp với các điều 
              khoản và điều kiện này. Bạn không được sử dụng website để:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Thực hiện bất kỳ hành vi nào vi phạm pháp luật hiện hành</li>
              <li>Đăng tải hoặc truyền bá nội dung không phù hợp, xúc phạm hoặc bất hợp pháp</li>
              <li>Xâm phạm quyền riêng tư của người khác</li>
              <li>Gây rối hoặc làm gián đoạn hoạt động của website</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Tài khoản người dùng</h2>
            <p className="text-gray-700 mb-4">
              Nếu bạn tạo tài khoản trên website của chúng tôi, bạn có trách nhiệm bảo mật thông tin 
              tài khoản và mật khẩu của mình. Bạn đồng ý chịu trách nhiệm cho tất cả các hoạt động 
              xảy ra dưới tài khoản của bạn.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Mua hàng và thanh toán</h2>
            <p className="text-gray-700 mb-4">
              Tất cả các giao dịch mua bán thông qua website này phải tuân thủ các điều khoản mua 
              hàng của chúng tôi. Chúng tôi có quyền từ chối hoặc hủy bỏ bất kỳ đơn hàng nào vì 
              bất kỳ lý do gì, bao gồm nhưng không giới hạn ở các vấn đề về sản phẩm, giá cả, 
              hoặc lỗi thông tin.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Quyền sở hữu trí tuệ</h2>
            <p className="text-gray-700 mb-4">
              Tất cả nội dung trên website này, bao gồm nhưng không giới hạn ở văn bản, đồ họa, 
              logo, hình ảnh, là tài sản của chúng tôi hoặc được cấp phép sử dụng và được bảo vệ 
              bởi luật bản quyền. Bạn không được sao chép, phân phối hoặc sử dụng bất kỳ nội dung 
              nào mà không có sự cho phép bằng văn bản của chúng tôi.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Thay đổi điều khoản</h2>
            <p className="text-gray-700 mb-4">
              Chúng tôi có quyền sửa đổi các điều khoản và điều kiện này vào bất kỳ lúc nào. 
              Những thay đổi sẽ có hiệu lực ngay khi được đăng tải trên website. Việc bạn tiếp tục 
              sử dụng website sau khi có các thay đổi đồng nghĩa với việc bạn chấp nhận các thay 
              đổi đó.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Liên hệ</h2>
            <p className="text-gray-700">
              Nếu bạn có bất kỳ câu hỏi nào về các điều khoản và điều kiện này, vui lòng liên hệ 
              với chúng tôi thông qua trang liên hệ trên website.
            </p>
          </section>
        </div>
      </div>
    );
  }