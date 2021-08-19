const express = require("express");
const router = express.Router();
const Pool = require("../lib/pool");
let getDevices = require('usb-barcode-scanner').getDevices;
let UsbScanner = require('usb-barcode-scanner').UsbScanner;
 
let scanner = new UsbScanner({
  vendorId: 34952,
  productId: 57362,
});
 
scanner.on('data',(data)=>{
  console.log(data) 
})
 
scanner.startScanning();
module.exports = router;
