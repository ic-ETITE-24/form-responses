"use client";

import React, { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { type formResponse } from "@/types/common";
import { getForm } from "@/api/api";
import Navbar from "@/components/navbar";

export default function HomePage() {
  const [data, setData] = useState<formResponse[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const temp = await getForm();
        setData(temp);
      } catch (error) {
        console.error(error);
      }
    }
    void fetchData();
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <Navbar />
      <DataTable data={data} columns={columns} />
    </div>
  );
}
