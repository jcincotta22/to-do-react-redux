import { connect } from 'react-redux';
import { getAllTasks, postNewTask, hitServer } from '../../redux/reducer';
import Home from '../components/Home';

const mapState = ({tasks}) => ({tasks});
const mapDispatch = {getAllTasks, postNewTask, hitServer};
export default connect(mapState, mapDispatch)(Home);
