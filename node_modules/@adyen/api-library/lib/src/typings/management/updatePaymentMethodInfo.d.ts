import { AccelInfo } from './accelInfo';
import { BcmcInfo } from './bcmcInfo';
import { CartesBancairesInfo } from './cartesBancairesInfo';
import { GenericPmWithTdiInfo } from './genericPmWithTdiInfo';
import { NyceInfo } from './nyceInfo';
import { PulseInfo } from './pulseInfo';
import { StarInfo } from './starInfo';
export declare class UpdatePaymentMethodInfo {
    'accel'?: AccelInfo;
    'bcmc'?: BcmcInfo;
    'cartesBancaires'?: CartesBancairesInfo;
    /**
    * The list of countries where a payment method is available. By default, all countries supported by the payment method.
    */
    'countries'?: Array<string>;
    'cup'?: GenericPmWithTdiInfo;
    /**
    * The list of currencies that a payment method supports. By default, all currencies supported by the payment method.
    */
    'currencies'?: Array<string>;
    /**
    * Custom routing flags for acquirer routing.
    */
    'customRoutingFlags'?: Array<string>;
    'diners'?: GenericPmWithTdiInfo;
    'discover'?: GenericPmWithTdiInfo;
    'eftpos_australia'?: GenericPmWithTdiInfo;
    /**
    * Indicates whether the payment method is enabled (**true**) or disabled (**false**).
    */
    'enabled'?: boolean;
    'girocard'?: GenericPmWithTdiInfo;
    'ideal'?: GenericPmWithTdiInfo;
    'interac_card'?: GenericPmWithTdiInfo;
    'jcb'?: GenericPmWithTdiInfo;
    'maestro'?: GenericPmWithTdiInfo;
    'mc'?: GenericPmWithTdiInfo;
    'nyce'?: NyceInfo;
    'pulse'?: PulseInfo;
    'star'?: StarInfo;
    /**
    * The list of stores for this payment method
    */
    'storeIds'?: Array<string>;
    'visa'?: GenericPmWithTdiInfo;
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
