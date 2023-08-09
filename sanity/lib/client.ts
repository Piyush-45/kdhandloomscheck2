import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skm7AhruJI6xPpwsRrq4pOCT06dioDuWbQf3g4wkJUC0kKuXvYp60eoE6X2RMnx3LKXcxUZRoQf4ubqSsKfstj9amB15PqbvtkiJsOb48LbmTG62K5WQ6MtPymRvNV27MORlXhkGrVZdnNHScHELoxBuBarOtmLoqSCcuGI78L3KdoTfsLaN"
})


