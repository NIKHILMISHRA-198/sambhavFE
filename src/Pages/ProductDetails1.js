import React from "react";
import { Box, Text, HStack, Heading, Image, Button, VStack } from "native-base";
import Card from "../Components/Card";
function ProductDetails1() {
  return (
    <Box>
      {/* Start of Page */}
      <Box background={"black"} borderBottomRadius={"20"}>
        <HStack>
          <Box paddingTop={"100"}>
            <Heading
              bold
              color={"#EEDA00"}
              fontSize={"80"}
              paddingLeft={"20"}
              letterSpacing={5}
            >
              Product
            </Heading>
            <Heading
              bold
              color={"white"}
              fontSize={"80"}
              paddingLeft={"20"}
              letterSpacing={5}
            >
              Description
            </Heading>
            <Text
              color={"white"}
              fontSize={"18"}
              paddingLeft={"20"}
              margin={"0"}
              paddingTop={"0"}
              letterSpacing={"3"}
            >
              Indian government through Sambhav try to connect SHG stories to
              everyone.
            </Text>
          </Box>
          <Image
            marginLeft={"100"}
            width={"500"}
            height={"500"}
            borderTopRadius={"50"}
            source={{
              uri: "https://res.cloudinary.com/ipwesix/image/upload/v1661403846/Checkout_page_gen9z3.png",
            }}
            alt="Alternate Text"
          />
        </HStack>
      </Box>

      {/*Product Details*/}
      <Heading
        bold
        fontSize={"40"}
        textAlign={"center"}
        paddingTop={"55"}
        underline
      >
        Product Details
      </Heading>

      {/*Start of product page*/}
      <Box paddingTop={"50"} paddingLeft={"100"} marginTop={"20"}>
        <HStack>
          <Image
            marginLeft={"000"}
            borderWidth={"4"}
            width={"300"}
            height={"300"}
            source={{
              uri: "https://m.media-amazon.com/images/I/61Om749rKlL._SX679_.jpg",
            }}
            alt="Alternate Text"
          />
          <Box marginLeft={"170"} width={"60%"}>
            <VStack>
              <Text bold fontSize={"60"}>
                White Candle
              </Text>
              <Text fontSize={"16"} italic marginTop={"15"}>
                Sandalwood scented essential oil and soy wax based scented
                candle It has a deep woody scent often smells like a mix of
                floral, rich & woody scent It promotes calmness, lowers stress
                and improve sleep quality Its a Handcrafted, smokeless, Clean
                its perfect candle for home decor and Aromatherapy Note: Trim
                the wick each time to 1/4 inch before burning to give clean burn
                and enhanced candle life
              </Text>
              <Text fontSize={"16"} italic marginTop={"5"}>
                Material Used: Home made candle wastes
              </Text>
              <Text marginTop={"10"} fontSize={"20"} italic>
                Indian Shoes was made by{" "}
                <Text bold color="#7BC5E2">
                  Divya SHG
                </Text>
                , Indore on{" "}
                <Text bold color={"#7BC5E2"}>
                  12 May, 2022
                </Text>
              </Text>
              <HStack marginTop={"10"}>
                <Text bold marginTop={"2"} fontSize={"18"}>
                  Size
                </Text>
                <Button
                  height={"10"}
                  width={"10"}
                  colorScheme={"dark"}
                  marginLeft={"4"}
                >
                  <Text color={"black"} bold>
                    mini
                  </Text>
                </Button>
                <Button
                  height={"10"}
                  width={"10"}
                  colorScheme={"dark"}
                  marginLeft={"2"}
                >
                  <Text color={"black"} bold>
                    Small
                  </Text>
                </Button>
                <Button
                  height={"10"}
                  width={"10"}
                  colorScheme={"dark"}
                  marginLeft={"2"}
                >
                  <Text color={"black"} bold>
                    medium
                  </Text>
                </Button>
                <Button
                  height={"10"}
                  width={"10"}
                  colorScheme={"dark"}
                  marginLeft={"2"}
                >
                  <Text color={"black"} bold>
                    Large
                  </Text>
                </Button>
              </HStack>

              {/* <HStack marginTop={"10"}>
                <Text bold marginTop={"2"} fontSize={"18"}>
                  Color
                </Text>
                <Button
                  height={"10"}
                  width={"20"}
                  colorScheme={"dark"}
                  marginLeft={"4"}
                >
                  <Text color={"black"} bold>
                    Black
                  </Text>
                </Button>
                <Button
                  height={"10"}
                  width={"20"}
                  colorScheme={"dark"}
                  marginLeft={"2"}
                >
                  <Text color={"black"} bold>
                    Blue
                  </Text>
                </Button>
                <Button
                  height={"10"}
                  width={"20"}
                  colorScheme={"dark"}
                  marginLeft={"2"}
                >
                  <Text color={"black"} bold>
                    Brown
                  </Text>
                </Button>
                <Button
                  height={"10"}
                  width={"20"}
                  colorScheme={"dark"}
                  marginLeft={"2"}
                >
                  <Text color={"black"} bold>
                    Green
                  </Text>
                </Button>
              </HStack> */}

              <HStack>
                <Text bold fontSize={"40"} paddingTop={"50"}>
                  ₹ 80
                </Text>
                <Button
                  borderRadius={10}
                  marginTop={10}
                  width={40}
                  marginLeft={"550"}
                >
                  <Text bold color="black" fontSize={20}>
                    Buy Now
                  </Text>
                </Button>
              </HStack>
            </VStack>
          </Box>
        </HStack>
        <Box paddingTop={"32"} margin={6}>
          <Text bold fontSize={"2xl"}>
            More Products of your Interest:
          </Text>
          <Card />
        </Box>
      </Box>
      {/* End of page */}
    </Box>
  );
}

export default ProductDetails1;
