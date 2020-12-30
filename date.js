exports.getDate = function () {
  const today = new Date()

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  return today.toLocaleDateString("en-US", options)
}

Date.prototype.getDayOfWeek = function(){
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][ this.getDay() ];
};
