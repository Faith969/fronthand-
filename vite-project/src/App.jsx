import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import AlertsTable from "./components/AlertsTable";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="mainContent">
        <h1>Fraud Detection Overview</h1>
        <p>Monday 21 Apr 2026 · All data sources active</p>

        <div className="cards">
          <StatCard title="Critical Alerts" value="31" />
          <StatCard title="Transactions/hr" value="284K" />
          <StatCard title="Model Accuracy" value="97.4%" />
          <StatCard title="Flagged Accounts" value="148" />
        </div>

        <AlertsTable />
      </div>
    </div>
  );
}

export default App;