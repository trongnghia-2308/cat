import { getAssetUrl } from '../utils/catUtils';

export interface GroomingArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: 'Chải lông' | 'Tắm & Vệ sinh' | 'Móng & Răng' | 'Spa & Thư giãn';
  readTime: string;
  publishedDate: string;
  author: string;
  authorRole: string;
  image: string;
  tableOfContents: string[];
  contentSections: {
    heading: string;
    body: string[];
    tips?: string[];
  }[];
}

export const GROOMING_VIDEO_TUTORIAL = {
  title: 'Quy trình chải lông & tắm cho mèo không hoảng sợ (Stress-Free Feline Grooming)',
  youtubeId: 'ORtlZG_RU1s',
  youtubeEmbedUrl: 'https://www.youtube.com/embed/ORtlZG_RU1s',
  duration: '8 phút 45 giây',
  author: 'The Cat Butler & FelisCare Studio',
  description: 'Hướng dẫn chuẩn thú y về phương pháp làm quen với nước, chọn nhiệt độ nước 38°C lý tưởng, kỹ thuật mát-xa da đầu giúp mèo thư giãn và dùng máy sấy tĩnh âm chuyên dụng.',
  keyMoments: [
    { time: '00:45', note: 'Cách làm quen với lược chải và thưởng snack vị cá' },
    { time: '02:30', note: 'Chuẩn bị thảm chống trượt trong bồn tắm' },
    { time: '04:15', note: 'Thao tác xoa sữa tắm dịu nhẹ tránh vùng mắt mũi' },
    { time: '06:50', note: 'Kỹ thuật sấy lông giữ nhiệt và không gây tiếng ồn' },
  ]
};

export const GROOMING_ARTICLES: GroomingArticle[] = [
  {
    id: 'grooming-guide-brushing',
    title: 'Nghệ thuật chải lông cho mèo: Ngừa búi lông (Hairballs) và giữ lớp lông óng ả',
    slug: 'nghe-thuat-chai-long-cho-meo',
    summary: 'Chải lông không chỉ để làm đẹp mà là biện pháp y tế phòng ngừa chứng tắc ruột do búi lông cực kỳ nguy hiểm ở mèo.',
    category: 'Chải lông',
    readTime: '6 phút đọc',
    publishedDate: '15 Tháng 10, 2026',
    author: 'Bs. Mai Thảo Vy',
    authorRole: 'Chuyên gia Chăm sóc Thú cưng & Hành vi Feline',
    image: getAssetUrl('/images/cat_grooming_brush.jpg'),
    tableOfContents: [
      'Tại sao việc chải lông định kỳ lại sống còn đối với mèo?',
      'Phân loại dụng cụ chải lông theo độ dài lông',
      'Kỹ thuật chải lông 3 bước nhẹ nhàng',
      'Cách xử lý khi gặp búi lông bết dính (Mats) an toàn'
    ],
    contentSections: [
      {
        heading: 'Tại sao việc chải lông định kỳ lại sống còn đối với mèo?',
        body: [
          'Loài mèo dành từ 30% đến 50% thời gian thức mỗi ngày để tự liếm láp vệ sinh cơ thể. Lưỡi của mèo có hàng trăm chiếc gai hình nón nhỏ bằng chất sừng (papillae) hoạt động như một chiếc lược tự nhiên. Tuy nhiên, lượng lông rụng nuốt vào dạ dày nếu không được tiêu hóa sẽ tích tụ thành búi lông lớn (hairballs).',
          'Khi búi lông quá kích thước, chúng có thể gây tắc nghẽn đường ruột cấp tính, khiến mèo nôn mửa, sụt cân và có thể phải can thiệp phẫu thuật khẩn cấp. Việc bạn chủ động chải lông hàng ngày giúp loại bỏ đến 85% lông chết trước khi mèo kịp nuốt vào bụng.'
        ],
        tips: [
          'Chải lông vào thời điểm mèo đang thư giãn, như sau bữa ăn hoặc khi đang nằm sưởi nắng.',
          'Luôn kết hợp chải lông với lời khen ngợi nhẹ nhàng và một viên súp thưởng yêu thích.'
        ]
      },
      {
        heading: 'Phân loại dụng cụ chải lông theo độ dài lông',
        body: [
          'Đối với mèo lông ngắn (như mèo Ta, British Shorthair, Russian Blue): Sử dụng găng tay cao su massage hoặc lược răng kim loại sát mịn. Dụng cụ này giúp lấy đi lông tơ rụng mà không làm xước da.',
          'Đối với mèo lông dài và bán dài (như Ba Tư, Ragdoll, Maine Coon): Bạn cần combo gồm lược răng thưa kim loại (để gỡ rối ban đầu), lược cào lớp lông lót (undercoat de-shedder) và lược chổi mềm để hoàn thiện độ bóng.'
        ]
      },
      {
        heading: 'Kỹ thuật chải lông 3 bước nhẹ nhàng',
        body: [
          'Bước 1: Bắt đầu chải xuôi theo chiều mọc của lông từ đỉnh đầu, gáy, dọc sống lưng xuống đến hông. Đây là những vùng mèo cảm thấy an toàn và thích thú nhất.',
          'Bước 2: Nhẹ nhàng lật nghiêng người bé để chải vùng nách và ngực - hai vị trí rất dễ vón cục do ma sát khi đi lại.',
          'Bước 3: Vùng bụng và đuôi là khu vực nhạy cảm nhất. Chỉ chải khi mèo hoàn toàn thả lỏng, không ghì chặt hoặc ép buộc nếu bé có dấu hiệu quẫy đuôi khó chịu.'
        ]
      },
      {
        heading: 'Cách xử lý khi gặp búi lông bết dính (Mats) an toàn',
        body: [
          'Tuyệt đối KHÔNG dùng kéo cắt sát da mèo để gỡ búi rối! Da mèo rất mỏng và di động, bạn rất dễ vô tình cắt phạm vào da thịt bé gây vết thương hở sâu.',
          'Giải pháp: Dùng ngón tay tách nhẹ búi rối từ ngoài vào trong, thoa một chút bột bắp (cornstarch) hoặc xịt dưỡng gỡ rối chuyên dụng, sau đó dùng đầu lược răng thưa gỡ từng chút một.'
        ]
      }
    ]
  },
  {
    id: 'grooming-guide-stress-free-bath',
    title: 'Kỹ thuật tắm mèo chuẩn Spa không hoảng loạn: Cẩm nang 6 bước chi tiết',
    slug: 'ky-thuat-tam-meo-khong-hoang-loan',
    summary: 'Bí quyết giúp trải nghiệm tắm rửa trở nên êm ái, hạn chế tiếng cào cấu và giữ an toàn tuyệt đối cho cả bạn lẫn boss.',
    category: 'Tắm & Vệ sinh',
    readTime: '7 phút đọc',
    publishedDate: '10 Tháng 10, 2026',
    author: 'Trần Minh Hoàng',
    authorRole: 'Master Pet Groomer & Nhà Huấn Luyện Thú Cưng',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    tableOfContents: [
      'Khi nào mèo thực sự cần tắm?',
      'Công tác chuẩn bị trước khi vào phòng tắm',
      'Quy trình tắm 6 bước êm đềm',
      'Kỹ thuật làm khô và giữ ấm chuẩn thú y'
    ],
    contentSections: [
      {
        heading: 'Khi nào mèo thực sự cần tắm?',
        body: [
          'Mèo khỏe mạnh tự chải chuốt rất tốt, do đó bạn không cần tắm cho mèo mỗi tuần như loài chó. Tần suất lý tưởng chỉ là 4 đến 8 tuần một lần, hoặc khi bé bị dính bùn đất, dầu mỡ, chất bẩn dính bết hoặc theo chỉ định trị nấm của bác sĩ.',
          'Tắm quá thường xuyên bằng xà phòng không phù hợp sẽ làm mất đi lớp dầu tự nhiên bảo vệ da, khiến da mèo khô ráp, ngứa ngáy và bong vảy gàu.'
        ]
      },
      {
        heading: 'Công tác chuẩn bị trước khi vào phòng tắm',
        body: [
          '1. Cắt móng trước 1 ngày: Điều này giúp hạn chế trầy xước nếu mèo vô tình giật mình.',
          '2. Chải mượt lông trước: Nước sẽ làm các búi lông rối bện chặt hơn như nỉ, vì vậy phải gỡ sạch búi rối trước khi xả nước.',
          '3. Chuẩn bị khăn bông lớn xơ mềm, máy sấy êm, sữa tắm pH 6.0-6.5 chuyên biệt cho mèo (tuyệt đối không dùng dầu gội người hay sữa tắm chó).',
          '4. Đặt một tấm thảm cao su hoặc khăn ướt dưới đáy chậu để mèo có chỗ bám chân vững chãi.'
        ]
      },
      {
        heading: 'Quy trình tắm 6 bước êm đềm',
        body: [
          'Bước 1: Dùng nước ấm 37°C - 38°C (thử trên cổ tay thấy ấm dễ chịu).',
          'Bước 2: Dùng ca nhỏ múc nước rót nhẹ nhàng từ cổ xuống thân sau, không xịt vòi hoa sen trực tiếp lên mặt.',
          'Bước 3: Tạo bọt sữa tắm ra tay trước, xoa đều dọc sống lưng, cổ, bụng và bốn chân.',
          'Bước 4: Dùng khăn ẩm lau nhẹ vùng mặt, quanh khóe mắt và dưới cằm.',
          'Bước 5: Xả sạch bọt bằng nước ấm 2-3 lần đến khi nước chảy ra hoàn toàn trong.',
          'Bước 6: Quấn ngay mèo vào khăn bông dày đã sưởi ấm để hút bớt nước.'
        ]
      }
    ]
  },
  {
    id: 'grooming-guide-claws-ears-teeth',
    title: 'Cắt móng, vệ sinh tai và chăm sóc răng miệng: 3 thói quen vàng tại nhà',
    slug: 'cat-mong-ve-sinh-tai-rang-mieng-meo',
    summary: 'Cách thực hiện nhẹ nhàng các thao tác chăm sóc định kỳ tại nhà mà không khiến mèo bị đau hoặc căng thẳng.',
    category: 'Móng & Răng',
    readTime: '5 phút đọc',
    publishedDate: '02 Tháng 10, 2026',
    author: 'Bs. Nguyễn Lan Phương',
    authorRole: 'Bác sĩ Thú y Đa khoa',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
    tableOfContents: [
      'Bí quyết bấm móng tránh cắt vào tủy máu (Quick)',
      'Vệ sinh tai chuẩn cách: Tránh tổn thương màng nhĩ',
      'Đánh răng cho mèo: Phòng ngừa bệnh vôi răng và viêm nướu'
    ],
    contentSections: [
      {
        heading: 'Bí quyết bấm móng tránh cắt vào tủy máu (Quick)',
        body: [
          'Móng mèo có cấu tạo gồm phần sừng trong suốt bên ngoài và phần tủy màu hồng chứa mạch máu và dây thần kinh bên trong. Khi bấm, chỉ tỉa nhẹ 1-2mm phần chóp nhọn trong suốt.',
          'Bấm nhẹ vào đệm thịt ngón chân để móng thò ra. Nếu vô tình bấm trúng tủy gây chảy máu, hãy bình tĩnh chấm ngay một chút bột cầm máu (Styptic powder) hoặc bột bắp vào đầu móng.'
        ]
      },
      {
        heading: 'Vệ sinh tai chuẩn cách: Tránh tổn thương màng nhĩ',
        body: [
          'Tuyệt đối không thọc tăm bông sâu vào ống tai của mèo! Hãy nhỏ 2-3 giọt dung dịch vệ sinh tai dịu nhẹ, xoa bóp gốc tai trong 20-30 giây nghe tiếng "lọp xọp", sau đó để mèo lắc đầu tự nhiên và dùng miếng bông tẩy trang lau sạch chất bẩn văng ra ngoài vành tai.'
        ]
      }
    ]
  }
];
