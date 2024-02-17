import { FC, InputHTMLAttributes } from "react";
import Loader from "../loader/Loader";
import styles from './Button.module.scss';

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
}

const Button: FC<IButton> = ({ isLoading, children }) => {
  return (
    <button className={styles.button}>{isLoading ? <Loader /> : children}</button>
  )
}

export default Button;
