import React, { useEffect } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user/test")
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, []);
  return <div>Home</div>;
}
