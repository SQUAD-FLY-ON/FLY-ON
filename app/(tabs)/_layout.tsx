import CustomTabButton from "@/conponents/CustomTabBar/CustomTabButton";
import { CustomTabList } from "@/conponents/CustomTabBar/CustomTabList";
import FloatingButton from "@/conponents/CustomTabBar/FloatingButton";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";

export default function TabLayout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <CustomTabButton routeName="home" />
          </TabTrigger>
          <TabTrigger name="explore" href="/explore" asChild>
            <CustomTabButton routeName="explore" />
          </TabTrigger>
          <TabTrigger name="schedule" href="/schedule" asChild>
            <FloatingButton />
          </TabTrigger>
          <TabTrigger name="community" href="/community" asChild>
            <CustomTabButton routeName="community" />
          </TabTrigger>
          <TabTrigger name="user" href="/user" asChild>
            <CustomTabButton routeName="user" />
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}
