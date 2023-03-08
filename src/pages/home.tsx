import React from "react";
import { useList } from "@pankod/refine-core";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent,
} from "components";

const home = () => {
  return (
    <Box>
      <Typography fontSize={26} fontWeight={700} color={"#11142D"}>
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for sale"
          value={550}
          series={[60, 45]}
          colors={["#475be8", "#e4e8ef"]}
        />
         <PieChart
          title="Total customers"
          value={599}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
         <PieChart
          title="Properties for rent"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
         <PieChart
          title="Properties for cities"
          value={330}
          series={[75, 25]}
          colors={["#475we8", "#e4p8ef"]}
        />
      </Box>
      <Stack mt="25px" width="100%" direction={{xs:"column",
    lg:"row"}} gap={4}>
        <TotalRevenue/>
        <PropertyReferrals/>
      </Stack>
    </Box>
  );
};

export default home;
