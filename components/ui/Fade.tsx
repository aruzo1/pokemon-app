import { Fragment, ReactNode } from "react";
import { Transition } from "@headlessui/react";

const Fade = (props: { children: ReactNode; show?: boolean }) => (
  <Transition
    as={Fragment}
    enter="transition"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="transition"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
    show={props.show}
    appear={true}
  >
    {props.children}
  </Transition>
);

export default Fade;
