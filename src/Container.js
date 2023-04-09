// hold component to apply reusable styling for components
const Container = ({ children }) => {
    <div style={StyleSheet.container}>
        { children }
    </div>
};

const styles = {
    container: {
        margin: '0 auto',
        padding: '50px 100px'
    }
};

export default Container;
// all in <Container></Container> renders w/styles set in this file
// adjust styles here for whole app