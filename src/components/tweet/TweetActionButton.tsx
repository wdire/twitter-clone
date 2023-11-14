import { Text, View } from "react-native";
import {
  CommentBorderIcon,
  FavoriteBorderIcon,
  RetweetBorderIcon,
  ShareBorderIcon,
} from "../../lib/icons";
import Colors from "../../constants/Colors";

type Props = {
  icon: "comment" | "retweet" | "favorite" | "share";
  text?: string;
  size?: "normal" | "big";
};

const normalIcons: { [key in Props["icon"]]: any } = {
  comment: <CommentBorderIcon width={15} height={15} />,
  favorite: <FavoriteBorderIcon width={15} height={15} />,
  retweet: <RetweetBorderIcon width={18} height={13} />,
  share: <ShareBorderIcon width={15} height={15} />,
};

const bigIcons: { [key in Props["icon"]]: any } = {
  comment: <CommentBorderIcon width={21} height={21} />,
  favorite: <FavoriteBorderIcon width={22} height={18} />,
  retweet: <RetweetBorderIcon width={23} height={23} />,
  share: <ShareBorderIcon width={20} height={20} />,
};

export const TweetActionButton = ({ icon, text, size = "normal" }: Props) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
      {icon && size === "big" ? bigIcons[icon] : normalIcons[icon]}
      {text && (
        <Text style={{ color: Colors.secondary_text_color, fontSize: 12 }}>
          {text}
        </Text>
      )}
    </View>
  );
};
