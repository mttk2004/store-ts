/**
 *  Project: store-ts
 *  File: customFetch.ts
 *  Created: 9:40 SA, 07/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import axios from "axios";

const BASE_URL = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: BASE_URL,
});
