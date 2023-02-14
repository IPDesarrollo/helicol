// eslint-disable-next-line no-unused-vars
const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient();

const { dateFormat } = require('../utilities/changeTime');
const formatData = require('../utilities/formatData');

const createUpdateFlightDetails = async (req, res) => {
  try {
    const {
      uuid_flight_detail: uuidFlightDetail,
      pk_flight_details: pkFlightDetails,
      arrival_date: arrivalDate,
      arrival_time: arrivalTime,
      cargo,
      date_created: dateCreated,
      date_modified: dateModified,
      departure_date: departureDate,
      departure_time: departureTime,
      flight_id: flightId,
      hour,
      minutes,
      ipad_id: ipadId,
      month_created: monthCreated,
      observation,
      passengers_final_destination: passengersFinalDestination,
      passengers_in_transit: passengersInTransit,
      pax,
      route_from: routeFrom,
      route_to: routeTo,
      rp_customer: rpCustomer,
      serial,
      timestamp_created: timestampCreated,
      timestamp_modified: timestampModified,
      username_created: usernameCreated,
      username_modified: usernameModified,
      arrival_date_logbook: arrivalDateLogbook,
      arrival_time_logbook: arrivalTimeLogbook,
      departure_date_logbook: departureDateLogbook,
      departure_time_logbook: departureTimeLogbook,
      hours_logbook: hoursLogbook,
      minutes_logbook: minutesLogbook,
      send_email: sendEmail,
      zync_uploaded_timestamp: zyncUploadedTimestamp,
    } = req.body;

    const findUUID = await prisma.tbl_rp_flight_details.findFirst({
      where: {
        uuid_flight_detail: uuidFlightDetail,
      },
    });

    const dataFlightsDetail = {
      uuid_flight_detail: uuidFlightDetail,
      pk_flight_details: Number(pkFlightDetails),
      arrival_date: dateFormat(arrivalDate, 'yyyy-MM-dd'),
      arrival_time: dateFormat(arrivalTime, 'HH:mm:ss'),
      cargo: parseFloat(cargo),
      date_created: dateFormat(dateCreated, 'yyyy-MM-dd'),
      date_modified: dateFormat(dateModified, 'yyyy-MM-dd'),
      departure_date: dateFormat(departureDate, 'yyyy-MM-dd'),
      departure_time: dateFormat(departureTime, 'HH:mm:ss'),
      flight_id: flightId,
      hour: parseFloat(hour),
      minutes: parseFloat(minutes),
      ipad_id: ipadId,
      month_created: monthCreated,
      observation,
      passengers_final_destination: parseFloat(passengersFinalDestination),
      passengers_in_transit: parseFloat(passengersInTransit),
      pax: parseFloat(pax),
      route_from: routeFrom,
      route_to: routeTo,
      rp_customer: rpCustomer,
      serial: parseFloat(serial),
      timestamp_created: dateFormat(timestampCreated),
      timestamp_modified: dateFormat(timestampModified),
      username_created: usernameCreated,
      username_modified: usernameModified,
      arrival_date_logbook: dateFormat(arrivalDateLogbook, 'yyyy-MM-dd'),
      arrival_time_logbook: dateFormat(arrivalTimeLogbook, 'HH:mm:ss'),
      departure_date_logbook: dateFormat(departureDateLogbook, 'yyyy-MM-dd'),
      departure_time_logbook: dateFormat(departureTimeLogbook, 'HH:mm:ss'),
      hours_logbook: parseFloat(hoursLogbook),
      minutes_logbook: parseFloat(minutesLogbook),
      send_email: sendEmail,
      zync_uploaded_timestamp: dateFormat(zyncUploadedTimestamp),
    };

    const filterDataFlightsDetail = formatData(dataFlightsDetail);

    if (!findUUID) {
      const createFlightDetail = await prisma.tbl_rp_flight_details.create({
        data: filterDataFlightsDetail,
      });
      res.json({ pk_flight_details: createFlightDetail.pk_flight_details });
    } else {
      const updateFlightDetail = await prisma.tbl_rp_flight_details.updateMany({
        where: {
          uuid_flight_detail: uuidFlightDetail,
        },
        data: filterDataFlightsDetail,
      });
      if (updateFlightDetail) {
        res.json({ uuid_flight_detail: uuidFlightDetail });
      }
    }
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

module.exports = { createUpdateFlightDetails };
