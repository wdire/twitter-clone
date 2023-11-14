import { Text } from "react-native";
import PageView from "../../../components/containers/PageView";
import { Stack } from "expo-router";
import TabMainHeader from "../../../components/TabMainHeader";

export default function TweetPage() {
  return (
    <PageView>
      <Stack.Screen
        options={{
          title: "Tweet",
          header: () => (
            <TabMainHeader
              sides={{
                left: "back",
                center: "title",
                right: "empty",
              }}
              options={{
                title: "Tweet",
              }}
            />
          ),
        }}
      />
      <Text>Tweet</Text>
    </PageView>
  );
}
