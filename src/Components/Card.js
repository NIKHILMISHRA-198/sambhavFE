import { Box, VStack, Text, HStack, Button, Image } from "native-base";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");

function Card() {
  // const [product, setProduct] = useState(["null"]);
  // useEffect(() => {
  //   axios.get("http://localhost:4000/api/v1/products").then((res) => {
  //     setProduct(res.data.products);
  //     // console.log();
  //   });
  // }, []);

  return (
    <Box
      margin={"auto"}
      flex={"auto"}
      flexDir={["col", "row", "row"]}
      flexWrap={"wrap"}
    >
      <Box
        border="2"
        borderRadius="md"
        shadow={"6"}
        width={["100%", "240"]}
        margin={4}
      >
        <VStack>
          <Box>
            <Image
              src={
                "https://m.media-amazon.com/images/I/61Om749rKlL._SX679_.jpg"
              }
              width={["100%"]}
              alt={"alternate name"}
              height="250"
            />
          </Box>

          <Box width={"100"}>
            <HStack maxW={"100"} flexDir={"row"}>
              <VStack space={2} padding={2}>
                <Link to="/productDetails/1">
                  <Text bold>Candle</Text>
                </Link>
                <Text color={"red.600"}>Rs.150</Text>
              </VStack>
              <VStack space={2} padding={2}>
                <Text bold>5</Text>
                <Button
                  marginLeft={"4"}
                  backgroundColor={"amber.400"}
                  color={"red.600"}
                >
                  Add to Cart
                </Button>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
      <Box
        border="2"
        borderRadius="md"
        shadow={"6"}
        width={["100%", "240"]}
        margin={4}
      >
        <VStack>
          <Box>
            <Image
              src={
                "https://m.media-amazon.com/images/I/71U9glopeDL._SL1500_.jpg"
              }
              width={["100%"]}
              alt={"alternate name"}
              height="250"
            />
          </Box>
          <Box width={"100"}>
            <HStack maxW={"100"} flexDir={"row"}>
              <VStack space={2} padding={2}>
                <Text bold>Honey</Text>
                <Text color={"red.600"}>Rs.350</Text>
              </VStack>
              <VStack space={2} padding={2}>
                <Text bold>50</Text>
                <Button
                  marginLeft={"4"}
                  backgroundColor={"amber.400"}
                  color={"red.600"}
                >
                  Add to Cart
                </Button>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
      <Box
        border="2"
        borderRadius="md"
        shadow={"6"}
        width={["100%", "240"]}
        margin={4}
      >
        <VStack>
          <Box>
            <Image
              src={"https://m.media-amazon.com/images/I/51k8kWeNLJL.jpg"}
              width={["100%"]}
              alt={"alternate name"}
              height="250"
            />
          </Box>
          <Box width={"100"}>
            <HStack maxW={"100"} flexDir={"row"}>
              <VStack space={2} padding={2}>
                <Link to="/productDetails/2">
                  <Text bold>Pickle</Text>
                </Link>
                <Text color={"red.600"}>Rs.250</Text>
              </VStack>
              <VStack space={2} padding={2}>
                <Text bold>5</Text>
                <Button
                  marginLeft={"4"}
                  backgroundColor={"amber.400"}
                  color={"red.600"}
                >
                  Add to Cart
                </Button>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
      <Box
        border="2"
        borderRadius="md"
        shadow={"6"}
        width={["100%", "240"]}
        margin={4}
      >
        <VStack>
          <Box>
            <Image
              src={
                "https://m.media-amazon.com/images/I/91q+Rvk-fFL._SL1500_.jpg"
              }
              width={["100%"]}
              alt={"alternate name"}
              height="250"
            />
          </Box>
          <Box width={"100"}>
            <HStack maxW={"100"} flexDir={"row"}>
              <VStack space={2} padding={2}>
                <Text bold>Plastic Bottle</Text>
                <Text color={"red.600"}>Rs.350</Text>
              </VStack>
              <VStack space={2} padding={2}>
                <Text bold>5</Text>
                <Button
                  marginLeft={"4"}
                  backgroundColor={"amber.400"}
                  color={"red.600"}
                >
                  Add to Cart
                </Button>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
      <Box
        border="2"
        borderRadius="md"
        shadow={"6"}
        width={["100%", "240"]}
        margin={4}
      >
        <VStack>
          <Box>
            <Image
              src={
                "https://5.imimg.com/data5/QY/BQ/MY-7894402/jute-shopping-bag-500x500.jpg"
              }
              width={["100%"]}
              alt={"alternate name"}
              height="250"
            />
          </Box>
          <Box width={"100"}>
            <HStack maxW={"100"} flexDir={"row"}>
              <VStack space={2} padding={2}>
                <Text bold>Jute Bag</Text>
                <Text color={"red.600"}>Rs.450</Text>
              </VStack>
              <VStack space={2} padding={2}>
                <Text bold>16</Text>
                <Button
                  marginLeft={"4"}
                  backgroundColor={"amber.400"}
                  color={"red.600"}
                >
                  Add to Cart
                </Button>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
      <Box
        border="2"
        borderRadius="md"
        shadow={"6"}
        width={["100%", "240"]}
        margin={4}
      >
        <VStack>
          <Box>
            <Image
              src={
                "https://theoneshop.in/wp-content/uploads/2020/03/916001B.jpg"
              }
              width={["100%"]}
              alt={"alternate name"}
              height="250"
            />
          </Box>
          <Box width={"100"}>
            <HStack maxW={"100"} flexDir={"row"}>
              <VStack space={2} padding={2}>
                <Text bold>kalamkari bag</Text>
                <Text color={"red.600"}>Rs.550</Text>
              </VStack>
              <VStack space={2} padding={2}>
                <Text bold>5</Text>
                <Button
                  marginLeft={"4"}
                  backgroundColor={"amber.400"}
                  color={"red.600"}
                >
                  Add to Cart
                </Button>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
      <Box
        border="2"
        borderRadius="md"
        shadow={"6"}
        width={["100%", "240"]}
        margin={4}
      >
        <VStack>
          <Box>
            <Image
              src={
                "https://m.media-amazon.com/images/I/61Om749rKlL._SX679_.jpg"
              }
              width={["100%"]}
              alt={"alternate name"}
              height="250"
            />
          </Box>
          <Box width={"100"}>
            <HStack maxW={"100"} flexDir={"row"}>
              <VStack space={2} padding={2}>
                <Text bold>Candle</Text>
                <Text color={"red.600"}>Rs.150</Text>
              </VStack>
              <VStack space={2} padding={2}>
                <Text bold>5</Text>
                <Button
                  marginLeft={"4"}
                  backgroundColor={"amber.400"}
                  color={"red.600"}
                >
                  Add to Cart
                </Button>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
      <Box
        border="2"
        borderRadius="md"
        shadow={"6"}
        width={["100%", "240"]}
        margin={4}
      >
        <VStack>
          <Box>
            <Image
              src={
                "https://5.imimg.com/data5/SELLER/Default/2020/11/HA/XQ/YC/97089866/bamboo-hand-fan-500x500.jpg"
              }
              width={["100%"]}
              alt={"alternate name"}
              height="250"
            />
          </Box>
          <Box width={"100"}>
            <HStack maxW={"100"} flexDir={"row"}>
              <VStack space={2} padding={2}>
                <Text bold>Hand fan</Text>
                <Text color={"red.600"}>Rs.150</Text>
              </VStack>
              <VStack space={2} padding={2}>
                <Text bold>5</Text>
                <Button
                  marginLeft={"4"}
                  backgroundColor={"amber.400"}
                  color={"red.600"}
                >
                  Add to Cart
                </Button>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
      <Box
        border="2"
        borderRadius="md"
        shadow={"6"}
        width={["100%", "240"]}
        margin={4}
      >
        <VStack>
          <Box>
            <Image
              src={
                "https://i.pinimg.com/originals/3c/8b/5b/3c8b5b561744172a94b80bc42902145a.jpg"
              }
              width={["100%"]}
              alt={"alternate name"}
              height="250"
            />
          </Box>
          <Box width={"100"}>
            <HStack maxW={"100"} flexDir={"row"}>
              <VStack space={2} padding={2}>
                <Text bold>bamboo Showcase</Text>
                <Text color={"red.600"}>Rs.1150</Text>
              </VStack>
              <VStack space={2} padding={2}>
                <Text bold>5</Text>
                <Button
                  marginLeft={"4"}
                  backgroundColor={"amber.400"}
                  color={"red.600"}
                >
                  Add to Cart
                </Button>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
      <Box
        border="2"
        borderRadius="md"
        shadow={"6"}
        width={["100%", "240"]}
        margin={4}
      >
        <VStack>
          <Box>
            <Image
              src={
                "https://i.pinimg.com/originals/12/f4/b7/12f4b72e8338356821f6d870c5718fd6.jpg"
              }
              width={["100%"]}
              alt={"alternate name"}
              height="250"
            />
          </Box>
          <Box width={"100"}>
            <HStack maxW={"100"} flexDir={"row"}>
              <VStack space={2} padding={2}>
                <Text bold>Clock</Text>
                <Text color={"red.600"}>Rs.650</Text>
              </VStack>
              <VStack space={2} padding={2}>
                <Text bold>51</Text>
                <Button
                  marginLeft={"4"}
                  backgroundColor={"amber.400"}
                  color={"red.600"}
                >
                  Add to Cart
                </Button>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default Card;
