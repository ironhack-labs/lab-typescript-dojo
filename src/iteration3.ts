type Status = "pending" | "processing" | "completed" | "failed";

// 2. Implement this function
function getStatusMessage(status:Status):string {
    switch (status) {
        case "pending":
            return "Waiting...";
        case "processing":
            return "In progress...";
        case "completed":
            return "Done successfully!";
        case "failed":
            return "Something went wrong!";
        default:
            return "Unknown status";
    }
}
 
// 3. Create a function that accepts either a string or number ID
function findById(id: string | number){
    if(typeof(id) === "string"){
        return `Reference: ${id}`;
    }else if(typeof(id) === "number"){
        return `ID: ${id}`;
    }
}
 
// 4. Create a type for API responses that can be success or error
type ApiResponse =
    | { status: "success"; data: string }
    | { status: "error"; message: string };
 
function handleResponse(response: ApiResponse) {
    if (response.status === "success") {
        return response.data;
    }

    throw new Error(response.message);
}