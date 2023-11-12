import { Image, StyleSheet, Text, View } from "react-native";
import AppIcon from "../assets/images/app-icon.svg";
import FeatureStrokeIcon from "../assets/images/icons/feature_stroke_icon.svg";
import Colors from "../constants/Colors";

const TabMainHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left_wrapper}>
        <View style={styles.user_image_wrapper}>
          <Image
            source={require("../assets/images/users/its_was_me_dio.jpeg")}
            style={styles.user_image}
          />
          <View style={styles.user_image_dot}></View>
        </View>
      </View>

      <View style={styles.center_wrapper}>
        <AppIcon width={27} height={22} />
      </View>

      <View style={styles.right_wrapper}>
        <FeatureStrokeIcon width={23} height={22} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 7,
    paddingBottom: 5,
    paddingHorizontal: 20,
    backgroundColor: Colors.light.background,
    borderBottomWidth: 0.25,
    borderBottomColor: "#BDC5CD",
  },
  left_wrapper: {
    flexBasis: "50%",
    flexShrink: 1,
  },
  right_wrapper: {
    flexBasis: "50%",
    alignItems: "flex-end",
    flexShrink: 1,
  },
  center_wrapper: {
    flexShrink: 0,
  },
  user_image_wrapper: {
    position: "relative",
    width: 32,
    height: 32,
  },
  user_image: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  user_image_dot: {
    position: "absolute",
    top: 2,
    right: 2,
    width: 7,
    height: 7,
    borderWidth: 1,
    borderColor: Colors.light.background,
    borderRadius: 3,
    backgroundColor: Colors.main,
  },
});

export default TabMainHeader;
