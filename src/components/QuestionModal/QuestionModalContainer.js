import { connect } from 'react-redux';
import QuestionModalComponent from './QuestionModalComponent';
import { saveQuestion } from '../../store/actions/splitView';

const mapDispatchToProps = {
    saveQuestion
};

export default connect(null, mapDispatchToProps)(QuestionModalComponent);
