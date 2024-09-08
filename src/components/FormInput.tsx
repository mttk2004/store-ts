/**
 *  Project: store-ts
 *  File: FormInput.tsx
 *  Created: 11:58 SA, 08/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";

function FormInput({
  name,
  label,
  type = "text",
  defaultValue = "",
}: FormInputProps) {
  return (
    <div className="mb-2 space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} defaultValue={defaultValue} />
    </div>
  );
}

type FormInputProps = {
  name: string;
  label: string;
  type?: string;
  defaultValue?: string;
};

export default FormInput;
