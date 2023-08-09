import { type SchemaTypeDefinition } from "sanity"
import {product} from "@/sanity/schemas/product"
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
