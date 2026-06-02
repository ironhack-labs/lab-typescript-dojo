// challenge-03.ts

// 1. Create a type for valid status values
type Status = "pending" | "processing" | "completed" | "failed"

// 2. Implement this function
function getStatusMessage(status:Status):string {
    return `Status is ${status}`
}

// 3. Create a function that accepts either a string or number ID
function findById(id:number|string):string {
    if(typeof(id) === `string`){
        return `Reference: ${id}`
    }
    return `ID: ${id}`
}

// 4. Create a type for API responses that can be success or error
type ApiResponse = "Success" | "Error"

function handleResponse(response:ApiResponse):string {
    if(response === "Error"){
        return response;
    }
    return response;
}
