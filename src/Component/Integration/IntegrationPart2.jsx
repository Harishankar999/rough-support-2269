import React, { useEffect } from 'react'

import { Box, Flex, Grid, GridItem, Heading, HStack, Input, Text, VStack, } from "@chakra-ui/react"

import { SearchIcon } from '@chakra-ui/icons'


import styles from "./Integration.module.css"
import { FilterSort } from './FilterSort'

import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getData } from '../../Redux/Integration/action'
import Footer from '../Footer'




export const IntegrationPart2 = () => {

    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const INTData = useSelector(state => state.DataReducer.datas)

    const loaction = useLocation()


    useEffect(() => {

        //     const urlCategory = searchParams.getAll("category")

        //     const urlSort = searchParams.get("sortBy")

        if (INTData.length === 0 || loaction.search) {

            let getBooksParams = {
                params: {
                    category: searchParams.getAll('category'),

                }
            }


            dispatch(getData(getBooksParams))



        }


    }, [loaction.search])


    console.log(INTData)

    return (
        <>

            <hr className={styles.hr} />
            <div className={styles.First} >


                <Flex mt={'35px'} pl={'5%'} alignItems={'center'} margin={"auto"} width={'90%'} height={"80px"}>
                    <Box> <SearchIcon fontSize={'20px'} /></Box>
                    <Box> <Input border={'none'} width={'400%'} mt={'3%'} placeholder='Find an app or service you use' /></Box>

                </Flex>

                {/* ------------------data-------------------- */}

                <Box mt={'5px'} width={'100%'} height='auto' >
                    <Flex>
                        <VStack width={'30%'} height='500px' >
                            <FilterSort />
                        </VStack>
                        <HStack width={'70%'} height='auto'  >
                            <Grid width={'100%'} templateColumns='repeat(3, 1fr)' gap={'8px'} ml='6px' mt={'25px'}>
                                {
                                    INTData.map((e) => {
                                        return (

                                            <Grid key={e.id} width='90%' height={'300px'} templateRows='auto'  >

                                                <GridItem>
                                                    <Box pl={'15%'} w={'100%'} h='150px'>
                                                        <img width={'150px'} height='150px' src={e.imageUrl} alt="" />
                                                    </Box>

                                                    <Box w={'100%'} h='150px'>
                                                        <Text fontSize='xl' color='black.1300' mt={'10%'}> {e.name}</Text>
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

                <Box mb="2%">
                    <Flex>
                        <VStack p={'15px'} width='30%' height={'300px'}>
                            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/illo-180-integrations.svg" alt="" />
                        </VStack>
                        <HStack width='70%' height={'300px'}>
                            <Box p={'10px'} ml='5px' textAlign={'left'}>
                                <Box >
                                    <Heading>Build your own Harvest integration</Heading>
                                </Box>
                                <Box>
                                    <Text color={'black.700'}>Extend the functionality of your app by easily adding Harvest  timers, or build a <br /> bespoke integration   with the Harvest API</Text>
                                </Box>
                                <Box>
                                    <a href="https://www.getharvest.com/add-time-tracking"> <button className={styles.btn} >Browse options</button></a>
                                </Box>
                            </Box>
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
                <Box width={'99%'} margin='auto'>
                    <Footer />
                </Box>
            </div>
        </>
    )
}