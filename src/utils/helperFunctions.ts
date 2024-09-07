/**
 *  Project: store-ts
 *  File: helperFunctions.ts
 *  Created: 3:09 CH, 07/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

export const formatPrice = (price: number | string): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(price) / 100);
