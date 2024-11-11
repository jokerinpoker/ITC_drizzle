// utils.ts
export const paginate = (data: any[], page: number, pageSize: number) => {
  const start = (page - 1) * pageSize;
  return data.slice(start, start + pageSize);
};

export const filterData = (data: any[], filter: string) => {
  return data.filter(item => item.type.includes(filter));
};

export const sortData = (data: any[], sortKey: string) => {
  return data.sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1));
};