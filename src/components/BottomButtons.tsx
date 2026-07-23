// interface Props {
//     showBack?: boolean;
//     next: () => void;
//     back?: () => void;
//     last?: boolean;
//   }
  
//   export default function BottomButtons({
//     showBack,
//     next,
//     back,
//     last,
//   }: Props) {
//     return (
//       <div className="absolute bottom-20 flex gap-5">
  
//         {showBack && (
//           <button
//             onClick={back}
//             className="px-6 py-3 rounded-full bg-orange-200 shadow"
//           >
//             ← Back
//           </button>
//         )}
  
//         <button
//           onClick={next}
//           className="px-6 py-3 rounded-full bg-orange-200 shadow"
//         >
//           {last ? "Let's Start" : "Next →"}
//         </button>
  
//       </div>
//     );
//   }