// App.jsx
import Items from "./pages/Items";
import Header from "./components/Header";
import CreateItem from "./pages/CreateItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Items status="todo&status=done" />} />
          <Route path="/todo" element={<Items status="todo" />} />
          <Route path="/done" element={<Items status="done" />} />
          <Route path="/create_item" element={<CreateItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
