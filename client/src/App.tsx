import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/home/home";
import Navbar from "./Navbar/navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="grid-container">
        <BrowserRouter>
          <Navbar />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home user='Sofi' />} />
              <Route path="/transactions" element={<div>Transactions</div>} />
              <Route path="/goals" element={<div>Goals</div>} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
