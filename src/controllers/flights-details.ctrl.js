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
      select: { uuid_flight_detail: true },
    });

    const dataFlightsDetail = {
      uuid_flight_detail: uuidFlightDetail,
      pk_flight_details: pkFlightDetails ? Number(pkFlightDetails) : null,
      arrival_date: arrivalDate ? dateFormat(arrivalDate, 'yyyy-MM-dd') : null,
      arrival_time: arrivalTime ? dateFormat(arrivalTime, 'HH:mm:ss') : null,
      cargo: parseFloat(cargo),
      date_created: dateCreated ? dateFormat(dateCreated, 'yyyy-MM-dd') : null,
      date_modified: dateModified
        ? dateFormat(dateModified, 'yyyy-MM-dd')
        : null,
      departure_date: departureDate
        ? dateFormat(departureDate, 'yyyy-MM-dd')
        : null,
      departure_time: departureTime
        ? dateFormat(departureTime, 'HH:mm:ss')
        : null,
      flight_id: flightId,
      hour: hour ? parseFloat(hour) : null,
      minutes: minutes ? parseFloat(minutes) : null,
      ipad_id: ipadId,
      month_created: monthCreated,
      observation,
      passengers_final_destination: passengersFinalDestination
        ? parseFloat(passengersFinalDestination)
        : null,
      passengers_in_transit: passengersInTransit
        ? parseFloat(passengersInTransit)
        : null,
      pax: pax ? parseFloat(pax) : null,
      route_from: routeFrom,
      route_to: routeTo,
      rp_customer: rpCustomer,
      serial: serial ? parseFloat(serial) : null,
      timestamp_created: timestampCreated ? dateFormat(timestampCreated) : null,
      timestamp_modified: timestampModified
        ? dateFormat(timestampModified)
        : null,
      username_created: usernameCreated,
      username_modified: usernameModified,
      arrival_date_logbook: arrivalDateLogbook
        ? dateFormat(arrivalDateLogbook, 'yyyy-MM-dd')
        : null,
      arrival_time_logbook: arrivalTimeLogbook
        ? dateFormat(arrivalTimeLogbook, 'HH:mm:ss')
        : null,
      departure_date_logbook: departureDateLogbook
        ? dateFormat(departureDateLogbook, 'yyyy-MM-dd')
        : null,
      departure_time_logbook: departureTimeLogbook
        ? dateFormat(departureTimeLogbook, 'HH:mm:ss')
        : null,
      hours_logbook: hoursLogbook ? parseFloat(hoursLogbook) : null,
      minutes_logbook: minutesLogbook ? parseFloat(minutesLogbook) : null,
      send_email: sendEmail,
      zync_uploaded_timestamp: zyncUploadedTimestamp
        ? dateFormat(zyncUploadedTimestamp)
        : null,
    };

    const filterDataFlightsDetail = await formatData(dataFlightsDetail);

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
