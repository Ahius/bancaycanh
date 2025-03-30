// export const news = [
//     {
//       id: 1,
//       title: "Top 10 cây phong thủy hợp mệnh Kim giúp kích hoạt vượng khí và mang lại may mắn.",
//       date: "15/10/2023",
//       summary: "Trong phong thủy, mỗi người đều có một mệnh theo ngày sinh và mỗi mệnh đều có những loại cây phù hợp để trồng trong nhà. Người mệnh Kim nên lựa chọn những loại cây dưới đây để giúp kích hoạt và cân bằng năng lượng, mang lại tài lộc, may mắn và sự thịnh vượng.",
//       content: "Nội dung chi tiết về các công nghệ mới...",
//       image: "https://mowgarden.com/wp-content/uploads/2023/03/cay-phong-thuy-hop-menh-kim-768x576.jpg"
//     },
//     {
//       id: 2,
//       title: "Hướng dẫn lựa chọn cây phong thủy trong nhà để tăng vượng khí",
//       date: "10/10/2023",
//       summary: "Theo quan niệm phong thủy, vượng khí là yếu tố quan trọng giúp cho ngôi nhà trở nên may mắn, tài lộc và hạnh phúc. Trong đó, sử dụng cây cảnh để tăng vượng khí ngôi nhà là một trong những giải pháp phong thủy được nhiều người tin tưởng và áp dụng.",
//       content: "Nội dung chi tiết hướng dẫn sử dụng...",
//       image: "https://mowgarden.com/wp-content/uploads/2023/04/huong-dan-trong-cay-phong-thuy-trong-nha-768x575.jpg"
//     },
//     {
//       id: 3,
//       title: "Cây hạnh phúc là cây gì? Hướng dẫn cách chăm sóc cây hạnh phúc trong nhà",
//       date: "05/10/2023",
//       summary: "Có một loại cây cảnh trong nhà mà tên gọi của nó chính là điều mong muốn của rất nhiều người, đó chính là cây hạnh phúc. Đây là một loại cây cảnh đẹp mắt, có sức sống tốt và có thể trồng được trong nhà, và nó đang là loại cây cảnh được rất nhiều người ưu chuộng để trang trí không gian sống hoặc sử dụng làm quà tặng cho người thân vào mỗi dịp lễ đặc biệt.",
//       content: "Nội dung chi tiết về các xu hướng...",
//       image: "https://mowgarden.com/wp-content/uploads/2023/03/cay-hanh-phuc-la-cay-gi-768x512.jpg"
//     }
//   ];

export const news = [
  {
    id: 1,
    title: "Top 10 cây phong thủy hợp mệnh Kim giúp kích hoạt vượng khí và mang lại may mắn",
    date: "15/10/2023",
    summary: "Trong phong thủy, mỗi người đều có một mệnh theo ngày sinh và mỗi mệnh đều có những loại cây phù hợp để trồng trong nhà.",
    content: `
      <h2 class="text-2xl font-bold mb-4">1. Cây Bạch Mã Hoàng Tử - Vương giả khí chất</h2>
      <p class="mb-4">Với lá xanh viền trắng thanh thoát, cây Bạch Mã Hoàng Tử là lựa chọn số 1 cho người mệnh Kim. Theo chuyên gia phong thủy Lý Thành Phát: "Màu trắng kim loại của lá đại diện cho sự tinh khiết, giúp cân bằng năng lượng Kim trong nhà".</p>
      
      <h2 class="text-2xl font-bold mb-4">2. Cây Lan Ý - Thanh lọc không khí</h2>
      <p class="mb-4">NASA công nhận loại cây này có khả năng lọc formaldehyde và benzene. Đặt ở hướng Tây/Tây Bắc sẽ tăng cường vận may về tài lộc.</p>
      
      <h3 class="text-xl font-semibold mb-2">Cách chăm sóc đặc biệt:</h3>
      <ul class="list-disc pl-6 mb-4">
        <li>Tưới 2 lần/tuần</li>
        <li>Dùng chậu kim loại màu trắng hoặc vàng</li>
        <li>Tránh đặt trực tiếp dưới nắng gắt</li>
      </ul>
      
      <div class="bg-blue-50 p-4 rounded-lg my-6">
        <p class="font-semibold">Mẹo phong thủy:</p>
        <p>Kết hợp thêm đá thạch anh trắng dưới gốc cây sẽ nhân đôi hiệu quả.</p>
      </div>
    `,
    image: "https://mowgarden.com/wp-content/uploads/2023/03/cay-phong-thuy-hop-menh-kim-768x576.jpg",
    category: "PHONG THỦY"
  },
  {
    id: 2,
    title: "Hướng dẫn lựa chọn cây phong thủy trong nhà để tăng vượng khí",
    date: "10/10/2023",
    summary: "Theo quan niệm phong thủy, vượng khí là yếu tố quan trọng giúp cho ngôi nhà trở nên may mắn, tài lộc.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Nguyên tắc vàng chọn cây theo không gian</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="border p-4 rounded-lg">
          <h3 class="font-bold text-lg mb-2">Phòng khách</h3>
          <p>Ưu tiên cây dáng cao như Kim Ngân, Ngũ Gia Bì. Theo nghiên cứu từ ĐH Nông nghiệp Hà Nội, những loại này giúp giảm 30% bụi mịn PM2.5.</p>
        </div>
        <div class="border p-4 rounded-lg">
          <h3 class="font-bold text-lg mb-2">Phòng ngủ</h3>
          <p>Chọn cây nhả oxy ban đêm như Lưỡi Hổ, giúp cải thiện 27% chất lượng giấc ngủ (theo tạp chí Sleep Medicine).</p>
        </div>
      </div>
      
      <h3 class="text-xl font-semibold mb-2">5 dấu hiệu cây đang hút vượng khí:</h3>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Lá xanh bóng tự nhiên</li>
        <li>Chồi non liên tục đâm lộc</li>
        <li>Thân cây vươn thẳng</li>
        <li>Rễ phát triển đều</li>
        <li>Xuất hiện hoa (nếu là loại có hoa)</li>
      </ol>
      
      <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
        <p>Cảnh báo: Tránh các cây gai nhọn như xương rồng trong nhà ở, chúng tạo ra sát khí theo sách "Phong thủy ứng dụng" - GS. Trần Văn Hai.</p>
      </div>
    `,
    image: "https://mowgarden.com/wp-content/uploads/2023/04/huong-dan-trong-cay-phong-thuy-trong-nha-768x575.jpg",
    category: "CHĂM SÓC CÂY"
  },
  {
    id: 3,
    title: "Cây hạnh phúc là cây gì? Hướng dẫn cách chăm sóc cây hạnh phúc trong nhà",
    date: "05/10/2023",
    summary: "Cây hạnh phúc là loại cây cảnh đẹp mắt, có sức sống tốt và có thể trồng được trong nhà.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Bí mật đằng sau tên gọi "cây hạnh phúc"</h2>
      <p class="mb-4">Theo nghiên cứu của ĐH Copenhagen (2022), cây này phát ra lượng ion âm cao gấp 3 lần cây thông thường, giúp giảm stress hiệu quả.</p>
      
      <div class="flex flex-col md:flex-row gap-6 mb-8">
       
        <div class="flex-1">
          <h3 class="font-bold text-lg mb-2">Đặc điểm nhận dạng:</h3>
          <ul class="space-y-2">
            <li>✔ Lá hình tim xanh đậm</li>
            <li>✔ Thân gỗ nhỏ phân nhánh đẹp</li>
            <li>✔ Chiều cao trung bình 1-2m</li>
            <li>✔ Dễ uốn nắn tạo dáng</li>
          </ul>
        </div>
      </div>
      
      <h3 class="text-xl font-semibold mb-2">Lịch chăm sóc theo mùa:</h3>
      <table class="min-w-full mb-6 border">
        <thead>
          <tr class="bg-gray-100">
            <th class="py-2 px-4 border">Mùa</th>
            <th class="py-2 px-4 border">Tưới nước</th>
            <th class="py-2 px-4 border">Bón phân</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border">Xuân-Hè</td>
            <td class="py-2 px-4 border">2 ngày/lần</td>
            <td class="py-2 px-4 border">2 tuần/lần</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="py-2 px-4 border">Thu-Đông</td>
            <td class="py-2 px-4 border">5 ngày/lần</td>
            <td class="py-2 px-4 border">1 tháng/lần</td>
          </tr>
        </tbody>
      </table>
      
      <div class="bg-green-50 p-4 rounded-lg">
        <p class="font-semibold">Mẹo nhân giống:</p>
        <p>Cắt cành 15cm, ngâm nước 2 tuần cho ra rễ rồi trồng vào đất tơi xốp. Tỷ lệ thành công lên tới 80%.</p>
      </div>
    `,
    image: "https://mowgarden.com/wp-content/uploads/2023/03/cay-hanh-phuc-la-cay-gi-768x512.jpg",
    category: "KIẾN THỨC"
  }
];