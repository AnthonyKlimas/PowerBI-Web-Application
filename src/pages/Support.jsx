import supportDashboard from "../assets/images/support_dashboard.png";

function Support()
{
    return (
        <>
        <div className="card">
            <div className="bigBox">
                <img className="supportdashImg" src={supportDashboard}/>
            </div>
        </div>
        </>
    );
}

export default Support;