import { connect } from 'react-redux';
import PageComponent from './PageComponent';

const mapStateToProps = (state) => ({ splitViewStore: { userInfo } }) => ({
    userInfo
});

export default connect(mapStateToProps)(PageComponent);
