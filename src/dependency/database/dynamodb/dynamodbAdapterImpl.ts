import * as AWS from 'aws-sdk';
import { DatabaseAdapter } from '../databaseAdapter';
import { DynamoDbQueryGenerator } from './dynamodbQueryGenerator';

AWS.config.update({
    region: 'us-east-1',
});

const docClient = new AWS.DynamoDB.DocumentClient();

export class DynamoDbAdapterImpl implements DatabaseAdapter {
    private queryGenerator: DynamoDbQueryGenerator;
    constructor(queryGenerator: DynamoDbQueryGenerator) {
        this.queryGenerator = queryGenerator;
    }
    put(tableName: string, item: Record<string, any>): Promise<any> {
        throw new Error('Method not implemented.');
    }
}
