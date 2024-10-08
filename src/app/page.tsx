"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase"; 

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
        .from('articles') // Replace 'articles' with your actual table name
        .select('*')
        .eq('category', artType); // Filter by category

      if (error) {
        console.error("Error fetching articles: ", error);
      } else {
        setArticles(data || []); // Set the fetched data to the state
      }
    };

    fetchArticles(activeTab); // Fetch articles based on the active tab (category)
  }, [activeTab]);

  return (
    <div className="mx-8 my-1">
      <div className="flex justify-center items-center h-14">
        <div className="flex-none">
          <h1 className="text-lg font-bold tracking-wider">NewsX</h1>
        </div>
        <div className="text-bold ml-6">|</div>
        <div className="grow mx-2">
          <Button variant="link">Discover</Button>
          <Button variant="link">Blogs</Button>
          <Button variant="link">Subscription</Button>
        </div>
        <div className="flex-none mx-2">
          <Button>Publish</Button>
        </div>
      </div>

      <div className="flex-grow flex justify-between mt-4 gap-2">
        <div className="w-1/3 p-4">
          <Tabs defaultValue="forYou" onValueChange={(value) => setActiveTab(value)}>
            <TabsList>
              <TabsTrigger value="forYou">For You</TabsTrigger>
              <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
              <TabsTrigger value="tech">Technology</TabsTrigger>
            </TabsList>

            <TabsContent value="forYou">
              {articles.length > 0 ? (
                articles.map((article) => (
                  <div key={article.id} className="max-w-sm rounded-lg bg-white">
                    <img className="w-full h-64 object-contain" src={article.image_url} alt={article.title} />
                    <div className="px-6 py-4">
                      <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                      <p className="text-gray-700 text-base">{article.content}</p>
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
                  <div key={article.id} className="max-w-sm rounded-lg bg-white">
                    <img className="w-full h-64 object-contain" src={article.image_url} alt={article.title} />
                    <div className="px-6 py-4">
                      <Badge>{article.category}</Badge>
                      <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                      <p className="text-gray-700 text-base">{article.content}</p>
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
                  <div key={article.id} className="max-w-sm rounded-lg bg-white">
                    <img className="w-full h-64 object-contain" src={article.image_url} alt={article.title} />
                    <div className="px-6 py-4">
                      <Badge>{article.category}</Badge>
                      <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                      <p className="text-gray-700 text-base">{article.content}</p>
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
                  <div key={article.id} className="max-w-sm rounded-lg bg-white ">
                    <img className="w-full h-64 object-contain" src={article.image_url} alt={article.title} />
                    <div className="px-6 py-4">
                      <Badge>{article.category}</Badge>
                      <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                      <p className="text-gray-700 text-base">{article.content}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No articles found</p>
              )}
            </TabsContent>
          </Tabs>
        </div>
        <div className="w-1/3 p-4">
        
        </div>
      </div>
    </div>
  );
}
