
import './Leftsidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Leftsidebar() {
    const handleEnvelopeClick = () => {
        console.log("Envelope clicked!");
    };

    const handlePhoneClick = () => {
        alert("Calling feature coming soon!");
    };

    const handleCameraClick = () => {
        console.log("Open camera or media options");
    };

    const handleUsersClick = () => {
        console.log("Show user groups or contacts");
    };

    const handleSettingsClick = () => {
        alert("Opening settings...");
    };

    const handleProfileClick = () => {
        console.log("Open profile settings or modal");
    };

    return (
        <div className="left-sidebar">
            <div onClick={handleEnvelopeClick}><i className="fa-solid fa-envelope"></i></div>
            <div onClick={handlePhoneClick}><i className="fa-solid fa-phone"></i></div>
            <div onClick={handleCameraClick}><i className="fa-solid fa-camera"></i></div>
            <div onClick={handleUsersClick}><i className="fa-solid fa-users-rectangle"></i></div>

            <div className="bottom-icon">
                <div onClick={handleSettingsClick}><i className="fa-solid fa-gear"></i></div>
                <div className="image-container" onClick={handleProfileClick}>
                    <img src="/profile.jpg" alt="profile" />
                </div>
            </div>
        </div>
    );
}

export default Leftsidebar;
