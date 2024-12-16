import { Href } from './href';
export declare class Link {
    'first'?: Href;
    'last'?: Href;
    'next'?: Href;
    'previous'?: Href;
    'self'?: Href;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
