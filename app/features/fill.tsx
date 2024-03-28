import { StyleSheet } from 'react-native'

import {
  Box,
  Button,
  ButtonText,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  Icon,
  CloseIcon,
  ModalBody,
  ModalFooter,
  Switch,
  FormControl,
  FormControlLabel,
  HStack,
  FormControlLabelText,
  SelectTrigger,
  SelectIcon,
  ChevronDownIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  SelectInput,
  Center
} from '@gluestack-ui/themed'
import { useRef, useState } from 'react'
import { Select } from '@gluestack-ui/themed'

export default function ConduitFill() {
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef(null)

  return (
    <Box style={styles.container} >
      <FormControl>
        <Select>
          <SelectTrigger variant='outline' size='md'>
            <SelectInput placeholder='Select Wire' />
            <SelectIcon mr='$3'>
              <Icon as={ChevronDownIcon} />
            </SelectIcon>
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label='Wire 1' value='1' />
              <SelectItem label='Wire 2' value='2' />
              <SelectItem label='Wire 3' value='3' />
              <SelectItem label='Wire 4' value='4' />
            </SelectContent>
          </SelectPortal>
        </Select>
      </FormControl>
      <FormControl>
        <Select>
          <SelectTrigger variant='outline' size='md'>
            <SelectInput placeholder='Select Size' />
            <SelectIcon mr='$3'>
              <Icon as={ChevronDownIcon} />
            </SelectIcon>
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label='Size 1' value='1' />
              <SelectItem label='Size 2' value='2' />
              <SelectItem label='Size 3' value='3' />
              <SelectItem label='Size 4' value='4' />
            </SelectContent>
          </SelectPortal>
        </Select>
      </FormControl>

      <FormControl>
        <HStack space='sm'>
          <Switch size='sm' />
          <FormControlLabel>
            <FormControlLabelText>Solid</FormControlLabelText>
          </FormControlLabel>
        </HStack>
      </FormControl>
      <FormControl>
        <HStack space='sm'>
          <Switch size='sm' />
          <FormControlLabel>
            <FormControlLabelText>Stranded</FormControlLabelText>
          </FormControlLabel>
        </HStack>
      </FormControl>
      <Button
        onPress={() => {
          setShowModal(true)
        }}
        ref={modalRef}
      >
        <ButtonText>Add Wires</ButtonText>
      </Button>

      {/* <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size='md'>Add Wires</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody height='$1/2'>
            <Heading size='sm'>Add Wires</Heading>
          </ModalBody>
          <ModalFooter>
            <Button onPress={() => setShowModal(false)}>
              <ButtonText>Close</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
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
