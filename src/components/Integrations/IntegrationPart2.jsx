import React from 'react'

import { Box, Flex, HStack, Input, VStack, } from "@chakra-ui/react"

import { SearchIcon } from '@chakra-ui/icons'


import styles from "./Integration.module.css"
import { FilterSort } from './FilterSort'






export const IntegrationPart2 = () => {
    return (
        <div className={styles.First} >


            <Flex mt={'35px'} pl={'5%'} alignItems={'center'} margin={"auto"} border={'1px solid black'} width={'90%'} height={"80px"}>
                <Box> <SearchIcon fontSize={'20px'} /></Box>
                <Box> <Input border={'none'} width={'400%'} mt={'3%'} placeholder='Find an app or service you use' /></Box>

            </Flex>

            {/* ------------------data-------------------- */}

            <Box mt={'5px'} width={'100%'} height='900px' border={'1px solid black'}>
                <Flex>
                    <VStack width={'30%'} height='500px' border={'1px solid blue'}>
                        <FilterSort />
                    </VStack>
                    <HStack width={'70%'} height='900px' border={'1px solid white'}></HStack>
                </Flex>
            </Box>


        </div>
    )
}
