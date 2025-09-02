import React from "react";
import { Button } from "@/components";

interface EvaluationModel {
  id: string;
  name: string;
  icon: React.ReactNode;
  isSelected: boolean;
}

interface EvaluationModelSelectorProps {
  models: EvaluationModel[];
  selectedModel: string;
  onModelSelect: (modelId: string) => void;
}

export default function EvaluationModelSelector({
  models,
  selectedModel,
  onModelSelect,
}: EvaluationModelSelectorProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="p-1 sm:flex sm:gap-4 grid grid-cols-2 gap-2 max-w-xs sm:max-w-none mx-auto">
        {models.map((model, index) => (
          <Button
            key={model.id}
            onClick={() => onModelSelect(model.id)}
            variant={model.isSelected ? "primary" : "community"}
            icon={model.icon}
            className={`sm:w-[200px] max-w-[130px] text-md ${
              index === models.length - 1 && models.length % 2 !== 0
                ? "col-span-2 max-w-[140px] mx-auto"
                : ""
            }`}
          >
            <span className="font-medium">{model.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
