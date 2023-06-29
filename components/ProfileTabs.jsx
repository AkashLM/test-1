import { useRouter } from "next/router";
import ProfileTab from "./UI/ProfileTab";

export default function ProfileTabs() {
  const router = useRouter();
  console.log(router.pathname);

  const isActive = (tab) => {
    return router.query.tab === tab;
  };

  function handleTabClick(tab) {
    router.push(`/profile?tab=${tab}`);
  }
  return (
    <main className="flex gap-4 items-center">
      <ProfileTab
        title="My NFTs"
        isActive={isActive("nfts") ? true : false}
        onTabClick={() => handleTabClick("nfts")}
      />
      <ProfileTab
        title="Activity"
        isActive={isActive("activity") ? true : false}
        onTabClick={() => handleTabClick("activity")}
      />
    </main>
  );
}
