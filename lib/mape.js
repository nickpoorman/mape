/**
 * function for mape calculations
 * https://en.wikipedia.org/wiki/Mean_absolute_percentage_error
 */

module.exports = function mape(dataset) {
  var datum;
  var sum = 0;
  for (var i = dataset.length - 1; i >= 0; i--) {
    datum = dataset[i];
    sum += Math.abs((datum.actual - datum.predicted) / datum.actual);
  };
  return (sum / dataset.length) * 100;
}
