// eslint-disable-next-line no-unused-vars
const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient();

const { dateFormat } = require('../utilities/changeTime');
const formatData = require('../utilities/formatData');

const createUpdateFuel = async (req, res) => {
  try {
    const {
      uuid_fuel: uuidFuel,
      pk_fuel: pkFuel,
      date_created: dateCreated,
      date_modified: dateModified,
      flight_id: flightId,
      fuel_provider: fuelProvider,
      invoice_number: invoiceNumber,
      month_created: monthCreated,
      no_gallons: noGallons,
      place,
      rp_customer: rpCustomer,
      serial,
      timestamp_created: timestampCreated,
      timestamp_modified: timestampModified,
      type,
      username_created: usernameCreated,
      username_modified: usernameModified,
      send_email: sendEmail,
      zync_upload_timestamp: zyncUploadTimestamp,
    } = req.body;

    const findUUID = await prisma.tbl_rp_fuel.findFirst({
      where: {
        uuid_fuel: uuidFuel,
      },
    });

    const dataFuel = {
      uuid_fuel: uuidFuel,
      pk_fuel: Number(pkFuel),
      fuel_provider: fuelProvider,
      invoice_number: invoiceNumber,
      month_created: monthCreated,
      no_gallons: parseFloat(noGallons),
      place,
      type,
      date_created: dateCreated ? dateFormat(dateCreated, 'yyyy-MM-dd') : null,
      date_modified: dateModified
        ? dateFormat(dateModified, 'yyyy-MM-dd')
        : null,
      flight_id: flightId,
      rp_customer: rpCustomer,
      serial: parseFloat(serial),
      timestamp_created: timestampCreated ? dateFormat(timestampCreated) : null,
      timestamp_modified: timestampModified
        ? dateFormat(timestampModified)
        : null,
      username_created: usernameCreated,
      username_modified: usernameModified,
      send_email: sendEmail,
      zync_upload_timestamp: zyncUploadTimestamp
        ? dateFormat(zyncUploadTimestamp)
        : null,
    };

    const filterDataFuel = formatData(dataFuel);

    if (!findUUID) {
      const createFuel = await prisma.tbl_rp_fuel.create({
        data: filterDataFuel,
      });
      console.log(createFuel);
      res.json({ uuid_fuel: uuidFuel });
    } else {
      const updateFuel = await prisma.tbl_rp_fuel.updateMany({
        where: {
          uuid_fuel: uuidFuel,
        },
        data: filterDataFuel,
      });
      if (updateFuel) {
        res.json({ uuid_fuel: uuidFuel });
      }
    }
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

module.exports = { createUpdateFuel };
