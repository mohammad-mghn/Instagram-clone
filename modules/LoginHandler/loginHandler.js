import { useEffect } from "react";
import { useRouter } from "next/router";
function LoginHandler(props) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (JSON.parse(localStorage.getItem("user")) === null) {
        router.push("/login");
      }
    }
  }, []);

  return props.children;
}

export default LoginHandler;
