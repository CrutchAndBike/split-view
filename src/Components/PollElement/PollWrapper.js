import { connect } from 'react-redux';
import PollElement from './index';
import { showResult } from '../../store/actions/splitView';

console.log('showResult ', showResult);

const mapDispatchToProps = {
    showResult
};

export default connect(null, mapDispatchToProps)(PollElement);
