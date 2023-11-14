import { Link, useRouter, useSegments } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Tweet as TweetType } from "../types";
import { TweetActionButton } from "./TweetActionButton";

const Tweet = ({ tweet }: { tweet: TweetType }) => {
  const [segment] = useSegments();
  const router = useRouter();

  console.log("segment", segment);

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        router.push(`/${segment}/tweet/123`);
      }}
    >
      <View style={styles.left_side}>
        <View>
          <Image
            source={require("../assets/images/users/its_was_me_dio.jpeg")}
            style={styles.owner_image}
          />
        </View>
      </View>
      <View style={styles.right_side}>
        <Text style={styles.owner_name_wrapper}>
          <Text style={styles.owner_name}>Martha Craig</Text>{" "}
          <Text>@craig_love</Text>
          <Text style={styles.owner_name_seperator}>·</Text>12h
        </Text>
        <Text style={styles.content}>
          Name a show where the lead character is the worst character on the
          show I’ll get Sabrina Spellman
        </Text>
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
    paddingHorizontal: 20,
    paddingBottom: 12,
    flexDirection: "row",
    gap: 10,
    position: "relative",
    fontSize: 16,
  },
  content: {
    lineHeight: 20,
  },
  owner_name_wrapper: {
    color: "#687684",
    marginBottom: 3,
    lineHeight: 14,
  },
  owner_name: {
    color: "#000",
    fontWeight: "700",
  },
  owner_username: {
    color: "#687684",
  },
  owner_name_seperator: {
    paddingHorizontal: 2,
    textAlign: "center",
  },
  left_side: {},
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
