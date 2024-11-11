// type.ts

// Insight 数据表的类型定义
export interface Insight {
  id: number;               // 自增主键
  name: string | null;      // 名称，可以为 null
  value: number | null;     // 数值，可以为 null
}

// Procurement 数据表的类型定义
export interface Procurement {
  id: number;                // 自增主键
  type: string | null;       // 类型，可以为 null
  amount: number | string | null;  // 金额，可以为 number、string 或 null，适配数据库返回的不同类型
}

// 分页参数的类型定义
export interface PaginationParams {
  page: number;              // 当前页码
  pageSize: number;          // 每页条目数
  filter?: string;           // 可选的过滤条件
  sort?: string;             // 可选的排序字段
}