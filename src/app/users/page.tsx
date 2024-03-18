import User from "@/components/User";
import Image from "next/image";

export default async function Home() {
  const users = await fetch("http://127.0.0.1:8000/api/v1/users").then((res) =>
    res.json()
  );

  console.log(users);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {users.map((user: any) => {
        return <User user={user}></User>;
      })}
    </main>
  );
}
