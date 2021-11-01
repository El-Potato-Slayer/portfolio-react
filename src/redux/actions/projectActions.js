export const fetchProjectsRequest= () => ({
  type: 'FETCH_PROJECTS_REQUEST.'
});

export const fetchProjectsSuccess= (projects) => ({
  type: 'FETCH_PROJECTS_SUCCESS',
  payload: projects,
});

export const fetchProjectsFailure= (error) => ({
  type: 'FETCH_PROJECTS_REQUEST',
  payload: error,
});
