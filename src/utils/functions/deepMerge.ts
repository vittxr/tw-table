export function deepMerge<T extends object, U extends object>(target: T, source: U): T & U {
    const result = { ...target };

    for (const key in source) {
        if (source[key] instanceof Object && key in target) {
            // Recursively merge if both target and source have the same key and it's an object
            (result as any)[key] = deepMerge((target as any)[key], source[key]);
        } else {
            // Otherwise, directly copy the source property
            (result as any)[key] = source[key];
        }
    }

    return result as T & U;
}
