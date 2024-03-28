import { StyleSheet } from 'react-native'

import FeatureLinks from '@/components/FeatureLinks'
import { Card, Heading, SafeAreaView, Text } from '@gluestack-ui/themed'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Card size='md' variant='elevated' m='$3'>
        <Heading mb='$1' size='md'>
          Electrician Calculator
        </Heading>
        <Text size='sm'>Welcome</Text>
      </Card>
      <Heading size='md' m='$4'>
        Features
      </Heading>

      <FeatureLinks />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
