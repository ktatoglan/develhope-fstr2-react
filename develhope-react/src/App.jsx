import "./App.css";
import GithubUser from "./GithubUser";
import { SWRConfig } from "swr";

const defaultFetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const SWRConfiguration = ({ children }) => {
  return <SWRConfig value={{ fetcher: defaultFetcher }}>{children}</SWRConfig>;
};

function App() {
  return (
    <>
      <SWRConfiguration>
        <GithubUser username="ktatoglan" />
      </SWRConfiguration>
    </>
  );
}

export default App;
