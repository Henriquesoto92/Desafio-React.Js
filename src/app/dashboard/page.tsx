export default function DashboardPage() {
  return (
    <div className="flex flex-col w-full h-full gap-4 p-8 min-h-screen bg-slate-100">
      <h1 className="text-4xl font-bold col-span-4">Controle geral</h1>
      <div className="w-full h-full">
        <div className="grid grid-cols-4 grid-rows-3 gap-8 h-full overflow-auto">
          <div className="bg-blue-900" />
          <div className="bg-blue-900" />
          <div className="bg-blue-900" />
          <div className="flex flex-col items-center justify-center gap-2 bg-white p-4">
            <div className="text-lg">Total de Inscritos</div>
            <div className=" w-full text-4xl font-bold text-center">1255</div>
          </div>
          <div className="col-span-3 bg-white flex justify-center items-center px-4">
            central
          </div>
          <div className="bg-white row-span-2 flex items-center justify-center">
            central
          </div>
          <div className="col-span-3 bg-white flex justify-center items-center px-4">
            central
          </div>
        </div>
      </div>
    </div>
  );
}
