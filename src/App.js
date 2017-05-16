import React from "react";
import FaCog from "react-icons/lib/fa/cog";
import { Text, View, StyleSheet } from "react-primitives";

const bold = { fontWeight: "bold" };

const textStyles = {
  h1: {
    ...bold,
    fontSize: 76
  },
  h2: {
    ...bold,
    fontSize: 47
  },
  h3: {
    ...bold,
    fontSize: 29
  },
  h4: {
    ...bold,
    fontSize: 18
  },
  h5: {
    fontSize: 18
  }
};

const deviceTitleStyles = StyleSheet.create({
  deviceTitle: {
    ...textStyles.h4,
    textAlign: "right"
  },
  deviceState: {
    ...textStyles.h5,
    textAlign: "right"
  }
});

const switchStyles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#bbb",
    paddingTop: 10,
    paddingBottom: 10,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  lane: {
    backgroundColor: "#FFF",
    width: 18,
    height: 30,
    borderRadius: 2
  },
  handleWrapper: {
    padding: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  handle: {
    width: 16,
    height: 8,
    backgroundColor: "#8CE196",
    borderRadius: 1
  }
});

const SwitchDeviceIcon = ({ state = false }) => (
  <View style={switchStyles.wrapper}>
    <View style={switchStyles.lane}>
      <View style={switchStyles.handleWrapper}>
        <View style={switchStyles.handle} />
      </View>
    </View>
  </View>
);

const DeviceTitle = ({ children }) => (
  <Text style={deviceTitleStyles.deviceTitle}>{children}</Text>
);

const DeviceTextStatus = ({ children }) => (
  <Text style={textStyles.h5}>{children}</Text>
);

const deviceBaseStyles = StyleSheet.create({
  deviceWrapper: {
    minWidth: 125,
    minHeight: 125,
    maxWidth: 300,
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    padding: 15,
    flexBasis: 125,
    overflow: "hidden",

    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },

  settingsIcon: {
    width: 25,
    height: 25,
    marginBottom: 10
  },

  deviceIconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 4,
    opacity: 0.5,
    overflow: "hidden"
  },

  deviceTextWrapper: {
    flexDirection: "column",
    alignItems: "flex-end"
  },

  iconWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginBottom: 10
  }
});

const DeviceBase = props => (
  <View style={deviceBaseStyles.deviceWrapper}>
    <View style={deviceBaseStyles.iconWrapper}>
      <View style={deviceBaseStyles.deviceIconWrapper}>
        <SwitchDeviceIcon />
      </View>
      <View style={deviceBaseStyles.settingsIcon}>
        <FaCog size={25} />
      </View>
    </View>
    <View style={deviceBaseStyles.deviceTextWrapper}>
      <DeviceTitle>Watch Netflix</DeviceTitle>
      <DeviceTextStatus>off</DeviceTextStatus>
    </View>
  </View>
);

const App = props => (
  <div style={{ width: 150, margin: 20 }}><DeviceBase /></div>
);

export default App;
