import { FlatList, TouchableHighlight, View } from "react-native";
import PageView from "../../components/containers/PageView";
import Tweet from "../../components/tweet/Tweet";

import { tmp_tweets } from "../../constants/config";

export default function IndexTab() {
  return (
    <PageView>
      <FlatList
        data={tmp_tweets}
        style={{
          paddingHorizontal: 20,
          backgroundColor: "#fff",
        }}
        ItemSeparatorComponent={({ highlighted }) => (
          <View
            style={{
              height: 0.25,
              width: "100%",
              backgroundColor: "#BDC5CD",
              position: "absolute",
              bottom: 2.75,
            }}
          />
        )}
        renderItem={({ item, index, separators }) => (
          <TouchableHighlight
            key={item.id + "_t"}
            onPress={() => console.log("pressed")}
          >
            <Tweet tweet={item} />
          </TouchableHighlight>
        )}
      ></FlatList>
    </PageView>
  );
}
