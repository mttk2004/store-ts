/**
 *  Project: store-ts
 *  File: Error.tsx
 *  Created: 12:17 CH, 06/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { Link, useRouteError } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";

function Error() {
  const error: unknown = useRouteError();
  console.log(error);

  return (
    <main className="relative min-h-screen text-center">
      <div className="absolute left-1/2 top-1/4 inline-block -translate-x-1/2 -translate-y-1/4 transform space-y-4">
        <h1 className="text-3xl font-bold uppercase tracking-widest">
          error🥲
        </h1>
        {error &&
        typeof error === "object" &&
        "status" in error &&
        "statusText" in error ? (
          <p className="font-medium">{`${error.status} - ${error.statusText}.`}</p>
        ) : (
          <p className="font-medium">An unknown error occurred.</p>
        )}
        <Button asChild size="lg">
          <Link to="/">Go back home</Link>
        </Button>
      </div>
    </main>
  );
}

export default Error;
