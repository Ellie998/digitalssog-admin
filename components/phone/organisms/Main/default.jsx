import { encodeUrl } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UrlContext } from "../../templates/display-box";

import styled from "@emotion/styled";
import { Power } from "lucide-react";

const Container = styled.div`
  background-color: #000000;
  width: 200px;
  height: 400px;
  padding: 30px 14px 25px 11px;
  background-image: url("/assets/images/cellphone.png");
  background-size: contain;
  border-radius: 34px;
  justify-self: center;
  overflow: hidden;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Default() {
  const router = useRouter();
  const { functionName, appNames } = useContext(UrlContext);

  return (
    <Container>
      <Power
        color="white"
        className="cursor-pointer "
        onClick={() => {
          router.push(
            `/description/${encodeUrl(functionName)}?appName=${encodeUrl(
              appNames[0]
            )}&methodOrder=1&guideOrder=1`,
            { scroll: false }
          );
        }}
      />
    </Container>
  );
}

export default Default;
