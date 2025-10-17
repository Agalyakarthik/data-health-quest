import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, Download, BookOpen, ExternalLink, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import healthcareLogo from "@/assets/healthcare-logo.png";

const SQLPage = () => {
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-gray-200 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={healthcareLogo} 
                alt="Healthcare Analysis HQ" 
                className="h-10 w-10"
              />
              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  Healthcare Analysis HQ
                </h1>
              </div>
            </Link>
            
            <Link to="/">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Health care Analysis HQ (HAQ)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your medical knowledge with our daily curated questions from real clinical datasets. 
            Subscribe to receive queries at 9 AM and answers at 8 PM.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Today's Query */}
          <div className="lg:col-span-2">
            <Card className="border-healthcare-primary/20 shadow-elegant">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Today's Medical Query
                </h2>
                
                <Tabs defaultValue="question" className="w-full">
                  <TabsList className="bg-gray-100">
                    <TabsTrigger 
                      value="question"
                      className="data-[state=active]:bg-healthcare-primary data-[state=active]:text-white"
                    >
                      Question
                    </TabsTrigger>
                    <TabsTrigger 
                      value="answer"
                      className="data-[state=active]:bg-healthcare-primary data-[state=active]:text-white"
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Expert Analysis & Answer
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="question" className="mt-6">
                    <div className="bg-gray-50 rounded-lg p-6 mb-4 border border-gray-200">
                      <Textarea
                        placeholder="Today's SQL question will appear here..."
                        className="min-h-[150px] bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="answer" className="mt-6">
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <p className="text-gray-600">
                        The detailed answer and clinical explanation will be revealed here at 8:00 PM daily.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Daily Delivery Card */}
            <Card className="border-healthcare-primary/20 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="w-5 h-5 text-healthcare-primary" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Daily Delivery
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Get the query at 9 AM and the answer at 8 PM delivered to your inbox!
                </p>
                <form onSubmit={handleEmailSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="your.email@hospital.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-healthcare-primary hover:bg-healthcare-accent text-white"
                  >
                    Start My Daily Learning
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Clinical Dataset Card */}
            <Card className="border-healthcare-primary/20 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="w-5 h-5 text-healthcare-primary" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Clinical Dataset
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Access the complete medical database for advanced analysis
                </p>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 justify-start"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Dataset
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 justify-start"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Setup Guide
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 justify-start"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    PhysioNet Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm max-w-3xl mx-auto">
            This platform provides daily medical queries sourced from clinical datasets to help healthcare 
            professionals and students enhance their diagnostic and analytical skills.
          </p>
          <p className="text-gray-600 text-sm mt-4">
            Data sourced from{" "}
            <a 
              href="https://physionet.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-healthcare-primary hover:underline"
            >
              PhysioNet
            </a>
            {" "}– A repository of freely-available medical research data
          </p>
        </div>
      </div>
    </div>
  );
};

export default SQLPage;
