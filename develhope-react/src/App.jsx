import AlertClock from "./AlertClock";
import "./App.css";

function App() {
  const showCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current time is: ${currentTime}`);
  };

  return (
    <>
      <AlertClock onShowTime={showCurrentTime} />
    </>
  );
}

export default App;
