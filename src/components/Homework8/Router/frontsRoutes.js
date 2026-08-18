export default {
  pages: {
    home: '/',
    teachers: {
      root: 'teachers',
      add: 'teachers/new',
      edit: 'teachers/:id/edit',
      detail: 'teachers/:id',
    },
    meeting: 'meeting',
    aboutApp: 'about-app',
    aboutDev: 'about-dev',
  },
  navigate: {
    home: '/Homework8',
    teachers: {
      root: '/Homework8/teachers',
      add: '/Homework8/teachers/new',
      edit: (id) => `/Homework8/teachers/${id}/edit`,
      detail: (id) => `/Homework8/teachers/${id}`,
    },
    meeting: '/Homework8/meeting',
    about: '/Homework8/about-app',
    aboutDev: '/Homework8/about-dev',
  },
};
