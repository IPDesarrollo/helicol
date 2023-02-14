// eslint-disable-next-line no-unused-vars
const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient();

const { dateFormat } = require('../utilities/changeTime');
const formatData = require('../utilities/formatData');

const getFlight = async (req, res) => {
  try {
    const { flight } = req.params;

    const getMaxSerial = await prisma.tbl_rp_flights.findMany({
      orderBy: {
        serial: 'desc',
      },
      where: {
        ipad_id: flight,
      },
      select: {
        serial: true,
      },
      take: 1,
    });

    res.json({ serial: getMaxSerial[0].serial });
  } catch (err) {
    res.json({ err });
  }
};

const updateCreateFlights = async (req, res) => {
  try {
    const {
      uuid_flight: uuidFlight,
      pk_flights: pkFlights,
      base,
      date,
      date_created: dateCreated,
      date_modified: dateModified,
      flight_id: flightId,
      flight_type: flightType,
      hour_client: hourClient,
      minutes_client: minutesClient,
      hour_meter_start: hourMeterStart,
      hour_meter_end: hourMeterEnd,
      hour_meter_total: hourMeterTotal,
      ipad_id: ipadId,
      hours_helicol: hoursHelicol,
      minutes_helicol: minutesHelicol,
      overnight_stay: overnightStay,
      type,
      rp_customer: rpCustomer,
      serial,
      time_stand_by: timeStandBy,
      timestamp_created: timestampCreated,
      timestamp_modified: timestampModified,
      username_created: usernameCreated,
      username_modified: usernameModified,
      customer_1: customer1,
      customer_all: customerAll,
      fuel_consumed: fuelConsumed,
      rp_build: rpBuild,
      rp_version: rpVersion,
      start_fuel: startFuel,
      end_fuel: endFuel,
      type_of_flight_1_hour: typeOfFlight1Hour,
      type_of_flight_1_minute: typeOfFlight1Minute,
      type_of_flight_2: typeOfFlight2,
      type_of_flight_2_hour: typeOfFlight2Hour,
      type_of_flight_2_minute: typeOfFlight2Minute,
      type_of_flight_3: typeOfFlight3,
      type_of_flight_3_hour: typeOfFlight3Hour,
      type_of_flight_3_minute: typeOfFlight3Minute,
      signature_helicol: signatureHelicol,
      signature_helicol_2: signatureHelicol2,
      signature_pilot: signaturePilot,
      signature_tab_2: signatureTab2,
      customer_2: customer2,
      customer_3: customer3,
      pid,
      pin,
      pin_validation: pinValidation,
      type_of_flight_1_sub: typeOfFlight1Sub,
      type_of_flight_2_sub: typeOfFlight2Sub,
      type_of_flight_3_sub: typeOfFlight3Sub,
      type_of_flight_4: typeOfFlight4,
      type_of_flight_4_sub: typeOfFlight4Sub,
      type_of_flight_4_hour: typeOfFlight4Hour,
      type_of_flight_4_minute: typeOfFlight4Minute,
      type_of_flight_5: typeOfFlight5,
      type_of_flight_5_sub: typeOfFlight5Sub,
      type_of_flight_5_hour: typeOfFlight5Hour,
      type_of_flight_5_minute: typeOfFlight5Minute,
      validation_timings: validationTimings,
    } = req.body;

    const findUUID = await prisma.tbl_rp_flights.findFirst({
      where: {
        uuid_flight: uuidFlight,
      },
    });

    const dataFlight = {
      uuid_flight: uuidFlight,
      base,
      pk_flights: Number(pkFlights),
      date: date ? dateFormat(date, 'yyyy-MM-dd') : null,
      date_created: dateCreated ? dateFormat(dateCreated, 'yyyy-MM-dd') : null,
      date_modified: dateModified
        ? dateFormat(dateModified, 'yyyy-MM-dd')
        : null,
      flight_id: flightId,
      flight_type: flightType,
      ipad_id: ipadId,
      type,
      rp_customer: rpCustomer,
      timestamp_created: timestampCreated ? dateFormat(timestampCreated) : null,
      timestamp_modified: timestampModified
        ? dateFormat(timestampModified)
        : null,
      username_created: usernameCreated,
      username_modified: usernameModified,
      customer_1: customer1,
      customer_all: customerAll,
      rp_version: rpVersion,
      hour_client: hourClient ? parseFloat(hourClient) : null,
      minutes_client: minutesClient ? parseFloat(minutesClient) : null,
      hour_meter_start: hourMeterStart ? parseFloat(hourMeterStart) : null,
      hour_meter_end: hourMeterEnd ? parseFloat(hourMeterEnd) : null,
      hour_meter_total: hourMeterTotal ? parseFloat(hourMeterTotal) : null,
      hours_helicol: hoursHelicol ? parseFloat(hoursHelicol) : null,
      minutes_helicol: minutesHelicol ? parseFloat(minutesHelicol) : null,
      overnight_stay: overnightStay ? parseFloat(overnightStay) : null,
      serial: serial ? parseFloat(serial) : null,
      time_stand_by: timeStandBy ? parseFloat(timeStandBy) : null,
      fuel_consumed: fuelConsumed ? parseFloat(fuelConsumed) : null,
      rp_build: rpBuild ? parseFloat(rpBuild) : null,
      start_fuel: startFuel ? parseFloat(startFuel) : null,
      end_fuel: endFuel ? parseFloat(endFuel) : null,
      type_of_flight_1_hour: typeOfFlight1Hour
        ? parseFloat(typeOfFlight1Hour)
        : null,
      type_of_flight_1_minute: typeOfFlight1Minute
        ? parseFloat(typeOfFlight1Minute)
        : null,
      type_of_flight_2: typeOfFlight2,
      type_of_flight_2_hour: typeOfFlight2Hour
        ? parseFloat(typeOfFlight2Hour)
        : null,
      type_of_flight_2_minute: typeOfFlight2Minute
        ? parseFloat(typeOfFlight2Minute)
        : null,
      type_of_flight_3: typeOfFlight3,
      type_of_flight_3_hour: typeOfFlight3Hour
        ? parseFloat(typeOfFlight3Hour)
        : null,
      type_of_flight_3_minute: typeOfFlight3Minute
        ? parseFloat(typeOfFlight3Minute)
        : null,
      signature_helicol: signatureHelicol,
      signature_helicol_2: signatureHelicol2,
      signature_pilot: signaturePilot,
      signature_tab_2: signatureTab2,
      customer_2: customer2,
      customer_3: customer3,
      pid,
      pin,
      pin_validation: pinValidation,
      type_of_flight_1_sub: typeOfFlight1Sub,
      type_of_flight_2_sub: typeOfFlight2Sub,
      type_of_flight_3_sub: typeOfFlight3Sub,
      type_of_flight_4: typeOfFlight4,
      type_of_flight_4_sub: typeOfFlight4Sub,
      type_of_flight_4_hour: typeOfFlight4Hour
        ? parseFloat(typeOfFlight4Hour)
        : null,
      type_of_flight_4_minute: typeOfFlight4Minute
        ? parseFloat(typeOfFlight4Minute)
        : null,
      type_of_flight_5: typeOfFlight5,
      type_of_flight_5_sub: typeOfFlight5Sub,
      type_of_flight_5_hour: typeOfFlight5Hour
        ? parseFloat(typeOfFlight5Hour)
        : null,
      type_of_flight_5_minute: typeOfFlight5Minute
        ? parseFloat(typeOfFlight5Minute)
        : null,
      validation_timings: validationTimings,
    };
    const filterDataFlight = formatData(dataFlight);

    if (!findUUID) {
      const createFlight = await prisma.tbl_rp_flights.create({
        data: filterDataFlight,
        select: {
          uuid_flight: true,
        },
      });
      res.json({ uuid_flight: createFlight.uuid_flight });
    } else {
      const updateFlight = await prisma.tbl_rp_flights.updateMany({
        where: {
          uuid_flight: uuidFlight,
        },
        data: filterDataFlight,
      });
      if (updateFlight) {
        res.json({ uuid_flight: uuidFlight });
      }
    }
  } catch (error) {
    console.log(error);
    res.json(error).status(404);
  }
};

module.exports = { getFlight, updateCreateFlights };
