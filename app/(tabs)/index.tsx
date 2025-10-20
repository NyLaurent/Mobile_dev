import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomePage = () => {


  const router = useRouter()
  return (
    <SafeAreaView>
        <Text>This is a home page</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.replace('/login')}>
          <Text>Go to Login</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
button: {
  backgroundColor: 'blue',
  padding: 10,
  borderRadius: 5,
  margin: 10,
}
});

export default HomePage;