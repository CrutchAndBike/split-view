import { connect } from 'react-redux';
import PollContainer from './index';

const mapStateToProps = (state) => {
   return { hello: 'hello' };
};

export default connect(mapStateToProps)(PollContainer);
