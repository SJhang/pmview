import {
  v4
} from 'node-uuid';

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const MockDB = {
  companies: [{
      id: v4(),
      name: '스타벅스 인계점',
      location: '경기도 수원시 팔달구 인계동',
      hours: 'AM 07:00 ~ PM 10:00',
      phone: '비공개',
      rating: '9.91',
      rank: '0',
      views: '205,021',
      cardImage: '',
      mainImage: '',
      recommended: true,
      outstanding: true,
    },
    {
      id: v4(),
      name: '버거킹 논현점',
      location: '서울특별시 강남구 논현동',
      hours: 'AM 06:00 ~ PM 10:00',
      phone: '비공개',
      rating: '9.99',
      rank: '0',
      views: '237,901',
      cardImage: '',
      mainImage: '',
      recommended: false,
      outstanding: true,
    },
    {
      id: v4(),
      name: '서브웨이 서초점',
      location: '서울특별시 서초구 서초동',
      hours: 'AM 11:00 ~ PM 09:00',
      phone: '비공개',
      rating: '9.68',
      rank: '',
      views: '307,798',
      cardImage: '',
      mainImage: '',
      recommended: true,
      outstanding: false,
    },
    {
      id: v4(),
      name: '맥도날드 화곡점',
      location: '서울특별시 강서구 화곡동',
      hours: 'AM 06:00 ~ PM 11:00',
      phone: '비공개',
      rating: '9.62',
      rank: '1',
      views: '101,222',
      cardImage: '',
      mainImage: '',
      recommended: false,
      outstanding: false,
    },
  ],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchCompanies = (filter) =>
  delay(100).then(() => {
    switch (filter) {
      case 'all':
        return MockDB.companies;
      case 'top':
        return MockDB.companies.filter(company => company.rank === "0");
      case 'recommended':
        return MockDB.companies.filter(company => company.recommended);
      case 'outstanding':
        return MockDB.companies.filter(company => company.outstanding);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });
