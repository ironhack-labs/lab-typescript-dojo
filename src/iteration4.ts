// challenge-04.ts

// 1. Create a generic function that returns the first element of an array
function first<T>(arr: T[]): T | undefined {
    return arr[0];
}

// 2. Create a generic function that wraps a value in an object
function wrap<T>(value: T) : {value: T}{
    return { value };
}

// 3. Create a generic interface for paginated results
interface PaginatedResult<T> {
    items: T[];
    page: number;
    totalPages: number;
    totalItems: number;
}

// 4. Create a function that returns paginated results
function paginate<T>(items: T[], page:number, pageSize:number):PaginatedResult<T> {
    const totalItems=items.length;
    const totalPages = Math.ceil(totalItems/pageSize);

    const start = (page-1)*pageSize;
    const paginatedItems = items.slice(start, start+pageSize);

    return{
        items: paginatedItems,
        page,
        totalPages,
        totalItems
    };
}
