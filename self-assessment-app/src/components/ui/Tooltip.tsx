// "use client";

// import { useState } from "react";
// import type { ReactNode } from "react";

// export default function Tooltip({ children, text }: { children: ReactNode; text: string }) {
//   const [visible, setVisible] = useState(false);

//   return (
//     <div
//       className="relative inline-block"
//       onMouseEnter={() => setVisible(true)}
//       onMouseLeave={() => setVisible(false)}
//     >
//       {children}
//       {visible && (
//         <div className="absolute z-50 p-2 text-xs text-white bg-gray-700 rounded shadow-md w-60 top-full left-1/2 -translate-x-1/2 mt-1">
//           {text}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import type { ReactNode } from "react";
import { useState } from "react";

type Props = {
  text: string;
  children: ReactNode;
};

const Tooltip = ({ text, children }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow-lg z-10 w-[220px]">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;