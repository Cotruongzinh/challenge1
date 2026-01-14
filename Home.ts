import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

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

  list: {
    width: "100%",
    height: 210,
  },

  listContent: {
    paddingHorizontal: 24,
    alignItems: "center",
  },

  card: {
    width: 170,
    height: 170,
    backgroundColor: "#D8A45B",
    borderWidth: 2,
    borderColor: "#1F1F1F",
    marginRight: 18,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
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
