import React, { useEffect, useState } from "react";
import { Box, Text, HStack, VStack, Button, Center } from "native-base";
import { PieChart } from "react-minimal-pie-chart";
const axios = require("axios");

function Shg_sales() {
  const [sales, setSales] = useState(["null"]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/admin/orders").then((res) => {
      setSales(res.data.products);
      console.log(sales);
    });
  }, []);
  return (
    <HStack>
      <Box width={"30%"} height={"1000"} bgColor={"black"}>
        <Text
          bold
          textAlign={"center"}
          color={"white"}
          fontSize={"60"}
          underline
        >
          DashBoard
        </Text>
        <Box
          marginTop={"20"}
          width={"100%"}
          borderWidth={"2"}
          borderColor={"white"}
        >
          <Text textAlign={"center"} fontSize={"40"} color={"white"}>
            My Profile
          </Text>
        </Box>
        <Box width={"100%"} borderWidth={"2"} borderColor={"white"}>
          <Text textAlign={"center"} fontSize={"40"} color={"white"} italic>
            Sales
          </Text>
        </Box>
        <Box width={"100%"} borderWidth={"2"} borderColor={"white"}>
          <Text textAlign={"center"} fontSize={"40"} color={"white"}>
            Products
          </Text>
        </Box>
        <Box width={"100%"} borderWidth={"2"} borderColor={"white"}>
          <Text textAlign={"center"} fontSize={"40"} color={"white"}>
            Order
          </Text>
        </Box>
        <Text marginTop={"5"} color={"grey"} textAlign={"right"}>
          {" "}
          Deactive you account
        </Text>
      </Box>

      <VStack width={"70%"}>
        <Text bold textAlign={"center"} fontSize={"50"} underline>
          SHG Report
        </Text>
        <Text fontSize={"30"} marginTop={"20"} textAlign={"center"} bold italic>
          Total sale for different products
        </Text>
        <HStack marginRight={"10"}>
          <Box
            width={"250"}
            height={"250"}
            marginLeft={"20"}
            marginTop={"10"}
            borderWidth={"2"}
            marginRight={"10"}
            padding={"5"}
            borderRadius={"12"}
          >
            <PieChart
              data={[
                { title: "Pickles", value: 100, color: "#EFD510" },
                { title: "Bags", value: 105, color: "#F2910A" },
                { title: "Masks", value: 200, color: "#E94822" },
                { title: "Rice", value: 280, color: "#2C2D34" },
              ]}
            />
          </Box>
          <VStack>
            <Text
              fontSize={"20"}
              width={"60%"}
              marginLeft={"0"}
              marginTop={"40px"}
              color={""}
            >
              {" "}
              The total sale of products are shown through pie chart. In August,{" "}
              <Text bold italic>
                Anek SHGs
              </Text>{" "}
              can make total profit of{" "}
              <Text bold italic>
                ₹45,265
              </Text>
              .
            </Text>
            <Text fontSize={"20"} marginLeft={"0"} marginTop={"22"} bold>
              Details:
            </Text>
            <Text fontSize={"20"} marginLeft={"0"} marginTop={"11"} bold>
              Rice : 40%
            </Text>
            <Text fontSize={"20"} marginLeft={"0"} marginTop={"11"} bold>
              Mask : 30%
            </Text>
            <Text fontSize={"20"} marginLeft={"0"} marginTop={"11"} bold>
              Bags : 15%
            </Text>
            <Text fontSize={"20"} marginLeft={"0"} marginTop={"11"} bold>
              Pickle : 15%
            </Text>
          </VStack>
        </HStack>
        <Center marginTop={"32"}>
          <Button width={"72"} backgroundColor={"#EEB71C"}>
            <Text bold>Send Mobile Message to SHGs Members</Text>
          </Button>
        </Center>
      </VStack>
    </HStack>
  );
}

export default Shg_sales;
