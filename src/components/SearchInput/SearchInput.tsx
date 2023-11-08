import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { CSSProperties } from "react";
import { ClearButton } from "../ClearButton/ClearButton";
import styles from "./SearchInput.module.css";

export const SearchInput = ({
  clearLabel,
  placeholder,
  style,
  value,
  onChange,
}: {
  clearLabel: string;
  placeholder: string;
  style?: CSSProperties;
  value: string;
  onChange: (value: string) => void;
}) => (
  <div className={styles.wrapper} style={style}>
    <input
      placeholder={placeholder}
      className={styles.input}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <div className={styles.searchIconWrapper}>
      <MagnifyingGlassIcon width={16} height={16} />
    </div>
    {value.length > 0 && (
      <div className={styles.clearButtonWrapper}>
        <ClearButton label={clearLabel} onClick={() => onChange("")} />
      </div>
    )}
  </div>
);
