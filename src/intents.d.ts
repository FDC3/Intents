/** Enumeration of the standard FDC3 Intents */
export declare enum Intents {
    /**
     * Expected Context: Contact
     *
     * Expected behavior: initiate call with contact(s)
     */
    START_CALL = "StartCall",
    /**
     * Expected Context: Contact
     *
     * Expected behavior: initiate chat with contact(s)
     */
    START_CHAT = "StartChat",
    /**
     * Expected Context: Contact
     *
     * Expected behavior: display details of a contact
     */
    VIEW_CONTACT = "ViewContact",
    /**
     * Expected Context: Instrument
     *
     * Expected behavior: display a chart for the context
     */
    VIEW_CHART = "ViewChart",
    /**
     * Expected Context: Instrument
     *
     * Expected behavior: display pricing for an instrument
     */
    VIEW_QUOTE = "ViewQuote",
    /**
     * Expected Context: Instrument, Contact, Organisation, etc.
     *
     * Expected behavior: display news for a given context
     */
    VIEW_NEWS = "ViewNews",
    /**
     * Expected Context: Instrument
     * 
     * Expected behavior: display relevant information for a given instrument
     */
    VIEW_INSTRUMENT = "ViewInstument",
    /**
     * Expected Context: Instrument, Organization, etc.
     * 
     * Expected behavior: Send context to receiving application for displaying analysis
     */
    VIEW_ANALYSIS = "ViewAnalysis",
}
/**
 * Type that can be used to validate the name of an intent. Accepts a value from the 'Intents' enum, or any any of the
 * string constants from that enum. Custom intents can be passed in as a general string.
 */
export declare type IntentType = (keyof typeof Intents) | Intents | string;