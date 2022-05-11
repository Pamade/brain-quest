import React, { useEffect } from "react";

function Dashboard() {
  const n = window.localStorage.getItem("dashboard");
  const data = JSON.parse(n);

  useEffect(() => {
    console.log();
  }, []);
  return <div>{data.map((i) => i.gameName)}</div>;
}

export default Dashboard;
