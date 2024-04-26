"use client";
import React, { useState } from "react";
import { Card } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Loader } from "../loader";
import { onGenerateText } from "@/app/_actions/ai";

export const AiDescription = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [aiText, setAiText] = useState<string | null>(null);

  const aiGeneration = async () => {
    setLoading(true);
    const response = await onGenerateText();
    if (response) {
      setAiText(response.content);
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Card className="flex flex-col items-end gap-5 p-5 w-[500px]">
        <Button className="w-4/12" onClick={aiGeneration}>
          <Loader loading={loading}>Generate With AI</Loader>
        </Button>
        <Textarea
          rows={10}
          placeholder="Generate Text Here..."
          defaultValue={aiText as string}
        />
      </Card>
    </div>
  );
};
