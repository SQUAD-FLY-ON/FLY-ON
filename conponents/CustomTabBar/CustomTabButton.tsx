import { pageRoutes } from "@/types";
import { TabTriggerSlotProps } from "expo-router/ui";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import CommunityIcon from "./icons/CommunityIcon";
import ExploreIcon from "./icons/ExploreIcon";
import HomeIcon from "./icons/HomeIcon";
import UserIcon from "./icons/UserIcon";

type CustomTabButtonProps = TabTriggerSlotProps & {
  routeName: pageRoutes;
};

function getRouteLabel(routeName: pageRoutes) {
  switch (routeName) {
    case 'home':
      return '홈';
    case 'explore':
      return '탐색';
    case 'community':
      return '커뮤니티';
    case 'user':
      return '마이';
    default:
      return '';
  }
}

export default function CustomTabButton({ routeName, isFocused, ...props }: CustomTabButtonProps) {
  // routeName에 따라 아이콘 컴포넌트 결정
  const isActive = isFocused ? isFocused : false
  return (
    <Pressable  {...props} style={[styles.button, routeName === 'community' && { marginRight: -18 }]}>
      {routeName === 'home' && <HomeIcon isFocused={isActive} />}
      {routeName === 'explore' && <ExploreIcon isFocused={isActive} />}
      {routeName === 'community' && <CommunityIcon isFocused={isActive} />}
      {routeName === 'user' && <UserIcon isFocused={isActive} />}
      <Text style={[styles.text, { color: `${isActive ? '#3A88F4' : '#8E9297'}` }]} numberOfLines={1}>{getRouteLabel(routeName)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    gap: 8,
    alignItems: 'center',
    zIndex: 10,
    overflow: 'visible',
  },
  text: {
    fontSize: 12,
  }
});
