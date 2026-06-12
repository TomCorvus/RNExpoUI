import { useRef, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import PagerView from "@expo/ui/community/pager-view";

export default function App() {
  const pagerRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <View style={{ flex: 1, padding: 50 }}>
      <PagerView
        ref={pagerRef}
        scrollEnabled={false}
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={(event) => {
          console.log("selected page", event.nativeEvent.position);
        }}
      >
        <View key="one" style={styles.page}>
          <Text style={{ margin: 10 }}>Page one</Text>
          <Button
            title="Click me"
            onPress={() => {
              alert("clicked");
            }}
            style={{ padding: 10 }}
          />
        </View>
        <View key="two" style={styles.page}>
          <Text style={{ margin: 10 }}>Page two</Text>
          <Button
            title="Click me"
            onPress={() => {
              alert("clicked");
            }}
            style={{ padding: 10 }}
          />
        </View>
        <View key="three" style={styles.page}>
          <Text style={{ margin: 10 }}>Page three</Text>
          <Button
            title="Click me"
            onPress={() => {
              alert("clicked");
            }}
            style={{ padding: 10 }}
          />
        </View>
      </PagerView>
      <View style={{ flexDirection: "row" }}>
        <Button
          title="Previous"
          onPress={() => {
            setCurrentSlide(currentSlide - 1);
            pagerRef.current?.setPage(currentSlide - 1);
          }}
          style={{ padding: 10 }}
        />

        <Button
          title="Next"
          onPress={() => {
            setCurrentSlide(currentSlide + 1);
            pagerRef.current?.setPage(currentSlide + 1);
          }}
          style={{ padding: 10 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
