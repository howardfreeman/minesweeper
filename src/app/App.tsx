import { Field } from "@/shared/ui/field";
import { Header } from "@/widgets/header";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main className="p-5 flex justify-center items-center">
        <Field width={3} height={3} />
      </main>
    </>
  );
}

export default App;
