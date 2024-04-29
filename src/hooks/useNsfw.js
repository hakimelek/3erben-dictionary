// create  a hook that set allowNsfw state on context switch, and store in local storage

import { useEffect, useState } from "react";

const useNsfw = () => {
  const [mounted, setMounted] = useState(false);
  const [allowNsfwState, setAllowNsfwState] = useState(false);

  useEffect(() => {
    setMounted(true);
    setAllowNsfwState(localStorage.getItem("allowNsfw"));
  }, []);

  const setAllowNsfw = (value) => {
    localStorage.setItem("allowNsfw", value);
    setAllowNsfwState(value);
  };

  return { allowNsfw: allowNsfwState, setAllowNsfw };
};

export default useNsfw;
