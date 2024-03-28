import { FlatList, Pressable, StyleSheet } from 'react-native'

import {
  Box,
  Button,
  ButtonText,
  Card,
  Heading,
  Text
} from '@gluestack-ui/themed'
import { Link, router } from 'expo-router'

type FeatureLink = {
  id: number
  title: string
  description: string
  link: string
}

const data: FeatureLink[] = [
  {
    id: 1,
    title: 'Conduit Fill',
    description: 'Description for the first feature',
    link: '/fill'
  },
  {
    id: 2,
    title: 'Second Feature',
    description: 'Description for the second feature',
    link: '/s'
  }
]

const renderItem = ({ item }: { item: FeatureLink }) => {
  return (
    <Box width='$1/2'>
      
        <Pressable onPress={
            () => {
                router.push(item.link)
            }
        }>
          <Card size='sm' variant='elevated' m='$3'>
            <Heading size='md'>
              {item.title}
            </Heading>
            <Text size='sm'>{item.description}</Text>
          </Card>
        </Pressable>
      
    </Box>
  )
}

const TwoPerRowFlatList = () => {
  return <FlatList data={data} renderItem={renderItem} numColumns={2} />
}

export default function FeatureLinks() {
  return (
    <Box width='$full'>
      <TwoPerRowFlatList />
    </Box>
  )
}
