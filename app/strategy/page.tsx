import PageSchema from "@/components/redesign/page-schema";
import { Strategy } from "@/components/redesign/pages";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/strategy");
export default function Page() { return <><PageSchema path="/strategy" /><Strategy /></>; }
