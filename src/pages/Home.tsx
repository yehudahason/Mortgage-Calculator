import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import { useState } from "react";
const Home = () => {
  const [results, setResults] = useState<{
    monthly: number;
    total: number;
    interest: number;
  } | null>(null);

  return (
    <div className="card">
      <LeftPanel setResults={setResults} />
      <RightPanel results={results} />
    </div>
  );
};

export default Home;
