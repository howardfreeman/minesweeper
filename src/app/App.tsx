import { Field } from "@/shared/ui/field";
import { Header } from "@/widgets/header";

import "./index.css";
import { ToolBar } from "@/features/tool-bar";

function App() {
  return (
    <>
      <Header />
      <main className="p-5">
        <ToolBar />
        <div className="flex justify-center items-center">
          <Field width={3} height={3} />
        </div>
      </main>
    </>
  );
}

export default App;
