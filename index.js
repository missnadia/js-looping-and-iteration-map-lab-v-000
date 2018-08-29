function lowerCaseDrivers (drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes (drivers) {
  return drivers.map(function (driver) {
    driverFirst = driver.split(" ")[0];
    driverLast = driver.split(" ")[-1];
    return { firstName: driverFirst, lastName: driverLast };
  });
}
