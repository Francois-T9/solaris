function Ahorros() {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-80 sm:w-160">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Costo del kWh (CFE)</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>Consumo básico (75 kWh)</th>
            <td>1.107 $/KWh</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>Consumo intermedio (140 kWh)</th>
            <td>1.345 $/KWh</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>Consumo excedente (+140 kWh)</th>
            <td>3.932 $/KWh</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Ahorros;
