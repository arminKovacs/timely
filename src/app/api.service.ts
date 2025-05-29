import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private readonly baseUrl = 'https://your-backend-api-url.com/api';

    constructor() { }

    async get<T>(endpoint: string, params?: any): Promise<T> {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('GET call was successful');
        return {} as T;
    }

    async post<T>(endpoint: string, body: any): Promise<T> {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('POST call was successful');
        return {} as T;
    }

    async put<T>(endpoint: string, body: any): Promise<T> {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('PUT call was successful');
        return {} as T;
    }

    async delete<T>(endpoint: string, params?: any): Promise<T> {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('DELETE call was successful');
        return {} as T;
    }
}
