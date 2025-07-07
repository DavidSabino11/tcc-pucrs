const soap = require("soap");
const url = "http://www.dneonline.com/calculator.asmx?WSDL";

soap.createClient(url, (err, client) => {
  if (err) return console.error(err);

  client.Add({ intA: 2, intB: 9 }, (err, result) => {
    if (err) return console.error(err);
    console.log("Resultado SOAP:", result.AddResult);
  });
});