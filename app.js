//Basic config Import 
const express = require('express');
const router =require('./src/routes/api')

const app = new express();
const bodyParser =require('body-parser');
//Security middleware import 
const rateLimit =require('express-rate-Limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');

//Database Library Import 
const mongoose =require('mongoose')