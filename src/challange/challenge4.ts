// challenge-04.ts

// 1. Generic function - returns first element
function first<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

// 2. Generic function - wraps value in object
function wrap<T>(value: T): { value: T } {
    return { value: value };
}

// 3. Generic interface for paginated results
interface PaginatedResult<T> {
    items: T[];
    page: number;
    totalPages: number;
    totalItems: number;
}

// 4. paginate function
function paginate<T>(items: T[], page: number, pageSize: number): PaginatedResult<T> {
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (page - 1) * pageSize;
    const paginatedItems = items.slice(startIndex, startIndex + pageSize);

    return {
        items: paginatedItems,
        page,
        totalPages,
        totalItems
    };
}