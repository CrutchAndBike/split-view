import { connect } from 'react-redux';
import TokenComponent from './TokenComponent';
import { saveUser } from '../../store/actions/splitView';

const mapDispatchToProps = {
	saveUser
};

export default connect(null, mapDispatchToProps)(TokenComponent);
