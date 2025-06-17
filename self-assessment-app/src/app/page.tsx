// // import Link from "next/link";

// // import { LatestPost } from "~/app/_components/post";
// // import { auth } from "~/server/auth";
// // import { api, HydrateClient } from "~/trpc/server";

// // export default async function Home() {
// //   const hello = await api.post.hello({ text: "from tRPC" });
// //   const session = await auth();

// //   if (session?.user) {
// //     void api.post.getLatest.prefetch();
// //   }

// //   return (
// //     <HydrateClient>
// //       <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
// //         <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
// //           <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
// //             Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
// //           </h1>
// //           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
// //             <Link
// //               className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
// //               href="https://create.t3.gg/en/usage/first-steps"
// //               target="_blank"
// //             >
// //               <h3 className="text-2xl font-bold">First Steps →</h3>
// //               <div className="text-lg">
// //                 Just the basics - Everything you need to know to set up your
// //                 database and authentication.
// //               </div>
// //             </Link>
// //             <Link
// //               className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
// //               href="https://create.t3.gg/en/introduction"
// //               target="_blank"
// //             >
// //               <h3 className="text-2xl font-bold">Documentation →</h3>
// //               <div className="text-lg">
// //                 Learn more about Create T3 App, the libraries it uses, and how
// //                 to deploy it.
// //               </div>
// //             </Link>
// //           </div>
// //           <div className="flex flex-col items-center gap-2">
// //             <p className="text-2xl text-white">
// //               {hello ? hello.greeting : "Loading tRPC query..."}
// //             </p>

// //             <div className="flex flex-col items-center justify-center gap-4">
// //               <p className="text-center text-2xl text-white">
// //                 {session && <span>Logged in as {session.user?.name}</span>}
// //               </p>
// //               <Link
// //                 href={session ? "/api/auth/signout" : "/api/auth/signin"}
// //                 className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
// //               >
// //                 {session ? "Sign out" : "Sign in"}
// //               </Link>
// //             </div>
// //           </div>

// //           {session?.user && <LatestPost />}
// //         </div>
// //       </main>
// //     </HydrateClient>
// //   );
// // }

// import { part1Traits } from "@/lib/data/part1Traits";
// import { Slider } from "@/components/ui/slider";
// import { Label } from "@/components/ui/label";

// export default function AssessmentPage() {
//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-3xl font-semibold mb-6">Part 1: How I Think & Imagine</h1>

//       {part1Traits.map((trait) => (
//         <div key={trait.id} className="mb-8">
//           <Label htmlFor={trait.id} className="block mb-2 text-lg">
//             {trait.label}
//           </Label>
//           <Slider
//             id={trait.id}
//             defaultValue={[5]}
//             min={1}
//             max={10}
//             step={1}
//             className="w-full"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import type { FC } from "react";

import StepPart1 from "@/components/assessment/StepPart1";
import StepPart2 from "@/components/assessment/StepPart2";
import StepPart3 from "@/components/assessment/StepPart3";
import StepPart4 from "@/components/assessment/StepPart4";
import StepPart5 from "@/components/assessment/StepPart5";

const steps: FC[] = [StepPart1, StepPart2, StepPart3, StepPart4, StepPart5];

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const StepComponent = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Final submission logic here
      alert("Form submitted successfully!");
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Progress Bar */}
      <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>

      {/* Render Current Step */}
      {StepComponent && <StepComponent />}

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="bg-gray-200 text-black px-4 py-2 rounded disabled:opacity-50"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}