export const groupBy = <T, K extends keyof any>(
  list: T[],
  getKey: (item: T) => K
) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {} as Record<K, T[]>);

export const chunkItems = <T>(items: T[], chunkSize: number) => {
  const res = items.reduce((chunks: T[][], item: T, index) => {
    const chunk = Math.floor(index / chunkSize);
    chunks[chunk] = ([] as T[]).concat(chunks[chunk] || [], item);
    return chunks;
  }, []);

  // for (const element of res) {
  //   element.length = chunkSize
  // }

  return res;
}
