import { Button, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles, darkTheme, themeSizes } from '../theme/themes';
import { SafeAreaView } from 'react-native-safe-area-context';
import PagerView from 'react-native-pager-view';
import { useRef, useState } from 'react';
import moment from 'moment';

export default function HomeScreen() {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);
  const [currentDate, setCurrentDate] = useState(moment());
  const pagerRef = useRef<PagerView|null>(null);
  const daysArray:number[] = [-1, 0, 1];

  const goToPage = (index: number) => {
    if (pagerRef.current) {
      pagerRef.current.setPage(index);
    }
  };

  const onPageSelected = (e) => {
    const position = e.nativeEvent.position;
    setCurrentDate((prevDate) => {
      const newDate = moment(prevDate).add(position - 1, 'days');
      return newDate;
    });

    // Reset back to center (current day)
    setTimeout(() => goToPage(1), 0);
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={theme === darkTheme ? 'light-content' : 'dark-content'} />
      <View style={viewStyles.daysNav}>
        <Button title="← Previous" onPress={() => goToPage(0)} />
        <Button title="Today" onPress={() => {
          setCurrentDate(moment());
          goToPage(1);
        }} />
        <Button title="Next →" onPress={() => goToPage(2)} />
      </View>
      <PagerView style={viewStyles.pager} initialPage={0} scrollEnabled={false} ref={pagerRef} onPageSelected={onPageSelected}>
        {daysArray.map((offset) => {
          const day = moment(currentDate).add(offset, 'days');
          return (
            <View key={offset} style={viewStyles.page}>
              <Text>{day.format('dddd, MMM D')}</Text>
            </View>
          );
        })}
      </PagerView>
    </SafeAreaView>
  );
}

const viewStyles = StyleSheet.create({
  pager: {
    flex: 1,
    paddingBottom: 40,
  },
  page : {
    backgroundColor: "red",
  },
  daysNav: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#212121',
    height: themeSizes.buttonHeight,
    borderRadius: themeSizes.buttonBorderRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: themeSizes.titleMedium,
    fontWeight: 'bold',
  },
  title: {
    fontSize: themeSizes.titleDisplay,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    padding: 40,
    backgroundColor:'white',
    gap: 20,
  },
});