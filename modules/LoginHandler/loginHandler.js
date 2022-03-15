import React, { useEffect } from "react";
import { useRouter } from "next/router";
function LoginHandler(props) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("user") === null) {
        router.push("/login");
      }
    }
  }, []);

  return props.children;
}

export default LoginHandler;
