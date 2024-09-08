/**
 *  Project: store-ts
 *  File: Filters.tsx
 *  Created: 6:09 CH, 07/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { Form, Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
// import { ProductsResponseWithParams } from "@/utils";
import { FormInput } from "@/components/index.ts";

function Filters() {
  // const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  // const { search, company, category, price, shipping, order } = params;

  return (
    <Form className="grid items-center gap-x-4 gap-y-2 rounded-md border px-4 py-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <FormInput name="search" label="Search Products" type="text" />
      <Button type="submit" size="sm" className="mb-2 self-end">
        search
      </Button>
      <Button
        asChild
        type="button"
        size="sm"
        variant="outline"
        className="mb-2 self-end"
      >
        <Link to="/products">reset</Link>
      </Button>
    </Form>
  );
}

export default Filters;
