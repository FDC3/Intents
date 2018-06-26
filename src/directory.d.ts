import { IntentType } from './intents';
/**
 * An application in the app directory
 */
export interface IApplication {
    id: number;
    name: string;
    title: string;
    manifest_url: string;
    description: string;
    contact_email: string;
    support_email: string;
    signature: string;
    publisher: string;
    icon: string;
    appPage: string;
    images: { url: string; }[];
    actions: { intent: IntentType; context: string; }[];
}
