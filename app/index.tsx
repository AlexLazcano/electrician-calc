import { StyleSheet } from 'react-native'

import EditScreenInfo from '@/components/EditScreenInfo'
import {  View } from '@/components/Themed'
import { Box, Button, ButtonText, Card, Heading, Text } from '@gluestack-ui/themed'
import FeatureLinks from '@/components/FeatureLinks'

export default function HomeScreen() {
  return (
    <Box style={styles.container}>
      <Card size='md' variant='elevated' m='$3'>
        <Heading mb='$1' size='md'>
          Electrician Calculator
        </Heading>
        <Text size='sm'>Welcome</Text>
      </Card>
      <Text style={styles.title}>Home</Text>
      {/* <EditScreenInfo path="/app/screens/HomeScreen.tsx" /> */}
      <FeatureLinks/>

      <Button>
        <ButtonText>Hello world</ButtonText>
      </Button>
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
