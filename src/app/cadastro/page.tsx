import Form from "./form";

export default function RegisterPage() {
  return (
    <div className="w-fit">
      <div className="flex flex-col border-sky-800 border-2 rounded-md bg-white">
        <div className="text-white text-lg text-center font-bold w-full bg-sky-800 p-2 rounded-sm">
          Cadastro de Ingressantes
        </div>
        <div className="w-full p-4 rounded-sm">
          <Form />
        </div>
      </div>
    </div>
  );
}
