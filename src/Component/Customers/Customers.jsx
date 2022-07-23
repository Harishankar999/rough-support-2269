import { Box, Text, Heading, Flex, HStack, VStack, GridItem, Grid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import styles from "./Customers.module.css"

import { FilterSort } from './FilterSort'

import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getData_cust } from '../../Redux/Customers/action'
import Footer from '../Footer'

export const Customers = () => {

    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const Data = useSelector(state => state.CustReducer.CUST)

    const loaction = useLocation()


    useEffect(() => {

        //     const urlCategory = searchParams.getAll("category")

        //     const urlSort = searchParams.get("sortBy")

        if (Data.length === 0 || loaction.search) {

            let getBooksParams = {
                params: {
                    category: searchParams.getAll('category'),

                }
            }


            dispatch(getData_cust(getBooksParams))



        }


    }, [loaction.search])





    return (
        <Box margin={'auto'} width={'99%'}    >
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

            <Box width='100%' height={'400px'} >
                <Flex >
                    <VStack p={'15px'} width='50%' height={'350px'}>
                        <img src="https://www.getharvest.com/hs-fs/hubfs/customer-profile.jpg?width=1181&name=customer-profile.jpg" alt="" />
                    </VStack>
                    <HStack width='50%' height={'300px'} >
                        <Box pt={'0'} ml='5px' textAlign={'left'}>
                            <Box >
                                <Heading>FEATURED STORY</Heading>
                            </Box>
                            <Box>
                                <Text color={'black.700'}>Startup studio Dovetail tracks time with Harvest to build trust with clients.</Text>
                            </Box>
                            <Box>
                                <a href="https://www.getharvest.com/customers/dovetail"> <button className={styles.btn} >Read customer story</button></a>
                            </Box>
                        </Box>
                    </HStack>
                </Flex>
            </Box>

            {/* -------------------------Data---------------------------------- */}

            <Box width={'100%'}  >

                <Flex mt={'35px'} pl={'5%'} alignItems={'center'} margin={"auto"} width={'90%'} height={"80px"}>

                    <Box>
                        <Heading fontSize={'4xl'} color={'black.900'}>Find stories from teams like yours</Heading>
                    </Box>

                </Flex>

                {/* ------------------data-------------------- */}

                <Box mt={'5px'} width={'100%'} height='auto' mb={'2%'} >
                    <Flex>
                        <VStack width={'30%'} height='500px' >
                            <FilterSort />
                        </VStack>
                        <HStack width={'70%'} height='auto'  >
                            <Grid width={'100%'} templateColumns='repeat(3, 1fr)' gap={'8px'} ml='6px' mt={'25px'}>
                                {
                                    Data.map((e) => {
                                        return (

                                            <Grid key={e.id} width='90%' height={'300px'} templateRows='auto'  >

                                                <GridItem>
                                                    <Box pl={'15%'} w={'100%'} h='150px'>
                                                        <img width={'150px'} height='150px' src={e.imageUrl} alt="" />
                                                    </Box>

                                                    <Box w={'100%'} h='150px'>

                                                        <Text fontSize='md' color='black.500' mt={'10%'}> {e.desc}</Text>

                                                    </Box>
                                                </GridItem>



                                            </Grid>


                                        )
                                    })
                                }
                            </Grid>
                        </HStack>
                    </Flex>


                </Box>



                <hr className={styles.hr} />

                <Box>
                    <Flex>

                        <HStack width='50%' height={'300px'}>
                            <Box p={'10px'} ml='5px' textAlign={'left'}>
                                <Box >
                                    <Heading>Start tracking time today</Heading>
                                </Box>
                                <Box>
                                    <Text color={'black.700'}>Join 70,000+ companies spending their time wisely with Harvest.</Text>
                                </Box>
                                <Box>
                                    <button className={styles.btn2} >Try Harvset free</button>
                                </Box>
                            </Box>
                        </HStack>
                        <VStack p={'15px'} width='50%' height={'300px'}>
                            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg" alt="" />
                        </VStack>

                    </Flex>
                </Box>
            </Box>

            <Box width={'99%'} margin='auto'>
                <Footer />
            </Box>

        </Box>
    )
}
