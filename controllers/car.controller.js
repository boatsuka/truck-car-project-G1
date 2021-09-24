const Car = require("../models/car.model");

exports.getCar = async (req, res, next) => {
  try {
    const result = await Car.find();

    res.status(201).json({
      data: {
        result: result,
        message: "เรียบร้อยแล้ว...",
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.inbound = async (req, res, next) => {
  try {
    function randomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    }

    const carId = `C${Math.floor(Math.random() * 10)}`;
    const menberId = `M${Math.floor(Math.random() * 10)}`;
    const inbound = randomDate(new Date(2021, 0, 1), new Date());

    let car = new Car();
    car.carId = carId;
    car.menberId = menberId;
    car.status = true;
    car.inbound = inbound;

    await car.save();

    return res.status(201).json({
      data: {
        carId: carId,
        menberId: menberId,
        inboundT: inbound,
        message: "บันทึกข้อมูลแล้ว...",
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.outbound = async (req, res, next) => {
  try {
    function randomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    }

    const carId = `C${Math.floor(Math.random() * 10)}`;
    const menberId = `M${Math.floor(Math.random() * 10)}`;
    const outbound = randomDate(new Date(2021, 0, 1), new Date());

    let car = new Car();
    car.carId = carId;
    car.menberId = menberId;
    car.status = false;
    car.outbound = outbound;

    await car.save();

    return res.status(201).json({
      data: {
        carId: carId,
        menberId: menberId,
        outbound: outbound,
        message: "บันทึกข้อมูลแล้ว...",
      },
    });
  } catch (error) {
    next(error);
  }
}
