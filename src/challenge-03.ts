// challenge-03.ts

// 1. Create a type for valid status values
type Status =  "pending" | "processing" | "completed" | "failed"

// 2. Implement this function
function getStatusMessage(status: Status) :string{
    if(status === "pending"){
        return "Order is pending";
    }
    else if(status === "processing"){
        return "Order is processing";
    }
    else if(status === "completed"){
        return "Order is completed"
    }
    else{
        return "Order has failed";
    }
}

// 3. Create a function that accepts either a string or number ID
function findById(id:number|string): string{
    if(typeof id==="number"){
        return `ID: ${id}`;
    }
    else{
        return `Reference: ${id}`
    }
}

// 4. Create a type for API responses that can be success or error
type ApiResponse = 
    | { ok: true; data: any } 
    | { ok: false; error: string };

function handleResponse(response: ApiResponse): any {
    if (response.ok) {
        return response.data;
    } else {
        throw new Error(response.error);
    }
}
