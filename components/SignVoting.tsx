import { Button } from '@chakra-ui/button'
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Heading, ListItem, OrderedList, Text, VStack } from '@chakra-ui/layout'
import { arrayify } from '@ethersproject/bytes'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { useState } from 'react'

export default function SignVoting() {
  const { library } = useWeb3React<Web3Provider>()

  const [txHash, setTxHash] = useState('')

  const [sig, setSig] = useState('')

  return (
    <VStack w={{ base: '70%', md: '40%' }} spacing='4'>
      <FormControl>
        <FormLabel>Tx Hash</FormLabel>

        <Input value={txHash} onChange={(e) => setTxHash(e.target.value)} />
        <FormHelperText>Enter Tx Hash</FormHelperText>
      </FormControl>

      <Button
        size='lg'
        w='full'
        colorScheme='blue'
        onClick={async () => {
          const sig = await library
            ?.getSigner()
            .signMessage(arrayify(txHash) ?? '')

          setSig(sig ?? '')
        }}
      >
        Sign Message
      </Button>

      <Text>Your Signature</Text>
      <Text fontWeight='bold' w='full'>
        {sig}
      </Text>

      <Heading fontSize='xl'>Step-by-Step Instruction</Heading>
      <OrderedList textAlign='start' w='full' spacing='6'>
        <ListItem>
          Enter TxHash you received from a DAO member that created this voting
        </ListItem>

        <ListItem>
          Sign it, copy signature value and send it back to a member
        </ListItem>

        <ListItem>Your Signature: {sig}</ListItem>
      </OrderedList>
    </VStack>
  )
}
