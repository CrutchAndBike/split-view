import { connect } from 'react-redux';
import Constructor from './Constructor';

const mapStateToProps = () => ({ splitViewStore: { fieldList } }) => ({
    fieldList
});

export default connect(mapStateToProps)(Constructor);
