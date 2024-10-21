import { Form } from "./components/Form";

function App() {
  return (
    <>
      <main className="min-h-[100vh]  px-4 pt-10 flex flex-col gap-4 items-center bg-gray-800 text-gray-100">
        <img
          src="/fusion-logo.svg"
          alt="Logotipo do Projeto Frontend Fusion"
          className="mx-auto max-w-[300px] w-10 min-w-[130px]"
        />
        <Form />
      </main>
    </>
  );
}

export default App;
