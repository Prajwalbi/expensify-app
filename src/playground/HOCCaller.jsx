import WithAdminWarning from "./hoc.jsx";
import { requireAuthentication } from "./hoc.jsx";

const HOCCaller = (props) => {
    return <div>
        <h1>APP</h1>
        <p>The content is { props.msg } </p>
    </div>
}

const AdminInfo =  WithAdminWarning( HOCCaller);
const AuthInfo =  requireAuthentication( HOCCaller);
export default AuthInfo;