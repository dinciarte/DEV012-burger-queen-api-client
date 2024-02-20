export interface ResponseI{
    accessToken: string;
    user: {
        email:string;
        role: string;
        id: number;
    };
}