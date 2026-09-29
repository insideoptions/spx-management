import PageSchema from "@/components/redesign/page-schema";
import Legal from "@/components/redesign/legal";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/legal");
export default function Page() { return <><PageSchema path="/legal" /><Legal /></>; }
