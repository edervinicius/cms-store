"use client";

import React, { useState, useEffect } from "react";
import { CuisineForm, StoresForm, MenuForm } from "./components";

const Admin = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-wrap gap-4">
      <div className="w-1/2">
        <CuisineForm />
      </div>
      <div className="w-1/2">
        <StoresForm />
      </div>
      <div className="w-1/2">
        <MenuForm />
      </div>
    </div>
  );
};

export default Admin;
