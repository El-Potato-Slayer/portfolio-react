const initialState = {
  loading: false,
  projects: [],
  error: '',
}

const projectsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_PROJECTS_REQUEST':
      return { ...state, projects: [...payload] };
    case 'FETCH_PROJECTS_SUCCESS':
      return { loading: false, projects: [...payload], error: ''}
    case 'FETCH_PROJECTS_FAILURE':
      return { loading: false, projects: [], error: payload}
    default:
      return state;
  }
}

export default projectsReducer;