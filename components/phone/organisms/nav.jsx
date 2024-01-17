// import styles from "./Nav.module.css";
import { useContext } from "react";

import Icon from "@/components/phone/atoms/icon";
import Flex from "@/components/phone/atoms/flex";
import { UrlContext } from "@/components/phone/templates/display-box";
import { useRouter } from "next/navigation";
import { encodeUrl } from "@/lib/utils";

function Nav() {
  const router = useRouter();
  const { functionName, appName, methodOrder, guideOrder } =
    useContext(UrlContext);

  function goToBack() {
    guideOrder !== "0" &&
      router.push(
        `/description/${encodeUrl(functionName)}?appName=${encodeUrl(
          appName
        )}&methodOrder=${methodOrder}&guideOrder=${String(
          Number(guideOrder) - 1
        )}`,
        { scroll: false }
      );
  }
  function goToHome() {
    router.push(
      `/description/${encodeUrl(functionName)}?appName=${encodeUrl(
        appName
      )}&methodOrder=${methodOrder}&guideOrder=1`
    );
  }
  return (
    <Flex
      style={{
        width: "170px",
        zIndex: "1",
        fontSize: "0.7rem",
        gridRow: "5/6",
        padding: "0 10px",
      }}
      items={[
        <Icon key="list" name="list" />,
        <Icon key="home" onClick={goToHome} name="square" />,
        <Icon key="back" onClick={goToBack} name="chevron-double-left" />,
      ]}
    />
  );
}

export default Nav;
