import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "./components/Form";

function App() {
  return (
    <>
      <main className="min-h-[100vh]  px-4 pt-10 flex flex-col gap-4 items-center bg-gray-800 text-gray-100">
        <Form />
        <footer>
          <p>Todos os direitos reservados | Projeto Frontend Fusion, 2024</p>
        </footer>
        <ToastContainer
          progressClassName="toastProgress"
          bodyClassName="toastBody"
          position="bottom-center"
          autoClose={3000}
        />
      </main>
    </>
  );
}

export default App;
