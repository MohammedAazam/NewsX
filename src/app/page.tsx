"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import React from "react";

interface Article {
  source: {
    name: string;
  };
  title: string;
  description: string;
  urlToImage: string;
}

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const apiKey = '44751d6b4638487e8d8599b0f7a29ea6';
  const [activeTab, setActiveTab] = useState<string>("top_headlines");

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

      if (activeTab !== "top_headlines") {
        // Modify the URL to include the selected category if it's not "top_headlines"
        url += `&category=${activeTab}`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setArticles([]); // Reset articles if there's an error
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [activeTab]);  // Re-fetch articles whenever activeTab changes

  return (
    <div className="my-1">
      <div className="flex-grow flex justify-between gap-1">
        <div className="w-1/3 p-4">
          <Tabs
            defaultValue="top_headlines"
            onValueChange={(value) => setActiveTab(value)}
          >
            <TabsList>
              <TabsTrigger value="top_headlines">For You</TabsTrigger>
              <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab}>
              {loading ? (
                <p>Loading articles...</p>
              ) : articles.length > 0 ? (
                articles.map((article, index) => (
                  <div
                    key={index}
                    className="max-w-sm h-80 rounded-lg bg-white flex flex-col"
                  >
                    <img
                      className="w-full h-40 object-cover"
                      src={article.urlToImage || "/placeholder-image.jpg"}
                      alt={article.title}
                    />
                    <div className="px-0 py-4 flex-1">
                      <Badge>{article.source.name}</Badge>
                      <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                      
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
          <h1 className="text-4xl font-bold mb-6">Breaking News</h1>
        </div>
      </div>
    </div>
  );
}
