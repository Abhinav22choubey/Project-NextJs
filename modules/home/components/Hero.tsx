"use client";

import { motion } from "framer-motion";
import ClaimLinkForm from "./ClaimLinkForm";
import { onBoardUser } from "@/modules/auth/action";
import { getCurrentUsername } from "../../profile/actions";
import { useRouter } from "next/navigation";
type User = Awaited<ReturnType<typeof onBoardUser>>;
type Profile = Awaited<ReturnType<typeof getCurrentUsername>>;
type LandingClientProps = {
  user: User | null;
  profile: Profile | null;
};

export default async function LandingPage({
  user,
  profile,
}: LandingClientProps) {
  const router=useRouter();
  return (
    <div className="min-h-screen mt-15  text-black dark:text-white overflow-hidden">
      {/* HERO SECTION */}
      <main className="flex flex-col items-center justify-center text-center px-6 md:px-12 mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
        >
          Everything you are.
          <br />
          <span className="text-[#41B313]">In one simple link.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mt-6"
        >
          Join 70M+ people using TreeBio for their link in bio. One link to help
          you share everything you create, curate and sell from your social
          media profiles.
        </motion.p>
        {/* CTA BUTTON */}
        {user?.success && profile?.username && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-0"
            >
              <button onClick={()=>{
                router.push("/admin");
              }} className="bg-[#41B313] text-black px-6 py-3 rounded-sm m-8 text-lg font-semibold hover:scale-105 transition">
                Dashboard
              </button>
            </motion.div>
            {/* Claim link section */}
            <section className="pb-16 md:pb-24 ">
              <div className="max-w-md mx-auto">
                <ClaimLinkForm />
              </div>
            </section>
          </>
        )}

        {/* MOCK CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-16 w-full max-w-md"
        >
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-zinc-800">
            <div className="w-20 h-20 bg-[#41B313] rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold">@yourname</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Creator • Developer
            </p>

            <div className="space-y-3">
              {["Portfolio", "YouTube", "Instagram"].map((item, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="w-full bg-gray-100 dark:bg-black border border-gray-300 dark:border-zinc-700 py-2 rounded-lg"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      {/* FEATURES SECTION */}
      <section className="mt-32 px-6 md:px-12 grid md:grid-cols-3 gap-8">
        {[
          { title: "One Link", desc: "Share everything with a single URL." },
          { title: "Customizable", desc: "Design your page your way." },
          { title: "Analytics", desc: "Track clicks and performance easily." },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-200 dark:border-zinc-800 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="mt-32 py-10 text-center text-gray-500 text-sm">
        © 2026 TreeBio. All rights reserved.
      </footer>
    </div>
  );
}
