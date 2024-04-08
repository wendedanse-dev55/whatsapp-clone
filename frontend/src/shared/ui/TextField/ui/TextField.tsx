import React, { useState } from "react";
import styles from "./TextField.module.scss";
import clsx from "clsx";
import Image from "next/image";

import searchIcon from "@/shared/assets/input-search/search.png";
import arrowIcon from "@/shared/assets/input-search/left-arrow.png";
import closeIcon from "@/shared/assets/input-search/close.png";
import { Loader } from "@/shared/ui/Loader";
type variantsTextField = "standard" | "material";
interface IProps {
  placeholder?: string;
  withSearch?: boolean;
  value?: string;
  onChange?: (arg: string) => void;
  variant?: variantsTextField;
  fullWidth?: boolean;
}

export const TextField = (props: IProps) => {
  const {
    variant = "standard",
    value = "",
    withSearch,
    placeholder,
    onChange,
    fullWidth,
  } = props;
  const [onFocus, setOnFocus] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  return (
    <div
      className={clsx(styles.Input, {
        [styles.withSearch]: withSearch,
        [styles.onFocus]: onFocus,
        [styles.fullWidth]: fullWidth,
      })}
    >
      <div className={clsx(styles.InputWrapper)}>
        {withSearch && (
          <>
            <div
              className={clsx(
                styles.InputStartIcon,
                styles[onFocus ? "arrow" : "search"],
              )}
            >
              <Image
                src={onFocus ? arrowIcon : searchIcon}
                width={18}
                height={18}
                alt={onFocus ? "Arrow" : "Search"}
              />
            </div>
            {localValue && (
              <div className={clsx(styles.clear)}>
                {/*<Loader size="extra-small" />*/}
                <div onClick={() => setLocalValue("")}>
                  <svg
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    preserveAspectRatio="xMidYMid meet"
                    className=""
                    version="1.1"
                    x="0px"
                    y="0px"
                    enableBackground="new 0 0 24 24"
                  >
                    <title>x-alt</title>
                    <path
                      fill="currentColor"
                      d="M17.25,7.8L16.2,6.75l-4.2,4.2l-4.2-4.2L6.75,7.8l4.2,4.2l-4.2,4.2l1.05,1.05l4.2-4.2l4.2,4.2l1.05-1.05 l-4.2-4.2L17.25,7.8z"
                    ></path>
                  </svg>
                </div>
              </div>
            )}
          </>
        )}
        <input
          placeholder={placeholder}
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
        />
      </div>
    </div>
  );
};
