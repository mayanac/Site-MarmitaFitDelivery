PayStandCheckout.checkoutComplete = function (data) {
    console.log("custom checkout complete:", data);
    alert("Thank you for payment");
  };
  PayStandCheckout.checkoutFailed = function (data) {
    console.log("custom checkout failed:", data);
    alert("We are sorry for the technical difficulties")
  };
  PayStandCheckout.init({
    "publishableKey": "eml9jvz7dsbglwtx53xtu9tl",
    "checkout_domain": "https://checkout.paystand.co/v2/",
    "domain": "https://api.paystand.co",
    "total": "10.00",
    "currency": "USD",
    "features": {
      "cards": true,
      "echeck": {
        "enabled": true
      }
    },
    "ui": {
      "billing": {
        "show": true,
        "autoFill": {
          "email": "test@test-email.com",
          "fullName": "Test User",
          "street1": "123 Test St",
          "street2": "Apt 3G",
          "city": "Test",
          "postalCode": "95060",
          "state": "CA",
          "country": "USA"
        }
      }
    },
    "meta": {
      "invoice" : {
        "number": "#CIN-001",
        "amount" : 10.00,
        "date" : "2015-09-10T04:00:00+00:00",
        "customer": "Matt Ouellette"
      },
      "demo": "https://codepen.io/paystand/pen/BKoxWK"
    }
  });
  hljs.initHighlightingOnLoad();