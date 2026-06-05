// challenge-04.ts

// 1
function first<T>(arr: T[]): T | undefined {
    return arr[0];
}

// 2
function wrap<T>(value: T): { value: T } {
    return { value };
}

// 3
interface PaginatedResult<T> {
    items: T[];
    page: number;
    totalPages: number;
    totalItems: number;
}

// 4
function paginate<T>(items: T[], page: number, pageSize: number): PaginatedResult<T> {
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    const start = (page - 1) * pageSize;
    const paginatedItems = items.slice(start, start + pageSize);

    return {
        items: paginatedItems,
        page,
        totalPages,
        totalItems
    };
}