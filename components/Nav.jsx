import SignupButton from "./UI/SignupButton";
import ProfileImg from "./ProfileImg";
import Link from "next/link";
import ProfileTabs from "./ProfileTabs";
import NftBadge from "./UI/icons/NftBadge";

import { UserContext } from "../context/userContext";
import { useContext } from "react";

export default function Nav() {
  const user = useContext(UserContext);
  return (
    <nav className={`flex items-center gap-4  `}>
      <SignupButton />
      {/* ========== Profile Links ============= */}
      {user.isLoggedIn && (
        <div className="flex items-center gap-4">
          <div className="hidden lg:inline">
            <ProfileTabs />
          </div>
          <Link href="/profile?tab=nfts">
            <ProfileImg img="/images/profile.png" width={71} height={71} />
          </Link>
        </div>
      )}
    </nav>
  );
}
