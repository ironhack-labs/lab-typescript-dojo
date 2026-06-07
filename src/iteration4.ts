//
// Iteration 4 | Type aliases
//

// 1. Create a generic function that returns the first element
function first<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

// 2. Create a generic function that wraps a value
function wrap<T>(value: T): { value: T } {
    return { value: value };
}

// 3. Create a generic interface for paginated results
interface PaginatedResult<T> {
    items: T[];
    page: number;
    totalPages: number;
    totalItems: number;
}

// 4. Create a function that returns paginated results
function paginate<T>(items: T[], page: number, pageSize: number): PaginatedResult<T> {
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (page - 1) * pageSize;
    const paginatedItems = items.slice(startIndex, startIndex + pageSize);

    return {
        items: paginatedItems,
        page: page,
        totalPages: totalPages,
        totalItems: totalItems
    };
}
