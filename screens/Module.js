import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Card from '../components/module/Card';
import { useColors } from '../hooks';

const ModuleScreen = ({}) => {
  const colors = useColors();

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.white,
    },
    container: {
      flex: 1,
      backgroundColor: colors.white,
      margin: 20,
    },
    inputContainer: {
      borderWidth: 1,
      borderColor: colors.black,
      borderRadius: 5,
      borderColor: colors.primaryLight,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    input: {
      paddingVertical: 10,
      flex: 1,
    },
    inputVector: {
      color: colors.primaryLight,
      marginRight: 10,
    },
    title: {
      fontSize: 18,
      color: colors.text,
      marginVertical: 10,
    },
    cardContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Header title='Modules' />
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Ionicons style={styles.inputVector} size={24} name='search' />
            <TextInput
              blurOnSubmit
              placeholder='test'
              autoCapitilize={false}
              autoCorrect={false}
              style={styles.input}
            />
          </View>
          <ScrollView style={{ flex: 1 }}>
            <Text onStartShouldSetResponder={() => true} style={styles.title}>
              Récents
            </Text>
            <View
              onStartShouldSetResponder={() => true}
              style={styles.cardContainer}
            >
              <Card />
              <Card />
              <Card />
            </View>
            <Text style={styles.title} onStartShouldSetResponder={() => true}>
              Modules
            </Text>
            <View
              onStartShouldSetResponder={() => true}
              style={styles.cardContainer}
            >
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </View>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ModuleScreen;
