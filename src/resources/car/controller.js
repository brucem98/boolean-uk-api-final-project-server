const prisma = require("../../utils/database")

const getAllCars = async (req, res) => {
try {
    const data = await prisma.car.findMany()
    res.json({data})
} catch (error) {
    console.error({error})

    res.status(500).json({error: error.message})
}
}


const createOne = async (req, res) => {
    const { model } = req.body
    try {
        const createOne = await prisma.car.create({
                data:  { model } ,
            })
            res.json({data: createOne})
    } catch (error) {
        console.error({error})  
      
        res.status(500).json({ error: error.message})
      }
}
const deleteById = async (req, res) => {
    console.log("req.params", req.params.id)
    try {
        const deleteById = await prisma.car.delete({
            where: {
                id: parseInt(req.params.id),
            },
        })
        res.json({data: deleteById})
    } catch (error) {
        console.error({error})

        res.status(500).json({error: error.message})
    }
}
module.exports = { 
getAllCars, 
createOne,
deleteById
}