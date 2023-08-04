import React, { useState } from "react";

type AuthUser = {
   name: string;
   email: string;
};

const LoggedIn = () => {
   const [user, setUser] = useState<AuthUser | null>(null);

   const handleLogin = () => {
      const userDetails = {
         name: "Brylle",
         email: "bryllemutia3@gmail.com",
      };

      setUser(userDetails);
   };
   const handleLogout = () => {
      setUser(null);
   };

   return (
      <div>
         <button onClick={handleLogin}>Login</button>
         <button onClick={handleLogout}>Logout</button>
         <div>User name is {user?.name}</div>
         <div>User email is {user?.email}</div>
      </div>
   );
};

export default LoggedIn;
