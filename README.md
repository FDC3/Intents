# Intents
FDC3 Intents specifications, schemas, and examples

* Extending APIs from one App to another is powerful...
* However, it requires building to a specific API ahead of time
* Standard context and intent definitions let us create workflows on the fly

FDC3 Intents define a standard set of verbs that can be used to put together common cross-application workflows on the financial desktop.
* Applications register the intents & context combination they support
* The registries support app discovery by intents and/or context
* Intents are not full RPC, Apps don’t need to enumerate every function with an intent
* FDC3 Standard intents are a limited set, organizations can create their own intents

## Using Intents
Combined with FDC3 Context Data and App Directory standards, Intents enable rich service discovery on the the desktop.  For example:

**Directing a market data platform to show a chart**
```javascript
fdc3.raiseIntent("ViewChart",{
  type:"fdc3.instrument",
  name:"IBM",
  id:{
      ticker:"ibm"
     }
   },
   "my-platform"
);
```

**Discovering an app that can start a chat**
```javascript
fdc3.findIntent("StartChat",{
 type:"fdc3.contact",
 name:"Nick Kolba",
 id:{
      email:"nick@openfin.co"
     }
});
```

**Discovering apps that have intents for context type "contact"**
```javascript
let availableContactHandlers = fdc3.findIntentsByContext("fdc3.contact");
```