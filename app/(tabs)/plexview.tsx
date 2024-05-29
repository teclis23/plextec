import { Image, StyleSheet, Platform } from "react-native";

import { WebView } from "react-native-webview";

export default function PlexScreen() {
  return (
    <WebView source={{ uri: "https://app.plex.tv/" }} style={{ flex: 1 }} />
  );
}
