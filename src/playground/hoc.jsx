

const WithAdminWarning = (WrapperComponent) => {
    return (props) => (
         <div>
           { props.isAdmin &&  <h1>This is sentive content</h1>}
            <WrapperComponent {...props} />
        </div>
    );
};

export const requireAuthentication = (WrapperComponent) => {
    return (props) => {
        return <div>
            {props.isAuthenticated ? <WrapperComponent {...props} /> : <p>Please login to view the info</p>}
            {/* <WrapperComponent /> */}
        </div>
    }
}

export default WithAdminWarning;