import React from "react";
import { Box, Text, HStack, Heading, Image, Button, VStack } from "native-base";
// import { Check } from "@mui/icons-material";
function SHGDetails() {
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
              SHG
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
              SHG have been great support in COVID by providing 80% of masks.
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
      <Box paddingTop={"50"} paddingLeft={"100"} marginTop={"20"}>
        <HStack>
          <Image
            marginLeft={"000"}
            borderWidth={"4"}
            width={"300"}
            height={"300"}
            source={{
              uri: "https://res.cloudinary.com/ipwesix/image/upload/v1661434973/HE_xhazzc.png",
            }}
            alt="Alternate Text"
          />
          <Box marginLeft={"170"} width={"60%"}>
            <VStack>
              <Text bold fontSize={"60"}>
                Anoka Self Help Group
              </Text>
              <Text fontSize={"20"}>Gaya, Bihar.</Text>
              <Text fontSize={"20"} paddingTop={"20"}>
                Bahrathi Jyotsana Nareshbhai—a member of{" "}
                <Text bold>Anoka SHG</Text> came forward to start stitching and
                embroidery work. Her husband was unemployed. KVK helped her
                technically as well as in purchasing the machine. She is
                stitching all types of garments like sarris, blouse, godaddy,
                little frocks and all types of curtains, pillow covers, bags,
                shirts, etc. In her village, she is only a tailor, hence, there
                is good scope for doing stitching work. Technical staff of KVK
                provided full support for improving their activity. Now, she is
                able to generate Rs.200/day. She is very happy as she is getting
                handsome money and supporting her family. Today, confident and
                self-sufficient Jyotsana is a role model for many young women of
                her community. Other farm women and SHG members have shown an
                interest in doing some small-scale work to support their
                Families.
              </Text>
              <Text marginTop={"10"} fontSize={"20"} italic>
                Anoka SHG belongs to<Text color="#7BC5E2"> Gaya</Text>,Bihar and
                was started in <Text color={"#7BC5E2"}>2012.</Text>
              </Text>

              <Button
                height={"10"}
                width={"40"}
                marginTop={"50"}
                marginBottom={"150"}
              >
                <Text color={"black"} fontSize={"20"} bold>
                  Donate SHG
                </Text>
              </Button>
            </VStack>
          </Box>
        </HStack>
      </Box>
      {/* End of page */}
    </Box>
  );
}
export default SHGDetails;
