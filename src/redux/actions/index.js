// import axios from 'axios';
import db from '../../firebase.config';

export const fetchData = (request, success, failure) => async (dispatch) => {
  dispatch(request());
  // axios.get(`https://secure-journey-36191.herokuapp.com/api/v1/${endpoint}`)
  //   .then((res) => {
  //     dispatch(success(res.data));
  //   })
  //   .catch((error) => {
  //     dispatch(failure(error));
  //   });
  // const fetchProjects = async() => {
    const response = db.collection('projects')
    const data = await response.get();
    try {
      const projects = []
      data.docs.forEach(item => {
        // setProjects(projects => [...projects, item.data()])
        // console.log(item.data());
        projects.push(item.data())
      })
      dispatch(success(projects))
    } catch (error) {
      dispatch(failure('Projects could not be fetched'))
    }
    // setRetrieved(true)
  // }
}