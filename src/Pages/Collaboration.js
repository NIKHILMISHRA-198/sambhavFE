// import React from "react";
// import { Box } from "native-base";
// import useSearch from "react-hook-search";
// import { LiquidSwipe } from "../Components/liquidSwipe";

// const items = [
//   { id: 1, name: "John Doe", address: "4251 Carolyns Circle" },
//   { id: 2, name: "Jane Doe", address: "10 Downing Street" },
//   { id: 3, name: "Mike", address: "Somewhere, I tell ya!" },
// ];

// const attributes = ["name", "address"];

// function Collaboration() {
//   const [filteredItems, search, setSearch] = useSearch(
//     items,
//     (searchValue, item) => item.name.includes(searchValue)
//   );
//   return (
//     <Box>
//       Collab
//       <input value={search} onChange={setSearch} />
//       <div>
//         {filteredItems.map((item) => (
//           <div key={item.id}>
//             {item.name} - {item.address}
//           </div>
//         ))}
//       </div>
//     </Box>
//   );
// }

// export default Collaboration;
