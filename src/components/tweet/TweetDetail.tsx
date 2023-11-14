import { Link, useRouter, useSegments } from "expo-router";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Tweet as TweetType } from "../../types";
import { TweetActionButton } from "./TweetActionButton";
import Colors from "../../constants/Colors";
import Tweet from "./Tweet";
import { tmp_tweet } from "../../constants/config";

const TweetDetail = ({ tweet }: { tweet: TweetType }) => {
  const tweetHead = () => {
    return (
      <>
        <View style={styles.group}>
          <View style={styles.top_side}>
            <View>
              <Image
                source={require("../../assets/images/users/its_was_me_dio.jpeg")}
                style={styles.owner_image}
              />
            </View>
            <View style={styles.owner_name_wrapper}>
              <Text style={styles.owner_name}>Martha Craig </Text>
              <Text style={styles.owner_username}>@craig_love</Text>
            </View>
          </View>

          <Text style={styles.content}>
            Name a show where the lead character is the worst character on the
            show I’ll get Sabrina Spellman
          </Text>

          <Text style={styles.time_detail}>
            09:28 · 2/21/20 ·{" "}
            <Text style={{ color: Colors.main }}>Twitter Web App</Text>
          </Text>
        </View>
        <View style={styles.seperator} />
        <View style={styles.group}>
          <Text style={{ fontSize: 16 }}>
            <Text>
              <Text style={{ fontWeight: "600" }}>6</Text>{" "}
              <Text style={{ color: Colors.secondary_text_color }}>
                Retweets
              </Text>
            </Text>
            <View style={{ paddingLeft: 10 }} />
            <Text>
              <Text style={{ fontWeight: "600" }}>15</Text>{" "}
              <Text style={{ color: Colors.secondary_text_color }}>Likes</Text>
            </Text>
          </Text>
        </View>
        <View style={styles.seperator} />
        <View style={styles.group}>
          <View style={styles.actions_wrapper}>
            <TweetActionButton icon="comment" size="big" />
            <TweetActionButton icon="retweet" size="big" />
            <TweetActionButton icon="favorite" size="big" />
            <TweetActionButton icon="share" size="big" />
          </View>
        </View>
        <View style={styles.seperator} />
        <View style={styles.seperator} />
      </>
    );
  };

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={tweetHead}
      nestedScrollEnabled
      data={[
        {
          ...tmp_tweet,
          id: "1",
          content:
            "Interesting Nicola that not one reply or tag on this #UX talent shout out in the 24hrs since your tweet here......🤔",
          is_thread_start: true,
          is_thread: true,
        },
        {
          ...tmp_tweet,
          id: "2",
          content:
            "Maybe I forgot the hashtags. #hiringux #designjobs #sydneyux #sydneydesigners #uxjobs",
          is_thread_end: true,
          is_thread: true,
        },
        {
          ...tmp_tweet,
          id: "3",
          content:
            "Interesting Nicola that not one reply or tag on this #UX talent shout out in the 24hrs since your tweet here......🤔",
          is_thread_start: true,
          is_thread: true,
        },
        {
          ...tmp_tweet,
          id: "4",
          content:
            "Maybe I forgot the hashtags. #hiringux #designjobs #sydneyux #sydneydesigners #uxjobs",
          is_thread_end: true,
          is_thread: true,
        },
      ]}
      renderItem={({ item, index, separators }) => (
        <TouchableHighlight
          key={item.id + "_t_r"}
          onPress={() => console.log("pressed")}
        >
          <Tweet tweet={item} />
        </TouchableHighlight>
      )}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    position: "relative",
  },
  group: {
    paddingHorizontal: 6,
    paddingTop: 12,
    paddingBottom: 12,
  },

  owner_name_wrapper: {
    color: Colors.secondary_text_color,
    marginLeft: 8,
  },
  owner_name: {
    color: "#000",
    fontWeight: "600",
    fontSize: 16,
  },
  seperator: {
    height: 0.25,
    backgroundColor: "#BDC5CD",
  },
  owner_username: {
    color: Colors.secondary_text_color,
    fontSize: 16,
  },
  top_side: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 23,
  },
  owner_image: {
    width: 55,
    height: 55,
    borderRadius: 28,
  },
  content: {
    lineHeight: 31,
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 37,
    maxWidth: "100%",
    flexShrink: 1,
  },
  time_detail: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.secondary_text_color,
  },
  actions_wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default TweetDetail;
