import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import PrivateRoutes from "../utils/PrivateRoute";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { PersonalPage } from "./PersonalPage";
import { ProjectParticipiantPage } from "./ProjectParticipiantPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<PrivateRoutes />}>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dane-uczestnika" element={<PersonalPage />} />
          <Route
            path="/dane-uczestnika-w-projekcie"
            element={<ProjectParticipiantPage />}
          />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={null} />
    </Route>
  )
);
