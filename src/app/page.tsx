"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import React from "react";
import { format } from "date-fns";

// Define the Article type
type Article = {
  id: number;
  title: string;
  content: string;
  image_url: string;
  category: string;
};

export default function Home() {
  // Use the defined type for the articles state
  const [articles, setArticles] = useState<Article[]>([]);
  const [activeTab, setActiveTab] = useState<string>("forYou");
  

  // Fetch data based on category
  useEffect(() => {
    const fetchArticles = async (artType: string) => {
      const { data, error } = await supabase
        .from("articles") // Replace 'articles' with your actual table name
        .select("*")
        .eq("category", artType); // Filter by category

      if (error) {
        console.error("Error fetching articles: ", error);
      } else {
        setArticles(data || []); // Set the fetched data to the state
      }
    };

    fetchArticles(activeTab); // Fetch articles based on the active tab (category)
  }, [activeTab]);

  return (
    <div className="my-1">
      <div className="flex-grow flex justify-between gap-1">
        <div className="w-1/3 p-4">
          <Tabs
            defaultValue="forYou"
            onValueChange={(value) => setActiveTab(value)}
          >
            <TabsList>
              <TabsTrigger value="forYou">For You</TabsTrigger>
              <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
              <TabsTrigger value="tech">Technology</TabsTrigger>
            </TabsList>

            <TabsContent value="forYou">
              {articles.length > 0 ? (
                articles.map((article) => (
                  <div
                    key={article.id}
                    className="max-w-sm h-80 rounded-lg bg-white flex flex-col"
                  >
                    <img
                      className="w-full h-40 object-cover"
                      src={article.image_url}
                      alt={article.title}
                    />
                    <div className="px-0 py-4 flex-1">
                      <Badge>{article.category}</Badge>
                      <h3 className="font-bold text-xl mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 text-base">
                        {article.content}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No articles found</p>
              )}
            </TabsContent>

            {/* Similarly, you can fetch and display data for other tabs */}
            <TabsContent value="entertainment">
              {articles.length > 0 ? (
                articles.map((article) => (
                  <div
                    key={article.id}
                    className="max-w-sm h-80 rounded-lg bg-white flex flex-col"
                  >
                    <img
                      className="w-full h-40 object-cover" /* Fixed height for the image */
                      src={article.image_url}
                      alt={article.title}
                    />
                    <div className="px-0 py-4 flex-1">
                      <Badge>{article.category}</Badge>
                      <h3 className="font-bold text-xl mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 text-base">
                        {article.content}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No articles found</p>
              )}
            </TabsContent>

            <TabsContent value="sports">
              {articles.length > 0 ? (
                articles.map((article) => (
                  <div
                    key={article.id}
                    className="max-w-sm h-80 rounded-lg bg-white flex flex-col"
                  >
                    <img
                      className="w-full h-40 object-cover" /* Fixed height for the image */
                      src={article.image_url}
                      alt={article.title}
                    />
                    <div className="px-0 py-4 flex-1">
                      <Badge>{article.category}</Badge>
                      <h3 className="font-bold text-xl mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 text-base">
                        {article.content}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No articles found</p>
              )}
            </TabsContent>
            <TabsContent value="tech">
              {articles.length > 0 ? (
                articles.map((article) => (
                  <div
                    key={article.id}
                    className="max-w-sm h-80 rounded-lg bg-white flex flex-col"
                  >
                    <img
                      className="w-full h-40 object-cover" /* Fixed height for the image */
                      src={article.image_url}
                      alt={article.title}
                    />
                    <div className="px-0 py-4 flex-1">
                      <Badge>{article.category}</Badge>
                      <h3 className="font-bold text-xl mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 text-base">
                        {article.content}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No articles found</p>
              )}
            </TabsContent>
          </Tabs>
        </div>
        <div className="w-2/3 p-4 mx-auto">
          <h1 className="text-4xl font-bold mb-6 ">Latest News</h1>

        </div>
      </div>
    </div>
  );
}
