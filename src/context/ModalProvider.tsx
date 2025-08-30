// import { createContext, useContext, useState, type ReactNode } from "react";

// type ModalState = {
//   component: ReactNode | null;
//   resolve?: (result: any) => void;
// };

// const ModalContext = createContext({
//   open: (_: ReactNode) => Promise.resolve(null),
//   close: (_: any) => {},
// });

// export const ModalProvider = ({ children }: { children: ReactNode }) => {
//   const [state, setState] = useState<ModalState>({ component: null });

//   const open = (component: ReactNode) => {
//     return new Promise((resolve) => {
//       setState({ component, resolve });
//     });
//   };

//   const close = (result?: any) => {
//     state.resolve?.(result);
//     setState({ component: null });
//   };

//   return (
//     <ModalContext.Provider value={{ open, close }}>
//       {children}
//       {state.component}
//     </ModalContext.Provider>
//   );
// };

// export const useModal = () => useContext(ModalContext);
