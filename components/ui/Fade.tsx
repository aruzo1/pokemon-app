import { Fragment, ReactNode } from "react";
import { Transition } from "@headlessui/react";

const Fade = (props: { children: ReactNode; show?: boolean }) => (
  <Transition
    as={Fragment}
    enter="transition-opacity"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    show={props.show}
    appear={true}
  >
    {props.children}
  </Transition>
);

export default Fade;
