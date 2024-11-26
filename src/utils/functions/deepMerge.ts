function isObject(item: unknown): item is object {
  return item !== null && typeof item === 'object';
}

export default function deepMerge<T extends object, U extends object>(
  target: T,
  source: U,
): T & U {
  const result: T & U = { ...target } as T & U;

  for (const key in source) {
    if (isObject(source[key]) && isObject((target as any)[key])) {
      // Recursively merge if both target and source have the same key and it's an object
      (result as any)[key] = deepMerge(
        (target as any)[key],
        source[key] as any,
      );
    } else {
      // Otherwise, directly copy the source property
      (result as any)[key] = source[key];
    }
  }

  return result;
}
