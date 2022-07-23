import { Box, Text, Heading, Flex, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import styles from "./Customers.module.css"


export const Customers = () => {
    return (
        <Box margin={'auto'} width={'99%'} height="900" border={'1px solid red'}>
            <Box pl={'8px'} width={'100%'} height='200px'>
                <Heading fontSize={'5xl'}>See how Harvest helps teams like yours thrive</Heading>
                <Text fontSize={'3xl'} color={'balck.400'}>Teams of all sizes, across industries, and around the world track time with Harvest.</Text>
            </Box>

            <Box pt={'4%'} width={'100%'} height='250px' >
                <Flex>
                    <Box width={'33%'} height='200px' border={'1px solid rgb(255, 128, 0)'}>
                        <Flex p={'6%'}>
                            <Box width={'60%'}>
                                <Heading>70,000+</Heading>
                                <Text fontSize={'2xl'} color={'black.500'}>customers</Text>
                            </Box>
                            <Box width={'40%'}>
                                <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-person.svg" alt="" />
                            </Box>
                        </Flex>
                    </Box>
                    <Box width={'33%'} height='200px' border={'1px solid rgb(255, 128, 0)'}>

                        <Flex p={'4%'}>
                            <Box width={'60%'}>
                                <Heading>2 billion</Heading>
                                <Text fontSize={'2xl'} color={'black.500'}>hours tracked</Text>
                            </Box>
                            <Box width={'40%'}>
                                <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-keep.svg" alt="" />
                            </Box>
                        </Flex>


                    </Box>
                    <Box width={'34%'} height='200px' border={'1px solid rgb(255, 128, 0)'} >
                        <Flex p={'4%'}>
                            <Box width={'60%'}>
                                <Heading>19.6 million</Heading>
                                <Text fontSize={'2xl'} color={'black.500'}>invoices paid</Text>
                            </Box>
                            <Box width={'40%'}>
                                <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-money.svg" alt="" />
                            </Box>
                        </Flex>

                    </Box>
                </Flex>
            </Box>

            <Box width='100%' height={'500px'} border='1px solid black'>
                <Flex >
                    <VStack border='1px solid green' p={'15px'} width='50%' height={'350px'}>
                        <img src="https://www.getharvest.com/hs-fs/hubfs/customer-profile.jpg?width=1181&name=customer-profile.jpg" alt="" />
                    </VStack>
                    <HStack width='50%' height={'300px'} border='1px solid green'>
                        <Box pt={'0'} ml='5px' textAlign={'left'}>
                            <Box >
                                <Heading>FEATURED STORY</Heading>
                            </Box>
                            <Box>
                                <Text color={'black.700'}>Startup studio Dovetail tracks time with Harvest to build trust with clients.</Text>
                            </Box>
                            <Box>
                                <a href="https://www.getharvest.com/add-time-tracking"> <button className={styles.btn} >Read customer story</button></a>
                            </Box>
                        </Box>
                    </HStack>
                </Flex>
            </Box>

        </Box>
    )
}
