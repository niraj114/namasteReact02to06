
import { useRouteError } from "react-router-dom";

// we can use above hook to send router error messgae


const ErrorPage =  () =>{

    const err = useRouteError();

    console.log(err);

    return (
          <div>
            <h1>Opps !!!</h1>

            <h3>{err.status} : {err.statusText}</h3>
            
          </div>

    )
}


export default ErrorPage;