import { redirect } from "next/navigation";

// Home route now redirects to /v6 (the user's favourite base version).
// /v6 is the canonical "parent" design; V7/V8/V9 are awkward-design
// variations on the same DNA. Keeping the redirect (instead of mounting
// V6 directly at "/") preserves the /v6 URL that is already indexed
// and linked from the GlobalVersionSwitcher.
export default function Home() {
  redirect("/v6");
}
