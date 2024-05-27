import AmpForm from "./AmpForm";
import { type FormPresetComboBoxProps } from "./FormPresetComboBox";
import { db } from "~/server/db";

const AmpFormShell = async () => {
  const dbPresets = await db.query.ampPresets.findMany();

  const presetOptions = dbPresets.map((preset) => ({
    label: preset.name,
    value: preset.sortAs,
  }));

  const options: FormPresetComboBoxProps["options"] = [
    { label: "Clear", value: "_clear" },
    ...presetOptions,
  ];

  return (
    <div>
      <AmpForm options={options} presets={dbPresets} />
    </div>
  );
};

export default AmpFormShell;
