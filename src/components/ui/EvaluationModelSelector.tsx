import React from "react";

interface EvaluationModel {
  id: string;
  name: string;
  icon: string;
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
      <div className="bg-[#1a1a1a] rounded-lg p-1 flex">
        {models.map((model) => (
          <button
            key={model.id}
            onClick={() => onModelSelect(model.id)}
            className={`px-6 py-3 rounded-md transition-all duration-300 flex items-center space-x-2 ${
              model.isSelected
                ? "bg-[#2a2a2a] text-[#f6a91b]"
                : "text-white hover:text-gray-300"
            }`}
          >
            <span className="text-lg">{model.icon}</span>
            <span className="font-medium">{model.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
