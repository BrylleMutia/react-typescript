import React from "react";

type ListProps<T> = {
   items: T[];
   onClick: (value: T) => void;
};

// const List = <T extends { id: number | string | number }>({ items, onClick }: ListProps<T>) => {
// with generics you can set types as parameters
const List = <T extends string | number>({ items, onClick }: ListProps<T>) => {
   return (
      <div>
         <h2>List of items</h2>
         {items.map((item, index) => (
            <div key={index} onClick={() => onClick(item)}>
               {item}
            </div>
         ))}
      </div>
   );
};

export default List;
