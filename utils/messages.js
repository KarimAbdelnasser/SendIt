const moment = require("moment");

function formatMessage(username, text) {
  const time = moment().utcOffset("+02.00").format("h:mm a");
  return {
    username,
    text,
    time: time,
  };
}

module.exports = {
  formatMessage,
};
