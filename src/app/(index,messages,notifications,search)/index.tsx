import { FlatList, Text, TouchableHighlight, View } from "react-native";
import PageView from "../../components/containers/PageView";
import Tweet from "../../components/Tweet";
import { Tweet as TweetType, User } from "../../types";

const tmpUsers: User[] = [
  {
    id: 1,
    fullname: "Dio Brando",
    username: "diobrando",
    image: "../assets/images/users/its_was_me_dio.jpeg",
  },
];

const tmp_tweet: TweetType = {
  id: "1",
  owner: tmpUsers[0],
  content: "",
  created_at: "",
  image: "",
  quote_count: 5,
  reply_count: 5,
  favorite_count: 5,
  favorited: false,
  also_liked: [tmpUsers[0], tmpUsers[0]],
  also_retweeted: tmpUsers[0],
};

const tmp_tweets: TweetType[] = Array.from({ length: 20 }).map((e, i) => ({
  ...tmp_tweet,
  id: i + 1 + "",
}));

export default function IndexTab() {
  return (
    <PageView>
      <FlatList
        data={tmp_tweets}
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
