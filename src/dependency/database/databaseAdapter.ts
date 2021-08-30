export interface DatabaseAdapter {
    put(tableName: string, item: Record<string, any>): Promise<any>;
}
