import { Route, Routes } from 'react-router';
import MainLayout from '../MainLayout/MainLayout';
import HomePage from '../views/teachers/HomePage/HomePage';
import frontsRoutes from './frontsRoutes';
import TeachersList from '../views/teachers/TeachersList/TeachersList';
import TeacherEdit from '../views/teachers/TeachersEdit/TeachersEdit';
import TeachersDetail from '../views/teachers/TeachersDetail';
import Meeting from '../views/Meeting/Meeting';
import InfoLayout from '../infoLayout/InfoLayout';
import AboutApp from '../views/AboutApp/AboutApp';
import AboutDev from '../views/AboutDev/AboutDev';
import AddNewTeacher from '../views/teachers/AddNewTeacher/AddNewTeacher';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={frontsRoutes.pages.home} element={<HomePage />} />
        <Route
          path={frontsRoutes.pages.teachers.root}
          element={<TeachersList />}
        />
        <Route
          path={frontsRoutes.pages.teachers.add}
          element={<AddNewTeacher />}
        />
        <Route
          path={frontsRoutes.pages.teachers.edit}
          element={<TeacherEdit />}
        />
        <Route path={frontsRoutes.pages.meeting} element={<Meeting />} />
      </Route>
      <Route element={<InfoLayout />}>
        <Route path={frontsRoutes.pages.aboutApp} element={<AboutApp />} />
        <Route path={frontsRoutes.pages.aboutDev} element={<AboutDev />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
