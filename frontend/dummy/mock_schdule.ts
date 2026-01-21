const mockSchedule = [
  {
    id: "schedule-1",
    memberId: 1001,
    scheduleStart: "2025-09-08",
    scheduleEnd: "2025-09-09",
    dailyTourismSpots: [
      [
        {
          id: 1,
          tourismType: "ATTRACTION_SPOT",
          name: "속초 패러글라이딩 체험장",
          fullAddress: "강원도 속초시 설악산로 123",
          longitude: 128.593,
          latitude: 38.207,
          phoneNumber: "033-123-4567",
          imgUrl: "https://example.com/paragliding1.jpg",
        },
        {
          id: 2,
          tourismType: "ATTRACTION_SPOT",
          name: "속초 해수욕장",
          fullAddress: "강원도 속초시 해수욕장길 45",
          longitude: 128.601,
          latitude: 38.199,
          phoneNumber: "033-234-5678",
          imgUrl: "https://example.com/beach1.jpg",
        },
      ],
    ],
  },
  {
    id: "schedule-2",
    memberId: 1002,
    scheduleStart: "2025-09-10",
    scheduleEnd: "2025-09-11",
    dailyTourismSpots: [
      [
        {
          id: 3,
          tourismType: "ATTRACTION_SPOT",
          name: "양평 패러글라이딩 체험장",
          fullAddress: "경기도 양평군 산속길 77",
          longitude: 127.49,
          latitude: 37.492,
          phoneNumber: "031-345-6789",
          imgUrl: "https://example.com/paragliding2.jpg",
        },
        {
          id: 4,
          tourismType: "ATTRACTION_SPOT",
          name: "두물머리",
          fullAddress: "경기도 양평군 두물머리로 88",
          longitude: 127.501,
          latitude: 37.495,
          phoneNumber: "031-456-7890",
          imgUrl: "https://example.com/river.jpg",
        },
      ],
    ],
  },
  {
    id: "schedule-3",
    memberId: 1003,
    scheduleStart: "2025-09-12",
    scheduleEnd: "2025-09-13",
    dailyTourismSpots: [
      [
        {
          id: 5,
          tourismType: "ATTRACTION_SPOT",
          name: "제주 패러글라이딩 체험장",
          fullAddress: "제주특별자치도 제주시 한라산로 55",
          longitude: 126.532,
          latitude: 33.385,
          phoneNumber: "064-567-8901",
          imgUrl: "https://example.com/paragliding3.jpg",
        },
        {
          id: 6,
          tourismType: "ATTRACTION_SPOT",
          name: "성산일출봉",
          fullAddress: "제주특별자치도 서귀포시 성산읍",
          longitude: 126.941,
          latitude: 33.459,
          phoneNumber: "064-678-9012",
          imgUrl: "https://example.com/sunrise.jpg",
        },
      ],
    ],
  },
];

export default mockSchedule;
