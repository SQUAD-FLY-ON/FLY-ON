import { province } from '@/types';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import ChungcheongbukProvince from './ChungcheongbukProvince';
import { GangwonProvince } from './GangwonProvince';
import GyeonggiProvince from './GyeonggiProvince';
import GyeongsangbukProvince from './GyeongsangbukProvince';
import { GyeongsangnamProvince } from './GyeongsangnamProvince';
import JejuProvince from './JejuProvince';
import JeollabukProvince from './JeollabukProvince';
import JeollanamProvince from './JeollanamProvince';

type MapComponents = {
  [key in province]: React.ComponentType<any>;
};

// 컴포넌트를 key-value 형태로 매핑하는 객체
const MAP_COMPONENTS: MapComponents = {
  'gyeonggi': GyeonggiProvince,
  'gangwon': GangwonProvince,
  'gyeoungsangbuk': GyeongsangbukProvince,
  'gyeoungsangnam': GyeongsangnamProvince,
  'jeollabuk': JeollabukProvince,
  'jeollanam': JeollanamProvince,
  'jeju': JejuProvince,
  'jellanam': JeollanamProvince,
  'chungcheongbuk': ChungcheongbukProvince,
};

const SubRegionSvg = ({ province, style }: {province: province; style:StyleProp<ViewStyle>;}) => {
  // `componentType`에 해당하는 컴포넌트를 MAP_COMPONENTS 객체에서 찾습니다.
  // 해당하는 컴포넌트가 없으면 `DefaultComponent`를 사용합니다.
  const ComponentToRender = MAP_COMPONENTS[province] || <></>;

  // 찾은 컴포넌트를 렌더링합니다.
  return <View style = {style}><ComponentToRender /></View>;
};

export default SubRegionSvg;