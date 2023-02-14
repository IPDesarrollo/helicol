// eslint-disable-next-line no-unused-vars
const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient();

const { dateFormat } = require('../utilities/changeTime');
const formatData = require('../utilities/formatData');

const createUpdatePilot = async (req, res) => {
  try {
    const {
      uuid_pilot: uuidPilot,
      flight_id: flightId,
      arrival_time: arrivalTime,
      name,
      rp_customer: rpCustomer,
      type,
      username_created: usernameCreated,
      username_modified: usernameModified,
      registration_number: registrationNumber,
      serial,
      date_created: dateCreated,
      date_modified: dateModified,
      timestamp_created: timestampCreated,
      timestamp_modified: timestampModified,
      D_VFR: dVfr,
      A_VFR: aVfr,
      D_IFR: dIfr,
      A_IFR: aIfr,
      D_NOC: dNoc,
      A_NOC: aNoc,
      send_email: sendEmail,
      zync_upload_timestamp: zyncUploadTimestamp,
    } = req.body;

    const findUUID = await prisma.tbl_rp_pilots.findFirst({
      where: {
        uuid_pilot: uuidPilot,
      },
    });

    const dataPilot = {
      uuid_pilot: uuidPilot,
      flight_id: flightId,
      arrival_time: dateFormat(arrivalTime, 'HH:mm:ss'),
      name,
      rp_customer: rpCustomer,
      type,
      username_created: usernameCreated,
      username_modified: usernameModified,
      registration_number: registrationNumber,
      serial: Number(serial),
      date_created: dateFormat(dateCreated, 'yyyy-MM-dd'),
      date_modified: dateFormat(dateModified, 'yyyy-MM-dd'),
      timestamp_created: dateFormat(timestampCreated),
      timestamp_modified: dateFormat(timestampModified),
      D_VFR: Number(dVfr),
      A_VFR: Number(aVfr),
      D_IFR: Number(dIfr),
      A_IFR: Number(aIfr),
      D_NOC: Number(dNoc),
      A_NOC: Number(aNoc),
      send_email: sendEmail,
      zync_upload_timestamp: dateFormat(zyncUploadTimestamp),
    };

    const filterDataPilot = formatData(dataPilot);

    if (!findUUID) {
      const createPilot = await prisma.tbl_rp_pilots.create({
        data: filterDataPilot,
      });
      console.log(createPilot);
      res.json({ uuid_pilot: uuidPilot });
    } else {
      const updatePilot = await prisma.tbl_rp_pilots.updateMany({
        where: {
          uuid_pilot: uuidPilot,
        },
        data: filterDataPilot,
      });
      if (updatePilot) {
        res.json({ uuid_pilot: uuidPilot });
      }
    }
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

module.exports = { createUpdatePilot };
