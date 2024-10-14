const mongoose = require('mongoose')
const {initializeDatabase} =require('./db/db.connect')
const Cloth = require('./model/clothing.model')
require('dotenv').config()

const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus:200
}
app.use(cors(corsOptions))

initializeDatabase()

app.get('/', (req,res) => {
    res.send("Hello Clothing Server")
  
})

const PORT =process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`)
})

//add cloths start

async function createCloth(clothData)
{
  try {
    const cloth = new Cloth(clothData)
    const saveCloth = await cloth.save()
    return saveCloth
  }
  catch (error)
  {
    throw error
  }
}

app.post('/api/cloths',async (req,res) => {
  try {
    const cloth = await createCloth(req.body)
    if (cloth)
    {
      res.status(201).json({message:'Cloth added successfully',cloth})
    }
  }
  catch(error)
  {
res.status(500).json({error:"cant add cloths"})
  }
})

//add cloths end

//get cloths start

async function readAllCloths()
{
  try {
    const cloths = await Cloth.find()
    return cloths
  }
  catch (error)
  {
    throw error
  }
}

app.get('/api/cloths',async (req,res) => {
  try {
    const cloths = await readAllCloths()
    if (cloths)
    {
      res.json({
  data: {
    products:cloths
  }
})
    }
    else
    {
      res.status(404).json({error:'cloths not found'})
      }
  }
  catch(error)
  {
res.status(500).json({error:'cant fetch cloths'})
  }
})

//get cloths end

//cloth update start

async function updateCloths(clothId, dataToUpdate)
{

  try
  {
    const updatedCloth = await Cloth.findByIdAndUpdate(clothId, dataToUpdate, { new: true })
    return updatedCloth
  }
  catch(error)
  {
throw error
  }
}

app.post('/api/updateCloth/:clothId',async (req,res) => {
  try {
    const updatedCloth = await updateCloths(req.params.clothId, req.body)
    if (updateCloths) {
      res.status(201).json({ mesaage: 'Cloth updated Successfully', updatedCloth: updatedCloth })
    
    }
    else {
      res.status(404).json({error: 'cloth not found'})
      }
  }
  catch(error)
  {
res.status(500).json({error:'cant update cloth'})
  }
})



//cloth update end

