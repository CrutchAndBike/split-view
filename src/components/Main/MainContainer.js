import { connect } from 'react-redux';
import MainComponent from './MainComponent';

const mapStateToProps = () => ({ splitViewStore: { userInfo } }) => ({
	userInfo
});

export default connect(mapStateToProps)(MainComponent);
