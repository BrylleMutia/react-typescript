import React, { FC } from "react";

type GreetProps = {
   name: string;
   messageCount?: number;
   isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
   return (
      <div>
         {props.isLoggedIn ? (
            <h2>
               Welcome {props.name}!! You have {props.messageCount} messages!
            </h2>
         ) : (
            <h2>Welcome Guest!!</h2>
         )}
      </div>
   );
}

export default Greet;
