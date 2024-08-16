import { AppService } from './app.service';
declare const ARTICLES: {
    _id: string;
    title: string;
    authors: string;
    source: string;
    pubyear: string;
    doi: string;
    claim_evidence: string[][];
}[];
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    get(): typeof ARTICLES;
    getById(id: number): typeof ARTICLES[0];
}
export {};
