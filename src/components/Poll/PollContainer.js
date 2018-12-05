import { connect } from 'react-redux';
import PollComponent from './PollComponent';
import { showResult } from '../../store/actions/splitView';

const mapDispatchToProps = {
	showResult
};

export default connect(null, mapDispatchToProps)(PollComponent);
