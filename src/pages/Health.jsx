import customerhealthImg from "../assets/images/customer_health_dashboard.png"

function Health()
{
    return (
        <>
        <h1 className= "healthHeader">Customer Health Dashboard</h1>

        <img className="healthdashImg" src={customerhealthImg}/>

        </>
    );
}

export default Health;