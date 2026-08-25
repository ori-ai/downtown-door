import { redirect } from "next/navigation";

// ONE storefront (2026-08-25) — the index just forwards to it.
export default function LocationsIndex() {
  redirect("/locations/west-village-803-greenwich-st");
}
