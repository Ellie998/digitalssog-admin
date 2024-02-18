"use client";
import { Button } from "@/components/ui/button";
import { Guide } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const GuideComponentButton = ({
  guide,
  guide_component_id,
}: {
  guide: Guide | null;
  guide_component_id: string | null;
}) => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  async function onClickHandler() {
    try {
      setIsClicked(true);
      const response = await fetch(`/api/guide-components`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guideId: guide?.id,
          code: "",
        }),
      });
      if (!response.ok) {
        throw Error("FAIL : GUIDE COMPONENT CREATE");
      }
      const data = await response.json();
      router.push(`/admin/guide-components/${data.id}`);
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setIsClicked(false);
    }
  }
  return (
    <>
      {guide_component_id === null ? (
        <Button
          variant={"default"}
          onClick={() => onClickHandler()}
          disabled={isClicked}>
          Go To Make Guide Component
        </Button>
      ) : (
        <Button variant={"secondary"}>
          <Link href={`/admin/guide-components/${guide_component_id}`}>
            Go To Edit Guide Component
          </Link>
        </Button>
      )}
    </>
  );
};

export default GuideComponentButton;
