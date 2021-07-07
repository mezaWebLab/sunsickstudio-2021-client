import Container from "components/UI/Container/Container";

export default function DiscographyList(props) {
    return (
        <div className="discography-list">
            <Container>
                <h2>Discography</h2>
                <button 
                    onClick={() => props.onClose()}
                    className="close-btn">
                    <i className="las la-times"></i>
                </button>
                <table>
                    <thead>
                        <tr>
                            <th>Artist</th>
                            <th>Track(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The table body</td>
                            <td>with two columns</td>
                        </tr>
                        <tr>
                            <td>The table body</td>
                            <td>with two columns</td>
                        </tr>
                        <tr>
                            <td>The table body</td>
                            <td>with two columns</td>
                        </tr>
                        <tr>
                            <td>The table body</td>
                            <td>with two columns</td>
                        </tr>
                        <tr>
                            <td>The table body</td>
                            <td>with two columns</td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </div>
    );
}