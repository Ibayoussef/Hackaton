// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { players } from "@/lib/player";
import prisma from "@/lib/prisma";
import { FootPlayer } from "@/Enums/FootPlayers";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  players.forEach(async (player: FootPlayer) => {
    const playerData = await prisma?.player.create({ data: player });
    return playerData;
  });
  res.status(200).send("json data added to the db");
}
