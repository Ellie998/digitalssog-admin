import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <img src={"/assets/images/logo.png"} alt="logo" width={96} height={30} />
    </Link>
  );
};

export default Logo;
