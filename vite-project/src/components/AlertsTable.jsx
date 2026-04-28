function AlertsTable() {
  return (
    <div className="tableContainer">
      <h2>Recent Fraud Alerts</h2>

      <table className="alertsTable">
        <thead>
          <tr>
            <th>Alert ID</th>
            <th>Phone</th>
            <th>Type</th>
            <th>Confidence</th>
            <th>Severity</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AL001</td>
            <td>+263771234567</td>
            <td>Smishing</td>
            <td>92%</td>
            <td><span className="high">High</span></td>
            <td>Open</td>
          </tr>

          <tr>
            <td>AL002</td>
            <td>+263772345678</td>
            <td>Wangiri</td>
            <td>87%</td>
            <td><span className="medium">Medium</span></td>
            <td>Investigating</td>
          </tr>

          <tr>
            <td>AL003</td>
            <td>+263773456789</td>
            <td>SIM Box</td>
            <td>96%</td>
            <td><span className="critical">Critical</span></td>
            <td>Open</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AlertsTable;