import React from "react";
import { useRouter } from "next/router";
function User() {
  const router = useRouter();
  return (
    <div style={{ position: "absolute", top: "5rem" }}>{router.query.user}</div>
  );
}

export default User;
