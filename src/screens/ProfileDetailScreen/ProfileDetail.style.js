import colors from "../ProfileDetailScreen/config/colors";
import spacing from "../ProfileDetailScreen/config/spacing";
import fontSize from "../ProfileDetailScreen/config/fontSize";

import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    backgroundColor: "#eee"
  },
  cardContainer: {
    backgroundColor: "#fff",
    marginBottom: 15,
    minHeight: 100
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  Datecontainer: {
    backgroundColor: colors.white,
    borderBottomColor: colors.gray.veryLight,
    borderBottomWidth: 1,
    marginHorizontal: spacing[0],
    justifyContent: "center",
    borderRadius: 2,
    height: 50,
    flex: 1
  },
  DateplaceholderText: {
    color: colors.gray.light
  },
  Datetext: {
    width: "100%",
    paddingHorizontal: spacing[1],
    paddingVertical: spacing[0],
    fontFamily: "Montserrat",
    fontSize: fontSize.medium,
    color: colors.gray.dark
  }
});

export default style;
