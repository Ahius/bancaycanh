export default function Terms() {
  return (
    <div className="container mx-auto px-6 py-10 max-w-4xl bg-green-50 rounded-xl shadow-lg border border-green-200 mt-10 mb-10">
      <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">Điều khoản & Điều kiện</h1>
      
      <div className="prose max-w-none text-green-900">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">1. Giới thiệu</h2>
          <p className="text-gray-800">
            Chào mừng bạn đến với GreenStore - nơi cung cấp những loại cây xanh tuyệt vời cho ngôi nhà của bạn. 
            Khi sử dụng website của chúng tôi, bạn đồng ý với các điều khoản dưới đây.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">2. Sử dụng website</h2>
          <p className="text-gray-800">
            Bạn đồng ý sử dụng website một cách có trách nhiệm và không thực hiện các hành vi gây hại.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Không đăng tải nội dung không phù hợp.</li>
            <li>Không xâm phạm quyền riêng tư của người khác.</li>
            <li>Không làm gián đoạn hoạt động của website.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">3. Tài khoản người dùng</h2>
          <p className="text-gray-800">
            Khi tạo tài khoản tại GreenStore, bạn chịu trách nhiệm bảo mật thông tin cá nhân và mật khẩu.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">4. Mua hàng và thanh toán</h2>
          <p className="text-gray-800">
            Chúng tôi cam kết cung cấp sản phẩm chất lượng. Tuy nhiên, đơn hàng có thể bị hủy nếu có lỗi về giá hoặc tồn kho.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">5. Quyền sở hữu trí tuệ</h2>
          <p className="text-gray-800">
            Nội dung trên GreenStore thuộc quyền sở hữu của chúng tôi và không được sao chép khi chưa có sự cho phép.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">6. Thay đổi điều khoản</h2>
          <p className="text-gray-800">
            GreenStore có quyền sửa đổi các điều khoản bất cứ lúc nào. Hãy thường xuyên cập nhật để biết các thay đổi mới nhất.
          </p>
        </section>
        
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">7. Liên hệ</h2>
          <p className="text-gray-800">
            Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại trên website.
          </p>
        </section>
      </div>
    </div>
  );
}
