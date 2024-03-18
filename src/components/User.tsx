"use client";

import React, { useEffect } from "react";

export default function User({ user }: { user: any }) {
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div>
      <span>{user.name}</span>
      <span>{user.age}</span>
    </div>
  );
}
