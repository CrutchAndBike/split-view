import { connect } from 'react-redux';
import CanvasComponent from './CanvasComponent';
import { deleteFieldList } from '../../store/actions/splitView';

const mapStateToProps = ({ splitViewStore: { fieldList } }) => ({
    fieldList
});

const mapDispatchToProps = {
    deleteFieldList
};

export default connect(mapStateToProps, mapDispatchToProps)(CanvasComponent);
