// hold component to apply reusable styling for components
// ({ children }) = destructuring
export const Container = ({ children }) => (
    <div style={styles.container}>
        { children }
    </div>
);
// {StyleSheet.container}, { children } = jsx expressions

// object literal
const styles = {
    container: {
        margin: '0 auto',
        padding: '50px 100px'
    }
};

// all in <Container></Container> renders w/styles set in this file
// adjust styles here for whole app