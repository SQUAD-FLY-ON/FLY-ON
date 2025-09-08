import { Stack } from "expo-router";

export default function ExploreLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name = 'index' />
      <Stack.Screen name = 'map' />
      <Stack.Screen name = 'explore-list' />
      {/* <Stack.Screen name="detail/[id]" /> */}

      </Stack>
  );
}
