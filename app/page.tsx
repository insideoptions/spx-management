import PageSchema from "@/components/redesign/page-schema";
import { Home } from "@/components/redesign/pages";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/");
export default function Page() { return <><PageSchema path="/" /><Home /></>; }
