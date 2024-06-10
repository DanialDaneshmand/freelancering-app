import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import  { Toaster } from 'react-hot-toast';
import CompleteProfile from "./pages/CompleteProfile";
import HompePage from "./pages/HompePage";
import NotIFound from "./pages/NotIFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster/>
      <div className="flex justify-center">
        <div className="container  xl:max-w-screen-xl ">
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/complete-profile" element={<CompleteProfile />} />
            <Route path="/" element={<HompePage />} />
            <Route path="*" element={<NotIFound />} />

          </Routes>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
