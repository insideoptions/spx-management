import PageSchema from "@/components/redesign/page-schema";
import { Founder } from "@/components/redesign/pages";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/about");
export default function Page() { return <><PageSchema path="/about" /><Founder /></>; }
