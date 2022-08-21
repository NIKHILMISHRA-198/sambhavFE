import React from "react";
import { Box, Text, Image, VStack, HStack, Button } from "native-base";
function Education() {
  return (
    <Box>
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
        <HStack space={4}>
          <Box margin={4}>
            <VStack>
              <Image
                margin={"0"}
                width={"400"}
                h={"200"}
                borderTopRadius={"50"}
                source={{
                  uri: "https://res.cloudinary.com/ipwesix/image/upload/v1659078990/Wallpaper_owoky1.jpg",
                }}
                alt="Alternate Text"
              />
              <Text bold paddingTop={"4"} fontSize={"20"}>
                Product Packaging Video by Noha NGO
              </Text>
              <HStack>
                <Button
                  borderRadius={10}
                  backgroundColor={"black"}
                  marginTop={10}
                  width={40}
                >
                  <Text bold color="#EEDA25" fontSize={20}>
                    Watch Video
                  </Text>
                </Button>
                <Button
                  borderRadius={10}
                  backgroundColor={"black"}
                  marginTop={10}
                  width={40}
                >
                  <Text bold color="#EEDA25" fontSize={20}>
                    Watch Video
                  </Text>
                </Button>
              </HStack>
            </VStack>
          </Box>

          <Box margin={4}>
            <VStack>
              <Image
                margin={"0"}
                width={"400"}
                h={"200"}
                borderTopRadius={"50"}
                source={{
                  uri: "https://res.cloudinary.com/ipwesix/image/upload/v1659078990/Wallpaper_owoky1.jpg",
                }}
                alt="Alternate Text"
              />
              <Text bold paddingTop={"4"} fontSize={"20"}>
                Product Packaging Video by Noha NGO
              </Text>
              <HStack>
                <Button
                  borderRadius={10}
                  backgroundColor={"black"}
                  marginTop={10}
                  width={40}
                >
                  <Text bold color="#EEDA25" fontSize={20}>
                    Watch Video
                  </Text>
                </Button>
                <Button
                  borderRadius={10}
                  backgroundColor={"black"}
                  marginTop={10}
                  width={40}
                >
                  <Text bold color="#EEDA25" fontSize={20}>
                    Watch Video
                  </Text>
                </Button>
              </HStack>
            </VStack>
          </Box>

          <Box margin={4}>
            <VStack>
              <Image
                margin={"0"}
                width={"400"}
                h={"200"}
                borderTopRadius={"50"}
                source={{
                  uri: "https://res.cloudinary.com/ipwesix/image/upload/v1659078990/Wallpaper_owoky1.jpg",
                }}
                alt="Alternate Text"
              />
              <Text bold paddingTop={"4"} fontSize={"20"}>
                Product Packaging Video by Noha NGO
              </Text>
              <HStack>
                <Button
                  borderRadius={10}
                  backgroundColor={"black"}
                  marginTop={10}
                  width={40}
                >
                  <Text bold color="#EEDA25" fontSize={20}>
                    Watch Video
                  </Text>
                </Button>
                <Button
                  borderRadius={10}
                  backgroundColor={"black"}
                  marginTop={10}
                  width={40}
                >
                  <Text bold color="#EEDA25" fontSize={20}>
                    Watch Video
                  </Text>
                </Button>
              </HStack>
            </VStack>
          </Box>
        </HStack>

        <Text>Heading 2</Text>
      </Box>
    </Box>
  );
}

export default Education;
