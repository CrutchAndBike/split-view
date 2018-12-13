import { connect } from 'react-redux';
import Constructor from './Constructor';

const mapStateToProps = () => ({ splitViewStore: { questions } }) => ({
    questions
});

export default connect(mapStateToProps)(Constructor);
