import { Button } from '@chakra-ui/button'
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { ListItem, Text, UnorderedList, VStack } from '@chakra-ui/layout'
import { Heading, OrderedList } from '@chakra-ui/react'
import { hexlify } from '@ethersproject/bytes'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import dayjs from 'dayjs'
import { constants } from 'ethers'
import { useMemo, useState } from 'react'
import { createTxHash } from 'utils/hex'

export default function CreateVoting() {
  const { library } = useWeb3React<Web3Provider>()

  const timestamp = useMemo(() => dayjs(), [])

  const [daoAddress, setDaoAddress] = useState(constants.AddressZero)
  const [targetAddress, setTargetAddress] = useState(constants.AddressZero)
  const [data, setData] = useState('0x')
  const [value, setValue] = useState('0')
  const [chainId, setChainId] = useState('1')

  const [sig, setSig] = useState('')

  const txHash = useMemo(() => {
    try {
      return createTxHash(
        daoAddress,
        targetAddress,
        data,
        value,
        0,
        timestamp.unix(),
        chainId
      )
    } catch {
      return undefined
    }
  }, [chainId, daoAddress, data, targetAddress, timestamp, value])

  return (
    <VStack w={{ base: '70%', md: '40%' }} spacing='4'>
      <Text>
        Date {timestamp.unix()} | {timestamp.toString()}
      </Text>

      <FormControl>
        <FormLabel>DAO Address</FormLabel>

        <Input
          value={daoAddress}
          onChange={(e) => setDaoAddress(e.target.value)}
        />
        <FormHelperText>Enter Your DAO Address</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Target Address</FormLabel>
        <Input
          value={targetAddress}
          onChange={(e) => setTargetAddress(e.target.value)}
        />
        <FormHelperText>Enter Target Address</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Transaction Data</FormLabel>
        <Input value={data} onChange={(e) => setData(e.target.value)} />
        <FormHelperText>Enter Transaction Data</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Transaction Value</FormLabel>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <FormHelperText>
          Enter Transaction Value. For example, 1 ETH = 0x0de0b6b3a7640000
        </FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Chain ID</FormLabel>
        <Input value={chainId} onChange={(e) => setChainId(e.target.value)} />
        <FormHelperText>
          Enter Chain ID. For example, Ethereum Chain ID = 1
        </FormHelperText>
      </FormControl>

      <Text> TxHash </Text>
      <Text fontWeight='bold' w='full'>
        {hexlify(txHash ?? 0)}{' '}
      </Text>

      <Button
        size='lg'
        w='full'
        colorScheme='blue'
        onClick={async () => {
          const sig = await library?.getSigner().signMessage(txHash ?? '')

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
        <ListItem>Enter Transaction Data and click Sign Message</ListItem>

        <ListItem>
          Copy and Save this Data
          <UnorderedList>
            <ListItem>DAO Address: {daoAddress}</ListItem>
            <ListItem>Target Address: {targetAddress}</ListItem>
            <ListItem>Value: {value}</ListItem>
            <ListItem>Nonce: 0</ListItem>
            <ListItem>Timestamp: {timestamp.unix()}</ListItem>
            <ListItem fontWeight='medium'>Your Signature: {sig}</ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          Send your DAO Members this TxHash: {hexlify(txHash ?? 0)}, ask them to
          send their signatures back to you, save all the signatures
        </ListItem>
        <ListItem>
          When you will have enough signatures, go to scanner DAO Page
          (Etherscan, BSCScan, ...), choose [Write], connect your wallet and
          enter all the data. Signatures are entered in the format of [sig1,
          sig2, sig3]{' '}
        </ListItem>
      </OrderedList>
    </VStack>
  )
}
