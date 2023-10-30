"use client";

import React, { useEffect, useState } from "react";
import { type formResponse } from "@/types/common";
import { getForm } from "@/api/api";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function HomePage() {
  const [data, setData] = useState<formResponse>();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    async function fetchData() {
      try {
        const temp = await getForm();
        for (const i of temp) {
          if (id && i.ID === parseInt(id)) {
            setData(i);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    void fetchData();
  }, [id]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-hidden bg-secondary">
      <Navbar />
      {data && (
        <table className="table-auto border-primary-foreground">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Field</th>
              <th className="px-4 py-2 text-left">Value</th>``
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Name</td>
              <td className="border px-4 py-2">{data.name}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Email</td>
              <td className="border px-4 py-2">{data.email}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Phone</td>
              <td className="border px-4 py-2">{data.phone}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Message</td>
              <td className="border px-4 py-2">{data.message}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Job Profile</td>
              <td className="border px-4 py-2">{data.job_profile}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Company Name</td>
              <td className="border px-4 py-2">{data.company_name}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">City</td>
              <td className="border px-4 py-2">{data.city}</td>
            </tr>
          </tbody>
        </table>
      )}
      <Link href="/" className="mt-4 font-semibold">Back</Link>
    </div>
  );
}
