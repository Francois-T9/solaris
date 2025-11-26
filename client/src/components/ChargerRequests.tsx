import { useUserStore } from "../store/user.store";
function ChargerRequest() {
  const { allChargerRequests, deleteChargerRequest } = useUserStore();
  console.log(allChargerRequests);
  if (allChargerRequests!.length > 0) {
    return (
      <div className=" mx-auto w-full flex items-center flex-col gap-4">
        <div className="rounded-box border border-base-content/5 bg-base-100">
          <div className="block sm:hidden space-y-4 p-4">
            {allChargerRequests?.map((request) => (
              <div
                key={request.id}
                className="border border-base-content/10 rounded-box p-4 "
              >
                <p>
                  <span className="font-bold">Referencia:</span> {request.id}
                </p>
                <p>
                  <span className="font-bold">Email:</span>{" "}
                  <a
                    href={`mailto:${request.userEmail} `}
                    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  >
                    {request.userEmail}
                  </a>
                </p>
                <p>
                  <span className="font-bold">Creado:</span>{" "}
                  {new Date(request.createdAt).toLocaleString("en-GB", {
                    timeZone: "America/Cancun",
                  })}
                </p>
                <p>
                  <span className="font-bold">Marca de auto</span>{" "}
                  {request.manufacturerName}
                </p>
                <button
                  className="btn btn-square"
                  onClick={() => deleteChargerRequest(request.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="hidden sm:block overflow-x-auto">
            <table className="table p-4">
              <thead>
                <tr>
                  <th>Referencia</th>
                  <th>Email</th>
                  <th>Creado</th>
                  <th>Marca de auto</th>
                  <th>Borrar</th>
                </tr>
              </thead>
              <tbody>
                {allChargerRequests?.map((request) => (
                  <tr key={request.id}>
                    <td className="w-10">{request.id}</td>
                    <td className="w-10 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                      <a href={`mailto:${request.userEmail}`}>
                        {request.userEmail}
                      </a>
                    </td>
                    <td className="w-10">
                      {new Date(request.createdAt).toLocaleString("en-GB", {
                        timeZone: "America/Cancun",
                      })}
                    </td>
                    <td className="w-10">{request.manufacturerName}</td>
                    <td>
                      <button
                        className="btn btn-square"
                        onClick={() => deleteChargerRequest(request.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>No se han encontrado solicitudes</div>;
  }
}

export default ChargerRequest;
