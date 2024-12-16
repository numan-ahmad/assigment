import { TransactionDescriptionInfo } from './transactionDescriptionInfo';
export declare class JCBInfo {
    /**
    * MID (Merchant ID) number. Format: 10 numeric characters.  Must be provided for both `noContract` and `gatewayContract` service levels.
    */
    'midNumber'?: string;
    /**
    * Indicates whether the JCB Merchant ID is reused from a previously setup JCB payment method.  This is applicable for both `noContract` and `gatewayContract` service levels.  The default value is `false`.
    */
    'reuseMidNumber'?: boolean;
    /**
    * Specifies the service level (settlement type) of this payment method. Possible values: * **noContract** — Adyen holds the contract with JCB. * **gatewayContract** — JCB receives the settlement and handles disputes. They then pay out to the merchant directly.
    */
    'serviceLevel': JCBInfo.ServiceLevelEnum;
    'transactionDescription'?: TransactionDescriptionInfo;
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
export declare namespace JCBInfo {
    enum ServiceLevelEnum {
        NoContract = "noContract",
        GatewayContract = "gatewayContract"
    }
}
