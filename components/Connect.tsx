import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'utils/connectors'

export default function Connect() {
  const { active, account, activate, deactivate } = useWeb3React<Web3Provider>()

  if (active) {
    return (
      <VStack>
        <Text>Connected. Click to Disconnect</Text>
        <Button
          variant='outline'
          size='lg'
          onClick={() => {
            deactivate()
            localStorage.removeItem('walletconnect')
          }}
        >
          {account}
        </Button>
      </VStack>
    )
  }

  return (
    <VStack>
      <Text>Connect Your Wallet</Text>
      <HStack>
        <Button
          size='lg'
          colorScheme='blue'
          variant='outline'
          onClick={() => activate(injected)}
        >
          <Image
            src='/images/metamask-fox.svg'
            alt='MetaMask'
            w='8'
            h='8'
            mr='1'
          />{' '}
          MetaMask
        </Button>
        <Button
          size='lg'
          colorScheme='blue'
          variant='outline'
          onClick={() => activate(walletconnect)}
        >
          <Image
            src='/images/walletconnect.svg'
            alt='WalletConnect'
            w='8'
            h='8'
            mr='1'
          />
          WalletConnect
        </Button>
      </HStack>
    </VStack>
  )
}
