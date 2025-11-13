import { CreateLinkDto } from './createLink.dto';
export declare class LinksController {
    findAll(isInner: boolean, color: string): Promise<string>;
    findOne(params: any): string;
    create(createLinkDto: CreateLinkDto): Promise<string>;
}
