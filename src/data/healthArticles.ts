export interface HealthArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: 'Dinh dưỡng' | 'Y tế phòng ngừa' | 'Độc chất & Cấp cứu' | 'Hành vi & Tâm lý';
  readTime: string;
  publishedDate: string;
  author: string;
  authorRole: string;
  image: string;
  tableOfContents: string[];
  contentSections: {
    heading: string;
    body: string[];
    bulletPoints?: string[];
  }[];
}

export const VACCINATION_TIMELINE = [
  {
    age: '6 - 8 tuần tuổi',
    title: 'Mũi 1: Vắc-xin tổng hợp 3 bệnh hoặc 4 bệnh (FVRCP)',
    desc: 'Phòng ngừa bệnh Giảm bạch cầu (Panleukopenia), Viêm mũi khí quản truyền nhiễm (Herpesvirus) và Calicivirus.',
    mandatory: true,
  },
  {
    age: '10 - 12 tuần tuổi',
    title: 'Mũi 2: Nhắc lại vắc-xin tổng hợp + Xét nghiệm FeLV/FIV',
    desc: 'Tăng cường kháng thể chủ động, kiểm tra tình trạng virus suy giảm miễn dịch và bệnh bạch cầu.',
    mandatory: true,
  },
  {
    age: '14 - 16 tuần tuổi',
    title: 'Mũi 3: Mũi nhắc cuối FVRCP + Tiêm phòng Bệnh Dại (Rabies)',
    desc: 'Bắt buộc theo quy định pháp luật thú y, tạo hàng rào miễn dịch vững chắc trọn vẹn cho mèo con.',
    mandatory: true,
  },
  {
    age: 'Hàng năm (Mỗi 12 tháng)',
    title: 'Mũi tiêm nhắc định kỳ hàng năm',
    desc: 'Tiêm nhắc 1 mũi tổng hợp và 1 mũi dại, kết hợp khám tổng quát và xét nghiệm sinh hóa máu định kỳ.',
    mandatory: true,
  }
];

export const HEALTH_ARTICLES: HealthArticle[] = [
  {
    id: 'health-nutrition-hydration',
    title: 'Thức ăn ướt (Pate) vs Thức ăn khô (Hạt): Giải mã khoa học dinh dưỡng và bù nước cho mèo',
    slug: 'thuc-an-uot-vs-thuc-an-kho-cho-meo',
    summary: 'Mèo là động vật ăn thịt bắt buộc (Obligate Carnivores) với cơ chế khát nước rất yếu. Tìm hiểu cách thiết lập chế độ ăn bảo vệ thận tối ưu.',
    category: 'Dinh dưỡng',
    readTime: '8 phút đọc',
    publishedDate: '18 Tháng 10, 2026',
    author: 'TS. Bs. Đặng Hải An',
    authorRole: 'Viện Nghiên cứu Thú y & Dinh dưỡng Thú cưng',
    image: '/images/cat_nutrition_health.jpg',
    tableOfContents: [
      'Bản chất tiến hóa: Tại sao mèo rất ít khi chủ động uống nước?',
      'So sánh ưu và nhược điểm giữa Pate và Hạt khô',
      'Vai trò không thể thay thế của Taurine đối với tim và mắt',
      '4 mẹo thú y giúp mèo uống đủ 50-60ml nước mỗi ngày'
    ],
    contentSections: [
      {
        heading: 'Bản chất tiến hóa: Tại sao mèo rất ít khi chủ động uống nước?',
        body: [
          'Tổ tiên của loài mèo nhà (Felis catus) có nguồn gốc từ loài mèo rừng châu Phi (Felis lybica), sinh sống tại các vùng hoang mạc khô cằn. Do thích nghi hàng triệu năm với môi trường khan hiếm nguồn nước, mèo tiến hóa để lấy phần lớn lượng nước trực tiếp từ cơ thể con mồi tươi sống (chứa khoảng 70-75% độ ẩm).',
          'Chính vì vậy, mèo có ngưỡng kích hoạt cảm giác khát nước ở não bộ rất cao. Khi được nuôi bằng hạt khô (chỉ chứa 8-10% độ ẩm), mèo hiếm khi tự uống đủ nước để bù lại lượng thiếu hụt, dẫn đến tình trạng nước tiểu cô đặc kéo dài - nguyên nhân hàng đầu gây sỏi thận, viêm bàng quang vô căn (FIC) và suy thận mãn tính (CKD).'
        ],
        bulletPoints: [
          'Thức ăn tự nhiên của mèo ngoài hoang dã chứa 70% - 75% nước.',
          'Hạt khô thông thường chỉ cung cấp 8% - 10% nước.',
          'Mèo ăn 100% hạt khô có nguy cơ mắc bệnh tiết niệu cao gấp 3.5 lần mèo ăn chế độ giàu ẩm.'
        ]
      },
      {
        heading: 'So sánh ưu và nhược điểm giữa Pate và Hạt khô',
        body: [
          'Pate (Wet Food): Giàu độ ẩm tự nhiên (75-82%), hàm lượng protein từ thịt nạc cao, ít carbohydrate gây béo phì, bảo vệ hệ tiết niệu và thận. Nhược điểm là chi phí cao hơn và nhanh hỏng sau khi mở hộp.',
          'Hạt khô (Kibble): Tiện lợi, bảo quản được lâu, chi phí tiết kiệm. Tuy nhiên cần kiểm tra kỹ bảng thành phần để đảm bảo nguồn thịt động vật đứng đầu danh sách, tránh các loại hạt độn quá nhiều ngô, lúa mì và tinh bột rỗng.'
        ]
      },
      {
        heading: 'Vai trò không thể thay thế của Taurine đối với tim và mắt',
        body: [
          'Khác với người và chó, mèo hoàn toàn không có khả năng tự tổng hợp axit amin Taurine từ các axit amin khác. Nếu thiếu hụt Taurine trong khẩu phần ăn, mèo sẽ bị thoái hóa võng mạc trung tâm dẫn đến mù lòa vĩnh viễn và suy tim phì đại cơ tim giãn (Dilated Cardiomyopathy). Luôn đảm bảo thức ăn chế biến cho mèo có chứng nhận chuẩn AAFCO hoặc FEDIAF.'
        ]
      },
      {
        heading: '4 mẹo thú y giúp mèo uống đủ 50-60ml nước mỗi ngày',
        body: [
          '1. Trang bị đài phun nước tự động có màng lọc than hoạt tính: Mèo bị kích thích bởi dòng nước chảy róc rách sạch sẽ hơn bát nước tĩnh đọng.',
          '2. Tách xa bát nước khỏi bát thức ăn và khay cát ít nhất 1.5 - 2 mét. Trong tự nhiên mèo không bao giờ uống nước cạnh xác con mồi hay nơi bài tiết.',
          '3. Cho thêm một muỗng canh nước ấm hoặc nước hầm xương gà/cá không gia vị, không hành tỏi vào khẩu phần pate hàng ngày.',
          '4. Dùng bát nước bằng chất liệu gốm sứ hoặc thủy tinh miệng rộng để tránh hiện tượng mỏi ria mép (whisker fatigue).'
        ]
      }
    ]
  },
  {
    id: 'health-toxic-plants-foods',
    title: 'Cẩm nang khẩn cấp: 10 loài cây cảnh và thực phẩm gây ngộ độc chết người ở mèo',
    slug: 'cay-canh-va-thuc-pham-gay-ngo-doc-o-meo',
    summary: 'Nhận diện ngay những hiểm họa vô hình trong phòng khách và căn bếp mà mọi chủ nuôi mèo cần biết để bảo vệ tính mạng thú cưng.',
    category: 'Độc chất & Cấp cứu',
    readTime: '6 phút đọc',
    publishedDate: '08 Tháng 10, 2026',
    author: 'Bs. Lê Thanh Trúc',
    authorRole: 'Trưởng khoa Hồi sức Cấp cứu Thú y',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    tableOfContents: [
      'Hoa Ly (Lilies): Kẻ hủy diệt thận thầm lặng',
      'Họ hành tỏi và nguy cơ phá hủy hồng cầu',
      'Cây trầu bà, kim tiền và tinh thể canxi oxalat',
      'Các loại thuốc hạ sốt của người: Tuyệt đối cấm kỵ',
      'Số hotline và các bước sơ cứu khi nghi ngờ nhiễm độc'
    ],
    contentSections: [
      {
        heading: 'Hoa Ly (Lilies): Kẻ hủy diệt thận thầm lặng',
        body: [
          'Tất cả các bộ phận của cây hoa ly (lá, hoa, cánh hoa, cành, nhị hoa và thậm chí là nước trong bình cắm hoa) đều chứa độc tố gây hoại tử tế bào ống thận ở mèo.',
          'Chỉ cần mèo liếm phải một vài hạt phấn hoa dính trên lông khi tự vệ sinh, thận của mèo có thể ngừng hoạt động trong vòng 48 giờ. Nếu bạn nuôi mèo, tuyệt đối KHÔNG cắm hoa ly trong nhà.'
        ]
      },
      {
        heading: 'Họ hành tỏi và nguy cơ phá hủy hồng cầu',
        body: [
          'Hành tây, tỏi, tỏi tây và hành lá chứa hợp chất Thiosulfate và Disulfide. Enzyme chuyển hóa của mèo không thể phân giải hợp chất này, khiến các phân tử hemoglobin trong hồng cầu bị oxy hóa vỡ vụn (bệnh thiếu máu Heinz bodies). Dù được nấu chín hay dạng bột nêm, độc tính vẫn không hề suy giảm.'
        ]
      },
      {
        heading: 'Các loại thuốc hạ sốt của người: Tuyệt đối cấm kỵ',
        body: [
          'Nhiều chủ nuôi khi thấy mèo sốt đã tự ý cho uống Paracetamol/Panadol. Đây là sai lầm chết người! Mèo thiếu enzyme Glucuronyl Transferase để chuyển hóa thuốc này. Một phần viên thuốc có thể biến hemoglobin thành Methemoglobin không thể vận chuyển oxy, khiến mèo ngạt thở và hoại tử gan cấp tính.'
        ]
      }
    ]
  },
  {
    id: 'health-symptoms-red-flags',
    title: '7 dấu hiệu cảnh báo bệnh tật ở mèo: Khi nào cần đưa đi phòng khám ngay lập tức?',
    slug: 'dau-hieu-canh-bao-benh-tat-o-meo',
    summary: 'Mèo là bậc thầy giấu bệnh do bản năng tự vệ hoang dã. Đừng bỏ qua những thay đổi hành vi nhỏ nhất sau đây.',
    category: 'Y tế phòng ngừa',
    readTime: '5 phút đọc',
    publishedDate: '01 Tháng 10, 2026',
    author: 'Bs. Mai Thảo Vy',
    authorRole: 'Bác sĩ Thú y Đa khoa',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
    tableOfContents: [
      'Đi vệ sinh khó khăn hoặc rặn tiểu nhiều lần',
      'Bỏ ăn liên tục trên 24 giờ và hội chứng gan nhiễm mỡ',
      'Thở bằng miệng hoặc thở hổn hển như chó',
      'Lẩn trốn và thay đổi tính khí đột ngột'
    ],
    contentSections: [
      {
        heading: 'Đi vệ sinh khó khăn hoặc rặn tiểu nhiều lần',
        body: [
          'Nếu mèo đi vào chậu cát liên tục, kêu rên khi rặn hoặc chỉ nhỏ ra vài giọt có lẫn máu, đây là dấu hiệu TẮC NGHẼN ĐƯỜNG TIẾT NIỆU (thường gặp ở mèo đực). Tắc tiểu hoàn toàn có thể gây vỡ bàng quang và nhiễm độc kali máu tử vong trong vòng 24 - 48 giờ. Cần cấp cứu đặt sonde tiểu ngay lập tức!'
        ]
      },
      {
        heading: 'Bỏ ăn liên tục trên 24 giờ và hội chứng gan nhiễm mỡ',
        body: [
          'Khác với người hoặc chó có thể nhịn ăn vài ngày, mèo nhịn ăn quá 24-48 giờ sẽ kích hoạt cơ thể chuyển hóa chất béo ồ ạt về gan, gây ra bệnh Gan Nhiễm Mỡ Cấp Tính (Hepatic Lipidosis) có tỷ lệ tử vong rất cao nếu không được đặt ống truyền dinh dưỡng kịp thời.'
        ]
      }
    ]
  }
];
