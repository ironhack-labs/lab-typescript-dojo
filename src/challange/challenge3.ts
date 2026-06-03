// challenge-03.ts

// 1. Status type
type Status = "pending" | "processing" | "completed" | "failed";

// 2. getStatusMessage function
function getStatusMessage(status: Status): string {
    switch (status) {
        case "pending":    return "Your request is pending.";
        case "processing": return "Your request is being processed.";
        case "completed":  return "Your request has been completed.";
        case "failed":     return "Your request has failed.";
    }
}

// 3. findById - accepts string or number
function findById(id: number | string): string {
    if (typeof id === "number") {
        return `ID: ${id}`;
    } else {
        return `Reference: ${id}`;
    }
}

// 4. ApiResponse type
type ApiResponse<T> =
    | { success: true; data: T }
    | { success: false; message: string };

function handleResponse<T>(response: ApiResponse<T>): T {
    if (response.success) {
        return response.data;
    } else {
        throw new Error(response.message);
    }
}