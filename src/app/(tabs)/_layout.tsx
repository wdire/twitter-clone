import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import TabMainHeader from "../../components/TabMainHeader";
import HomeBorderIcon from "../../assets/images/icons/home_border_icon.svg";
import HomeFillIcon from "../../assets/images/icons/home_fill_icon.svg";
import SearchBorderIcon from "../../assets/images/icons/search_border_icon.svg";
import SearchFillIcon from "../../assets/images/icons/search_fill_icon.svg";
import NotificationsBorderIcon from "../../assets/images/icons/notifications_border_icon.svg";
import NotificationsFillIcon from "../../assets/images/icons/notifications_fill_icon.svg";
import MessagesBorderIcon from "../../assets/images/icons/messages_border_icon.svg";
import MessagesFillIcon from "../../assets/images/icons/messages_fill_icon.svg";

const tabIconProps = {
  width: 30,
};

const tabIcons = {
  index: {
    normal: <HomeBorderIcon {...tabIconProps} />,
    active: <HomeFillIcon {...tabIconProps} />,
  },
  search: {
    normal: <SearchBorderIcon {...tabIconProps} />,
    active: <SearchFillIcon {...tabIconProps} />,
  },
  notifications: {
    normal: <NotificationsBorderIcon {...tabIconProps} />,
    active: <NotificationsFillIcon {...tabIconProps} />,
  },
  messages: {
    normal: <MessagesBorderIcon {...tabIconProps} />,
    active: <MessagesFillIcon {...tabIconProps} />,
  },
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        header: TabMainHeader,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => {
            return tabIcons["index"][focused ? "active" : "normal"];
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => {
            return tabIcons["search"][focused ? "active" : "normal"];
          },
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ focused }) => {
            return tabIcons["notifications"][focused ? "active" : "normal"];
          },
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ focused }) => {
            return tabIcons["messages"][focused ? "active" : "normal"];
          },
        }}
      />
    </Tabs>
  );
}
