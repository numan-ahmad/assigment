import { CardholderReceipt } from './cardholderReceipt';
import { Connectivity } from './connectivity';
import { Gratuity } from './gratuity';
import { Hardware } from './hardware';
import { Localization } from './localization';
import { Nexo } from './nexo';
import { OfflineProcessing } from './offlineProcessing';
import { Opi } from './opi';
import { Passcodes } from './passcodes';
import { PayAtTable } from './payAtTable';
import { Payment } from './payment';
import { ReceiptOptions } from './receiptOptions';
import { ReceiptPrinting } from './receiptPrinting';
import { Refunds } from './refunds';
import { Signature } from './signature';
import { Standalone } from './standalone';
import { StoreAndForward } from './storeAndForward';
import { Surcharge } from './surcharge';
import { TapToPay } from './tapToPay';
import { TerminalInstructions } from './terminalInstructions';
import { Timeouts } from './timeouts';
import { WifiProfiles } from './wifiProfiles';
export declare class TerminalSettings {
    'cardholderReceipt'?: CardholderReceipt;
    'connectivity'?: Connectivity;
    /**
    * Settings for tipping with or without predefined options to choose from. The maximum number of predefined options is four, or three plus the option to enter a custom tip.
    */
    'gratuities'?: Array<Gratuity> | null;
    'hardware'?: Hardware;
    'localization'?: Localization;
    'nexo'?: Nexo;
    'offlineProcessing'?: OfflineProcessing;
    'opi'?: Opi;
    'passcodes'?: Passcodes;
    'payAtTable'?: PayAtTable;
    'payment'?: Payment;
    'receiptOptions'?: ReceiptOptions;
    'receiptPrinting'?: ReceiptPrinting;
    'refunds'?: Refunds;
    'signature'?: Signature;
    'standalone'?: Standalone;
    'storeAndForward'?: StoreAndForward;
    'surcharge'?: Surcharge;
    'tapToPay'?: TapToPay;
    'terminalInstructions'?: TerminalInstructions;
    'timeouts'?: Timeouts;
    'wifiProfiles'?: WifiProfiles;
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
