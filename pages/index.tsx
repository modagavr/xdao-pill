import { Heading, VStack } from '@chakra-ui/layout'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import Connect from 'components/Connect'
import CreateVoting from 'components/CreateVoting'
import SignVoting from 'components/SignVoting'
import type { NextPage } from 'next'
const Home: NextPage = () => {
  const { active } = useWeb3React<Web3Provider>()

  return (
    <VStack p={[2, 4, 6, 8]} spacing='6'>
      <Heading>XDAO💊Pill</Heading>

      <Connect />

      {active && (
        <Tabs variant='soft-rounded' align='center' w='full'>
          <TabList>
            <Tab>Create Voting</Tab>
            <Tab>Sign Voting</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <CreateVoting />
            </TabPanel>
            <TabPanel>
              <SignVoting />
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </VStack>
  )
}

export default Home
