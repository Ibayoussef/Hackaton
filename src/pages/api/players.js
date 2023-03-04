import prisma from "../../lib/prisma";
export default async function handler(req, res) {
  let prismaUsed = prisma;
  try {
    const playerData = await prismaUsed?.player.findMany();
    res.status(200).json(playerData);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
