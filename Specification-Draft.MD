# FDC3 Intents Specification - Draft #
## FDC3 Intents Overview ##
FDC3 Intents define a standard set of nouns and verbs that can be used to put together common cross-application workflows on the financial desktop.  

* Applications register intents they support
* The registries support app discovery by intent
* Intents are not full RPC, Apps don’t need to enumerate every function with an intent
* FDC3 Standard intents are a limited set, organizations can create their own intents

## Intent Grammer ##

Intents follow a noun-verb structure where the noun is a common workflow object and the verb is a common action associated with the object.  While reuse of verbs is good for consistency, not all verbs are interchangeable and not every verb applies to every noun.

**Syntax**
* All nouns and verbs should be free of non-alphanumeric characters.  
* ‘-’ will be used to delimit the noun/verb.  
* ‘.’ will be used to namespace the intent (see below).  
* Characters should be upper CamelCase.

**Nouns should be**
* Recognizable
    * Generally self-evident what the thing is
* Repeatable
    * Many instances across the industry
* Atomic
    * There should be clear lines in a workflow where the object begins and ends

**Verbs should be**
* Stateless
    * Workflows should not require callbacks or endpoints to maintain references to each other.  Once an intent is passed to an endpoint - it controls the rest of that workflow. 
* Specific
    * Terms should not be so open-ended that one endpoint could fulfill the intent in a completely different way than another
* Distinct
    * Granular enough that intent handlers can communicate key functional differences 

### Namespaces ###
All standard intent names are reserved. Applications  may use their own intents ad hoc. 
However, there is a need for applications to ensure that their intents avoid collision. The recommended approach here is to use the app name as the noun.  For example, the ‘myChart’ App my expose the ‘Chart-Show’ intent and the ‘myChart-Foo’ proprietary intent.

### Common Verbs ###
* Start
    * Starts a workflow for the context
* View
    * Brings up a view of the context
* Save
    * Initiates saving the context
* Share
    * Initiates sharing the context 

## Initial Set of Intents ## 
* Call
    * Call-Start
        * Contexts: contact (1 or more)
        * Expected behavior: call is initialized with the contact(s)
    * Call-Dial
        * Context: contact (1 )
        * Expected behavior: dial the contact number, but don’t initiate the call
* Chat
    * Chat-Start
        * Contexts: contact (1 or more)
        * Expected behavior: a direct chat is initialized with the contact(s) 
    * Chat-Share
        * Contexts: any (app context)
        * Expected behavior: a dialogue to share the context is started
* Chart
    * Chart-View
* Contact
    * Contact-View
    * Contact-Save
* News
    * News-View
* Monitor
    * Monitor-Save
        * Contexts: instrument
        * Expected behavior: a dialogue to save an instrument in the monitor app
* Quote
    * Quote-View

**Note:**
The sharing intent introduces the idea of sharing an App context.  This is a new context type that recreates the state of an App.  Needs to be defined in the Context Data spec.

## Alternate Approach ##
Rather than using the noun-verb structure for intents, we could also consider a simpler, less structured approach, just using natural names for common intents on the financial desktop.  For example:

* DialCall
    * Context: contact (1 )
    * Expected behavior: dial the contact number, but don’t initiate the call
* SaveContact
    * Context: Contact
    * Expected behavior: starts a dialog to share the contact with the app
* SaveInstrument
    * Context: Instrument
    * Expected behavior: starts a dialog to share the instrument with the app
* ShareContext
    * Context: App Context
    * Expected behavior: starts a dialog to share the App context with another app
* SaveContact
* SaveInstrument
* StartCall
* StartChat
* ViewChart
* ViewContact
* ViewQuote
* ViewNews

**Advantages:**

* Much simpler and direct approach
* No need to categorize objects (nouns) for creating intents

**Disadvantages:**

* Scaling with a large set of intents
