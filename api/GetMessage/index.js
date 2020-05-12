module.exports = async function (context, req) {
    context.res = {
      body: { 
        text: "Probando la API desde una función estatica" 
      }
    };
  };