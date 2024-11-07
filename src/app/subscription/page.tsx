import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

function subscription() {
  return (
    <div className="mx-10 my-2">
      <div>
        <h1 className="text-xl font-bold ">Plans & billing</h1>
        <p className="text-gray-700 text-base">Manage your plans here. </p>
      </div>
      <div className="flex space-x-4 p-8">
        <div className="w-64 p-6 border rounded-lg shadow-sm bg-white">
          <h3 className="text-lg font-semibold">Basic plan</h3>
          <p className="text-gray-500">Up to 4 team members.</p>
          <Badge variant="secondary" className="mt-2">Renews in 14 days</Badge>
          <div className="mt-4">
            <span className="text-3xl font-bold">$10</span>
            <span className="text-gray-500">per month</span>
          </div>
          <Button variant="secondary" className="mt-6">Current plan</Button>
        </div>

        <div className="w-64 p-6 border rounded-lg shadow-sm bg-white">
          <h3 className="text-lg font-semibold">Business plan</h3>
          <p className="text-gray-500">Up to 20 team members.</p>
          <Badge className="mt-2">New Plan</Badge>
          <div className="mt-4">
            <span className="text-3xl font-bold">$20</span>
            <span className="text-gray-500">per month</span>
          </div>
          <Button className="mt-6">
            Upgrade plan
          </Button>
        </div>
      </div>
    </div>
  );
}

export default subscription;
