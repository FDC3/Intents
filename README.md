# Intents
FDC3 Intents specifications, schemas, and examples

* Extending APIs from one App to another is powerful...
* However, it requires building to a specific API ahead of time
* Standard context and intent definitions let us create workflows on the fly

FDC3 Intents define a standard set of verbs that can be used to put together common cross-application workflows on the financial desktop.
* Applications register intents they support
* The registries support app discovery by intent
* Intents are not full RPC, Apps don’t need to enumerate every function with an intent
* FDC3 Standard intents are a limited set, organizations can create their own intents

## Using Intents
Combined with FDC3 Context Data and App Directory standards, Intents enable rich service discovery on the the desktop.  For example:

**Directing a market data platform to show a chart**
```javascript
fdc3.open("my-platform","viewChart",{
 object:"fdc3-context",
 version:"0.0.1",
 definition:"https://fdc3/schema/context/0.0.1",
 data:[
  {
    type:"instrument",
    name:"IBM",
    id:{
      ticker:"ibm"
     }
} ]});
```

**Discovering an app that can start a chat**
```javascript
fdc3.open(null,"startChat",{
 object:"fdc3-context",
 version:"0.0.1",
 definition:"https://fdc3/schema/context/0.0.1",
 data:[
  {
    type:"contact",
    name:"Nick Kolba",
    id:{
      email:"nick@openfin.co"
     }
} ]});
```
