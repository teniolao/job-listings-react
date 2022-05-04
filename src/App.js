import "./App.css";
import jobsData from "./data.json";
import Header from "./components/Header";
import Card from "./components/Card";


function App() {
  return (
    <>
      <Header />
      <section className="card--list">
        {jobsData.map((job) => (
          <Card job={job} key={job.id} />
        ))}
      </section>
    </>
  );
}

export default App;
