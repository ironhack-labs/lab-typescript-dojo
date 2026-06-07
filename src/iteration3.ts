//
// Iteration 3 | Classes
//

// 1. Create a type for valid status values
type Status = "pending" | "processing" | "completed" | "failed";

// 2. Implement this function
function getStatusMessage(status: Status): string {
    switch (status) {
        case "pending": return "Your order is pending.";
        case "processing": return "Your order is being processed.";
        case "completed": return "Your order is completed.";
        case "failed": return "Your order has failed.";
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

// 4. Create a type for API responses
type ApiResponse = 
    | { success: true; data: any } 
    | { success: false; message: string };

function handleResponse(response: ApiResponse): any {
    if (response.success) {
        return response.data;
    } else {
        throw new Error(response.message);
    }
}
