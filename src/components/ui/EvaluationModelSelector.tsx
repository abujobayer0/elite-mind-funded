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
      <div className="p-1 flex gap-4">
        {models.map((model) => (
          <Button
            key={model.id}
            onClick={() => onModelSelect(model.id)}
            variant={model.isSelected ? "primary" : "community"}
            icon={model.icon}
          >
            <span className="font-medium">{model.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
