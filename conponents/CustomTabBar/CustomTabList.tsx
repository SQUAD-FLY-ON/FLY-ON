// components/CustomTabList.tsx
import { usePathname, useRouter } from 'expo-router';
import { Children, cloneElement, isValidElement } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { G, Path } from 'react-native-svg';

const { width } = Dimensions.get('window');
const height = 80;

export function CustomTabList({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const triggers = Children.toArray(children).filter(isValidElement);
  const centerTrigger = triggers.find((c: any) => c.props.name === 'schedule');
  const leftTriggers = triggers.filter((c: any) => c.props.name === 'home' || c.props.name === 'explore');
  const rightTriggers = triggers.filter((c: any) => c.props.name === 'community' || c.props.name === 'user');


  return (
    <View style={styles.container}>
      {/* 곡선 SVG 배경 */}
      <Svg
        width={width}
        height={height}
        viewBox="0 0 390 80"
        fill="none"
        preserveAspectRatio="none"
        style={styles.svgBackground}
      >
        <G>
          <Path
            d="M350 0C372.091 0 390 17.9086 390 40V80H0V40C0 17.9086 17.9086 0 40 0H131C142.046 0 150.602 9.4011 155.458 19.3218C162.613 33.9363 177.631 44 195 44C212.369 44 227.387 33.9362 234.542 19.3218C239.398 9.4011 247.954 0 259 0H350Z"
            fill="white"
          />
        </G>
      </Svg>
      {/* 탭 버튼들 */}
      <View style={styles.tabContainer}>
        <View style={styles.leftContainer}>
          {leftTriggers.map((child: any) => {
            const isActive = pathname === child.props.href;
            return cloneElement(child, { key: child.props.name, isActive, router });
          })}
        </View>
          {centerTrigger &&
            cloneElement(centerTrigger as any, {
              router,
              isCenter: true,
            })}
        <View style={styles.rightContainer}>
          {rightTriggers.map((child: any, idx: number) => {
            const isActive = pathname === child.props.href;
            return cloneElement(child, { key: child.props.name, isActive, router });
          })}
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: '100%',
  },
  svgBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  tabContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
  },
  leftContainer: {
    flexDirection: 'row',
    marginLeft: width / 10 - 1,
    marginTop: 16,
    gap: 48,
  },
  rightContainer: {
    flexDirection: 'row',
    marginRight: width / 10 - 1,
    marginTop: 16,
    gap: 48,
  }
});