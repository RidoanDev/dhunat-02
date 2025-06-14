
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notifications from "./pages/Notifications";
import Doctor from "./pages/categories/Doctor";
import Hospital from "./pages/categories/Hospital";
import Blood from "./pages/categories/Blood";
import Diagnostic from "./pages/categories/Diagnostic";
import VehicleRent from "./pages/categories/VehicleRent";
import PoliceStation from "./pages/categories/PoliceStation";
import Lawyer from "./pages/categories/Lawyer";
import Jobs from "./pages/categories/Jobs";
import Teacher from "./pages/categories/Teacher";
import TodaysMarket from "./pages/categories/TodaysMarket";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/blood" element={<Blood />} />
          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/vehicle-rent" element={<VehicleRent />} />
          <Route path="/police-station" element={<PoliceStation />} />
          <Route path="/lawyer" element={<Lawyer />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/todays-market" element={<TodaysMarket />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
