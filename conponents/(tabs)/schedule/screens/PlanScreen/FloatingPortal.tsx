import React, { useState } from 'react';
import { View } from 'react-native';

// 전역 floating layer를 위한 portal 컨텍스트
export const FloatingPortalContext = React.createContext<{
  setFloatingElement: (element: React.ReactElement | null) => void;
} | null>(null);

// 메인 앱에서 사용할 FloatingPortal Provider
export const FloatingPortalProvider = ({ children }: { children: React.ReactNode }) => {
  const [floatingElement, setFloatingElement] = useState<React.ReactElement | null>(null);

  return (
    <FloatingPortalContext.Provider value={{ setFloatingElement }}>
      <View style={{ flex: 1 }}>
        {children}
        {/* Floating layer - 최상위에 렌더링 */}
        {floatingElement && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none', // 터치 이벤트 통과
              zIndex: 9999,
              elevation: 9999,
            }}
          >
            {floatingElement}
          </View>
        )}
      </View>
    </FloatingPortalContext.Provider>
  );
};