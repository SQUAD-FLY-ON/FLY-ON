const mockSchedule = [
  {
    id: "schedule-001",
    memberId: 123456789,
    scheduleStart: "2025-09-10",
    scheduleEnd: "2025-09-12",
    dailyTourismSpots: [
      // Day 1
      [
        {
          id: 1,
          tourismType: "ATTRACTION_SPOT",
          name: "양평 패러글라이딩 체험장",
          fullAddress: "경기도 양평군 용문면 패러글라이딩로 123",
          longitude: 127.592,
          latitude: 37.493,
          phoneNumber: "031-123-4567",
          imgUrl: "https://example.com/images/paragliding.jpg",
        },
        {
          id: 2,
          tourismType: "ATTRACTION_SPOT",
          name: "용문산 관광지",
          fullAddress: "경기도 양평군 용문면 용문산로 345",
          longitude: 127.604,
          latitude: 37.482,
          phoneNumber: "031-987-6543",
          imgUrl: "https://example.com/images/yongmunsan.jpg",
        },
      ],
      // Day 2
      [
        {
          id: 3,
          tourismType: "ATTRACTION_SPOT",
          name: "두물머리",
          fullAddress: "경기도 양평군 양서면 양수리 132",
          longitude: 127.323,
          latitude: 37.529,
          phoneNumber: "031-456-7890",
          imgUrl: "https://example.com/images/dumulmeori.jpg",
        },
        {
          id: 4,
          tourismType: "ATTRACTION_SPOT",
          name: "세미원 정원",
          fullAddress: "경기도 양평군 양서면 두물머리길 125",
          longitude: 127.326,
          latitude: 37.531,
          phoneNumber: "031-111-2222",
          imgUrl: "https://example.com/images/semiwon.jpg",
        },
      ],
      // Day 3
      [
        {
          id: 5,
          tourismType: "ATTRACTION_SPOT",
          name: "양평 전통시장",
          fullAddress: "경기도 양평군 양평읍 시장길 23",
          longitude: 127.489,
          latitude: 37.491,
          phoneNumber: "031-222-3333",
          imgUrl: "https://example.com/images/market.jpg",
        },
        {
          id: 6,
          tourismType: "ATTRACTION_SPOT",
          name: "양평 레일바이크",
          fullAddress: "경기도 양평군 청운면 레일바이크로 88",
          longitude: 127.456,
          latitude: 37.515,
          phoneNumber: "031-333-4444",
          imgUrl: "https://example.com/images/railbike.jpg",
        },
      ],
    ],
  },
];

export default mockSchedule;
