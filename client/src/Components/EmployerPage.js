import "../App.css";
import Card from "./CandidateCard";

export default function EmployerPage() {

    const formStyle = {
        width: '500px',
        margin: '0 auto',
        textAlign: 'center',
    };

    const labelStyle = {
        textAlign: 'left',
        display: 'block',
        marginBottom: '0',
        color: '#5271FF', 
        fontSize: '18px',
    };

    const inputStyle = {
        width: '100%', 
        borderRadius: '5px', 
        padding: '10px', 
    };

    const buttonStyle = {
        backgroundColor: '#fff', 
        borderRadius: '5px', 
        border: 'none',
        padding: '10px 10px', 
        fontSize: '22px', 
        cursor: 'pointer', 
    };
    

    return (
        <>
            <div className="columns">
                <h1 style={{ color: '#5271FF', marginTop: '285px', textAlign: 'center', marginBottom: '50px' }}>Employer Page </h1>
            </div>
            <div style={{ marginLeft: '80px' }}>
        <h1> Hello, {}!</h1>
            </div>

            <form className="search-bar" style={formStyle}>
                <label className='form-label' htmlFor='email' style={labelStyle}>Search:</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        placeholder="Search candidate name or skill"
                        className='form-box'
                        type='text'
                        name='search'
                        style={inputStyle} 
                    />
<button type="submit" style={buttonStyle}>🔍</button>
                </div>
            </form>
        </>
    )
}
