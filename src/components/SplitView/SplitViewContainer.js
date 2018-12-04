import { connect } from 'react-redux';
import SplitViewComponent from './SplitViewComponent';

const mapStateToProps = () => ({ splitViewStore: { isFinished } }) => ({
	isFinished
});

export default connect(mapStateToProps)(SplitViewComponent);
