import { DayData, DaySchedule, ScheduleItem, Schedules } from "@/types"; // 실제 타입 경로에 맞게 수정해주세요.

export const transformDayDataToSchedules = (dayData: DayData): Schedules => {
  // 1. dayData 객체의 키("day1", "day2" 등)를 가져와 숫자 순서대로 정렬합니다.
  const sortedDayIds = Object.keys(dayData).sort((a, b) => {
    const numA = parseInt(a.replace('day', ''), 10);
    const numB = parseInt(b.replace('day', ''), 10);
    return numA - numB;
  });

  // 2. 정렬된 키를 기준으로 각 날짜의 일정을 변환합니다.
  const schedules: Schedules = sortedDayIds.map(dayId => {
    const day = dayData[dayId];
    
    // 3. (핵심) day.plans 배열의 각 plan 객체를 순회하면서
    //    ScheduleItem에 필요한 속성만으로 구성된 새로운 객체를 만듭니다.
    const daySchedule: DaySchedule = day.plans.map((plan): ScheduleItem => {
      return {
        id: plan.id,
        tourismType: plan.tourismType,
        name: plan.name,
        fullAddress: plan.fullAddress,
        longitude: plan.longitude,
        latitude: plan.latitude,
        phoneNumber: plan.phoneNumber,
        imgUrl: plan.imgUrl,
      };
    });
    
    return daySchedule;
  });

  return schedules;
};