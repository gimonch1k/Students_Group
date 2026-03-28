import { Routes, Route } from "react-router";

import Layout from "./components/Layout";

import AboutPage from "./pages/AboutPage/AboutPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import HomePage from "./pages/HomePage/HomePage";
import ItemDetailsPage from "./pages/ItemDetailsPage/ItemDetailsPage";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="items" element={<ItemsPage />} />
        <Route path="items/:id" element={<ItemDetailsPage />} />
        <Route path="add" element={<AddItemPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
