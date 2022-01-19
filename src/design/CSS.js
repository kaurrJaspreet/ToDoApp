import { Platform } from "react-native";
import Design from "../design/Design";

export default {
  Splashcontainer: {
    flex: 1,
    backgroundColor: Design.white,
    justifyContent: "center",
    alignItems: "center"
  },
  Maincontainer: {
    flex: 1,
    backgroundColor: Design.white,
    // justifyContent: "center",
    // alignItems: "center"
  },
  fab: {
    position: 'absolute',
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 60,
    bottom: 10,
    height: 60,
    backgroundColor: Design.yellow,
    borderRadius: 100,
  },

  slider_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  input_box: {
    backgroundColor: Design.white,
    flexDirection: "row",
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 20,
    paddingVertical: Platform.OS == "ios" ? 12 : 0
  },


  toolbar_box: {
    flexDirection: "row",
    paddingVertical: 20,
    alignItems: "center",
    marginHorizontal: 10,
    paddingTop: Platform.OS == "ios" ? 40 : 20,
    justifyContent: "space-between"
  },
  toolbar_left_side: {
    flexDirection: "row",
    // width: "55%",
    flex: 1,
    overflow: "hidden"
  },
  toolbar_right_side: {
    flexDirection: "row",
    flex: 1,
    //  width: "45%",
    justifyContent: "flex-end",
    overflow: "hidden",
    marginLeft: 10,
    marginRight: 0
  },
  card: {
    shadowColor: Design.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    minHeight: 100,
    color: Design.white,
    backgroundColor: Design.white
  },

};
