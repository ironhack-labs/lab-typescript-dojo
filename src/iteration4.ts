// challenge-04.ts

// 1. Create a generic function that returns the first element of an array
function first<T>(arr: T[]) {
    return arr[0];
}
// 2. Create a generic function that wraps a value in an object
function wrap<Value>(value : Value) {
  return {
      value: value
   };
}

// 3. Create a generic interface for paginated results
interface PaginatedResult<T> {
    items: T[];
    page: number;
    totalPages: number;
    totalItems: number;
}

// 4. Create a function that returns paginated results
function paginate<T>(
    items: T[],
    page: number,
    pageSize: number
): PaginatedResult<T> {

    return {
        items: items,
        page: page,
        totalPages: 1,
        totalItems: items.length
    };
}