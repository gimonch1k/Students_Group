import { useState } from "react";
import { Routes, Route } from "react-router";

import Layout from "./components/Layout";

import studentsData from "./components/students-list/students-list";

import AboutPage from "./pages/AboutPage/AboutPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import HomePage from "./pages/HomePage/HomePage";
import ItemDetailsPage from "./pages/ItemDetailsPage/ItemDetailsPage";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ClassItemsPage from "./pages/ClassItemsPage/ClassItemsPage";

function App() {
  const [students, setStudents] = useState(studentsData);

  const addStudent = (newStudent) => {
    setStudents((item) => [...item, newStudent]);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="items" element={<ItemsPage data={students} />} />
        <Route
          path="class/items"
          element={<ClassItemsPage data={students} />}
        />
        <Route path="items/:id" element={<ItemDetailsPage data={students} />} />
        <Route path="add" element={<AddItemPage addStudent={addStudent} />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
