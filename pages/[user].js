import React from "react";
import { useRouter } from "next/router";
import Porofile from "../components/porofile/porofile";
function User() {
  const router = useRouter();
  return <Porofile id={router.query.user} />;
}

export default User;
