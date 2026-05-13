import { useState, useCallback } from "react";
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

/**
 * @typedef {Object} Student
 * @property {number} id
 * @property {string} name
 * @property {number} age
 * @property {string} group
 * @property {string} photo
 */

function App() {
  /** @type {[Student[], Function]} */
  const [students, setStudents] = useState(studentsData);

  /** @param {Student} newStudent */
  const addStudent = useCallback((newStudent) => {
    setStudents((item) => [...item, newStudent]);
  }, []);

  /** @param {number} id */
  const deleteStudent = useCallback((id) => {
    setStudents((students) => students.filter((item) => item.id !== id));
  }, []);

  /** @param {Student} updatedStudent */
  const editStudent = useCallback((updatedStudent) => {
    setStudents((students) =>
      students.map((item) =>
        item.id === updatedStudent.id ? updatedStudent : item,
      ),
    );
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="items" element={<ItemsPage data={students} />} />
        <Route
          path="class/items"
          element={<ClassItemsPage data={students} />}
        />
        <Route
          path="items/:id"
          element={
            <ItemDetailsPage
              data={students}
              deleteStudent={deleteStudent}
              editStudent={editStudent}
            />
          }
        />
        <Route path="add" element={<AddItemPage addStudent={addStudent} />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
