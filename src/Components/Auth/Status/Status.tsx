type props={
    // status:string;
     status:"loading" | "Success" |"error"
}

function Status({status}:props) {
    let message;
    if(status==="loading"){
        message="loading...";
    }else if(status==="Success"){
        message="data fetched successfully";
    }else if(status==="error"){
        message="error fetching data";
    }
  return (
    <h1>status {message}</h1>
  )
}

export default Status