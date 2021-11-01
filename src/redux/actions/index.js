import db from '../../firebase.config.js';

export const fetchData = (request, success, failure) => async (dispatch) => {
  dispatch(request());
    const response = db.collection('projects')
    const data = await response.get();
    try {
      const projects = []
      data.docs.forEach(item => {
        projects.push(item.data())
      })
      dispatch(success(projects))
    } catch (error) {
      dispatch(failure('Projects could not be fetched'))
    }
}