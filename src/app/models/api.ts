export interface ServerInfo {
    [index: string]: DatabaseInfo;
}
export interface DatabaseInfo {
    id: string;
    name: string;
    queries: string[];
    tables: string[];
}