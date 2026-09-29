import PageSchema from "@/components/redesign/page-schema";
import { Media } from "@/components/redesign/pages";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/media");
export default function Page() { return <><PageSchema path="/media" /><Media /></>; }
