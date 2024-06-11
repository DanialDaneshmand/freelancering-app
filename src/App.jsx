import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import HompePage from "./pages/HompePage";
import NotIFound from "./pages/NotIFound";
import AppLayout from "./ui/AppLayout";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="flex justify-center">
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/complete-profile" element={<CompleteProfile />} />
            <Route path="/owner" element={<AppLayout />}>
              <Route index element={<Navigate to="dashboard" replace/>}/>
              <Route path="dashboard" element={<OwnerDashboard/>}/>
              <Route path="projects" element={<Projects/>}/>
              <Route path="projects/:id" element={<Project/>}/>
            </Route>
            <Route path="/" element={<HompePage />} />
            <Route path="*" element={<NotIFound />} />
          </Routes>
        
      </div>
    </QueryClientProvider>
  );
}

export default App;
