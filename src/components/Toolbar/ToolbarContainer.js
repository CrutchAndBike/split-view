import { connect } from 'react-redux';
import ToolbarComponent from './ToolbarComponent';
import { addFieldList } from '../../store/actions/splitView';

const mapDispatchToProps = {
    addFieldList
};

export default connect(null, mapDispatchToProps)(ToolbarComponent);
