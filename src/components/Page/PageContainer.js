import { connect } from 'react-redux';
import PageComponent from './PageComponent';

const mapStateToProps = () => ({ splitViewStore: { userInfo } }) => ({
	userInfo
});

export default connect(mapStateToProps)(PageComponent);
