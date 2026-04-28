function StatCard({ title, value }) {
  return (
    <div className="card">
      <div className="cardTitle">{title}</div>
      <div className="cardValue">{value}</div>
    </div>
  );
}

export default StatCard;