// 1. Create a type for valid status values
type Status = "pending" | "processing" | "completed" | "failed";
 
// 2. Implement this function
function getStatusMessage(status: Status): string {
    switch (status) {
        case "pending":
            return "Your order is pending.";
        case "processing":
            return "Your order is being processed.";
        case "completed":
            return "Your order has been completed.";
        case "failed":
            return "Your order has failed.";
        default:
            const _exhaustiveCheck: never = status;
            return _exhaustiveCheck;
    }
}
 
// 3. Create a function that accepts either a string or number ID
function findById(id: string | number): string {
    if (typeof id === "number") {
        return `ID: ${id}`;
    } else {
        return `Reference: ${id}`;
    }
}
 
// 4. Create a type for API responses that can be success or error
type ApiResponse = 
    | { status: "success"; data: unknown } 
    | { status: "error"; message: string };
 
function handleResponse(response: ApiResponse): unknown {
    if (response.status === "success") {
        return response.data;
    } else {
        throw new Error(response.message);
    }
}

export { Status, getStatusMessage, findById, ApiResponse, handleResponse };
