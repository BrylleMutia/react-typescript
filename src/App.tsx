import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import User from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import List from "./components/generics/List";
import CustomButton from "./components/html/CustomButton";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/stringLiterals/Toast";

function App() {
   const personName = {
      first: "Tony",
      last: "Stark",
   };

   const nameList = [
      {
         first: "Tony",
         last: "Stark",
      },
      {
         first: "Bruce",
         last: "Wayne",
      },
      {
         first: "Scarlet",
         last: "Witch",
      },
   ];

   return (
      <div className="App">
         <Greet name="Brylle" messageCount={15} isLoggedIn={true} />
         <Person name={personName} />
         <PersonList names={nameList} />
         <Status status="success" />
         <Heading>Hello World</Heading>
         <Oscar>
            <Heading>Oscar goes to Katniss Everdeen</Heading>
         </Oscar>
         <Button
            handleClick={(event, id) =>
               console.log("Button Clicked!", event, id)
            }
         />
         <Container styles={{ marginLeft: "1px", border: "1px solid red" }} />

         <ThemeContextProvider>
            <Box />
         </ThemeContextProvider>

         <UserContextProvider>
            <User />
         </UserContextProvider>

         <Private isLoggedIn={true} component={Profile} />

         {/* generics */}
         <List items={["Banana 🍌", "Apple 🍎", "Bread 🍞"]} onClick={(item) => console.log(item)}/>

         {/* restrict props */}
         <RandomNumber value={9} isPositive={true} />

         {/* template literal types */}
         <Toast position="center" />

         {/* custom html elements / wrap html */}
         <CustomButton variant="primary" onClick={() => console.log("Clicked")}>Primary Button</CustomButton>
      </div>
   );
}

export default App;
