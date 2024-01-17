import classes from "./Spinner.module.css";
export default function Spinner({ className }) {
  return <div className={`${classes["paytm-loader"]} ${className}`}></div>;
}
