import { useBills } from "@/hooks/useBills";
import { Link } from "react-router-dom";
function EnergyRequest() {
  const {
    data: bills,
    isLoading,
    isError,
    deleteBill,
    isDeleting,
  } = useBills();
  if (isLoading) {
    return <span className="loading loading-spinner loading-xs"></span>;
  }
  if (isError) {
    return <div>Error al cargar las facturas</div>;
  }
  const allBills = bills;
  if (allBills && allBills.length > 0) {
    return (
      <div className=" mx-auto w-full flex items-center flex-col gap-4">
        <div className="rounded-box border border-base-content/5 bg-base-100">
          <div className="block sm:hidden space-y-4 p-4">
            {allBills?.map((bill) => (
              <div
                key={bill.id}
                className="border border-base-content/10 rounded-box p-4 "
              >
                <p>
                  <span className="font-bold">Referencia:</span> {bill.id}
                </p>
                <p>
                  <span className="font-bold">Email:</span>
                  <a
                    href={`mailto:${bill.userEmail} `}
                    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  >
                    {bill.userEmail}
                  </a>
                </p>
                <p>
                  <span className="font-bold">Creado:</span>{" "}
                  {new Date(bill.createdAt).toLocaleString("en-GB", {
                    timeZone: "America/Cancun",
                  })}
                </p>
                <p className="flex gap-2 w-40 max-w-40">
                  <span className="font-bold">Archivo:</span>{" "}
                  <Link to={bill.billUrl} target="_blank">
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
                      <path d="M13 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9l-7-7z" />
                      <path d="M13 3v6h6" />
                    </svg>
                  </Link>
                </p>
                <button
                  className="btn btn-square"
                  onClick={() => deleteBill(bill.id)}
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
                  <th>Archivo</th>
                  <th>Borrar</th>
                </tr>
              </thead>
              <tbody>
                {allBills?.map((bill) => (
                  <tr key={bill.id}>
                    <td className="w-10">{bill.id}</td>
                    <td className="w-10 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                      <a href={`mailto:${bill.userEmail}`}>{bill.userEmail}</a>
                    </td>
                    <td className="w-10">
                      {new Date(bill.createdAt).toLocaleString("en-GB", {
                        timeZone: "America/Cancun",
                      })}
                    </td>
                    <td className="w-40 max-w-40">
                      <Link to={bill.billUrl} target="_blank">
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
                          <path d="M13 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9l-7-7z" />
                          <path d="M13 3v6h6" />
                        </svg>
                      </Link>
                    </td>
                    <td>
                      {isDeleting ? (
                        <span className="loading loading-spinner loading-xs"></span>
                      ) : (
                        <button
                          className="btn btn-square"
                          onClick={() => deleteBill(bill.id)}
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
                      )}
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
    return <div>No se han encontrado facturas</div>;
  }
}

export default EnergyRequest;
