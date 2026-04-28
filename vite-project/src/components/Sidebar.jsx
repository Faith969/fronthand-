function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">TeleShield</h2>

      <div className="menu">
        <p className="active">Dashboard</p>
        <p>Alerts Centre</p>
        <p>Investigation</p>
        <p>Beh. Profiles</p>
        <p>Data Ingestion</p>
        <p>Model Perf.</p>
        <p>Reports</p>
        <p>Audit Log</p>
        <p>Settings</p>
      </div>
    </div>
  );
}

export default Sidebar;