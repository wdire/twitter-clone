import { Text } from "react-native";
import PageView from "../../../components/containers/PageView";
import { Stack } from "expo-router";
import TabMainHeader from "../../../components/TabMainHeader";
import TweetDetail from "../../../components/tweet/TweetDetail";
import { tmp_tweet } from "../../../constants/config";

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
      <TweetDetail tweet={tmp_tweet} />
    </PageView>
  );
}
