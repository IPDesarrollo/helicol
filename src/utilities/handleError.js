const prefix = "(╯°□°）╯︵ ┻━┻ |> ERROR:";

const handleHttpError = (res, err) => {
  console.log(prefix);
  console.log(err);

  res.status(500).send({ error: "ERROR" });
};

const handleErrorResponse = (res, message, code = 401) => {
  console.log(`${prefix} ${message}`);

  res.status(code).send({ error: message });
};

module.exports = { handleHttpError, handleErrorResponse };
