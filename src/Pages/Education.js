import React from "react";
import { Box, Text, Image, VStack, HStack, Button, Heading } from "native-base";
function Education() {
  return (
    <Box>
      <Box
        backgroundColor={"black"}
        borderBottomRadius={"20"}
        shadow={6}
        //width={"100%"}
        //height={"full"}
        //backgroundImage={{uri: "https://res.cloudinary.com/ipwesix/image/upload/v1659079601/image_58_qj35yd.png"}}
      >
        <HStack>
          <Box paddingTop={"100"}>
            <Heading
              bold
              color={"#EEDA00"}
              fontSize={"80"}
              paddingLeft={"20"}
              //margin={10}
              letterSpacing={5}
            >
              Education
            </Heading>
            <Text
              color={"white"}
              fontSize={"25"}
              paddingLeft={"20"}
              margin={"0"}
              paddingTop={"0"}
              letterSpacing={"3"}
            >
              is first step to achieve. . .{" "}
            </Text>
            <Text>
              {"      "}
              {"      "}
            </Text>
            <Text
              color={"white"}
              fontSize={"25"}
              paddingLeft={"20"}
              margin={"0"}
              paddingTop={"0"}
              letterSpacing={"3"}
            >
              Let's explore all the possibilitys and resource Sambhav provides.
            </Text>
            <Button
              borderRadius={10}
              //backgroundColor={"green"}
              marginTop={10}
              marginLeft={"20"}
              width={40}
            >
              <Text bold color="black" fontSize={20}>
                Explore
              </Text>
            </Button>
          </Box>
          <Image
            marginLeft={"0"}
            paddingLeft={"0"}
            width={"500"}
            height={"500"}
            borderTopRadius={"50"}
            source={{
              uri: "https://res.cloudinary.com/ipwesix/image/upload/v1661463125/HE_1_dgaezd.png",
            }}
            alt="Alternate Text"
          />
        </HStack>
      </Box>
      {/*Prototype Block*/}
      <Box
        // width={'50%'}
        shadow={4}
        backgroundColor={"white"}
        margin={10}
        borderWidth={4}
        borderRadius={"30"}
        borderColor={"grey"}
      >
        <HStack space={60}>
          <Text margin={10} color={"black"} fontSize={30} marginLeft={81}>
            Prototype of Sambhav Website
          </Text>
          <Button
            borderRadius={30}
            backgroundColor={"black"}
            margin={10}
            width={40}
          >
            <Text bold color="#EEDA25" fontSize={25}>
              SHG
            </Text>
          </Button>
          <Button
            borderRadius={30}
            backgroundColor={"black"}
            margin={10}
            marginLeft={100}
            width={40}
          >
            <Text bold color="#EEDA25" fontSize={25}>
              User
            </Text>
          </Button>
        </HStack>
      </Box>
      {/* first horizontal row */}
      <Box>
        <Text
          bold
          fontSize={30}
          paddingLeft={20}
          paddingTop={10}
          letterSpacing={2}
        >
          Product Packaging Video
        </Text>
        <HStack space={3} paddingLeft={20}>
          <Box margin={4}>
            <VStack>
              <iframe
                width="400"
                height="200"
                borderRadius={"20"}
                src="https://www.youtube.com/embed/wYNHXvG5jn4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <Text bold paddingTop={"4"} fontSize={"20"}>
                Product Packaging Video by Noha NGO
              </Text>
            </VStack>
          </Box>

          <Box margin={4}>
            <VStack>
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/h6ZkBvFxcfc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <Text bold paddingTop={"4"} fontSize={"20"}>
                Product Packaging Video by Naya Ngo
              </Text>
            </VStack>
          </Box>

          <Box margin={4}>
            <VStack>
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/HeQWtdNcLeI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <Text bold paddingTop={"4"} fontSize={"20"}>
                Product Packaging Video by Divya NGO
              </Text>
            </VStack>
          </Box>
        </HStack>
      </Box>
      <Text
        bold
        fontSize={30}
        paddingLeft={20}
        paddingTop={10}
        letterSpacing={2}
        color={"black"}
      >
        Other Resources
      </Text>
      <HStack space={10}>
        {/*Resource 1*/}
        <Box paddingLeft={"20"}>
          <VStack>
            <Image
              margin={"0"}
              width={"400"}
              h={"200"}
              borderTopRadius={"50"}
              source={{
                uri: "https://res.cloudinary.com/ipwesix/image/upload/v1661425421/5_hzxpxd.png",
              }}
              alt="Alternate Text"
            />
            <Text bold paddingTop={"4"} fontSize={"20"}>
              SHG Handbook by Indian Government
            </Text>
            <HStack space={"30"}>
              <Button
                borderRadius={10}
                backgroundColor={"black"}
                marginTop={10}
                marginLeft={"18"}
                width={80}
              >
                <Text bold color="#EEDA25" fontSize={20}>
                  <a
                    href="https://daynrlmbl.aajeevika.gov.in/Circulars/Handbook%20on%20SHG.pdf"
                    color="#EEDA25"
                  >
                    <Text color={"white"}>Watch pdf</Text>
                  </a>
                </Text>
              </Button>
            </HStack>
          </VStack>
        </Box>
        {/*Resource 2*/}
        <Box>
          <VStack>
            <Image
              margin={"0"}
              width={"400"}
              h={"200"}
              borderTopRadius={"50"}
              source={{
                uri: "https://res.cloudinary.com/ipwesix/image/upload/v1661425421/6_p5vbsj.png",
              }}
              alt="Alternate Text"
            />
            <Text bold paddingTop={"4"} fontSize={"20"}>
              Candle Design pdf by NIFT Patna
            </Text>
            <HStack space={"30"}>
              <Button
                borderRadius={10}
                backgroundColor={"black"}
                marginTop={10}
                marginLeft={"18"}
                width={80}
              >
                <Text bold color="#EEDA25" fontSize={20}>
                  <a
                    href="https://daynrlmbl.aajeevika.gov.in/Circulars/Handbook%20on%20SHG.pdf"
                    color="#EEDA25"
                  >
                    <Text color={"white"}>Watch pdf</Text>
                  </a>
                </Text>
              </Button>
            </HStack>
          </VStack>
        </Box>
        {/*Resource 3*/}
        <Box>
          <VStack>
            <Image
              margin={"0"}
              width={"400"}
              h={"200"}
              borderTopRadius={"50"}
              source={{
                uri: "https://res.cloudinary.com/ipwesix/image/upload/v1661425421/4_yscgcu.png",
              }}
              alt="Alternate Text"
            />
            <Text bold paddingTop={"4"} fontSize={"20"}>
              Product Packaging Pdf by Noha NGO
            </Text>
            <HStack space={"30"}>
              <Button
                borderRadius={10}
                backgroundColor={"black"}
                marginTop={10}
                marginLeft={"18"}
                width={80}
              >
                <Text bold color="#EEDA25" fontSize={20}>
                  <a
                    href="https://daynrlmbl.aajeevika.gov.in/Circulars/Handbook%20on%20SHG.pdf"
                    color="#EEDA25"
                  >
                    <Text color={"white"}>Watch pdf</Text>
                  </a>
                </Text>
              </Button>
            </HStack>
          </VStack>
        </Box>
      </HStack>
      <Text
        bold
        fontSize={30}
        paddingLeft={20}
        paddingTop={20}
        letterSpacing={2}
        color={"black"}
      >
        NGO Details
      </Text>
      <HStack>
        <Box
          width="20%"
          marginLeft={"150"}
          padding={"10"}
          shadow={4}
          backgroundColor={"white"}
          margin={10}
          borderWidth={4}
          borderRadius={"30"}
          borderColor={"black"}
        >
          <VStack>
            <Text letterSpacing={2} bold fontSize={"2xl"}>
              NGO 1
            </Text>
            <Text letterSpacing={2} bold fontSize={"xl"} paddingTop={"5"}>
              Disha Foundation
            </Text>
            <Text bold fontSize={"xl"}>
              Indore, MP
            </Text>
            <Text bold fontSize={"xl"}>
              +91 812001545
            </Text>
          </VStack>
        </Box>

        <Box
          width="20%"
          marginLeft={"100"}
          padding={"10"}
          shadow={4}
          backgroundColor={"white"}
          margin={10}
          borderWidth={4}
          borderRadius={"30"}
          borderColor={"black"}
        >
          <VStack>
            <Text letterSpacing={2} bold fontSize={"2xl"}>
              NGO 2
            </Text>
            <Text letterSpacing={2} bold fontSize={"xl"} paddingTop={"5"}>
              Siksha Foundation
            </Text>
            <Text bold fontSize={"xl"}>
              Bhopal, MP
            </Text>
            <Text bold fontSize={"xl"}>
              +91 812011575
            </Text>
          </VStack>
        </Box>

        <Box
          width="20%"
          marginLeft={"100"}
          padding={"10"}
          shadow={4}
          backgroundColor={"white"}
          margin={10}
          borderWidth={4}
          borderRadius={"30"}
          borderColor={"black"}
        >
          <VStack>
            <Text letterSpacing={2} bold fontSize={"2xl"}>
              NGO 3
            </Text>
            <Text letterSpacing={2} bold fontSize={"xl"} paddingTop={"5"}>
              Kush Foundation
            </Text>
            <Text bold fontSize={"xl"}>
              Ratlam, MP
            </Text>
            <Text bold fontSize={"xl"}>
              +91 812021540
            </Text>
          </VStack>
        </Box>
      </HStack>

      <Text
        bold
        fontSize={30}
        paddingLeft={20}
        paddingTop={20}
        letterSpacing={2}
        color={"black"}
      >
        Government Policies
      </Text>
      <Box
        width="50%"
        marginLeft={"350"}
        padding={"10"}
        shadow={4}
        backgroundColor={"white"}
        margin={10}
        borderWidth={4}
        borderRadius={"30"}
        borderColor={"black"}
      >
        <HStack>
          <Text letterSpacing={2} marginTop={"3"} bold fontSize={"2xl"}>
            Government Policies for SHGs
          </Text>
          <Button
            borderRadius={10}
            backgroundColor={"black"}
            //margin={10}
            marginLeft={100}
            width={40}
          >
            <Text bold color="#EEDA25" fontSize={25}>
              <a
                href="https://daynrlmbl.aajeevika.gov.in/Circulars/Handbook%20on%20SHG.pdf"
                color="#EEDA25"
              >
                <Text color={"white"}>Explore</Text>
              </a>
            </Text>
          </Button>
        </HStack>
      </Box>

      <Text
        bold
        fontSize={30}
        paddingLeft={20}
        paddingTop={20}
        letterSpacing={2}
        color={"black"}
      >
        Intership Opportunity
      </Text>
      <Box
        width="50%"
        marginLeft={"350"}
        padding={"5"}
        shadow={4}
        backgroundColor={"white"}
        margin={10}
        borderWidth={2}
        borderRadius={"10"}
        borderColor={"black"}
      >
        <HStack>
          <Text
            letterSpacing={2}
            marginTop={"3"}
            bold
            fontSize={"2xl"}
            paddingLeft={"5"}
          >
            Apply a request for Intership
          </Text>
          <Button
            borderRadius={10}
            backgroundColor={"black"}
            //margin={10}
            marginLeft={100}
            width={40}
          >
            <Text bold color="#EEDA25" fontSize={25}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeI8_vYyaJgM7SJM4Y9AWfLq-tglWZh6yt7bEXEOJr_L-hV1A/viewform?formkey=dGx0b1ZrTnoyZDgtYXItMWVBdVlQQWc6MQ"
                color="#EEDA25"
              >
                <Text color={"white"}>Request</Text>
              </a>
            </Text>
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}

export default Education;
