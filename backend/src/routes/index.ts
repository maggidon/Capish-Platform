import { Router } from "express";

import Paths from "@src/common/constants/Paths";
import UserRoutes from "./UserRoutes";
import products from "../products.json";

/******************************************************************************
                                Setup
******************************************************************************/

const apiRouter = Router();

// ✅ Health + Products routes (attach to apiRouter)
apiRouter.get("/healthz", (_req, res) => {
  res.status(200).send("ok");
});

apiRouter.get("/products", (_req, res) => {
  res.json(products);
});

// **** Add UserRouter **** //
const userRouter = Router();

userRouter.get(Paths.Users.Get, UserRoutes.getAll);
userRouter.post(Paths.Users.Add, UserRoutes.add);
userRouter.put(Paths.Users.Update, UserRoutes.update);
userRouter.delete(Paths.Users.Delete, UserRoutes.delete);

apiRouter.use(Paths.Users._, userRouter);

/******************************************************************************
                                Export default
******************************************************************************/

export default apiRouter;
