---
layout: default
---

# FDC3 Intents Specification - Draft #

## FDC3 Intents Overview ##
FDC3 Intents define a standard set of nouns and verbs that can be used to put together common cross-application workflows on the financial desktop.  

* Applications register the intents & context combination they support
* The registries support app discovery by intent and/or context
* Intents are not full RPC, Apps don’t need to enumerate every function with an intent
* FDC3 Standard intents are a limited set, organizations can create their own intents

**Syntax**
* Intent names should be free of non-alphanumeric characters.   
* ‘.’ will be used to namespace the intent (see below).  
* Characters should be upper CamelCase.

**Intents should be**
* Recognizable
    * Generally self-evident what the thing is
* Repeatable
    * Many instances across the industry
* Atomic
    * There should be clear lines in a workflow where the object begins and ends
* Stateless
    * Workflows should not require callbacks or endpoints to maintain references to each other.  Once an intent is passed to an endpoint - it controls the rest of that workflow. 
* Specific
    * Terms should not be so open-ended that one endpoint could fulfill the intent in a completely different way than another
* Distinct
    * Granular enough that intent handlers can communicate key functional differences 

### Namespaces ###
All standard intent names are reserved. Applications  may use their own intents ad hoc. 
However, there is a need for applications to ensure that their intents avoid collision. The recommended approach here is to use the app name as the noun.  For example, the ‘myChart’ App my expose the ‘ViewChart’ intent and the ‘myChart.Foo’ proprietary intent.

## Initial Set of Intents ##

* StartCall
  * Expected Context: Contact
  * Expected behavior: initiate call with contact(s)
* StartChat
  * Expected Context: Contact
  * Expected behavior: initiate chat with contact(s)
* ViewChart
  * Expected Context: Instrument
  * Expected behavior: display a chart for the context
* ViewContact
  * Expected Context: Contact
  * Expected behavior: display details of a contact
* ViewQuote
  * Expected Context: Instrument
  * Expected behavior: display pricing for an instrument
* ViewNews
  * Expected Context: Instrument, Contact, Organisation, etc.
  * Expected behavior: display news for a given context
* ViewInstument
  * Expected Context: Instrument
  * Expected behavior: display relevant information for a given instrument
* ViewAnalysis
  * Expected Context: Instrument, Organization, etc.
  * Expected behavior: Send context to receiving application for displaying analysis
