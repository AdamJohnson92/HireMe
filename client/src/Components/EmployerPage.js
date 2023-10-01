import "../App.css";
import Card from "./CandidateCard";

export default function EmployerPage() {

    const formStyle = {
        width: '300px',
        margin: '0 auto',
        textAlign: 'center',
    };

    const labelStyle = {
        textAlign: 'left',
        display: 'block',
        marginBottom: '0',
    };

    return (
        <>
            <form className="search-bar" style={formStyle}>
                <label className='form-label' htmlFor='email' style={labelStyle}>Search:</label>
                <input placeholder="youremail@test.com" className='form-box' type='text' name='search' />
                <button type="submit">🔍</button>
            </form>

            <div className="columns">
                <h2 style={{ color: '#5271FF', marginTop: '90px', textAlign: 'center' }}>Employer Page </h2>
                <Card></Card>
            </div>
        </>


    )
}