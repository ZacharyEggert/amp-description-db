"use client";

import { useState } from "react";
import FormHeader from "~/app/_components/AmpForm/FormHeader";
import { FormPresetComboBox } from "~/app/_components/AmpForm/FormPresetComboBox";
import { type db } from "~/server/db";

interface AmpFormProps {
  options: { value: string; label: string }[];
  presets: Awaited<ReturnType<typeof db.query.ampPresets.findMany>>;
}

const AmpForm: React.FC<AmpFormProps> = ({ options, presets }) => {
  const [selectedPreset, setSelectedPreset] = useState<string>("");

  const applyPreset = () => {
    const preset = presets.find((p) => p.sortAs === selectedPreset);
    console.log(selectedPreset);
    if (!preset) {
      return;
    }
    // TODO apply preset in the form
    console.log(preset);
  };

  return (
    <div>
      <FormHeader>Amp Description Generator</FormHeader>
      <FormPresetComboBox
        options={options}
        selectedPreset={selectedPreset}
        setSelectedPreset={setSelectedPreset}
        applyPreset={applyPreset}
      />
    </div>
  );
};

export default AmpForm;
