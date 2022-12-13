import React from "react";

function home(){
    return (
        <div align = 'center'>
            <h1>Cloud Computing Project</h1>
            <h2>
                Our project is a remake of the website of https://dumbbell-exercises.com/best-dumbbell-exercises/<br />
                To do this we used 3 AWS services which includes IAM, Amplify, and Dynamodb.<br />
                Amplify is used for both front and backend hosting.<br />
                Dynamodb allows us to create a database and store our exercises.<br />
                We used IAM to create a service role for Amplify backend deployment. <br />
                This allowed our frontend and backend to be able to connect with eachother and host properly. <br />
                IAM

            </h2>
        </div>
    )
}  

  export default home;