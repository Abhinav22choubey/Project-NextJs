import React from "react";
import { onBoardUser } from "@/modules/auth/action";
import LandingPage from "@/modules/home/components/Hero";

import { getCurrentUsername } from "@/modules/profile/actions";
import { auth } from "@clerk/nextjs/server";

const HomePage = async () => {
  // it can be optimised later as for now it unneccessary calls db
  const { userId } = await auth();

  let user = null;
  let profile = null;

  if (userId) {
    user = await onBoardUser();
    profile = await getCurrentUsername();
  }
  await onBoardUser();
  return (
    <div>
      <LandingPage user={user} profile={profile} />
    </div>
  );
};

export default HomePage;
