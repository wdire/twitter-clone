import { Text, View } from "react-native";
import {
  CommentBorderIcon,
  FavoriteBorderIcon,
  RetweetBorderIcon,
  ShareBorderIcon,
} from "../lib/icons";
import Colors from "../constants/Colors";

type Props = {
  icon: "comment" | "retweet" | "favorite" | "share";
  text?: string;
};

const icons: { [key in Props["icon"]]: any } = {
  comment: <CommentBorderIcon width={15} height={15} />,
  favorite: <FavoriteBorderIcon width={15} height={15} />,
  retweet: <RetweetBorderIcon width={18} height={13} />,
  share: <ShareBorderIcon width={15} height={15} />,
};

export const TweetActionButton = ({ icon, text }: Props) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
      {icon && icons[icon]}
      {text && (
        <Text style={{ color: Colors.secondary_text_color, fontSize: 12 }}>
          {text}
        </Text>
      )}
    </View>
  );
};
