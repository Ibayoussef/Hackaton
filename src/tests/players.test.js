// test file (e.g. handler.test.js)
import prisma from "../lib/prisma";

import { getMockReq, getMockRes } from "@jest-mock/express";
import handler from "../pages/api/players";

describe("handler", () => {
  it("returns player data when successful", async () => {
    const mockData = [{ id: 1, firstname: "Lionel", lastname: "Messi" }];
    const findManySpy = jest.spyOn(prisma.player, "findMany");
    findManySpy.mockResolvedValue(mockData);
    const { req } = getMockReq();
    const { res } = getMockRes();
    await handler(req, res);

    expect(res.json).toHaveBeenCalledWith(mockData);
    findManySpy.mockRestore();
  });

  it("returns an error message when unsuccessful", async () => {
    const findManySpy = jest.spyOn(prisma.player, "findMany");
    findManySpy.mockRejectedValue(new Error("Internal Server Error"));
    const { req } = getMockReq();
    const { res } = getMockRes();
    await handler(req, res);

    expect(res.json).toHaveBeenCalledWith("Internal Server Error");
    findManySpy.mockRestore();
  });
});
