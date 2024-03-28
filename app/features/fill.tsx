import { StyleSheet } from 'react-native'

import {
  Box,
  Button,
  ButtonText
} from '@gluestack-ui/themed'

export default function ConduitFill() {
  return (
    <Box style={styles.container}>
      <Button>
        <ButtonText>Conduit Fill Calculator</ButtonText>
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
  },
})
