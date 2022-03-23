import { Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

const ScaleFade = (props: { children: ReactNode; show?: boolean }) => {
  return (
    <Transition
      as={Fragment}
      show={props.show}
      appear={true}
      enter="transition"
      enterFrom="opacity-0 scale-90"
      enterTo="opacity-100 scale-100"
      leave="transition"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-90"
    >
      {props.children}
    </Transition>
  );
};

export default ScaleFade;
