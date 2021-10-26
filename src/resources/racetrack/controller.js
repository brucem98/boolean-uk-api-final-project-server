const prisma = require("../../utils/database")

const getAllRacetracks = async (req, res) => {
try {
    const data = await prisma.racetrack.findMany()
    res.json({data})
} catch (error) {
    console.error({error})

    res.status(500).json({error: error.message})
}
}
module.exports = { getAllRacetracks}