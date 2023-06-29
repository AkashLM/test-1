import Head from "next/head";
import Header from "../../components/Header";
import ProfileInfo from "../../components/ProfileInfo";
import MyNfts from "../../components/MyNfts";

import { raleway } from "../../lib/utils";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";

export default function Home() {
  const { provider } = useContext(UserContext);

  useEffect(() => {
    console.log(provider);
  }, [provider]);
  return (
    <>
      <Head>
        <title>My Profile</title>
        <meta name="description" content="User Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/profile.png" />
      </Head>
      <main className={`${raleway.className} lg:px-4 `}>
        <Header />
        <div className="flex flex-col items-center ">
          <ProfileInfo
            img="/images/profile.png"
            name="Jessica"
            wallet="0x014EC6296B3493f0f59a3FE90E0FFf377fb8826a"
          />
          <section className="mt-4  ">
            <MyNfts />
          </section>
        </div>
      </main>
    </>
  );
}
