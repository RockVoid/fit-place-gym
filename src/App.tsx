import { useState } from "react";
import { Navbar } from "./scenes/navbar";
import { SelectedPage } from "./shared/types";

export default function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <h1 className="text-3xl font-bold underline">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </h1>
  )
}