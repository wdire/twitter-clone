import { Link, useRouter, useSegments } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Tweet as TweetType } from "../../types";
import { TweetActionButton } from "./TweetActionButton";
import Colors from "../../constants/Colors";

const Tweet = ({ tweet }: { tweet: TweetType }) => {
  const [segment] = useSegments();
  const router = useRouter();

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        router.push(`/${segment}/tweet/123`);
      }}
    >
      <View style={styles.left_side}>
        {tweet.is_thread && !tweet.is_thread_start && (
          <View
            style={{
              width: 2,
              height: 15,
              borderRadius: 10,
              backgroundColor: "#CED5DC",
              marginHorizontal: "auto",
              position: "absolute",
              top: -20,
              marginLeft: 27,
            }}
          />
        )}
        <View>
          <Image
            source={require("../../assets/images/users/its_was_me_dio.jpeg")}
            style={styles.owner_image}
          />
        </View>
        {tweet.is_thread && !tweet.is_thread_end && (
          <View
            style={{
              width: 2,
              height: "100%",
              borderRadius: 10,
              backgroundColor: "#CED5DC",
              marginTop: 60,
              marginLeft: 27,
              position: "absolute",
            }}
          />
        )}
      </View>
      <View style={styles.right_side}>
        <Text style={styles.owner_name_wrapper}>
          <Text style={styles.owner_name}>Martha Craig</Text>{" "}
          <Text>@craig_love</Text>
          <Text style={styles.owner_name_seperator}>·</Text>12h
        </Text>
        <Text style={styles.content}>{tweet.content}</Text>
        <View style={styles.actions_wrapper}>
          <TweetActionButton icon="comment" text="46" />
          <TweetActionButton icon="retweet" text="5" />
          <TweetActionButton icon="favorite" text="21" />
          <TweetActionButton icon="share" />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: "row",
    gap: 10,
    position: "relative",
    overflow: "hidden",
  },
  content: {
    lineHeight: 20,
    fontSize: 16,
  },
  owner_name_wrapper: {
    color: Colors.secondary_text_color,
    marginBottom: 3,
    lineHeight: 16,
    fontSize: 16,
  },
  owner_name: {
    color: "#000",
    fontWeight: "600",
  },
  owner_username: {
    color: Colors.secondary_text_color,
  },
  owner_name_seperator: {
    paddingHorizontal: 2,
    textAlign: "center",
  },
  left_side: {
    position: "relative",
  },
  right_side: {
    maxWidth: "100%",
    flexShrink: 1,
  },
  owner_image: {
    width: 55,
    height: 55,
    borderRadius: 28,
  },
  actions_wrapper: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 230,
  },
});

export default Tweet;
