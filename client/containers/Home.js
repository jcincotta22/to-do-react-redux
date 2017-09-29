import { connect } from 'react-redux';
import { getAllTasks, postNewTask } from '../../redux/reducer';
import Home from '../components/Home';

console.log(tasks)

const mapState = ({tasks}) => ({tasks});
const mapDispatch = {getAllTasks, postNewTask};
export default connect(mapState, mapDispatch)(Home);
