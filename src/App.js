import "./App.css";
import { mockSurveyItems } from "./mockData";
import SurveyItem from "./SurveyItem";
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Choose a survey to earn virual currency
      </h1>
      <div className="grid max-w-screen-md justify-center items-center md:grid-cols-2 mr-auto ml-auto mt-6">
        {mockSurveyItems.map((item, index) => (
          <SurveyItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
