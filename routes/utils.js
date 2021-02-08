const fetch = require("node-fetch");

const getOrders = async function () {
  const url = "https://cruce.vtexcommercestable.com.br/api/oms/pvt/orders";

  const options = {
    method: "GET",
    qs: {
      f_creationDate:
        "creationDate%3A%5B2016-01-01T02%3A00%3A00.000Z%20TO%202021-01-01T01%3A59%3A59.999Z%5D",
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-VTEX-API-AppKey": "vtexappkey-cruce-PMPMOM",
      "X-VTEX-API-AppToken":
        "SRVXVMQXOVUXAEJAPWEWXBZZZQZLKKXRQKHMBHXAXGIKACEFGXOIYIRRSWXFMENEYDHQXXZHZDYRSPYXMUENWOSISPUEKSNTTDLA IJKYXHDUWG",
    },
  };

  await fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
};

const getOrdersByMail = async function (userMail) {
  const url = `https://cruce.vtexcommercestable.com.br/api/oms/pvt/orders?q=${userMail}`;

  const options = {
    method: "GET",
    qs: {
      f_creationDate:
        "creationDate%3A%5B2016-01-01T02%3A00%3A00.000Z%20TO%202021-01-01T01%3A59%3A59.999Z%5D",
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-VTEX-API-AppKey": "vtexappkey-cruce-PMPMOM",
      "X-VTEX-API-AppToken":
        "SRVXVMQXOVUXAEJAPWEWXBZZZQZLKKXRQKHMBHXAXGIKACEFGXOIYIRRSWXFMENEYDHQXXZHZDYRSPYXMUENWOSISPUEKSNTTDLA IJKYXHDUWG",
    },
  };

  await fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
};

module.exports = { getOrders, getOrdersByMail };
