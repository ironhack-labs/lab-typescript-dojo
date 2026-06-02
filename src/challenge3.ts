// challenge-03.ts

// 1
type Status = "pending" | "processing" | "completed" | "failed";

// 2
function getStatusMessage(status: Status): string {
    switch (status) {
        case "pending":
            return "Task is pending...";
        case "processing":
            return "Task is being processed...";
        case "completed":
            return "Task completed successfully!";
        case "failed":
            return "Task failed!";
        default:
            return "Unknown status";
    }
}

// 3
function findById(id: string | number): string {
    if (typeof id === "number") {
        return `ID: ${id}`;
    }
    return `Reference: ${id}`;
}

// 4
type ApiResponse =
    | { success: true; data: any }
    | { success: false; message: string };

function handleResponse(response: ApiResponse): any {
    if (response.success) {
        return response.data;
    }
    throw new Error(response.message);
}