export interface AdoptableCat {
  id: string;
  name: string;
  vietnameseName: string;
  gender: 'Đực' | 'Cái';
  age: string;
  breedEstimate: string;
  colorPattern: string;
  personality: string[];
  healthStatus: {
    vaccinated: boolean;
    sterilized: boolean;
    dewormed: boolean;
    felvFivNegative: boolean;
  };
  rescueStory: string;
  shelterLocation: string;
  image: string;
  status: 'Sẵn sàng tìm nhà' | 'Đang chờ phỏng vấn' | 'Đã được nhận nuôi';
}

export interface ShelterPartner {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  mapEmbedUrl: string;
  description: string;
}

export const ADOPTABLE_CATS: AdoptableCat[] = [
  {
    id: 'cat-patches',
    name: 'Patches (Bánh Mì)',
    vietnameseName: 'Bé Bánh Mì',
    gender: 'Cái',
    age: '8 tháng tuổi',
    breedEstimate: 'Mèo Mướp Tam Thể lai (Calico mix)',
    colorPattern: 'Tam thể vàng - cam - trắng',
    personality: ['Thích vuốt ve', 'Rất ngoan ngoãn', 'Quấn người', 'Thích nằm nệm êm'],
    healthStatus: {
      vaccinated: true,
      sterilized: true,
      dewormed: true,
      felvFivNegative: true,
    },
    rescueStory: 'Được cứu hộ trong một ngày mưa bão tại hẻm nhỏ Hoàng Hoa Thám khi còn là mèo con bị ướt sũng. Nay bé đã phục hồi sức khỏe hoàn hảo, lông óng mượt và thích rúc vào lòng bạn khi đọc sách.',
    shelterLocation: 'Trạm Cứu Hộ Động Vật Hà Nội (CS Hoàng Hoa Thám)',
    image: '/images/cat_adoption_shelter.jpg',
    status: 'Sẵn sàng tìm nhà'
  },
  {
    id: 'cat-milo',
    name: 'Milo (Gừng)',
    vietnameseName: 'Bé Gừng',
    gender: 'Đực',
    age: '1.5 tuổi',
    breedEstimate: 'Mèo Vàng Ta (Domestic Shorthair)',
    colorPattern: 'Vàng cam sọc hổ (Orange Tabby)',
    personality: ['Nhiệt tình', 'Tò mò', 'Thích săn đồ chơi', 'Ăn ngoan'],
    healthStatus: {
      vaccinated: true,
      sterilized: true,
      dewormed: true,
      felvFivNegative: true,
    },
    rescueStory: 'Từng là mèo hoang ở chợ đầu mối, bé Milo có tính cách vui tươi, dạn dĩ với người và luôn thích tương tác với cần câu lông vũ.',
    shelterLocation: 'Trạm Cứu Trợ Yêu Động Vật Sài Gòn (Quận 7)',
    image: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=800&q=80',
    status: 'Sẵn sàng tìm nhà'
  },
  {
    id: 'cat-luna',
    name: 'Luna (Bóng Đêm)',
    vietnameseName: 'Bé Luna',
    gender: 'Cái',
    age: '1 tuổi',
    breedEstimate: 'Mèo Đen lai Nga',
    colorPattern: 'Đen tuyền ánh than, mắt hổ phách',
    personality: ['Điềm tĩnh', 'Thông minh', 'Thích quan sát', 'Trung thành'],
    healthStatus: {
      vaccinated: true,
      sterilized: true,
      dewormed: true,
      felvFivNegative: true,
    },
    rescueStory: 'Được giải cứu khỏi công trường xây dựng, Luna có bộ lông đen óng ả bí ẩn, rất khôn và biết đi vệ sinh đúng khay cát từ ngày đầu tiên.',
    shelterLocation: 'Mái Ấm Mèo Bồ Công Anh (Cầu Giấy, Hà Nội)',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    status: 'Sẵn sàng tìm nhà'
  },
  {
    id: 'cat-bong',
    name: 'Bông (Cloud)',
    vietnameseName: 'Bé Bông',
    gender: 'Đực',
    age: '2 tuổi',
    breedEstimate: 'Mèo Ta lai Ba Tư',
    colorPattern: 'Trắng tinh khôi, mắt hai màu (odd-eyed xanh & vàng)',
    personality: ['Thích ngủ trưa', 'Thư thái', 'Dịu dàng', 'Thân thiện'],
    healthStatus: {
      vaccinated: true,
      sterilized: true,
      dewormed: true,
      felvFivNegative: true,
    },
    rescueStory: 'Bé Bông được chủ cũ chuyển nhà gửi lại trạm. Bé rất điềm đạm, thích được chải lông và có khả năng tương tác tuyệt vời với người già và trẻ nhỏ.',
    shelterLocation: 'Trạm Cứu Trợ Động Vật Sài Gòn (Thủ Đức)',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
    status: 'Đang chờ phỏng vấn'
  }
];

export const SHELTER_PARTNERS: ShelterPartner[] = [
  {
    id: 'hanoi-shelter',
    name: 'Trạm Cứu Hộ Động Vật Nông Nghiệp & Hà Nội Pet Rescue',
    city: 'Hà Nội',
    address: 'Số 68 Ngõ 198 Hoàng Hoa Thám, Ba Đình, Hà Nội',
    phone: '0983 245 812',
    hours: '08:30 - 18:30 hàng ngày',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8977284699566!2d105.81938927587094!3d21.03677758750137!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x3135ab0d6e66e60b%3A0x6b5c37894a4805c8!2zSG_DoG5nIEhvYSBUaMOhbSwgQmEgxJDDrG5oLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s',
    description: 'Tổ chức tình nguyện phi lợi nhuận cứu hộ và cưu mang hàng trăm bé mèo vô gia cư, cung cấp điều trị y tế và tìm mái ấm yêu thương trọn đời.'
  },
  {
    id: 'hcm-shelter',
    name: 'Trạm Cứu Hộ Chó Mèo Sài Gòn Time (SGT Shelter)',
    city: 'TP. Hồ Chí Minh',
    address: 'Đường Nguyễn Thị Thập, Tân Phú, Quận 7, TP. Hồ Chí Minh',
    phone: '0908 612 994',
    hours: '09:00 - 17:00 (Thứ 2 - Chủ Nhật)',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9538356191763!2d106.72149617573516!3d21.03677758750137!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x31752570b809a7b9%3A0x1d3c051ec72b0c16!2zTmd1eeG7hW4gVGjhu4sgVGjhuq1wLCBRdeG6rW4gNywgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700000000001!5m2!1svi!2s',
    description: 'Mái ấm trung tâm tiếp nhận, cách ly điều trị và tổ chức các ngày hội Adoption Day để kết nối người nhận nuôi có trách nhiệm tại miền Nam.'
  }
];

export const ADOPTION_STEPS = [
  {
    step: '01',
    title: 'Tìm hiểu & Chọn bé mèo',
    desc: 'Tham khảo danh sách các bé mèo đang được cưu mang, cân nhắc tính cách và điều kiện không gian sống của gia đình.'
  },
  {
    step: '02',
    title: 'Gửi đơn đăng ký nhận nuôi',
    desc: 'Điền form thông tin khảo sát trực tuyến về kinh nghiệm nuôi, tình trạng nhà cửa (lưới an toàn ban công) và cam kết tiêm phòng.'
  },
  {
    step: '03',
    title: 'Gặp gỡ & Phỏng vấn',
    desc: 'Ghé thăm trạm cứu hộ hoặc trao đổi trực tuyến với tình nguyện viên để gắn kết và xác nhận sự tương thích với bé mèo.'
  },
  {
    step: '04',
    title: 'Đón bé về mái ấm mới',
    desc: 'Ký cam kết không bỏ rơi, nhận sổ sức khỏe thú y và luôn có đội ngũ bác sĩ hỗ trợ tư vấn chăm sóc trọn đời.'
  }
];
