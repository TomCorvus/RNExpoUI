import { useRef } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import PagerView from '@expo/ui/community/pager-view';

export default function App() {
   const pagerRef = useRef(null);

  return (
     <View style={{ flex: 1, padding: 50 }}>
      <PagerView
        ref={pagerRef}
        scrollEnabled={false}
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={event => {
          console.log('selected page', event.nativeEvent.position);
        }}>
        <View key="one" style={[styles.page, { backgroundColor: '#fde68a' }]}>
            <Text>Page one</Text>
            <Button title="Go to page 2" onPress={() => pagerRef.current?.setPage(1)} />
            <Button title="Go to page 3" onPress={() => pagerRef.current?.setPage(2)} />
        </View>
        <View key="two" style={[styles.page, { backgroundColor: '#bfdbfe' }]}>
            <Text>Page two</Text>
            <Button title="Go to page 1" onPress={() => pagerRef.current?.setPage(0)} />
            <Button title="Go to page 3" onPress={() => pagerRef.current?.setPage(2)} />
        </View>
        <View key="three" style={[styles.page, { backgroundColor: '#bbf7d0' }]}>
            <Text>Page three</Text>
            <Button title="Go to page 1" onPress={() => pagerRef.current?.setPage(0)} />
            <Button title="Go to page 2" onPress={() => pagerRef.current?.setPage(1)} />
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
