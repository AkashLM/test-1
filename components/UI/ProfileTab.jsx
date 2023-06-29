import Link from "next/link";
import NftBadge from "./icons/NftBadge";
import Clock from "./icons/Clock";

import { useState, useEffect } from "react";

export default function ProfileTab({ title, isActive, onTabClick }) {
  //   const [tabActive, setTabActive] = useState(false);
  const color = isActive ? "white" : "#D0B47E";
  return (
    <div
      className={`flex gap-2 items-center py-2.5 px-4 ${
        isActive
          ? "border border-golden rounded-3xl bg-golden bg-opacity-10 shadow-tab  "
          : ""
      }`}
      onClick={onTabClick}
    >
      {title == "Activity" ? (
        <Clock size={"16"} color={color} />
      ) : (
        <NftBadge size={"16"} color={color} />
      )}
      <p className={`${isActive ? "text-white" : "text-golden"}`}>{title}</p>
    </div>
  );
}
