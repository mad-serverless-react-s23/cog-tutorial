// everyone sees this
import Container from './Container';

const Public = () => (
        <Container>
            <h1>Public Here</h1>
        </Container>
    );
// this is supposed to work, right? I can always restore
export default Public