import { connect } from 'react-redux';
import MainComponent from './MainComponent';

const mapStateToProps = (state) => ({ splitViewStore: { userInfo } }) => ({
	userInfo
});

export default connect(mapStateToProps)(MainComponent);
