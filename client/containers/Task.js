import { connect } from 'react-redux';
import { putChangeStatus, deleteTask } from '../../redux/reducer';
import Task from '../components/Task';

const mapDispatch = {putChangeStatus, deleteTask};
export default connect(null, mapDispatch)(Task);
