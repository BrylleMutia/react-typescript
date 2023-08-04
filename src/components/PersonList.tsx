import React from "react";

type Person = {
   first: string;
   last: string;
};

type PersonListProps = {
   names: Person[];
};

function PersonList(props: PersonListProps) {
   return (
      <div>
         {props.names.map((name, index) => (
            <div key={index}>
               <h2>{name.first}</h2>
               <h2>{name.last}</h2>
            </div>
         ))}
      </div>
   );
}

export default PersonList;
