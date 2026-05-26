import executiveDashboard from "../assets/images/executive_dashboard.png";

function Dashboard()
{
    return(
        <>
        <h1 className= "execHeader">Executive Dashboard</h1>

        <img className="executivedashImg" src={executiveDashboard}/>

        </>
    );
}

export default Dashboard;