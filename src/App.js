/*
 * @Author: 王云飞
 * @Date: 2021-11-09 14:32:33
 * @LastEditTime: 2021-11-09 15:55:55
 * @LastEditors: 王云飞
 * @Description:
 *
 */
import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import routes from "./router";

import YFAppHeader from "@/components/app-header";
import YFAppFooter from "@/components/app-footer";

export default memo(function App() {
  return (
    <HashRouter>
      <YFAppHeader />
      {renderRoutes(routes)}
      <YFAppFooter />
    </HashRouter>
  );
});
