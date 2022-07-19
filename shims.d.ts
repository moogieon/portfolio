import { AttributifyNames } from "windicss/types/jsx";

type Prefix = "w-"; // change it to your prefix

declare module "react" {
  interface HTMLAttributes
    extends Partial<Record<AttributifyNames<Prefix>, string>> {}
}
