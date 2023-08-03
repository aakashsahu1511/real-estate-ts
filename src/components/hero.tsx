'use client'
import { fetchRentApi, fetchSaleApi } from '@/utils/fetchApi';
import React from 'react'
import Banner from './banner';
import { Box, Flex } from '@chakra-ui/react';
import Property, { propertyProps } from './Property';
interface heroProps{
    propertiesForRent:propertyProps[];
    propertiesForSale:propertyProps[];
}
const Hero = ({propertiesForRent,propertiesForSale} : heroProps) => {
 
  return (
    <Box>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1=' Explore from Apartments, builder floors, villas'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Flex flexWrap='wrap'>
        {propertiesForRent.map((property: propertyProps) => <Property {...property} key={property.id} />)}
      </Flex>
      <Banner
        purpose='BUY A HOME'
        title1=' Find, Buy & Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
      <Flex flexWrap='wrap'>
        {propertiesForSale.map((property: propertyProps) => <Property {...property} key={property.id} />)}
      </Flex>
  </Box>
  )
}

export default Hero;