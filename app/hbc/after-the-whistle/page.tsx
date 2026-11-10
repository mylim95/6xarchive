import type { Metadata } from "next";
import AfterTheWhistle from "./AfterTheWhistle";

export const metadata: Metadata = {
  title: "After the Whistle — HBC | 6XARCHIVE",
  description:
    "Rivals on the field. Human after. Approach the HBC world, opening soon.",
};

export default function AfterTheWhistlePage() {
  return <AfterTheWhistle />;
}
