import { TouchableOpacity, StyleSheet, TextInput, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

export default function TabOneScreen() {

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light']

  return (
    <>
      <View style={{ margin: 20, padding: 5 }}>
        <Text style={styles.title}>CelloTree</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Text style={styles.item}>Commencez votre voyage dans le passé Et construisez votre histoire familiale dès aujourd'hui!</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>

      <View style={{ margin: 20 }}>
        <TextInput
          placeholder="Rechercher un arbre"
          placeholderTextColor={theme.text}
          enterKeyHint='search'
          style={{ height: 40, borderColor: theme.text, borderWidth: 1, borderRadius: 5, padding: 5, color: theme.text }}
        />
      </View>
      <View style={{ margin: 20, backgroundColor: theme.background, gap: 10 }}>
        <Pressable style={[styles.button, { borderColor: theme.text }]} onPress={() => { console.log('New tree created') }}>
          <Text>+ Add New Tree</Text>
        </Pressable>
        <Pressable style={[styles.button, { borderColor: theme.text }]} onPress={() => { console.log('Button 2 pressed') }}>
          <Text>+ Add New Tree</Text>
        </Pressable>
        <Pressable style={[styles.button, { borderColor: theme.text }]} onPress={() => { console.log('Button 3 pressed') }}>
          <Text>+ Add New Tree</Text>
        </Pressable>
      </View>



    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerArbres: {

    margin: 20,
    padding: 5,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '100%',
  },

  item: {
    padding: 10,
    fontSize: 18,
  },

  button: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
