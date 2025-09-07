import { useScheduleStore } from '@/store/useScheduleStore';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar, DateData } from 'react-native-calendars';
import { useShallow } from 'zustand/react/shallow';

const CustomCalander = () => {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const { currentMarkedDates, setCurrentMarkedDates } = useScheduleStore(
  useShallow((state) => ({
    currentMarkedDates: state.currentMarkedDates,
    setCurrentMarkedDates: state.setCurrentMarkedDates,
  }))
);

  const resetDate = () => {
    setStartDate(null);
    setEndDate(null);
    setCurrentMarkedDates({});
  }
  const setOneStartDate = (selectedDate:string) => {
    setStartDate(selectedDate);
    setEndDate(null);
    setCurrentMarkedDates({
      [selectedDate]: {
        startingDay: true,
        endingDay: true,
        color: '#3A88F4',
        textColor: 'white',
      },
    });
  }

  const setDatePeroid = (selectedDate: string) => {
     const range = getDatesBetween(startDate!, selectedDate);
      const newMarked: Record<string, any> = {};

      range.forEach((date, idx) => {
        if (idx === 0) {
          newMarked[date] = {
            startingDay: true,
            color: '#3A88F4',
            textColor: 'white',
          };
        } else if (idx === range.length - 1) {
          newMarked[date] = {
            endingDay: true,
            color: '#3A88F4',
            textColor: 'white',
          };
        } else {
          newMarked[date] = {
            color: '#84B8FF',
            textColor: 'white',
          };
        }
      });

      setEndDate(selectedDate);
      setCurrentMarkedDates(newMarked);
  }

  // 날짜 범위 계산 함수
  const getDatesBetween = (start: string, end: string) => {
    const range = [];
    const startDay = dayjs(start);
    const endDay = dayjs(end);
    // 오름차순으로 설정하기 위함
    const isReversed = startDay.isAfter(endDay);
    // 처음(from)과 끝(to)
    const from = isReversed ? endDay : startDay;
    const to = isReversed ? startDay : endDay;

    let current = from;

    while (current.isBefore(to) || current.isSame(to, 'day')) {
      range.push(current.format('YYYY-MM-DD'));
      current = current.add(1, 'day');
    }

    return range;
  };

  const handleDayPress = (day: DateData) => {
    const selectedDate = day.dateString;
    // 이미 선택된 날짜를 다시 누르면 초기화
    if (startDate && !endDate && selectedDate === startDate) {
      resetDate();
      return;
    }
    // 처음 날짜를 누르거나 이미 기간이 선택된 상태에서 다시 날짜를 누를경우
    if (!startDate || (startDate && endDate)) {
      setOneStartDate(selectedDate);
    }
    // 시작일이 있고 종료일을 선택하는 경우
    else if (startDate && !endDate) {
      setDatePeroid(selectedDate);
    }
  };

  
  return (
    <Calendar
      style={{
        borderWidth: 1,
        borderColor: 'gray',
      }}
      markingType='period'
      current={dayjs().format('YYYY-MM-DD')}
      markedDates={currentMarkedDates}
      onDayPress={handleDayPress}
    />)
}
export default CustomCalander;