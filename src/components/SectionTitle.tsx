/**
 *  Project: store-ts
 *  File: SectionTitle.tsx
 *  Created: 8:58 SA, 07/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { Separator } from "@/components/ui/separator.tsx";

function SectionTitle({ text }: { text: string }) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold capitalize tracking-wide sm:text-2xl md:text-3xl lg:text-4xl">
        {text}
      </h2>
      <Separator />
    </div>
  );
}

export default SectionTitle;
