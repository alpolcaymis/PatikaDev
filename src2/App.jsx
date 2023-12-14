import ABC from "./components/ABC";
// import HTMLElements from "./reactInterviewKit/HtmlElements";
import ReactList from "./reactInterviewKit/ReactList";
import SimpleCounter from "./reactInterviewKit/SimpleCounter";
import TicTacToe from "./reactInterviewKit/TicTacToe";
import ToggleButton from "./reactInterviewKit/ToggleButton";
import Toggle from "./solutions/button-toggle";
import App2ContextApi from "./solutions/context-api";
import DataList from "./solutions/list";
import Phone_Book from "./solutions/phone-book";
import PhoneBook from "./solutions/phone-book";
import Counter from "./solutions/simple-counter";
import WeatherApp from "./weather/src/WeatherApp";

function App() {
  return (
    <div>
      <h1>React Essentials</h1>
      <main>
        <ABC>
          <h2>----reactInterviewKit folder components----</h2>
          <h3>PhoneBook</h3>
          <PhoneBook />
          <h3>ReactList</h3>
          <ReactList />
          <h3>SimpleCounter</h3>
          <SimpleCounter />
          <h3>TicTacToe</h3>
          <TicTacToe />
          <h3>ToggleButton</h3>
          <ToggleButton />
          <h2>----Solutions Folder Components----</h2>
          <Toggle />
          <h3>Context API</h3>
          <App2ContextApi />
          <h3>DataList</h3>
          <DataList />
          <h3>Phone_Book</h3>
          <Phone_Book />
          <h3>Counter</h3>
          <Counter />

          <h3>Whether Dashboard</h3>
          <WeatherApp />
        </ABC>
      </main>
    </div>
  );
}

export default App;
