import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  // khối trắng nằm giữa giống hình minh hoạ
  content: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },

  title: {
    fontSize: 16,
    letterSpacing: 1,
    color: "#9A9A9A",
    marginBottom: 18,
  },

  // vùng scroll ngang
  scrollWrap: {
    height: 220,
  },
  scrollContent: {
    paddingHorizontal: 24,
    alignItems: "center",
  },

  // mỗi ô ảnh
  card: {
    width: 170,
    height: 170,
    backgroundColor: "#D7A35B", // màu nền vàng nâu như minh hoạ
    borderWidth: 2,
    borderColor: "#222222",
    marginRight: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },

  input: {
    width: 330,
    borderWidth: 1,
    borderColor: "#222222",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginTop: 18,
    fontSize: 14,
    color: "#111111",
  },
});