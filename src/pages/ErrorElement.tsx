/**
 *  Project: store-ts
 *  File: ErrorElement.tsx
 *  Created: 9:29 SA, 07/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */
import { Button } from "@/components/ui/button.tsx";
import { Link, useRouteError } from "react-router-dom";

function ErrorElement() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="relative min-h-screen text-center">
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
    </div>
  );
}

export default ErrorElement;
