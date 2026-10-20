import { Hero, About, Services, Process, Experience } from "@/components/sections";
import Work from "@/components/work";
import Playground from "@/components/playground";
import Contact from "@/components/contact";
import { site } from "@/lib/data";

export default function Home() {
  return (<><Hero /><About /><Work /><Services /><Playground /><Process /><Experience /><Contact email={site.email} linkedin={site.linkedin} /></>);
}
