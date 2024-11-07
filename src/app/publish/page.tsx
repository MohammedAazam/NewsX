"use client";

import React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

function Publish() {
  const [date, setDate] = React.useState<Date>();
  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Publish Article</h2>

        <div className="mb-4">
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Enter article title"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="author">Author Name</Label>
            <Input
              type="text"
              id="author"
              name="author"
              placeholder="Author Name"
            />
          </div>
          <div>
            <Label htmlFor="email">Author Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Author Email"
            />
          </div>
        </div>

        <div className="flex flex-col items-start space-y-2 mb-4">
          <Label htmlFor="date">Publication Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="mb-4">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            name="content"
            placeholder="Write your article here..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
          ></Textarea>
        </div>

        <div className="mb-4">
          <Label htmlFor="tags">Tags</Label>
          <Input
            type="text"
            id="tags"
            name="tags"
            placeholder="Add tags, separated by commas"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="cover-image">Cover Image</Label>
          <Input type="file" id="cover-image" name="cover-image" />
        </div>

        <Button>Publish Article</Button>
      </div>
    </>
  );
}

export default Publish;
