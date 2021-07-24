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
                        {props.discography.map((release, i) => {
                            return (
                                <tr key={i}>
                                    <td>{release.name}</td>
                                    <td>{release.tracks}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Container>
        </div>
    );
}